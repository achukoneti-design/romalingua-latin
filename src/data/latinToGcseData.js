// Henry Cullen & John Taylor "Latin to GCSE" (Part 1 & Part 2) Curriculum Data
// Maps all 446 OCR GCSE Latin (J282) Definitive Vocabulary List (DVL) words
// and Translation Arena sentences to Chapters 1–12 (Part 1: Ch 1–6, Part 2: Ch 7–12).

export const LATIN_CHAPTERS = [
  {
    id: 1,
    part: 1,
    title: 'Chapter 1: Foundations',
    grammarSummary: '1st & 2nd declension nouns (nom. & acc.), present tense active (-o, -s, -t), basics & et / non'
  },
  {
    id: 2,
    part: 1,
    title: 'Chapter 2: Cases & Prepositions',
    grammarSummary: 'Genitive, dative & ablative cases (sg. & pl.), prepositions (+ acc. / + abl.), sum (present), -ne'
  },
  {
    id: 3,
    part: 1,
    title: 'Chapter 3: Adjectives & Infinitives',
    grammarSummary: '2-1-2 adjectives, possessive adjectives, imperatives, infinitives (possum, volo, nolo, malo), adverbs'
  },
  {
    id: 4,
    part: 1,
    title: 'Chapter 4: Past Tenses & Pronouns',
    grammarSummary: 'Imperfect & perfect active tenses, time expressions, compound verbs of sum, personal pronouns (ego, tu)'
  },
  {
    id: 5,
    part: 1,
    title: 'Chapter 5: 3rd Declension & Future',
    grammarSummary: '3rd declension nouns (m./f./n.), demonstrative pronouns (hic, ille, is, idem, ipse), future tense, eo & fero'
  },
  {
    id: 6,
    part: 1,
    title: 'Chapter 6: Part 1 Consolidation',
    grammarSummary: '3rd declension adjectives, pluperfect tense, relative pronoun (qui, quae, quod), numerals & irregular adjectives'
  },
  {
    id: 7,
    part: 2,
    title: 'Chapter 7: Passive Voice & 4th/5th Decl.',
    grammarSummary: 'Present, imperfect, perfect & pluperfect passive indicative, agent (a/ab + abl.), 4th & 5th declension nouns'
  },
  {
    id: 8,
    part: 2,
    title: 'Chapter 8: Participles & Deponents',
    grammarSummary: 'Present, perfect & future participles, ablative absolute, deponent & semi-deponent verbs, comparatives & superlatives'
  },
  {
    id: 9,
    part: 2,
    title: 'Chapter 9: Indirect Statement & Compounds',
    grammarSummary: 'Accusative & infinitive indirect statement, irregular compounds (fero, eo), verbs taking the dative'
  },
  {
    id: 10,
    part: 2,
    title: 'Chapter 10: Subjunctive Clauses I',
    grammarSummary: 'Imperfect & pluperfect subjunctive, purpose clauses (ut/ne), indirect commands, cum + subjunctive, fear clauses'
  },
  {
    id: 11,
    part: 2,
    title: 'Chapter 11: Subjunctive Clauses II & Gerundives',
    grammarSummary: 'Result clauses (tam/tantus/ita... ut), indirect questions, gerundives (obligation & purpose), conditionals (si/nisi)'
  },
  {
    id: 12,
    part: 2,
    title: 'Chapter 12: GCSE Consolidation & DVL',
    grammarSummary: 'Full OCR GCSE Latin (J282) DVL consolidation, complex subordination, military & civic idioms'
  }
];

// Explicit mapping of every OCR GCSE Latin DVL ID (1–446) to Latin to GCSE Ch 1–12
export const LATIN_DVL_CHAPTER_MAP = {
  // Chapter 1: Core 1st/2nd declension nouns & core present tense verbs (46 words)
  9: 1, 15: 1, 16: 1, 17: 1, 19: 1, 26: 1, 32: 1, 37: 1, 47: 1, 48: 1, 50: 1,
  53: 1, 81: 1, 82: 1, 85: 1, 91: 1, 99: 1, 100: 1, 101: 1, 102: 1, 104: 1, 105: 1,
  106: 1, 117: 1, 118: 1, 119: 1, 128: 1, 131: 1, 133: 1, 134: 1, 138: 1, 148: 1,
  149: 1, 155: 1, 160: 1, 177: 1, 182: 1, 183: 1, 184: 1, 196: 1, 197: 1, 199: 1,
  201: 1, 204: 1, 229: 1, 429: 1,

  // Chapter 2: Remaining Book 1 nouns/verbs, prepositions, sum & basic adverbs (48 words)
  1: 2, 5: 2, 10: 2, 20: 2, 21: 2, 22: 2, 27: 2, 35: 2, 41: 2, 43: 2, 45: 2,
  51: 2, 68: 2, 69: 2, 76: 2, 84: 2, 109: 2, 146: 2, 154: 2, 169: 2, 170: 2,
  175: 2, 179: 2, 206: 2, 207: 2, 208: 2, 220: 2, 235: 2, 239: 2, 241: 2, 242: 2,
  243: 2, 245: 2, 248: 2, 255: 2, 266: 2, 267: 2, 273: 2, 277: 2, 282: 2, 285: 2,
  287: 2, 289: 2, 295: 2, 296: 2, 297: 2, 299: 2, 317: 2,

  // Chapter 3: 2-1-2 adjectives, possessives, modal verbs, questions & core 1st/2nd decl (48 words)
  14: 3, 36: 3, 38: 3, 49: 3, 55: 3, 73: 3, 79: 3, 96: 3, 121: 3, 152: 3, 187: 3,
  198: 3, 202: 3, 209: 3, 214: 3, 215: 3, 216: 3, 223: 3, 224: 3, 228: 3, 238: 3,
  253: 3, 256: 3, 259: 3, 260: 3, 264: 3, 265: 3, 279: 3, 291: 3, 298: 3, 318: 3,
  319: 3, 320: 3, 332: 3, 333: 3, 335: 3, 336: 3, 342: 3, 349: 3, 351: 3, 352: 3,
  353: 3, 354: 3, 356: 3, 357: 3, 358: 3, 360: 3, 361: 3,

  // Chapter 4: Imperfect/Perfect active tenses, pronouns (ego/tu/nos/vos), sum compounds (48 words)
  2: 4, 3: 4, 4: 4, 7: 4, 8: 4, 11: 4, 23: 4, 24: 4, 29: 4, 40: 4, 42: 4, 65: 4,
  70: 4, 78: 4, 86: 4, 88: 4, 90: 4, 92: 4, 97: 4, 98: 4, 110: 4, 111: 4, 112: 4,
  114: 4, 115: 4, 123: 4, 125: 4, 141: 4, 145: 4, 150: 4, 157: 4, 158: 4, 159: 4,
  161: 4, 163: 4, 171: 4, 176: 4, 181: 4, 190: 4, 192: 4, 193: 4, 217: 4, 231: 4,
  236: 4, 240: 4, 247: 4, 258: 4, 415: 4,

  // Chapter 5: 3rd declension nouns, demonstratives, future tense, eo & fero (47 words)
  18: 5, 28: 5, 44: 5, 52: 5, 54: 5, 60: 5, 62: 5, 67: 5, 72: 5, 83: 5, 108: 5,
  116: 5, 129: 5, 135: 5, 139: 5, 151: 5, 153: 5, 156: 5, 162: 5, 164: 5, 165: 5,
  185: 5, 188: 5, 191: 5, 194: 5, 200: 5, 211: 5, 219: 5, 221: 5, 225: 5, 232: 5,
  234: 5, 244: 5, 249: 5, 251: 5, 254: 5, 261: 5, 278: 5, 280: 5, 284: 5, 292: 5,
  307: 5, 340: 5, 350: 5, 359: 5, 367: 5, 368: 5,

  // Chapter 6: 3rd declension adjectives, pluperfect, qui/quae/quod, -ius adjectives & possessives (42 words)
  12: 6, 13: 6, 30: 6, 39: 6, 46: 6, 75: 6, 94: 6, 95: 6, 124: 6, 127: 6, 130: 6,
  132: 6, 137: 6, 147: 6, 172: 6, 173: 6, 205: 6, 250: 6, 257: 6, 262: 6, 271: 6,
  283: 6, 306: 6, 329: 6, 330: 6, 355: 6, 362: 6, 363: 6, 364: 6, 365: 6, 366: 6,
  371: 6, 372: 6, 376: 6, 381: 6, 382: 6, 386: 6, 394: 6, 395: 6, 396: 6, 397: 6,
  404: 6,

  // Chapter 7: Passive voice, 4th & 5th declension nouns, Book 2 foundation vocab (31 words)
  34: 7, 59: 7, 61: 7, 87: 7, 89: 7, 93: 7, 103: 7, 122: 7, 144: 7, 168: 7, 218: 7,
  272: 7, 294: 7, 309: 7, 310: 7, 343: 7, 347: 7, 375: 7, 384: 7, 392: 7, 402: 7,
  403: 7, 405: 7, 406: 7, 417: 7, 424: 7, 430: 7, 433: 7, 434: 7, 437: 7, 438: 7,

  // Chapter 8: Participles, deponents, semi-deponents, comparatives & superlatives (30 words)
  31: 8, 63: 8, 113: 8, 142: 8, 174: 8, 210: 8, 212: 8, 222: 8, 226: 8, 227: 8,
  233: 8, 237: 8, 281: 8, 311: 8, 312: 8, 316: 8, 325: 8, 345: 8, 370: 8, 380: 8,
  391: 8, 410: 8, 414: 8, 416: 8, 418: 8, 419: 8, 426: 8, 432: 8, 441: 8, 445: 8,

  // Chapter 9: Indirect statement, mental verbs, compounds & dative verbs (29 words)
  25: 9, 33: 9, 57: 9, 58: 9, 64: 9, 66: 9, 74: 9, 126: 9, 167: 9, 178: 9, 268: 9,
  269: 9, 286: 9, 288: 9, 290: 9, 313: 9, 322: 9, 337: 9, 339: 9, 341: 9, 346: 9,
  348: 9, 369: 9, 383: 9, 408: 9, 411: 9, 412: 9, 436: 9, 439: 9,

  // Chapter 10: Subjunctive mood, purpose clauses, indirect commands, cum + subj & fear clauses (27 words)
  71: 10, 77: 10, 80: 10, 143: 10, 166: 10, 186: 10, 195: 10, 230: 10, 246: 10,
  274: 10, 275: 10, 293: 10, 303: 10, 308: 10, 314: 10, 315: 10, 321: 10, 323: 10,
  344: 10, 379: 10, 388: 10, 407: 10, 413: 10, 425: 10, 428: 10, 431: 10, 446: 10,

  // Chapter 11: Result clauses, indirect questions, conditionals & time/place adverbs (27 words)
  6: 11, 136: 11, 140: 11, 180: 11, 189: 11, 252: 11, 263: 11, 270: 11, 276: 11,
  300: 11, 301: 11, 302: 11, 304: 11, 305: 11, 324: 11, 327: 11, 328: 11, 334: 11,
  373: 11, 385: 11, 389: 11, 398: 11, 399: 11, 400: 11, 401: 11, 420: 11, 444: 11,

  // Chapter 12: OCR GCSE DVL Consolidation & Advanced Prose Idioms (27 words)
  56: 12, 107: 12, 120: 12, 203: 12, 213: 12, 326: 12, 331: 12, 338: 12, 374: 12,
  377: 12, 378: 12, 387: 12, 390: 12, 393: 12, 409: 12, 421: 12, 422: 12, 423: 12,
  427: 12, 435: 12, 440: 12, 442: 12, 443: 12
};

export function getLatinChapterForDvlWord(word) {
  if (!word) return 1;
  const mapped = LATIN_DVL_CHAPTER_MAP[word.id];
  if (mapped >= 1 && mapped <= 12) return mapped;
  const notes = (word.notes || '').toLowerCase();
  if (notes.includes('4th declension') || notes.includes('5th declension') || notes.includes('passive')) return 7;
  if (notes.includes('deponent') || notes.includes('comparative') || notes.includes('superlative')) return 8;
  if (notes.includes('dative')) return 9;
  if (notes.includes('3rd declension adjective')) return 6;
  if (notes.includes('3rd declension')) return 5;
  if (notes.includes('2-1-2') || notes.includes('possessive')) return 3;
  if (notes.includes('preposition')) return 2;
  return 12;
}

export function getLatinChapterForSentence(sentence) {
  if (!sentence) return 1;
  const focus = sentence.grammarFocus || '';
  if (focus.startsWith('Cullen Book 1')) {
    const chMatches = [...focus.matchAll(/(\d+)/g)].map(m => parseInt(m[1], 10)).filter(n => n >= 1 && n <= 6);
    if (chMatches.length > 0) {
      return Math.max(...chMatches);
    }
    return 4;
  }
  if (focus.startsWith('Beyond Book 1')) {
    if (/4th Declension|5th Declension|Passive/i.test(focus)) return 7;
    if (/Participle|PAP|PPP|Deponent|Comparative|Superlative/i.test(focus)) return 8;
    if (/Indirect Statement|offero/i.test(focus)) return 9;
    return 12;
  }
  if (focus.startsWith('GCSE Syntax')) {
    if (/Ablative Absolute/i.test(focus)) return 8;
    if (/Purpose Clause|Indirect Command|Indirect Warning|Cum Clause|Fear Clause/i.test(focus)) return 10;
    if (/Result Clause|Indirect Question|Gerundive/i.test(focus)) return 11;
    return 12;
  }
  return 12;
}

export function parseCustomLatinVocab(rawText) {
  if (!rawText || typeof rawText !== 'string') return [];
  const lines = rawText.split(/\r?\n/);
  const items = [];
  lines.forEach((line, idx) => {
    const clean = line.trim();
    if (!clean) return;
    let latin = '';
    let english = '';
    let notes = 'Custom Vocab';

    if (clean.includes('|')) {
      const parts = clean.split('|').map(s => s.trim()).filter(Boolean);
      if (parts.length >= 3) {
        latin = parts[0];
        english = parts[1];
        notes = parts[2];
      } else if (parts.length === 2) {
        latin = parts[0];
        english = parts[1];
      }
    } else {
      const match = clean.match(/^(.+?)\s*(?:-|—|:|=|\t)\s*(.+)$/);
      if (match) {
        latin = match[1].trim();
        english = match[2].trim();
      }
    }

    if (latin && english) {
      items.push({
        id: 'lcv_' + (idx + 1),
        part: 0,
        chapter: 0,
        latin,
        stem: latin.split(',')[0].trim(),
        english,
        category: 'custom',
        notes
      });
    }
  });
  return items;
}
