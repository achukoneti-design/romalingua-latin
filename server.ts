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
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

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

    let response;
    try {
      response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: prompt,
        config,
      });
    } catch (primaryErr: unknown) {
      console.warn('gemini-3.8-flash spike; falling back to gemini-3.1-flash-lite:', primaryErr);
      response = await ai.models.generateContent({
        model: 'gemini-3.1-flash-lite',
        contents: prompt,
        config,
      });
    }

    const parsed = JSON.parse(response.text || '{}');
    res.json(parsed);
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : String(err);
    console.error('Gemini evaluation error:', errorMsg);

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
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (req: Request, res: Response) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  } else {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`RomaLingua server running on http://localhost:${PORT}`);
  });
}

startServer();
