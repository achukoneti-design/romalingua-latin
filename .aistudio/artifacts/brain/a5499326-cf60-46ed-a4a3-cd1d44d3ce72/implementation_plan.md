# Implementation Plan - Translation Arena Difficulty Tiers (Easy, Intermediate, Hard, GCSE)

Introduce difficulty-based filtering (**Easy**, **Intermediate**, **Hard**, and **GCSE**) directly in the Translation Arena header alongside the daily completed sentences counter, categorized strictly by Henry Cullen & John Taylor's *Latin to GCSE Book 1* (OCR syllabus) learning order, with non-Book 1 grammar and vocabulary assigned to Hard and GCSE.

---

### User Review & Decisions Implemented

> [!IMPORTANT]
> The following architectural decisions were implemented:
> - **Difficulty Selector UI**: Segmented pill tabs (`All`, `🟢 Easy`, `🟡 Intermediate`, `🟠 Hard`, `🟣 GCSE`) positioned directly beside "Sentences done today" in the arena header.
> - **Cullen & Taylor Book 1 Learning Order**:
>   - **Easy (44 sentences)**: Strictly Chapters 1–3 of Cullen & Taylor Book 1 (Present tense 1st/2nd/3rd/4th conjugations, 1st & 2nd declension nouns, 2-1-2 adjectives, basic prepositions).
>   - **Intermediate (51 sentences)**: Strictly Chapters 4–6 of Cullen & Taylor Book 1 (Imperfect & Perfect active indicative, 3rd declension nouns, 3rd declension adjectives, irregular verbs *possum/volo/nolo*, adverbs, pluperfect).
>   - **Hard (42 sentences)**: Beyond Book 1 (Book 2 / Intermediate GCSE: Deponent verbs, Participles, Passive voice indicative, 4th & 5th declension nouns, non-Book 1 OCR vocabulary, Indirect Statement, Comparatives & Superlatives).
>   - **GCSE (38 sentences)**: Advanced OCR GCSE Prescribed Syntax (Purpose clauses with *ut/ne*, Result clauses with *tam... ut*, Indirect commands, Indirect questions, Cum clauses with subjunctive, Fear clauses, Ablative absolutes, Gerundives of obligation).
> - **Unified Daily Practice Tracking**: Unified daily count where sentences completed in any tier immediately count towards the daily practice goal and streak.

---

## Verification & Status

- Build & compilation: Passed with zero errors (`compile_applet`).
- TypeScript lint: Passed with zero errors (`tsc --noEmit`).
- Dev server: Healthy on port 3000 (HTTP 200).
- Dataset integrity: 175 unique Latin sentences with complete dictionary tokens, grammatical hints, and multiple accepted translation variations.
