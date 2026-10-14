// Generator for Cullen & Taylor "Latin to GCSE" aligned Arena sentences
const fs = require('fs');

// Helper to create token items
function tok(w, def, role) {
  return { w, def, role };
}

const EASY_SENTENCES = [
  {
    latin: "servus in horto laborat.",
    primaryTranslation: "The slave is working in the garden.",
    acceptedTranslations: [
      "the slave is working in the garden",
      "the slave works in the garden",
      "a slave is working in a garden",
      "a slave works in a garden"
    ],
    tenseHint: "laborat is 3rd Person Singular Present Active ('works' or 'is working').",
    grammarFocus: "Cullen Book 1 (Ch 1): Present Tense & 2nd Declension",
    tokens: [
      tok("servus", "slave", "Nominative Singular (Subject)"),
      tok("in", "in / on", "Preposition (+ ablative)"),
      tok("horto", "garden", "Ablative Singular (Place where)"),
      tok("laborat", "works / is working", "3rd Pers Sing Present Active Verb")
    ]
  },
  {
    latin: "dominus servos laetos vocat.",
    primaryTranslation: "The master calls the happy slaves.",
    acceptedTranslations: [
      "the master calls the happy slaves",
      "the master is calling the happy slaves",
      "a master calls happy slaves"
    ],
    tenseHint: "vocat is 3rd Person Singular Present Active; servos laetos is accusative plural direct object.",
    grammarFocus: "Cullen Book 1 (Ch 1 & 3): Transitive Present & 2-1-2 Adjective",
    tokens: [
      tok("dominus", "master", "Nominative Singular (Subject)"),
      tok("servos", "slaves", "Accusative Plural (Direct Object)"),
      tok("laetos", "happy / cheerful", "Accusative Plural Adjective"),
      tok("vocat", "calls / is calling", "3rd Pers Sing Present Active Verb")
    ]
  },
  {
    latin: "pueri cibum bonum in villa consumunt.",
    primaryTranslation: "The boys eat good food in the villa.",
    acceptedTranslations: [
      "the boys eat good food in the villa",
      "the boys are eating good food in the villa",
      "boys eat good food in a villa",
      "the boys consume good food in the house"
    ],
    tenseHint: "consumunt is 3rd Person Plural Present Active ('consume' or 'eat').",
    grammarFocus: "Cullen Book 1 (Ch 2): 3rd Conjugation Present & Accusative Object",
    tokens: [
      tok("pueri", "boys", "Nominative Plural (Subject)"),
      tok("cibum", "food", "Accusative Singular (Direct Object)"),
      tok("bonum", "good", "Accusative Singular Adjective"),
      tok("in", "in / inside", "Preposition (+ ablative)"),
      tok("villa", "country house / villa", "Ablative Singular (Place where)"),
      tok("consumunt", "eat / consume", "3rd Pers Plur Present Active Verb")
    ]
  },
  {
    latin: "puella laeta in horto cantat.",
    primaryTranslation: "The happy girl is singing in the garden.",
    acceptedTranslations: [
      "the happy girl is singing in the garden",
      "the happy girl sings in the garden",
      "a happy girl is singing in a garden",
      "a happy girl sings in the garden"
    ],
    tenseHint: "cantat is 3rd Person Singular Present Active of 1st conjugation canto.",
    grammarFocus: "Cullen Book 1 (Ch 1): 1st Declension Noun & 1st Conjugation Present",
    tokens: [
      tok("puella", "girl", "Nominative Singular (Subject)"),
      tok("laeta", "happy / joyful", "Nominative Singular Adjective"),
      tok("in", "in / on", "Preposition (+ ablative)"),
      tok("horto", "garden", "Ablative Singular (Place where)"),
      tok("cantat", "sings / is singing", "3rd Pers Sing Present Active Verb")
    ]
  },
  {
    latin: "amicus meus verba vera semper dicit.",
    primaryTranslation: "My friend always speaks true words.",
    acceptedTranslations: [
      "my friend always speaks true words",
      "my friend always tells the truth",
      "my friend always says true words",
      "my friend says true words always"
    ],
    tenseHint: "dicit is 3rd Person Singular Present Active of 3rd conjugation dico.",
    grammarFocus: "Cullen Book 1 (Ch 2 & 3): 3rd Conjugation Present & Possessive",
    tokens: [
      tok("amicus", "friend", "Nominative Singular (Subject)"),
      tok("meus", "my", "Nominative Singular Possessive"),
      tok("verba", "words", "Accusative Plural Neuter (Direct Object)"),
      tok("vera", "true", "Accusative Plural Neuter Adjective"),
      tok("semper", "always", "Adverb"),
      tok("dicit", "speaks / says", "3rd Pers Sing Present Active Verb")
    ]
  },
  {
    latin: "servus dominum audit.",
    primaryTranslation: "The slave listens to his master.",
    acceptedTranslations: [
      "the slave listens to his master",
      "the slave hears the master",
      "the slave listens to the master",
      "a slave hears a master"
    ],
    tenseHint: "audit is 3rd Person Singular Present Active of 4th conjugation audio.",
    grammarFocus: "Cullen Book 1 (Ch 2): 4th Conjugation Present Active",
    tokens: [
      tok("servus", "slave", "Nominative Singular (Subject)"),
      tok("dominum", "master", "Accusative Singular (Direct Object)"),
      tok("audit", "hears / listens to", "3rd Pers Sing Present Active Verb")
    ]
  },
  {
    latin: "dominus servum bonum laudat.",
    primaryTranslation: "The master praises the good slave.",
    acceptedTranslations: [
      "the master praises the good slave",
      "the master is praising the good slave",
      "a master praises a good slave"
    ],
    tenseHint: "laudat is 3rd Person Singular Present Active of 1st conjugation laudo.",
    grammarFocus: "Cullen Book 1 (Ch 1): 1st Conjugation Present Transitive",
    tokens: [
      tok("dominus", "master", "Nominative Singular (Subject)"),
      tok("servum", "slave", "Accusative Singular (Direct Object)"),
      tok("bonum", "good", "Accusative Singular Adjective"),
      tok("laudat", "praises / is praising", "3rd Pers Sing Present Active Verb")
    ]
  },
  {
    latin: "filius parvus cum amico ludit.",
    primaryTranslation: "The small son plays with a friend.",
    acceptedTranslations: [
      "the small son plays with a friend",
      "the small son is playing with a friend",
      "the little son plays with his friend",
      "the small boy plays with a friend"
    ],
    tenseHint: "ludit is 3rd Person Singular Present Active; cum amico is ablative of accompaniment.",
    grammarFocus: "Cullen Book 1 (Ch 2): Preposition cum (+ ablative)",
    tokens: [
      tok("filius", "son", "Nominative Singular (Subject)"),
      tok("parvus", "small / little", "Nominative Singular Adjective"),
      tok("cum", "with", "Preposition (+ ablative)"),
      tok("amico", "friend", "Ablative Singular (Accompaniment)"),
      tok("ludit", "plays / is playing", "3rd Pers Sing Present Active Verb")
    ]
  },
  {
    latin: "agricola aquam ad villam portat.",
    primaryTranslation: "The farmer carries water to the villa.",
    acceptedTranslations: [
      "the farmer carries water to the villa",
      "the farmer is carrying water to the villa",
      "the farmer carries water to the house",
      "a farmer carries water to a villa"
    ],
    tenseHint: "portat is 3rd Person Singular Present Active; ad villam is accusative of motion towards.",
    grammarFocus: "Cullen Book 1 (Ch 2): Motion Towards with Preposition ad",
    tokens: [
      tok("agricola", "farmer", "Nominative Singular 1st Declension Masculine"),
      tok("aquam", "water", "Accusative Singular (Direct Object)"),
      tok("ad", "to / towards", "Preposition (+ accusative)"),
      tok("villam", "country house / villa", "Accusative Singular (Motion towards)"),
      tok("portat", "carries / is carrying", "3rd Pers Sing Present Active Verb")
    ]
  },
  {
    latin: "amicus epistulam laetus scribit.",
    primaryTranslation: "The friend happily writes a letter.",
    acceptedTranslations: [
      "the friend happily writes a letter",
      "the happy friend writes a letter",
      "the friend is writing a letter happily",
      "a friend happily writes a letter"
    ],
    tenseHint: "scribit is 3rd Person Singular Present Active of 3rd conjugation scribo.",
    grammarFocus: "Cullen Book 1 (Ch 2 & 3): 3rd Conjugation & Predicative Adjective",
    tokens: [
      tok("amicus", "friend", "Nominative Singular (Subject)"),
      tok("epistulam", "letter", "Accusative Singular (Direct Object)"),
      tok("laetus", "happy / joyful", "Nominative Singular Adjective (Predicative)"),
      tok("scribit", "writes / is writing", "3rd Pers Sing Present Active Verb")
    ]
  },
  {
    latin: "ancilla cibum in mensa ponit.",
    primaryTranslation: "The slave-girl places food on the table.",
    acceptedTranslations: [
      "the slave-girl places food on the table",
      "the maidservant puts food on the table",
      "the slave girl puts food on the table",
      "a slave-girl places food on a table"
    ],
    tenseHint: "ponit is 3rd Person Singular Present Active of 3rd conjugation pono.",
    grammarFocus: "Cullen Book 1 (Ch 2): 3rd Conjugation Verb pono & in (+ ablative)",
    tokens: [
      tok("ancilla", "slave-girl / maidservant", "Nominative Singular (Subject)"),
      tok("cibum", "food", "Accusative Singular (Direct Object)"),
      tok("in", "on / upon", "Preposition (+ ablative)"),
      tok("mensa", "table", "Ablative Singular (Place where)"),
      tok("ponit", "places / puts", "3rd Pers Sing Present Active Verb")
    ]
  },
  {
    latin: "pueri gladios in silva quaerunt.",
    primaryTranslation: "The boys look for swords in the forest.",
    acceptedTranslations: [
      "the boys look for swords in the forest",
      "the boys are looking for swords in the wood",
      "the boys search for swords in the forest",
      "boys search for swords in the woods"
    ],
    tenseHint: "quaerunt is 3rd Person Plural Present Active of quaero.",
    grammarFocus: "Cullen Book 1 (Ch 2): 3rd Conjugation Plural Present",
    tokens: [
      tok("pueri", "boys", "Nominative Plural (Subject)"),
      tok("gladios", "swords", "Accusative Plural (Direct Object)"),
      tok("in", "in / inside", "Preposition (+ ablative)"),
      tok("silva", "forest / wood", "Ablative Singular (Place where)"),
      tok("quaerunt", "look for / search for", "3rd Pers Plur Present Active Verb")
    ]
  },
  {
    latin: "nauta ad insulam parvam navigat.",
    primaryTranslation: "The sailor sails to a small island.",
    acceptedTranslations: [
      "the sailor sails to a small island",
      "the sailor is sailing to a small island",
      "a sailor sails to a small island"
    ],
    tenseHint: "navigat is 3rd Person Singular Present Active of navigo.",
    grammarFocus: "Cullen Book 1 (Ch 2): Preposition ad (+ acc) & Agreement",
    tokens: [
      tok("nauta", "sailor", "Nominative Singular (Subject)"),
      tok("ad", "to / towards", "Preposition (+ accusative)"),
      tok("insulam", "island", "Accusative Singular"),
      tok("parvam", "small", "Accusative Singular Feminine Adjective"),
      tok("navigat", "sails / is sailing", "3rd Pers Sing Present Active Verb")
    ]
  },
  {
    latin: "servi dominum iratum timent.",
    primaryTranslation: "The slaves fear the angry master.",
    acceptedTranslations: [
      "the slaves fear the angry master",
      "the slaves are afraid of the angry master",
      "slaves fear an angry master"
    ],
    tenseHint: "timent is 3rd Person Plural Present Active of 2nd conjugation timeo.",
    grammarFocus: "Cullen Book 1 (Ch 1): 2nd Conjugation Present Active",
    tokens: [
      tok("servi", "slaves", "Nominative Plural (Subject)"),
      tok("dominum", "master", "Accusative Singular (Direct Object)"),
      tok("iratum", "angry", "Accusative Singular Masculine Adjective"),
      tok("timent", "fear / are afraid of", "3rd Pers Plur Present Active Verb")
    ]
  },
  {
    latin: "femina donum pulchrum accipit.",
    primaryTranslation: "The woman receives a beautiful gift.",
    acceptedTranslations: [
      "the woman receives a beautiful gift",
      "the woman is receiving a beautiful gift",
      "a woman receives a beautiful gift"
    ],
    tenseHint: "accipit is 3rd Person Singular Present Active of mixed conjugation accipio.",
    grammarFocus: "Cullen Book 1 (Ch 2): Mixed Conjugation Verb & Neuter Noun",
    tokens: [
      tok("femina", "woman", "Nominative Singular (Subject)"),
      tok("donum", "gift", "Accusative Singular Neuter (Direct Object)"),
      tok("pulchrum", "beautiful", "Accusative Singular Neuter Adjective"),
      tok("accipit", "receives / accepts", "3rd Pers Sing Present Active Verb")
    ]
  },
  {
    latin: "amicus novus in villa habitat.",
    primaryTranslation: "The new friend lives in the villa.",
    acceptedTranslations: [
      "the new friend lives in the villa",
      "a new friend lives in a villa",
      "the new friend is living in the villa"
    ],
    tenseHint: "habitat is 3rd Person Singular Present Active of habito.",
    grammarFocus: "Cullen Book 1 (Ch 1 & 3): 1st Conjugation & 2-1-2 Adjective",
    tokens: [
      tok("amicus", "friend", "Nominative Singular (Subject)"),
      tok("novus", "new", "Nominative Singular Masculine Adjective"),
      tok("in", "in", "Preposition (+ ablative)"),
      tok("villa", "villa / house", "Ablative Singular (Place where)"),
      tok("habitat", "lives / is living", "3rd Pers Sing Present Active Verb")
    ]
  },
  {
    latin: "pueri vinum et cibum consumunt.",
    primaryTranslation: "The boys eat food and wine.",
    acceptedTranslations: [
      "the boys eat food and wine",
      "the boys consume wine and food",
      "the boys eat wine and food",
      "the boys are consuming wine and food"
    ],
    tenseHint: "consumunt is 3rd Person Plural Present Active.",
    grammarFocus: "Cullen Book 1 (Ch 2): Conjunction et & Direct Objects",
    tokens: [
      tok("pueri", "boys", "Nominative Plural (Subject)"),
      tok("vinum", "wine", "Accusative Singular Neuter"),
      tok("et", "and", "Conjunction"),
      tok("cibum", "food", "Accusative Singular Masculine"),
      tok("consumunt", "consume / eat", "3rd Pers Plur Present Active Verb")
    ]
  },
  {
    latin: "dominus servos malos punit.",
    primaryTranslation: "The master punishes the bad slaves.",
    acceptedTranslations: [
      "the master punishes the bad slaves",
      "the master is punishing bad slaves",
      "a master punishes bad slaves"
    ],
    tenseHint: "punit is 3rd Person Singular Present Active of 4th conjugation punio.",
    grammarFocus: "Cullen Book 1 (Ch 2): 4th Conjugation Present Active",
    tokens: [
      tok("dominus", "master", "Nominative Singular (Subject)"),
      tok("servos", "slaves", "Accusative Plural (Direct Object)"),
      tok("malos", "bad / wicked", "Accusative Plural Masculine Adjective"),
      tok("punit", "punishes / is punishing", "3rd Pers Sing Present Active Verb")
    ]
  },
  {
    latin: "puella per viam cum amica ambulat.",
    primaryTranslation: "The girl walks along the street with a female friend.",
    acceptedTranslations: [
      "the girl walks along the street with a friend",
      "the girl is walking along the street with her friend",
      "the girl walks along the road with a female friend",
      "the girl walks along the street with a female friend"
    ],
    tenseHint: "ambulat is 3rd Person Singular Present Active; per viam takes accusative; cum amica takes ablative.",
    grammarFocus: "Cullen Book 1 (Ch 2): Prepositions per (+ acc) and cum (+ abl)",
    tokens: [
      tok("puella", "girl", "Nominative Singular (Subject)"),
      tok("per", "along / through", "Preposition (+ accusative)"),
      tok("viam", "street / road", "Accusative Singular"),
      tok("cum", "with", "Preposition (+ ablative)"),
      tok("amica", "female friend", "Ablative Singular"),
      tok("ambulat", "walks / is walking", "3rd Pers Sing Present Active Verb")
    ]
  },
  {
    latin: "vir bonus amicum fidelem amat.",
    primaryTranslation: "The good man loves his faithful friend.",
    acceptedTranslations: [
      "the good man loves his faithful friend",
      "a good man loves a faithful friend",
      "the good man loves a faithful friend"
    ],
    tenseHint: "amat is 3rd Person Singular Present Active of amo.",
    grammarFocus: "Cullen Book 1 (Ch 1 & 3): 2nd Declension vir & Transitive Present",
    tokens: [
      tok("vir", "man", "Nominative Singular (Subject)"),
      tok("bonus", "good", "Nominative Singular Masculine Adjective"),
      tok("amicum", "friend", "Accusative Singular (Direct Object)"),
      tok("fidelem", "faithful", "Accusative Singular Adjective"),
      tok("amat", "loves", "3rd Pers Sing Present Active Verb")
    ]
  },
  {
    latin: "servi multum cibum ad villam portant.",
    primaryTranslation: "The slaves carry much food to the villa.",
    acceptedTranslations: [
      "the slaves carry much food to the villa",
      "the slaves are carrying a lot of food to the villa",
      "the slaves carry much food to the house"
    ],
    tenseHint: "portant is 3rd Person Plural Present Active of porto.",
    grammarFocus: "Cullen Book 1 (Ch 1 & 2): 1st Conjugation Plural & Preposition ad",
    tokens: [
      tok("servi", "slaves", "Nominative Plural (Subject)"),
      tok("multum", "much / a lot of", "Accusative Singular Masculine Adjective"),
      tok("cibum", "food", "Accusative Singular (Direct Object)"),
      tok("ad", "to / towards", "Preposition (+ accusative)"),
      tok("villam", "villa / country house", "Accusative Singular"),
      tok("portant", "carry / are carrying", "3rd Pers Plur Present Active Verb")
    ]
  },
  {
    latin: "agricola in agris cotidie laborat.",
    primaryTranslation: "The farmer works daily in the fields.",
    acceptedTranslations: [
      "the farmer works daily in the fields",
      "the farmer works every day in the fields",
      "the farmer is working daily in the fields",
      "a farmer works daily in the fields"
    ],
    tenseHint: "laborat is 3rd Person Singular Present Active; in agris is ablative plural.",
    grammarFocus: "Cullen Book 1 (Ch 1 & 2): 2nd Declension ager & in (+ ablative)",
    tokens: [
      tok("agricola", "farmer", "Nominative Singular (Subject)"),
      tok("in", "in", "Preposition (+ ablative)"),
      tok("agris", "fields", "Ablative Plural (Place where)"),
      tok("cotidie", "daily / every day", "Adverb"),
      tok("laborat", "works / is working", "3rd Pers Sing Present Active Verb")
    ]
  },
  {
    latin: "nuntius epistulam ad villam portat.",
    primaryTranslation: "The messenger carries a letter to the villa.",
    acceptedTranslations: [
      "the messenger carries a letter to the villa",
      "the messenger is carrying a letter to the villa",
      "a messenger carries a letter to the house"
    ],
    tenseHint: "portat is 3rd Person Singular Present Active.",
    grammarFocus: "Cullen Book 1 (Ch 1 & 2): 2nd Declension Noun nuntius",
    tokens: [
      tok("nuntius", "messenger", "Nominative Singular (Subject)"),
      tok("epistulam", "letter", "Accusative Singular (Direct Object)"),
      tok("ad", "to / towards", "Preposition (+ accusative)"),
      tok("villam", "villa / house", "Accusative Singular"),
      tok("portat", "carries / is carrying", "3rd Pers Sing Present Active Verb")
    ]
  },
  {
    latin: "puella libros magnos in taberna legit.",
    primaryTranslation: "The girl reads big books in the shop.",
    acceptedTranslations: [
      "the girl reads big books in the shop",
      "the girl is reading big books in the shop",
      "a girl reads big books in a shop"
    ],
    tenseHint: "legit is 3rd Person Singular Present Active of 3rd conjugation lego.",
    grammarFocus: "Cullen Book 1 (Ch 2 & 3): 3rd Conjugation lego & 2nd Declension liber",
    tokens: [
      tok("puella", "girl", "Nominative Singular (Subject)"),
      tok("libros", "books", "Accusative Plural (Direct Object)"),
      tok("magnos", "big / large", "Accusative Plural Masculine Adjective"),
      tok("in", "in / inside", "Preposition (+ ablative)"),
      tok("taberna", "shop / inn", "Ablative Singular"),
      tok("legit", "reads / is reading", "3rd Pers Sing Present Active Verb")
    ]
  },
  {
    latin: "amicus gladium novum spectat.",
    primaryTranslation: "The friend looks at the new sword.",
    acceptedTranslations: [
      "the friend looks at the new sword",
      "the friend is looking at the new sword",
      "a friend looks at a new sword"
    ],
    tenseHint: "spectat is 3rd Person Singular Present Active of specto.",
    grammarFocus: "Cullen Book 1 (Ch 1 & 3): 1st Conjugation specto & 2-1-2 novus",
    tokens: [
      tok("amicus", "friend", "Nominative Singular (Subject)"),
      tok("gladium", "sword", "Accusative Singular (Direct Object)"),
      tok("novum", "new", "Accusative Singular Masculine Adjective"),
      tok("spectat", "looks at / watches", "3rd Pers Sing Present Active Verb")
    ]
  },
  {
    latin: "feminae dona pulchra parant.",
    primaryTranslation: "The women prepare beautiful gifts.",
    acceptedTranslations: [
      "the women prepare beautiful gifts",
      "the women are preparing beautiful gifts",
      "women prepare beautiful gifts"
    ],
    tenseHint: "parant is 3rd Person Plural Present Active of paro.",
    grammarFocus: "Cullen Book 1 (Ch 1 & 3): 1st Declension Plural & Neuter dona",
    tokens: [
      tok("feminae", "women", "Nominative Plural (Subject)"),
      tok("dona", "gifts", "Accusative Plural Neuter (Direct Object)"),
      tok("pulchra", "beautiful", "Accusative Plural Neuter Adjective"),
      tok("parant", "prepare / are preparing", "3rd Pers Plur Present Active Verb")
    ]
  },
  {
    latin: "dominus epistulam tuam laetus legit.",
    primaryTranslation: "The master happily reads your letter.",
    acceptedTranslations: [
      "the master happily reads your letter",
      "the master reads your letter happily",
      "the happy master reads your letter",
      "the master is happily reading your letter"
    ],
    tenseHint: "legit is 3rd Person Singular Present Active; tuam is possessive adjective.",
    grammarFocus: "Cullen Book 1 (Ch 3): Possessive Adjective tuus",
    tokens: [
      tok("dominus", "master", "Nominative Singular (Subject)"),
      tok("epistulam", "letter", "Accusative Singular (Direct Object)"),
      tok("tuam", "your", "Accusative Singular Feminine Possessive"),
      tok("laetus", "happy / joyful", "Nominative Singular Masculine Adjective"),
      tok("legit", "reads / is reading", "3rd Pers Sing Present Active Verb")
    ]
  },
  {
    latin: "puer ad templum sacrum currit.",
    primaryTranslation: "The boy runs to the sacred temple.",
    acceptedTranslations: [
      "the boy runs to the sacred temple",
      "the boy is running to the sacred temple",
      "a boy runs to a sacred temple"
    ],
    tenseHint: "currit is 3rd Person Singular Present Active of curro.",
    grammarFocus: "Cullen Book 1 (Ch 2 & 3): 3rd Conjugation curro & 2nd Decl Neuter",
    tokens: [
      tok("puer", "boy", "Nominative Singular (Subject)"),
      tok("ad", "to / towards", "Preposition (+ accusative)"),
      tok("templum", "temple", "Accusative Singular Neuter"),
      tok("sacrum", "sacred / holy", "Accusative Singular Neuter Adjective"),
      tok("currit", "runs / is running", "3rd Pers Sing Present Active Verb")
    ]
  },
  {
    latin: "dominus pecuniam multam in villa servat.",
    primaryTranslation: "The master keeps much money in the villa.",
    acceptedTranslations: [
      "the master keeps much money in the villa",
      "the master saves much money in the villa",
      "the master keeps a lot of money in the house",
      "a master keeps much money in a villa"
    ],
    tenseHint: "servat is 3rd Person Singular Present Active of servo.",
    grammarFocus: "Cullen Book 1 (Ch 1 & 2): 1st Conjugation servo & 1st Decl pecunia",
    tokens: [
      tok("dominus", "master", "Nominative Singular (Subject)"),
      tok("pecuniam", "money", "Accusative Singular (Direct Object)"),
      tok("multam", "much / a lot of", "Accusative Singular Feminine Adjective"),
      tok("in", "in / inside", "Preposition (+ ablative)"),
      tok("villa", "villa / house", "Ablative Singular"),
      tok("servat", "keeps / saves", "3rd Pers Sing Present Active Verb")
    ]
  },
  {
    latin: "amicus meus in horto sedet.",
    primaryTranslation: "My friend sits in the garden.",
    acceptedTranslations: [
      "my friend sits in the garden",
      "my friend is sitting in the garden",
      "a friend of mine sits in the garden"
    ],
    tenseHint: "sedet is 3rd Person Singular Present Active of 2nd conjugation sedeo.",
    grammarFocus: "Cullen Book 1 (Ch 1): 2nd Conjugation sedeo",
    tokens: [
      tok("amicus", "friend", "Nominative Singular (Subject)"),
      tok("meus", "my", "Nominative Singular Possessive"),
      tok("in", "in", "Preposition (+ ablative)"),
      tok("horto", "garden", "Ablative Singular"),
      tok("sedet", "sits / is sitting", "3rd Pers Sing Present Active Verb")
    ]
  },
  {
    latin: "nautae navem magnam in litore parant.",
    primaryTranslation: "The sailors prepare a large ship on the shore.",
    acceptedTranslations: [
      "the sailors prepare a large ship on the shore",
      "the sailors are preparing a large ship on the shore",
      "sailors prepare a big ship on the shore"
    ],
    tenseHint: "parant is 3rd Person Plural Present Active of paro.",
    grammarFocus: "Cullen Book 1 (Ch 1 & 2): 1st Declension Masculine nauta",
    tokens: [
      tok("nautae", "sailors", "Nominative Plural (Subject)"),
      tok("navem", "ship", "Accusative Singular (Direct Object)"),
      tok("magnam", "large / big", "Accusative Singular Feminine Adjective"),
      tok("in", "on / in", "Preposition (+ ablative)"),
      tok("litore", "shore", "Ablative Singular"),
      tok("parant", "prepare / are preparing", "3rd Pers Plur Present Active Verb")
    ]
  },
  {
    latin: "puella flores pulchros ad templum portat.",
    primaryTranslation: "The girl carries beautiful flowers to the temple.",
    acceptedTranslations: [
      "the girl carries beautiful flowers to the temple",
      "the girl is carrying beautiful flowers to the temple",
      "a girl carries beautiful flowers to a temple"
    ],
    tenseHint: "portat is 3rd Person Singular Present Active of porto.",
    grammarFocus: "Cullen Book 1 (Ch 1 & 2): Preposition ad & 1st Conjugation",
    tokens: [
      tok("puella", "girl", "Nominative Singular (Subject)"),
      tok("flores", "flowers", "Accusative Plural (Direct Object)"),
      tok("pulchros", "beautiful", "Accusative Plural Masculine Adjective"),
      tok("ad", "to / towards", "Preposition (+ accusative)"),
      tok("templum", "temple", "Accusative Singular Neuter"),
      tok("portat", "carries / is carrying", "3rd Pers Sing Present Active Verb")
    ]
  },
  {
    latin: "servus dominum fidelem adiuvat.",
    primaryTranslation: "The slave helps his faithful master.",
    acceptedTranslations: [
      "the slave helps his faithful master",
      "the slave is helping his faithful master",
      "a slave helps a faithful master"
    ],
    tenseHint: "adiuvat is 3rd Person Singular Present Active of adiuvo.",
    grammarFocus: "Cullen Book 1 (Ch 1): Compound 1st Conjugation adiuvo",
    tokens: [
      tok("servus", "slave", "Nominative Singular (Subject)"),
      tok("dominum", "master", "Accusative Singular (Direct Object)"),
      tok("fidelem", "faithful", "Accusative Singular Adjective"),
      tok("adiuvat", "helps / is helping", "3rd Pers Sing Present Active Verb")
    ]
  },
  {
    latin: "pueri cum gaudio in arena pugnant.",
    primaryTranslation: "The boys fight with joy in the arena.",
    acceptedTranslations: [
      "the boys fight with joy in the arena",
      "the boys are fighting with joy in the arena",
      "the boys fight gladly in the arena"
    ],
    tenseHint: "pugnant is 3rd Person Plural Present Active of pugno; cum gaudio is ablative of manner.",
    grammarFocus: "Cullen Book 1 (Ch 2): Ablative of Manner with cum",
    tokens: [
      tok("pueri", "boys", "Nominative Plural (Subject)"),
      tok("cum", "with", "Preposition (+ ablative)"),
      tok("gaudio", "joy / gladness", "Ablative Singular (Manner)"),
      tok("in", "in", "Preposition (+ ablative)"),
      tok("arena", "arena / sand", "Ablative Singular"),
      tok("pugnant", "fight / are fighting", "3rd Pers Plur Present Active Verb")
    ]
  },
  {
    latin: "femina epistulam ad filium mittit.",
    primaryTranslation: "The woman sends a letter to her son.",
    acceptedTranslations: [
      "the woman sends a letter to her son",
      "the woman is sending a letter to her son",
      "a woman sends a letter to a son"
    ],
    tenseHint: "mittit is 3rd Person Singular Present Active of 3rd conjugation mitto.",
    grammarFocus: "Cullen Book 1 (Ch 2): 3rd Conjugation mitto & Preposition ad",
    tokens: [
      tok("femina", "woman", "Nominative Singular (Subject)"),
      tok("epistulam", "letter", "Accusative Singular (Direct Object)"),
      tok("ad", "to / towards", "Preposition (+ accusative)"),
      tok("filium", "son", "Accusative Singular"),
      tok("mittit", "sends / is sending", "3rd Pers Sing Present Active Verb")
    ]
  },
  {
    latin: "vir laetus vinum bonum bibit.",
    primaryTranslation: "The happy man drinks good wine.",
    acceptedTranslations: [
      "the happy man drinks good wine",
      "the joyful man drinks good wine",
      "a happy man drinks good wine",
      "the happy man is drinking good wine"
    ],
    tenseHint: "bibit is 3rd Person Singular Present Active of 3rd conjugation bibo.",
    grammarFocus: "Cullen Book 1 (Ch 2 & 3): 3rd Conjugation bibo & 2-1-2 Adjective",
    tokens: [
      tok("vir", "man", "Nominative Singular (Subject)"),
      tok("laetus", "happy / joyful", "Nominative Singular Masculine Adjective"),
      tok("vinum", "wine", "Accusative Singular Neuter (Direct Object)"),
      tok("bonum", "good", "Accusative Singular Neuter Adjective"),
      tok("bibit", "drinks / is drinking", "3rd Pers Sing Present Active Verb")
    ]
  },
  {
    latin: "amicus tuus gladium durum gerit.",
    primaryTranslation: "Your friend carries a hard sword.",
    acceptedTranslations: [
      "your friend carries a hard sword",
      "your friend wears a hard sword",
      "your friend is carrying a hard sword"
    ],
    tenseHint: "gerit is 3rd Person Singular Present Active of 3rd conjugation gero.",
    grammarFocus: "Cullen Book 1 (Ch 2 & 3): 3rd Conjugation gero & Possessive tuus",
    tokens: [
      tok("amicus", "friend", "Nominative Singular (Subject)"),
      tok("tuus", "your", "Nominative Singular Possessive"),
      tok("gladium", "sword", "Accusative Singular (Direct Object)"),
      tok("durum", "hard / tough", "Accusative Singular Masculine Adjective"),
      tok("gerit", "carries / bears / wears", "3rd Pers Sing Present Active Verb")
    ]
  },
  {
    latin: "servi fessi in horto non laborant.",
    primaryTranslation: "The tired slaves do not work in the garden.",
    acceptedTranslations: [
      "the tired slaves do not work in the garden",
      "the tired slaves are not working in the garden",
      "tired slaves do not work in the garden"
    ],
    tenseHint: "laborant is 3rd Person Plural Present Active; non negates the verb.",
    grammarFocus: "Cullen Book 1 (Ch 1 & 3): Negative non & 2-1-2 Adjective fessus",
    tokens: [
      tok("servi", "slaves", "Nominative Plural (Subject)"),
      tok("fessi", "tired / weary", "Nominative Plural Masculine Adjective"),
      tok("in", "in", "Preposition (+ ablative)"),
      tok("horto", "garden", "Ablative Singular"),
      tok("non", "not", "Adverb (Negation)"),
      tok("laborant", "work / are working", "3rd Pers Plur Present Active Verb")
    ]
  },
  {
    latin: "puellae carae per silvam ambulant.",
    primaryTranslation: "The dear girls walk through the forest.",
    acceptedTranslations: [
      "the dear girls walk through the forest",
      "the dear girls walk through the wood",
      "the dear girls are walking through the forest"
    ],
    tenseHint: "ambulant is 3rd Person Plural Present Active; per silvam takes accusative.",
    grammarFocus: "Cullen Book 1 (Ch 2 & 3): 1st Declension Plural & Preposition per",
    tokens: [
      tok("puellae", "girls", "Nominative Plural (Subject)"),
      tok("carae", "dear / beloved", "Nominative Plural Feminine Adjective"),
      tok("per", "through", "Preposition (+ accusative)"),
      tok("silvam", "forest / wood", "Accusative Singular"),
      tok("ambulant", "walk / are walking", "3rd Pers Plur Present Active Verb")
    ]
  },
  {
    latin: "dominus villam novam aedificat.",
    primaryTranslation: "The master builds a new villa.",
    acceptedTranslations: [
      "the master builds a new villa",
      "the master is building a new villa",
      "the master builds a new house",
      "a master builds a new villa"
    ],
    tenseHint: "aedificat is 3rd Person Singular Present Active of 1st conjugation aedifico.",
    grammarFocus: "Cullen Book 1 (Ch 1 & 3): 1st Conjugation aedifico & 2-1-2 novus",
    tokens: [
      tok("dominus", "master", "Nominative Singular (Subject)"),
      tok("villam", "villa / house", "Accusative Singular (Direct Object)"),
      tok("novam", "new", "Accusative Singular Feminine Adjective"),
      tok("aedificat", "builds / is building", "3rd Pers Sing Present Active Verb")
    ]
  },
  {
    latin: "puer cibum carum amico dat.",
    primaryTranslation: "The boy gives dear food to his friend.",
    acceptedTranslations: [
      "the boy gives dear food to his friend",
      "the boy gives dear food to a friend",
      "the boy is giving dear food to his friend"
    ],
    tenseHint: "dat is 3rd Person Singular Present Active of do; amico is dative singular indirect object.",
    grammarFocus: "Cullen Book 1 (Ch 2): Dative Case (Indirect Object)",
    tokens: [
      tok("puer", "boy", "Nominative Singular (Subject)"),
      tok("cibum", "food", "Accusative Singular (Direct Object)"),
      tok("carum", "dear / precious", "Accusative Singular Masculine Adjective"),
      tok("amico", "friend", "Dative Singular (Indirect Object)"),
      tok("dat", "gives / is giving", "3rd Pers Sing Present Active Verb")
    ]
  },
  {
    latin: "frater meus gladium novum habet.",
    primaryTranslation: "My brother has a new sword.",
    acceptedTranslations: [
      "my brother has a new sword",
      "my brother owns a new sword",
      "a brother of mine has a new sword"
    ],
    tenseHint: "habet is 3rd Person Singular Present Active of 2nd conjugation habeo.",
    grammarFocus: "Cullen Book 1 (Ch 1 & 3): 2nd Conjugation habeo & Possessive",
    tokens: [
      tok("frater", "brother", "Nominative Singular (Subject)"),
      tok("meus", "my", "Nominative Singular Possessive"),
      tok("gladium", "sword", "Accusative Singular (Direct Object)"),
      tok("novum", "new", "Accusative Singular Masculine Adjective"),
      tok("habet", "has / possesses", "3rd Pers Sing Present Active Verb")
    ]
  },
  {
    latin: "puella pulchra flores in horto legit.",
    primaryTranslation: "The beautiful girl chooses flowers in the garden.",
    acceptedTranslations: [
      "the beautiful girl chooses flowers in the garden",
      "the beautiful girl gathers flowers in the garden",
      "the beautiful girl picks flowers in the garden",
      "a beautiful girl gathers flowers in the garden"
    ],
    tenseHint: "legit is 3rd Person Singular Present Active ('gathers' or 'picks').",
    grammarFocus: "Cullen Book 1 (Ch 2 & 3): 3rd Conjugation lego & 2-1-2 pulcher",
    tokens: [
      tok("puella", "girl", "Nominative Singular (Subject)"),
      tok("pulchra", "beautiful", "Nominative Singular Feminine Adjective"),
      tok("flores", "flowers", "Accusative Plural (Direct Object)"),
      tok("in", "in", "Preposition (+ ablative)"),
      tok("horto", "garden", "Ablative Singular"),
      tok("legit", "picks / gathers / chooses", "3rd Pers Sing Present Active Verb")
    ]
  },
  {
    latin: "puella epistulam amici cum gaudio legit.",
    primaryTranslation: "The girl reads her friend's letter with joy.",
    acceptedTranslations: [
      "the girl reads her friend's letter with joy",
      "the girl reads the letter of her friend with joy",
      "the girl reads her friend's letter gladly",
      "a girl reads a friend's letter with joy"
    ],
    tenseHint: "legit is 3rd Person Singular Present Active; amici is genitive singular.",
    grammarFocus: "Cullen Book 1 (Ch 2): Genitive Case of Possession & cum (+ abl)",
    tokens: [
      tok("puella", "girl", "Nominative Singular (Subject)"),
      tok("epistulam", "letter", "Accusative Singular (Direct Object)"),
      tok("amici", "of a friend / friend's", "Genitive Singular"),
      tok("cum", "with", "Preposition (+ ablative)"),
      tok("gaudio", "joy", "Ablative Singular"),
      tok("legit", "reads / is reading", "3rd Pers Sing Present Active Verb")
    ]
  }
];

fs.writeFileSync('scripts/easy_sentences.json', JSON.stringify(EASY_SENTENCES, null, 2));
console.log('Saved Easy sentences:', EASY_SENTENCES.length);
