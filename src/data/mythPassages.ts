import { MYTHS_BATCH_1 } from './mythsBatch1';
import { MYTHS_BATCH_2 } from './mythsBatch2';
import { MYTHS_BATCH_3 } from './mythsBatch3';
import { MYTH_EXTRA_LEXICON } from './mythExtraLexicon';
import {
  registerExtraWords,
  lookupLatinWordMeaning,
  type MythExtract,
  type MythQuestion,
  type WordEntry
} from './mythLexicon';

registerExtraWords(MYTH_EXTRA_LEXICON);

function hashString(str: string): number {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function seededRandom(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6D2B79F5) >>> 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffleWithRng<T>(items: T[], rng: () => number): T[] {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
  return arr;
}

function buildBalancedMyths(rawList: MythExtract[]): MythExtract[] {
  const slotCounts = [0, 0, 0, 0];

  return rawList.map(myth => {
    let prevSlotForMyth = -1;

    const mixedQuestions: MythQuestion[] = myth.comprehension_questions.map((q, qIdx) => {
      const n = q.options.length;
      if (n <= 1) return q;

      const rng = seededRandom(hashString(`${myth.myth_id}:${qIdx}:${q.question}`));
      const correct = q.correct_answer;
      const distractors = shuffleWithRng(
        q.options.filter(opt => opt !== correct),
        rng
      );

      // Rank candidate slots by lowest global usage so far (deterministic tie-break via rng),
      // while avoiding repeating the same letter across questions in the same passage.
      const candidates = [0, 1, 2, 3].filter(s => s < n && s !== prevSlotForMyth);
      const pool = candidates.length > 0 ? candidates : [0, 1, 2, 3].filter(s => s < n);
      const minCount = Math.min(...pool.map(s => slotCounts[s]));
      const tied = pool.filter(s => slotCounts[s] === minCount);

      // On the very first passage/question, prefer B/C/D over A so it doesn't start on A.
      const firstQuestionFiltered =
        myth.myth_id === 'm001' && qIdx === 0 && tied.length > 1
          ? tied.filter(s => s !== 0)
          : tied;

      const targetSlot =
        firstQuestionFiltered[Math.floor(rng() * firstQuestionFiltered.length)];

      slotCounts[targetSlot]++;
      prevSlotForMyth = targetSlot;

      const mixedOptions = [...distractors];
      mixedOptions.splice(targetSlot, 0, correct);

      return {
        ...q,
        options: mixedOptions
      };
    });

    return {
      ...myth,
      comprehension_questions: mixedQuestions
    };
  });
}

export const MYTH_EXTRACTS: MythExtract[] = buildBalancedMyths([
  ...MYTHS_BATCH_1,
  ...MYTHS_BATCH_2,
  ...MYTHS_BATCH_3
]);

export { lookupLatinWordMeaning };
export type { MythExtract, MythQuestion, WordEntry };
