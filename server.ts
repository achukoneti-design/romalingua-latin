import express from 'express';
import type { Request, Response } from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI, Type } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
// The dev server must bind to port 3000 (proxied by Nginx on port 8080).
const parsePort = (): number => {
  const portArgIndex = process.argv.findIndex((arg) => arg === '--port' || arg === '-p');
  if (portArgIndex !== -1 && process.argv[portArgIndex + 1]) {
    const parsed = Number(process.argv[portArgIndex + 1]);
    if (!isNaN(parsed) && parsed > 0 && parsed !== 8080) return parsed;
  }
  if (process.env.DEFAULT_APP_PORT) {
    const parsed = Number(process.env.DEFAULT_APP_PORT);
    if (!isNaN(parsed) && parsed > 0 && parsed !== 8080) return parsed;
  }
  if (process.env.PORT && process.env.PORT !== '8080') {
    const parsed = Number(process.env.PORT);
    if (!isNaN(parsed) && parsed > 0) return parsed;
  }
  return 3000;
};
const PORT = parsePort();

app.use(express.json());

// Health check endpoints for rapid readiness detection
app.get('/health', (_req: Request, res: Response) => {
  res.status(200).send('OK');
});

app.get('/api/health', (_req: Request, res: Response) => {
  res.status(200).json({ status: 'ok', port: PORT });
});

// Allow responsive iframe embedding in Google Sites (sites.google.com)
app.use((req, res, next) => {
  res.removeHeader('X-Frame-Options');
  res.setHeader('Content-Security-Policy', "frame-ancestors 'self' https://sites.google.com https://*.google.com https://*.googleusercontent.com *");
  next();
});

// Server-side Gemini client with required User-Agent header
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    },
  },
});

interface EvaluationRequestBody {
  latin?: string;
  userTranslation?: string;
  primaryTranslation?: string;
  tenseHint?: string;
  acceptedTranslations?: string[];
}

// AI-powered OCR GCSE Latin Sentence Evaluation Endpoint
app.post('/api/evaluate-translation', async (req: Request, res: Response) => {
  const { latin, userTranslation, primaryTranslation, tenseHint, acceptedTranslations } =
    req.body as EvaluationRequestBody;

  if (!latin || !userTranslation || !primaryTranslation) {
    res.status(400).json({
      error: 'Missing required fields: latin, userTranslation, primaryTranslation',
    });
    return;
  }

  const prompt = `You are a strict and knowledgeable OCR GCSE Latin examiner.
Evaluate whether the student translation is acceptable according to official OCR GCSE Latin marking standards.

LATIN SENTENCE:
"${latin}"

EXPECTED PRIMARY TRANSLATION:
"${primaryTranslation}"

GRAMMAR & TENSE HINT:
"${tenseHint || 'Check verb tense and noun cases.'}"

ACCEPTED REFERENCE VARIATIONS:
${JSON.stringify(acceptedTranslations || [])}

STUDENT TRANSLATION:
"${userTranslation}"

OCR GCSE LATIN MARKING PRINCIPLES:
1. Lexical Accuracy: All essential words must be translated with acceptable English meanings from the GCSE Definitive Vocabulary List (DVL).
2. Verb Tense Integrity: The verb tense MUST be strictly accurate:
   - Present tense must NOT be accepted for Imperfect or Perfect verbs.
   - Imperfect tense (e.g. "were hurrying", "was reading", "used to walk") must NOT be confused with Present ("are hurrying") or Future ("will hurry").
   - Perfect tense (e.g. "hurried", "did read", "walked") must NOT be confused with Present or Future.
   - Pluperfect ("had -ed") must NOT be confused with simple past or present.
3. Person and Number: 1st/2nd/3rd person and singular/plural must be strictly accurate (e.g. "they defended", not "he defended").
4. Case and Syntactic Roles: Subject (nominative), direct object (accusative), indirect object (dative), and ablative phrases must be properly translated with the correct syntactic relationship.
5. Natural English Idiom: Allow natural English synonyms and phrasing (e.g., "gave" for "handed over", "rushed" for "hurried", "in the woods" for "in the forest", flexible word order) provided the grammatical tense, case, and person are completely intact.

Evaluate the translation and output JSON.`;

  try {
    const config = {
      responseMimeType: 'application/json',
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          isCorrect: {
            type: Type.BOOLEAN,
            description: 'True if the translation is fully acceptable under GCSE standards',
          },
          feedbackTitle: {
            type: Type.STRING,
            description: 'Short title like "Optime! (GCSE Accepted)" or "Tense Error" or "Case Error"',
          },
          feedbackExplanation: {
            type: Type.STRING,
            description:
              'Helpful GCSE pedagogical explanation explaining why it is correct or what grammatical mistake occurred',
          },
          tenseCorrect: {
            type: Type.BOOLEAN,
            description: 'Whether the verb tense is correct',
          },
          caseAndPersonCorrect: {
            type: Type.BOOLEAN,
            description: 'Whether noun cases, person, and number are correct',
          },
          improvedTranslation: {
            type: Type.STRING,
            description: 'The standard GCSE translation',
          },
        },
        required: [
          'isCorrect',
          'feedbackTitle',
          'feedbackExplanation',
          'tenseCorrect',
          'caseAndPersonCorrect',
        ],
      },
    };

    // Timeout promise (5 seconds) so evaluation never hangs if outbound connection is slow
    const timeoutPromise = new Promise<never>((_, reject) =>
      setTimeout(() => reject(new Error('AI evaluation request timed out')), 5000)
    );

    let response;
    try {
      response = await Promise.race([
        ai.models.generateContent({
          model: 'gemini-3.8-flash',
          contents: prompt,
          config,
        }),
        timeoutPromise,
      ]);
    } catch (primaryErr: unknown) {
      console.warn('gemini-3.8-flash attempt failed or timed out:', primaryErr);
      throw primaryErr;
    }

    const parsed = JSON.parse(response.text || '{}');
    res.json(parsed);
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : String(err);
    console.error('Translation evaluation fallback used:', errorMsg);

    // Fallback heuristic if external API is temporarily unavailable
    const cleanUser = userTranslation.toLowerCase().replace(/[.,/#!$%^&*;:{}=_()?'"-]/g, '').trim();
    const cleanPrimary = primaryTranslation.toLowerCase().replace(/[.,/#!$%^&*;:{}=_()?'"-]/g, '').trim();
    const isBasicMatch = cleanUser === cleanPrimary;

    res.json({
      isCorrect: isBasicMatch,
      feedbackTitle: isBasicMatch ? 'Optime! (Correct)' : 'Check Your Translation',
      feedbackExplanation: isBasicMatch
        ? `Accurate translation: "${primaryTranslation}"`
        : `Check verb tense and cases: "${primaryTranslation}" (${tenseHint || ''})`,
      tenseCorrect: isBasicMatch,
      caseAndPersonCorrect: isBasicMatch,
      improvedTranslation: primaryTranslation,
      fallbackUsed: true,
    });
  }
});

async function startServer() {
  try {
    // 1. Immediately bind to PORT so health checks and container readiness checks succeed in <50ms
    const server = app.listen(PORT, '0.0.0.0', () => {
      console.log(`RomaLingua server running immediately on http://localhost:${PORT}`);
    });

    server.on('error', (err: unknown) => {
      console.error('Fatal dev server listening error:', err);
    });

    process.on('SIGTERM', () => {
      server.close();
    });
    process.on('SIGINT', () => {
      server.close();
    });

    // 2. Attach SPA / static middleware
    if (process.env.NODE_ENV === 'production') {
      const distPath = path.resolve(__dirname, 'dist');
      app.use(express.static(distPath, {
        setHeaders: (res, filePath) => {
          if (filePath.endsWith('.html')) {
            res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
            res.setHeader('Pragma', 'no-cache');
            res.setHeader('Expires', '0');
          }
        },
      }));
      app.get('*', (_req: Request, res: Response) => {
        res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
        res.setHeader('Pragma', 'no-cache');
        res.setHeader('Expires', '0');
        res.sendFile(path.resolve(distPath, 'index.html'));
      });
    } else {
      let viteMiddleware: express.RequestHandler | null = null;

      // Dynamic middleware delegator ensures instantaneous responsiveness during Vite compilation
      app.use((req, res, next) => {
        if (viteMiddleware) {
          return viteMiddleware(req, res, next);
        }
        if (req.path === '/health' || req.path.startsWith('/api/')) {
          return next();
        }
        res.setHeader('Content-Type', 'text/html');
        res.send('<!DOCTYPE html><html><head><meta http-equiv="refresh" content="1"><title>RomaLingua</title></head><body style="margin:0;display:flex;align-items:center;justify-content:center;height:100vh;background:#030712;color:#f3f4f6;font-family:system-ui,-apple-system,sans-serif;"><p style="font-size:1.1rem;font-weight:600;">Loading RomaLingua GCSE Latin...</p></body></html>');
      });

      const vite = await createViteServer({
        server: { middlewareMode: true },
        appType: 'spa',
      });
      viteMiddleware = vite.middlewares as unknown as express.RequestHandler;
      console.log('Vite dev middleware initialized and ready');
    }
  } catch (err: unknown) {
    console.error('Failed to start RomaLingua dev server:', err);
  }
}

startServer();
