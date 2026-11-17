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

export const MYTH_EXTRACTS: MythExtract[] = [
  ...MYTHS_BATCH_1,
  ...MYTHS_BATCH_2,
  ...MYTHS_BATCH_3
];

export { lookupLatinWordMeaning };
export type { MythExtract, MythQuestion, WordEntry };
