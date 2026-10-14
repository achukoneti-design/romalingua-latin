const fs = require('fs');

function tok(w, def, role) {
  return { w, def, role };
}

// 1. Read Easy sentences
require('./generate_easy.cjs');
const easyList = JSON.parse(fs.readFileSync('scripts/easy_sentences.json', 'utf8'));

// 2. Read Intermediate sentences (51 sentences)
const intermediateList = [
  {
    latin: "femina epistulam ad amicum scripsit.",
    primaryTranslation: "The woman wrote a letter to her friend.",
    acceptedTranslations: [
      "the woman wrote a letter to her friend",
      "the woman wrote a letter to a friend",
      "a woman wrote a letter to her friend"
    ],
    tenseHint: "scripsit is 3rd Person Singular Perfect Active of scribo ('wrote').",
    grammarFocus: "Cullen Book 1 (Ch 4): Perfect Active Tense (-it)",
    tokens: [
      tok("femina", "woman", "Nominative Singular (Subject)"),
      tok("epistulam", "letter", "Accusative Singular (Direct Object)"),
      tok("ad", "to", "Preposition (+ accusative)"),
      tok("amicum", "friend", "Accusative Singular"),
      tok("scripsit", "wrote", "3rd Pers Sing Perfect Active Verb")
    ]
  },
  {
    latin: "milites urbem fortiter defendebant.",
    primaryTranslation: "The soldiers were bravely defending the city.",
    acceptedTranslations: [
      "the soldiers were bravely defending the city",
      "the soldiers defended the city bravely",
      "the soldiers were defending the city bravely"
    ],
    tenseHint: "defendebant is 3rd Person Plural Imperfect Active ('were defending').",
    grammarFocus: "Cullen Book 1 (Ch 4 & 5): Imperfect Active & 3rd Declension",
    tokens: [
      tok("milites", "soldiers", "Nominative Plural 3rd Declension (Subject)"),
      tok("urbem", "city", "Accusative Singular 3rd Declension (Direct Object)"),
      tok("fortiter", "bravely", "Adverb"),
      tok("defendebant", "were defending", "3rd Pers Plur Imperfect Active Verb")
    ]
  },
  {
    latin: "nuntius celer ad castra festinavit.",
    primaryTranslation: "The quick messenger hurried to the camp.",
    acceptedTranslations: [
      "the quick messenger hurried to the camp",
      "the swift messenger hurried to the camp",
      "the quick messenger hastened to the camp"
    ],
    tenseHint: "festinavit is 3rd Person Singular Perfect Active ('hurried').",
    grammarFocus: "Cullen Book 1 (Ch 4 & 6): 3rd Declension Adjective & Perfect Tense",
    tokens: [
      tok("nuntius", "messenger", "Nominative Singular (Subject)"),
      tok("celer", "quick / swift", "Nominative Singular 3rd Declension Adjective"),
      tok("ad", "to / towards", "Preposition (+ accusative)"),
      tok("castra", "camp", "Accusative Plural Neuter"),
      tok("festinavit", "hurried / hastened", "3rd Pers Sing Perfect Active Verb")
    ]
  },
  {
    latin: "ancilla vinum dominis dabat.",
    primaryTranslation: "The slave-girl was giving wine to the masters.",
    acceptedTranslations: [
      "the slave-girl was giving wine to the masters",
      "the maidservant was giving wine to the masters",
      "the slave-girl gave wine to the masters"
    ],
    tenseHint: "dabat is 3rd Person Singular Imperfect Active of do ('was giving'); dominis is dative plural.",
    grammarFocus: "Cullen Book 1 (Ch 4): Imperfect Tense & Dative Indirect Object",
    tokens: [
      tok("ancilla", "slave-girl / maidservant", "Nominative Singular (Subject)"),
      tok("vinum", "wine", "Accusative Singular Neuter (Direct Object)"),
      tok("dominis", "to the masters", "Dative Plural (Indirect Object)"),
      tok("dabat", "was giving / gave", "3rd Pers Sing Imperfect Active Verb")
    ]
  },
  {
    latin: "cives clamorem ingentem in foro audiverunt.",
    primaryTranslation: "The citizens heard a huge shout in the forum.",
    acceptedTranslations: [
      "the citizens heard a huge shout in the forum",
      "the citizens heard a huge clamour in the forum",
      "citizens heard a great shout in the forum"
    ],
    tenseHint: "audiverunt is 3rd Person Plural Perfect Active of audio ('heard').",
    grammarFocus: "Cullen Book 1 (Ch 4 & 6): Perfect Active (-erunt) & ingens",
    tokens: [
      tok("cives", "citizens", "Nominative Plural 3rd Declension (Subject)"),
      tok("clamorem", "shout / clamour", "Accusative Singular 3rd Declension"),
      tok("ingentem", "huge / vast", "Accusative Singular 3rd Declension Adjective"),
      tok("in", "in", "Preposition (+ ablative)"),
      tok("foro", "forum / marketplace", "Ablative Singular"),
      tok("audiverunt", "heard", "3rd Pers Plur Perfect Active Verb")
    ]
  },
  {
    latin: "dux audax milites ad proelium duxit.",
    primaryTranslation: "The bold leader led the soldiers to battle.",
    acceptedTranslations: [
      "the bold leader led the soldiers to battle",
      "the bold general led the soldiers to battle",
      "the daring leader led soldiers to battle"
    ],
    tenseHint: "duxit is 3rd Person Singular Perfect Active of 3rd conjugation duco ('led').",
    grammarFocus: "Cullen Book 1 (Ch 4 & 6): 3rd Declension audax & Perfect duxit",
    tokens: [
      tok("dux", "leader / general", "Nominative Singular 3rd Declension (Subject)"),
      tok("audax", "bold / daring", "Nominative Singular 3rd Declension Adjective"),
      tok("milites", "soldiers", "Accusative Plural 3rd Declension (Direct Object)"),
      tok("ad", "to / towards", "Preposition (+ accusative)"),
      tok("proelium", "battle", "Accusative Singular Neuter"),
      tok("duxit", "led", "3rd Pers Sing Perfect Active Verb")
    ]
  },
  {
    latin: "puellae per silvam lente ambulabant.",
    primaryTranslation: "The girls were walking slowly through the wood.",
    acceptedTranslations: [
      "the girls were walking slowly through the wood",
      "the girls walked slowly through the forest",
      "the girls were walking slowly through the forest"
    ],
    tenseHint: "ambulabant is 3rd Person Plural Imperfect Active ('were walking'); lente is adverb.",
    grammarFocus: "Cullen Book 1 (Ch 4 & 6): Imperfect Tense & Adverb Formation",
    tokens: [
      tok("puellae", "girls", "Nominative Plural (Subject)"),
      tok("per", "through", "Preposition (+ accusative)"),
      tok("silvam", "wood / forest", "Accusative Singular"),
      tok("lente", "slowly", "Adverb"),
      tok("ambulabant", "were walking", "3rd Pers Plur Imperfect Active Verb")
    ]
  },
  {
    latin: "senex fessus sub arbore sedebat.",
    primaryTranslation: "The tired old man was sitting under a tree.",
    acceptedTranslations: [
      "the tired old man was sitting under a tree",
      "the tired old man sat under a tree",
      "a tired old man was sitting under a tree"
    ],
    tenseHint: "sedebat is 3rd Person Singular Imperfect Active ('was sitting'); senex is 3rd declension.",
    grammarFocus: "Cullen Book 1 (Ch 4 & 5): 3rd Declension senex & Imperfect sedebat",
    tokens: [
      tok("senex", "old man", "Nominative Singular 3rd Declension (Subject)"),
      tok("fessus", "tired / weary", "Nominative Singular Masculine Adjective"),
      tok("sub", "under", "Preposition (+ ablative)"),
      tok("arbore", "tree", "Ablative Singular 3rd Declension"),
      tok("sedebat", "was sitting / sat", "3rd Pers Sing Imperfect Active Verb")
    ]
  },
  {
    latin: "mater filiam caram in taberna vidit.",
    primaryTranslation: "The mother saw her dear daughter in the shop.",
    acceptedTranslations: [
      "the mother saw her dear daughter in the shop",
      "the mother saw her dear daughter in the inn",
      "a mother saw her dear daughter in a shop"
    ],
    tenseHint: "vidit is 3rd Person Singular Perfect Active of video ('saw'); mater is 3rd declension.",
    grammarFocus: "Cullen Book 1 (Ch 4 & 5): 3rd Declension mater & Perfect vidit",
    tokens: [
      tok("mater", "mother", "Nominative Singular 3rd Declension (Subject)"),
      tok("filiam", "daughter", "Accusative Singular (Direct Object)"),
      tok("caram", "dear", "Accusative Singular Feminine Adjective"),
      tok("in", "in", "Preposition (+ ablative)"),
      tok("taberna", "shop / inn", "Ablative Singular"),
      tok("vidit", "saw", "3rd Pers Sing Perfect Active Verb")
    ]
  },
  {
    latin: "nautae ad insulam magnam navigabant.",
    primaryTranslation: "The sailors were sailing to a large island.",
    acceptedTranslations: [
      "the sailors were sailing to a large island",
      "the sailors sailed to a big island",
      "sailors were sailing to a large island"
    ],
    tenseHint: "navigabant is 3rd Person Plural Imperfect Active ('were sailing').",
    grammarFocus: "Cullen Book 1 (Ch 4): Imperfect Active (-bant)",
    tokens: [
      tok("nautae", "sailors", "Nominative Plural (Subject)"),
      tok("ad", "to / towards", "Preposition (+ accusative)"),
      tok("insulam", "island", "Accusative Singular"),
      tok("magnam", "large / big", "Accusative Singular Feminine Adjective"),
      tok("navigabant", "were sailing / sailed", "3rd Pers Plur Imperfect Active Verb")
    ]
  },
  {
    latin: "rex barbarus gladios militibus dedit.",
    primaryTranslation: "The barbarian king gave swords to the soldiers.",
    acceptedTranslations: [
      "the barbarian king gave swords to the soldiers",
      "a barbarian king gave swords to the soldiers",
      "the barbarian king gave swords to soldiers"
    ],
    tenseHint: "dedit is 3rd Person Singular Perfect Active of do ('gave'); rex and militibus are 3rd declension.",
    grammarFocus: "Cullen Book 1 (Ch 4 & 5): Irregular Perfect dedit & 3rd Declension rex",
    tokens: [
      tok("rex", "king", "Nominative Singular 3rd Declension (Subject)"),
      tok("barbarus", "barbarian", "Nominative Singular Masculine Adjective"),
      tok("gladios", "swords", "Accusative Plural (Direct Object)"),
      tok("militibus", "to the soldiers", "Dative Plural 3rd Declension (Indirect Object)"),
      tok("dedit", "gave", "3rd Pers Sing Perfect Active Verb")
    ]
  },
  {
    latin: "liberi cum patre per vias currebant.",
    primaryTranslation: "The children were running through the streets with their father.",
    acceptedTranslations: [
      "the children were running through the streets with their father",
      "the children ran through the streets with their father",
      "children were running through the streets with their father"
    ],
    tenseHint: "currebant is 3rd Person Plural Imperfect Active of curro; patre is 3rd declension.",
    grammarFocus: "Cullen Book 1 (Ch 4 & 5): Imperfect Tense & 3rd Declension pater",
    tokens: [
      tok("liberi", "children", "Nominative Plural (Subject)"),
      tok("cum", "with", "Preposition (+ ablative)"),
      tok("patre", "father", "Ablative Singular 3rd Declension"),
      tok("per", "through / along", "Preposition (+ accusative)"),
      tok("vias", "streets / roads", "Accusative Plural"),
      tok("currebant", "were running", "3rd Pers Plur Imperfect Active Verb")
    ]
  },
  {
    latin: "imperator clarus omnes legiones laudaverat.",
    primaryTranslation: "The famous emperor had praised all the legions.",
    acceptedTranslations: [
      "the famous emperor had praised all the legions",
      "the famous commander had praised all the legions",
      "a famous emperor had praised all legions"
    ],
    tenseHint: "laudaverat is 3rd Person Singular Pluperfect Active of laudo ('had praised').",
    grammarFocus: "Cullen Book 1 (Ch 6): Pluperfect Active Tense (-erat)",
    tokens: [
      tok("imperator", "emperor / general", "Nominative Singular 3rd Declension (Subject)"),
      tok("clarus", "famous / clear", "Nominative Singular Masculine Adjective"),
      tok("omnes", "all", "Accusative Plural 3rd Declension Adjective"),
      tok("legiones", "legions", "Accusative Plural 3rd Declension"),
      tok("laudaverat", "had praised", "3rd Pers Sing Pluperfect Active Verb")
    ]
  },
  {
    latin: "equi celeres trans flumen latum natabant.",
    primaryTranslation: "The fast horses were swimming across the wide river.",
    acceptedTranslations: [
      "the fast horses were swimming across the wide river",
      "the swift horses swam across the wide river",
      "the fast horses were swimming across a wide river"
    ],
    tenseHint: "natabant is 3rd Person Plural Imperfect Active; flumen is 3rd declension neuter.",
    grammarFocus: "Cullen Book 1 (Ch 4, 5 & 6): 3rd Declension Neuter flumen & celer",
    tokens: [
      tok("equi", "horses", "Nominative Plural (Subject)"),
      tok("celeres", "fast / swift", "Nominative Plural 3rd Declension Adjective"),
      tok("trans", "across", "Preposition (+ accusative)"),
      tok("flumen", "river", "Accusative Singular 3rd Declension Neuter"),
      tok("latum", "wide / broad", "Accusative Singular Neuter Adjective"),
      tok("natabant", "were swimming", "3rd Pers Plur Imperfect Active Verb")
    ]
  },
  {
    latin: "hostes castra Romana noctu oppugnaverunt.",
    primaryTranslation: "The enemies attacked the Roman camp at night.",
    acceptedTranslations: [
      "the enemies attacked the Roman camp at night",
      "the enemy attacked the Roman camp at night",
      "enemies attacked the Roman camp by night"
    ],
    tenseHint: "oppugnaverunt is 3rd Person Plural Perfect Active; noctu is ablative of time.",
    grammarFocus: "Cullen Book 1 (Ch 4 & 5): Perfect Active (-erunt) & Time Expression",
    tokens: [
      tok("hostes", "enemies / enemy", "Nominative Plural 3rd Declension (Subject)"),
      tok("castra", "camp", "Accusative Plural Neuter (Direct Object)"),
      tok("Romana", "Roman", "Accusative Plural Neuter Adjective"),
      tok("noctu", "at night / by night", "Ablative of Time"),
      tok("oppugnaverunt", "attacked", "3rd Pers Plur Perfect Active Verb")
    ]
  },
  {
    latin: "custodes pro portis urbis stabant.",
    primaryTranslation: "The guards were standing in front of the city gates.",
    acceptedTranslations: [
      "the guards were standing in front of the city gates",
      "the guards stood in front of the city gates",
      "guards were standing before the city gates"
    ],
    tenseHint: "stabant is 3rd Person Plural Imperfect Active of sto; custodes and urbis are 3rd declension.",
    grammarFocus: "Cullen Book 1 (Ch 4 & 5): Imperfect stabant & 3rd Declension custos",
    tokens: [
      tok("custodes", "guards", "Nominative Plural 3rd Declension (Subject)"),
      tok("pro", "in front of / before", "Preposition (+ ablative)"),
      tok("portis", "gates", "Ablative Plural"),
      tok("urbis", "of the city", "Genitive Singular 3rd Declension"),
      tok("stabant", "were standing", "3rd Pers Plur Imperfect Active Verb")
    ]
  },
  {
    latin: "mercator pecuniam multam in foro quaerebat.",
    primaryTranslation: "The merchant was looking for much money in the forum.",
    acceptedTranslations: [
      "the merchant was looking for much money in the forum",
      "the merchant was searching for a lot of money in the forum",
      "the merchant searched for much money in the forum"
    ],
    tenseHint: "quaerebat is 3rd Person Singular Imperfect Active; mercator is 3rd declension.",
    grammarFocus: "Cullen Book 1 (Ch 4 & 5): 3rd Declension mercator & Imperfect",
    tokens: [
      tok("mercator", "merchant", "Nominative Singular 3rd Declension (Subject)"),
      tok("pecuniam", "money", "Accusative Singular (Direct Object)"),
      tok("multam", "much / a lot of", "Accusative Singular Feminine Adjective"),
      tok("in", "in", "Preposition (+ ablative)"),
      tok("foro", "forum / marketplace", "Ablative Singular"),
      tok("quaerebat", "was looking for / was searching for", "3rd Pers Sing Imperfect Active Verb")
    ]
  },
  {
    latin: "pater filio gladium carum ostendit.",
    primaryTranslation: "The father showed a dear sword to his son.",
    acceptedTranslations: [
      "the father showed a dear sword to his son",
      "the father showed his dear sword to his son",
      "a father showed a dear sword to his son"
    ],
    tenseHint: "ostendit is 3rd Person Singular Perfect Active of ostendo ('showed').",
    grammarFocus: "Cullen Book 1 (Ch 4 & 5): 3rd Declension pater & Dative filio",
    tokens: [
      tok("pater", "father", "Nominative Singular 3rd Declension (Subject)"),
      tok("filio", "to the son", "Dative Singular (Indirect Object)"),
      tok("gladium", "sword", "Accusative Singular (Direct Object)"),
      tok("carum", "dear / precious", "Accusative Singular Masculine Adjective"),
      tok("ostendit", "showed", "3rd Pers Sing Perfect Active Verb")
    ]
  },
  {
    latin: "naves celeres trans altum mare navigant.",
    primaryTranslation: "The swift ships are sailing across the deep sea.",
    acceptedTranslations: [
      "the swift ships are sailing across the deep sea",
      "the fast ships sail across the deep sea",
      "swift ships sail across the deep sea"
    ],
    tenseHint: "navigant is 3rd Person Plural Present Active; naves and mare are 3rd declension.",
    grammarFocus: "Cullen Book 1 (Ch 5 & 6): 3rd Declension Neuter mare & celer",
    tokens: [
      tok("naves", "ships", "Nominative Plural 3rd Declension (Subject)"),
      tok("celeres", "swift / fast", "Nominative Plural 3rd Declension Adjective"),
      tok("trans", "across", "Preposition (+ accusative)"),
      tok("altum", "deep / high", "Accusative Singular Neuter Adjective"),
      tok("mare", "sea", "Accusative Singular 3rd Declension Neuter"),
      tok("navigant", "sail / are sailing", "3rd Pers Plur Present Active Verb")
    ]
  },
  {
    latin: "magister pueros pigros in ludo punivit.",
    primaryTranslation: "The teacher punished the lazy boys in school.",
    acceptedTranslations: [
      "the teacher punished the lazy boys in school",
      "the schoolmaster punished lazy boys in school",
      "a teacher punished lazy boys in the school"
    ],
    tenseHint: "punivit is 3rd Person Singular Perfect Active of punio ('punished').",
    grammarFocus: "Cullen Book 1 (Ch 4): 4th Conjugation Perfect (-ivit)",
    tokens: [
      tok("magister", "teacher / master", "Nominative Singular 2nd Declension (Subject)"),
      tok("pueros", "boys", "Accusative Plural (Direct Object)"),
      tok("pigros", "lazy", "Accusative Plural Masculine Adjective"),
      tok("in", "in", "Preposition (+ ablative)"),
      tok("ludo", "school / game", "Ablative Singular"),
      tok("punivit", "punished", "3rd Pers Sing Perfect Active Verb")
    ]
  },
  {
    latin: "civis Romanus libertatem semper amat.",
    primaryTranslation: "A Roman citizen always loves freedom.",
    acceptedTranslations: [
      "a Roman citizen always loves freedom",
      "the Roman citizen always loves freedom",
      "Roman citizens always love liberty"
    ],
    tenseHint: "amat is 3rd Person Singular Present Active; civis and libertatem are 3rd declension.",
    grammarFocus: "Cullen Book 1 (Ch 5): 3rd Declension Nouns civis & libertas",
    tokens: [
      tok("civis", "citizen", "Nominative Singular 3rd Declension (Subject)"),
      tok("Romanus", "Roman", "Nominative Singular Masculine Adjective"),
      tok("libertatem", "freedom / liberty", "Accusative Singular 3rd Declension"),
      tok("semper", "always", "Adverb"),
      tok("amat", "loves", "3rd Pers Sing Present Active Verb")
    ]
  },
  {
    latin: "canis ferox furem improbum petivit.",
    primaryTranslation: "The fierce dog attacked the wicked thief.",
    acceptedTranslations: [
      "the fierce dog attacked the wicked thief",
      "a fierce dog attacked the wicked thief",
      "the fierce dog attacked a wicked thief"
    ],
    tenseHint: "petivit is 3rd Person Singular Perfect Active of peto ('attacked' or 'sought').",
    grammarFocus: "Cullen Book 1 (Ch 4, 5 & 6): 3rd Declension Adjective ferox & Perfect",
    tokens: [
      tok("canis", "dog", "Nominative Singular 3rd Declension (Subject)"),
      tok("ferox", "fierce", "Nominative Singular 3rd Declension Adjective"),
      tok("furem", "thief", "Accusative Singular 3rd Declension"),
      tok("improbum", "wicked / dishonest", "Accusative Singular Masculine Adjective"),
      tok("petivit", "attacked / made for", "3rd Pers Sing Perfect Active Verb")
    ]
  },
  {
    latin: "omnes feminae de periculis nuntiabant.",
    primaryTranslation: "All the women were telling about the dangers.",
    acceptedTranslations: [
      "all the women were telling about the dangers",
      "all the women warned about the dangers",
      "all women were reporting about the dangers"
    ],
    tenseHint: "nuntiabant is 3rd Person Plural Imperfect Active; omnes is 3rd declension adjective.",
    grammarFocus: "Cullen Book 1 (Ch 4 & 6): 3rd Declension omnis & Imperfect",
    tokens: [
      tok("omnes", "all", "Nominative Plural 3rd Declension Adjective"),
      tok("feminae", "women", "Nominative Plural (Subject)"),
      tok("de", "about / concerning", "Preposition (+ ablative)"),
      tok("periculis", "dangers", "Ablative Plural Neuter"),
      tok("nuntiabant", "were reporting / were telling", "3rd Pers Plur Imperfect Active Verb")
    ]
  },
  {
    latin: "milites gladiis hastisque pugnaverunt.",
    primaryTranslation: "The soldiers fought with swords and spears.",
    acceptedTranslations: [
      "the soldiers fought with swords and spears",
      "the soldiers fought with swords and with spears",
      "soldiers fought using swords and spears"
    ],
    tenseHint: "pugnaverunt is 3rd Person Plural Perfect Active; -que enclitic attaches 'and'.",
    grammarFocus: "Cullen Book 1 (Ch 4 & 5): Enclitic -que & Ablative of Instrument",
    tokens: [
      tok("milites", "soldiers", "Nominative Plural 3rd Declension (Subject)"),
      tok("gladiis", "with swords", "Ablative Plural (Instrument)"),
      tok("hastisque", "and with spears", "Ablative Plural + Enclitic -que ('and')"),
      tok("pugnaverunt", "fought", "3rd Pers Plur Perfect Active Verb")
    ]
  },
  {
    latin: "iuvenis fortis patrem e flammis servavit.",
    primaryTranslation: "The brave young man saved his father from the flames.",
    acceptedTranslations: [
      "the brave young man saved his father from the flames",
      "the brave youth saved his father from the flames",
      "a brave young man saved his father from flames"
    ],
    tenseHint: "servavit is 3rd Person Singular Perfect Active; iuvenis and fortis are 3rd declension.",
    grammarFocus: "Cullen Book 1 (Ch 4, 5 & 6): 3rd Declension iuvenis & fortis",
    tokens: [
      tok("iuvenis", "young man", "Nominative Singular 3rd Declension (Subject)"),
      tok("fortis", "brave", "Nominative Singular 3rd Declension Adjective"),
      tok("patrem", "father", "Accusative Singular 3rd Declension (Direct Object)"),
      tok("e", "out of / from", "Preposition (+ ablative)"),
      tok("flammis", "flames", "Ablative Plural"),
      tok("servavit", "saved / rescued", "3rd Pers Sing Perfect Active Verb")
    ]
  },
  {
    latin: "imperator victoriam magnam nuntiat.",
    primaryTranslation: "The commander announces a great victory.",
    acceptedTranslations: [
      "the commander announces a great victory",
      "the emperor is announcing a great victory",
      "the general announces a great victory"
    ],
    tenseHint: "nuntiat is 3rd Person Singular Present Active; imperator is 3rd declension.",
    grammarFocus: "Cullen Book 1 (Ch 5): 3rd Declension Noun imperator",
    tokens: [
      tok("imperator", "commander / emperor", "Nominative Singular 3rd Declension (Subject)"),
      tok("victoriam", "victory", "Accusative Singular (Direct Object)"),
      tok("magnam", "great / large", "Accusative Singular Feminine Adjective"),
      tok("nuntiat", "announces / reports", "3rd Pers Sing Present Active Verb")
    ]
  },
  {
    latin: "servi cibum ad triclinium portabant.",
    primaryTranslation: "The slaves were carrying food to the dining room.",
    acceptedTranslations: [
      "the slaves were carrying food to the dining room",
      "the slaves carried food to the dining room",
      "slaves were carrying food to the dining room"
    ],
    tenseHint: "portabant is 3rd Person Plural Imperfect Active ('were carrying').",
    grammarFocus: "Cullen Book 1 (Ch 4): Imperfect Active (-bant)",
    tokens: [
      tok("servi", "slaves", "Nominative Plural (Subject)"),
      tok("cibum", "food", "Accusative Singular (Direct Object)"),
      tok("ad", "to / towards", "Preposition (+ accusative)"),
      tok("triclinium", "dining room", "Accusative Singular Neuter"),
      tok("portabant", "were carrying", "3rd Pers Plur Imperfect Active Verb")
    ]
  },
  {
    latin: "discipuli libros difficiles studiose legebant.",
    primaryTranslation: "The students were eagerly reading difficult books.",
    acceptedTranslations: [
      "the students were eagerly reading difficult books",
      "the pupils read difficult books enthusiastically",
      "the students read difficult books eagerly"
    ],
    tenseHint: "legebant is 3rd Person Plural Imperfect Active; difficiles is 3rd declension adjective.",
    grammarFocus: "Cullen Book 1 (Ch 4 & 6): 3rd Declension difficilis & Adverb studiose",
    tokens: [
      tok("discipuli", "students / pupils", "Nominative Plural (Subject)"),
      tok("libros", "books", "Accusative Plural (Direct Object)"),
      tok("difficiles", "difficult", "Accusative Plural 3rd Declension Adjective"),
      tok("studiose", "eagerly / enthusiastically", "Adverb"),
      tok("legebant", "were reading", "3rd Pers Plur Imperfect Active Verb")
    ]
  },
  {
    latin: "hostis saevus captivos interficere voluit.",
    primaryTranslation: "The savage enemy wanted to kill the captives.",
    acceptedTranslations: [
      "the savage enemy wanted to kill the captives",
      "the cruel enemy wanted to kill the prisoners",
      "the savage enemy wished to kill the captives"
    ],
    tenseHint: "voluit is 3rd Person Singular Perfect of irregular verb volo with infinitive interficere.",
    grammarFocus: "Cullen Book 1 (Ch 5): Irregular Verb volo & Complementary Infinitive",
    tokens: [
      tok("hostis", "enemy", "Nominative Singular 3rd Declension (Subject)"),
      tok("saevus", "savage / cruel", "Nominative Singular Masculine Adjective"),
      tok("captivos", "captives / prisoners", "Accusative Plural (Direct Object)"),
      tok("interficere", "to kill", "Present Active Infinitive"),
      tok("voluit", "wanted / wished", "3rd Pers Sing Perfect Active Verb")
    ]
  },
  {
    latin: "puer parvus canem fidelem vocavit.",
    primaryTranslation: "The small boy called the faithful dog.",
    acceptedTranslations: [
      "the small boy called the faithful dog",
      "the little boy summoned the faithful dog",
      "a small boy called a faithful dog"
    ],
    tenseHint: "vocavit is 3rd Person Singular Perfect Active; canem and fidelem are 3rd declension.",
    grammarFocus: "Cullen Book 1 (Ch 4 & 6): 3rd Declension fidelis & Perfect vocavit",
    tokens: [
      tok("puer", "boy", "Nominative Singular (Subject)"),
      tok("parvus", "small / little", "Nominative Singular Masculine Adjective"),
      tok("canem", "dog", "Accusative Singular 3rd Declension"),
      tok("fidelem", "faithful", "Accusative Singular 3rd Declension Adjective"),
      tok("vocavit", "called / summoned", "3rd Pers Sing Perfect Active Verb")
    ]
  },
  {
    latin: "equites per campum celeriter processerunt.",
    primaryTranslation: "The horsemen advanced quickly through the plain.",
    acceptedTranslations: [
      "the horsemen advanced quickly through the plain",
      "the cavalry advanced quickly across the plain",
      "the horsemen proceeded swiftly through the plain"
    ],
    tenseHint: "processerunt is 3rd Person Plural Perfect Active; celeriter is adverb.",
    grammarFocus: "Cullen Book 1 (Ch 4, 5 & 6): 3rd Declension equites & Adverb celeriter",
    tokens: [
      tok("equites", "horsemen / cavalry", "Nominative Plural 3rd Declension (Subject)"),
      tok("per", "through / across", "Preposition (+ accusative)"),
      tok("campum", "plain / field", "Accusative Singular"),
      tok("celeriter", "quickly / swiftly", "Adverb"),
      tok("processerunt", "advanced / proceeded", "3rd Pers Plur Perfect Active Verb")
    ]
  },
  {
    latin: "milites pontem trans flumen aedificabant.",
    primaryTranslation: "The soldiers were building a bridge across the river.",
    acceptedTranslations: [
      "the soldiers were building a bridge across the river",
      "the soldiers built a bridge across the river",
      "soldiers were building a bridge across a river"
    ],
    tenseHint: "aedificabant is 3rd Person Plural Imperfect Active; pontem and flumen are 3rd declension.",
    grammarFocus: "Cullen Book 1 (Ch 4 & 5): 3rd Declension pons & flumen",
    tokens: [
      tok("milites", "soldiers", "Nominative Plural 3rd Declension (Subject)"),
      tok("pontem", "bridge", "Accusative Singular 3rd Declension"),
      tok("trans", "across", "Preposition (+ accusative)"),
      tok("flumen", "river", "Accusative Singular 3rd Declension Neuter"),
      tok("aedificabant", "were building", "3rd Pers Plur Imperfect Active Verb")
    ]
  },
  {
    latin: "dux milites ad montem altum duxit.",
    primaryTranslation: "The leader led the soldiers to the high mountain.",
    acceptedTranslations: [
      "the leader led the soldiers to the high mountain",
      "the general led the soldiers to the high mountain",
      "a leader led soldiers to a high mountain"
    ],
    tenseHint: "duxit is 3rd Person Singular Perfect Active; dux, milites, and montem are 3rd declension.",
    grammarFocus: "Cullen Book 1 (Ch 4 & 5): 3rd Declension mons & Perfect duxit",
    tokens: [
      tok("dux", "leader / general", "Nominative Singular 3rd Declension (Subject)"),
      tok("milites", "soldiers", "Accusative Plural 3rd Declension"),
      tok("ad", "to / towards", "Preposition (+ accusative)"),
      tok("montem", "mountain", "Accusative Singular 3rd Declension"),
      tok("altum", "high / tall", "Accusative Singular Masculine Adjective"),
      tok("duxit", "led", "3rd Pers Sing Perfect Active Verb")
    ]
  },
  {
    latin: "pueri laeti in undis maris ludebant.",
    primaryTranslation: "The happy boys were playing in the waves of the sea.",
    acceptedTranslations: [
      "the happy boys were playing in the waves of the sea",
      "happy boys played in the waves of the sea",
      "the happy boys were playing in the sea waves"
    ],
    tenseHint: "ludebant is 3rd Person Plural Imperfect Active of ludo; maris is 3rd declension genitive.",
    grammarFocus: "Cullen Book 1 (Ch 4 & 5): Imperfect Tense & 3rd Declension mare",
    tokens: [
      tok("pueri", "boys", "Nominative Plural (Subject)"),
      tok("laeti", "happy", "Nominative Plural Masculine Adjective"),
      tok("in", "in", "Preposition (+ ablative)"),
      tok("undis", "waves", "Ablative Plural"),
      tok("maris", "of the sea", "Genitive Singular 3rd Declension Neuter"),
      tok("ludebant", "were playing", "3rd Pers Plur Imperfect Active Verb")
    ]
  },
  {
    latin: "servus fidelis dominum a periculis defendit.",
    primaryTranslation: "The faithful slave defended his master from dangers.",
    acceptedTranslations: [
      "the faithful slave defended his master from dangers",
      "the faithful slave protects his master from dangers",
      "a faithful slave defended his master from danger"
    ],
    tenseHint: "defendit is 3rd Person Singular Perfect/Present Active of defendo.",
    grammarFocus: "Cullen Book 1 (Ch 6): 3rd Declension Adjective fidelis & a/ab (+ abl)",
    tokens: [
      tok("servus", "slave", "Nominative Singular (Subject)"),
      tok("fidelis", "faithful / loyal", "Nominative Singular 3rd Declension Adjective"),
      tok("dominum", "master", "Accusative Singular (Direct Object)"),
      tok("a", "from", "Preposition (+ ablative)"),
      tok("periculis", "dangers", "Ablative Plural Neuter"),
      tok("defendit", "defended / protects", "3rd Pers Sing Active Verb")
    ]
  },
  {
    latin: "nautae navem novam in litore paraverunt.",
    primaryTranslation: "The sailors prepared the new ship on the shore.",
    acceptedTranslations: [
      "the sailors prepared the new ship on the shore",
      "sailors prepared a new ship on the shore",
      "the sailors readied the new ship on the shore"
    ],
    tenseHint: "paraverunt is 3rd Person Plural Perfect Active of paro; navem and litore are 3rd declension.",
    grammarFocus: "Cullen Book 1 (Ch 4 & 5): Perfect Active (-erunt) & 3rd Declension navis",
    tokens: [
      tok("nautae", "sailors", "Nominative Plural (Subject)"),
      tok("navem", "ship", "Accusative Singular 3rd Declension"),
      tok("novam", "new", "Accusative Singular Feminine Adjective"),
      tok("in", "on", "Preposition (+ ablative)"),
      tok("litore", "shore", "Ablative Singular 3rd Declension Neuter"),
      tok("paraverunt", "prepared / readied", "3rd Pers Plur Perfect Active Verb")
    ]
  },
  {
    latin: "miles epistulam ad castra reliquit.",
    primaryTranslation: "The soldier left a letter at the camp.",
    acceptedTranslations: [
      "the soldier left a letter at the camp",
      "the soldier left a letter to the camp",
      "a soldier left a letter at the camp",
      "the soldier left the letter at the camp"
    ],
    tenseHint: "reliquit is 3rd Person Singular Perfect Active of 3rd conjugation relinquo ('left behind').",
    grammarFocus: "Cullen Book 1 (Ch 4 & 5): 3rd Declension miles & Perfect reliquit",
    tokens: [
      tok("miles", "soldier", "Nominative Singular 3rd Declension (Subject)"),
      tok("epistulam", "letter", "Accusative Singular (Direct Object)"),
      tok("ad", "at / to", "Preposition (+ accusative)"),
      tok("castra", "camp", "Accusative Plural Neuter"),
      tok("reliquit", "left / left behind", "3rd Pers Sing Perfect Active Verb")
    ]
  },
  {
    latin: "hostes in foro festinabant.",
    primaryTranslation: "The enemies were hurrying in the forum.",
    acceptedTranslations: [
      "the enemies were hurrying in the forum",
      "the enemy was hurrying in the forum",
      "the enemies hurried in the forum"
    ],
    tenseHint: "festinabant is 3rd Person Plural Imperfect Active of festino.",
    grammarFocus: "Cullen Book 1 (Ch 4 & 5): 3rd Declension hostes & Imperfect",
    tokens: [
      tok("hostes", "enemies / enemy", "Nominative Plural 3rd Declension (Subject)"),
      tok("in", "in", "Preposition (+ ablative)"),
      tok("foro", "forum / marketplace", "Ablative Singular"),
      tok("festinabant", "were hurrying", "3rd Pers Plur Imperfect Active Verb")
    ]
  },
  {
    latin: "puer laetus donum militibus tradidit.",
    primaryTranslation: "The happy boy handed over a gift to the soldiers.",
    acceptedTranslations: [
      "the happy boy handed over a gift to the soldiers",
      "the happy boy gave a gift to the soldiers",
      "a happy boy delivered a gift to the soldiers"
    ],
    tenseHint: "tradidit is 3rd Person Singular Perfect Active of trado; militibus is dative plural.",
    grammarFocus: "Cullen Book 1 (Ch 4 & 5): Perfect tradidit & 3rd Declension Dative",
    tokens: [
      tok("puer", "boy", "Nominative Singular (Subject)"),
      tok("laetus", "happy", "Nominative Singular Masculine Adjective"),
      tok("donum", "gift", "Accusative Singular Neuter (Direct Object)"),
      tok("militibus", "to the soldiers", "Dative Plural 3rd Declension (Indirect Object)"),
      tok("tradidit", "handed over / gave", "3rd Pers Sing Perfect Active Verb")
    ]
  },
  {
    latin: "cives e silva currebant.",
    primaryTranslation: "The citizens were running out of the forest.",
    acceptedTranslations: [
      "the citizens were running out of the forest",
      "the citizens ran out of the wood",
      "citizens were running from the wood"
    ],
    tenseHint: "currebant is 3rd Person Plural Imperfect Active; cives is 3rd declension.",
    grammarFocus: "Cullen Book 1 (Ch 4 & 5): 3rd Declension cives & Imperfect currebant",
    tokens: [
      tok("cives", "citizens", "Nominative Plural 3rd Declension (Subject)"),
      tok("e", "out of / from", "Preposition (+ ablative)"),
      tok("silva", "forest / wood", "Ablative Singular"),
      tok("currebant", "were running", "3rd Pers Plur Imperfect Active Verb")
    ]
  },
  {
    latin: "dux celer epistulam patri tradidit.",
    primaryTranslation: "The swift leader handed over a letter to his father.",
    acceptedTranslations: [
      "the swift leader handed over a letter to his father",
      "the quick general gave a letter to his father",
      "the swift leader delivered a letter to his father"
    ],
    tenseHint: "tradidit is 3rd Person Singular Perfect Active; patri is dative singular 3rd declension.",
    grammarFocus: "Cullen Book 1 (Ch 4, 5 & 6): 3rd Declension celer & Dative patri",
    tokens: [
      tok("dux", "leader / general", "Nominative Singular 3rd Declension (Subject)"),
      tok("celer", "swift / quick", "Nominative Singular 3rd Declension Adjective"),
      tok("epistulam", "letter", "Accusative Singular (Direct Object)"),
      tok("patri", "to his father", "Dative Singular 3rd Declension (Indirect Object)"),
      tok("tradidit", "handed over / delivered", "3rd Pers Sing Perfect Active Verb")
    ]
  },
  {
    latin: "milites fortiter in horto defenderunt.",
    primaryTranslation: "The soldiers defended bravely in the garden.",
    acceptedTranslations: [
      "the soldiers defended bravely in the garden",
      "the soldiers fought defensively in the garden bravely",
      "soldiers defended bravely in the garden"
    ],
    tenseHint: "defenderunt is 3rd Person Plural Perfect Active of defendo.",
    grammarFocus: "Cullen Book 1 (Ch 4, 5 & 6): Perfect Active (-erunt) & Adverb fortiter",
    tokens: [
      tok("milites", "soldiers", "Nominative Plural 3rd Declension (Subject)"),
      tok("fortiter", "bravely", "Adverb"),
      tok("in", "in", "Preposition (+ ablative)"),
      tok("horto", "garden", "Ablative Singular"),
      tok("defenderunt", "defended", "3rd Pers Plur Perfect Active Verb")
    ]
  },
  {
    latin: "pater arma in villa amavit.",
    primaryTranslation: "The father liked the weapons in the villa.",
    acceptedTranslations: [
      "the father liked the weapons in the villa",
      "the father loved the weapons in the villa",
      "a father loved weapons in the house"
    ],
    tenseHint: "amavit is 3rd Person Singular Perfect Active of amo; pater is 3rd declension.",
    grammarFocus: "Cullen Book 1 (Ch 4 & 5): 3rd Declension pater & Perfect amavit",
    tokens: [
      tok("pater", "father", "Nominative Singular 3rd Declension (Subject)"),
      tok("arma", "weapons / arms", "Accusative Plural Neuter (Direct Object)"),
      tok("in", "in", "Preposition (+ ablative)"),
      tok("villa", "villa / house", "Ablative Singular"),
      tok("amavit", "liked / loved", "3rd Pers Sing Perfect Active Verb")
    ]
  },
  {
    latin: "hostes in urbe ambulabant.",
    primaryTranslation: "The enemies were walking in the city.",
    acceptedTranslations: [
      "the enemies were walking in the city",
      "the enemy was walking in the city",
      "enemies were walking in the city"
    ],
    tenseHint: "ambulabant is 3rd Person Plural Imperfect Active; hostes and urbe are 3rd declension.",
    grammarFocus: "Cullen Book 1 (Ch 4 & 5): 3rd Declension hostis & urbs",
    tokens: [
      tok("hostes", "enemies / enemy", "Nominative Plural 3rd Declension (Subject)"),
      tok("in", "in", "Preposition (+ ablative)"),
      tok("urbe", "city", "Ablative Singular 3rd Declension"),
      tok("ambulabant", "were walking", "3rd Pers Plur Imperfect Active Verb")
    ]
  },
  {
    latin: "senex miser pecuniam amico tradidit.",
    primaryTranslation: "The wretched old man handed over money to a friend.",
    acceptedTranslations: [
      "the wretched old man handed over money to a friend",
      "the poor old man gave money to a friend",
      "the unhappy old man handed over money to his friend"
    ],
    tenseHint: "tradidit is 3rd Person Singular Perfect Active; senex is 3rd declension.",
    grammarFocus: "Cullen Book 1 (Ch 4 & 5): 3rd Declension senex & 2-1-2 miser",
    tokens: [
      tok("senex", "old man", "Nominative Singular 3rd Declension (Subject)"),
      tok("miser", "wretched / unhappy", "Nominative Singular Masculine Adjective"),
      tok("pecuniam", "money", "Accusative Singular (Direct Object)"),
      tok("amico", "to a friend", "Dative Singular (Indirect Object)"),
      tok("tradidit", "handed over / gave", "3rd Pers Sing Perfect Active Verb")
    ]
  },
  {
    latin: "cives fortiter in urbe fugerunt.",
    primaryTranslation: "The citizens fled bravely in the city.",
    acceptedTranslations: [
      "the citizens fled bravely in the city",
      "citizens fled bravely in the city",
      "the citizens ran away bravely in the city"
    ],
    tenseHint: "fugerunt is 3rd Person Plural Perfect Active of fugio ('fled').",
    grammarFocus: "Cullen Book 1 (Ch 4 & 5): 3rd Declension cives & Perfect fugerunt",
    tokens: [
      tok("cives", "citizens", "Nominative Plural 3rd Declension (Subject)"),
      tok("fortiter", "bravely", "Adverb"),
      tok("in", "in", "Preposition (+ ablative)"),
      tok("urbe", "city", "Ablative Singular 3rd Declension"),
      tok("fugerunt", "fled / ran away", "3rd Pers Plur Perfect Active Verb")
    ]
  },
  {
    latin: "dominus epistulam prope flumen reliquit.",
    primaryTranslation: "The master left a letter near the river.",
    acceptedTranslations: [
      "the master left a letter near the river",
      "a master left a letter near the river",
      "the master left the letter near the river"
    ],
    tenseHint: "reliquit is 3rd Person Singular Perfect Active; prope takes accusative flumen.",
    grammarFocus: "Cullen Book 1 (Ch 4 & 5): Preposition prope (+ acc) & Neuter flumen",
    tokens: [
      tok("dominus", "master", "Nominative Singular (Subject)"),
      tok("epistulam", "letter", "Accusative Singular (Direct Object)"),
      tok("prope", "near", "Preposition (+ accusative)"),
      tok("flumen", "river", "Accusative Singular 3rd Declension Neuter"),
      tok("reliquit", "left / left behind", "3rd Pers Sing Perfect Active Verb")
    ]
  },
  {
    latin: "imperator bonus praemium militibus tradidit.",
    primaryTranslation: "The good emperor handed over a reward to the soldiers.",
    acceptedTranslations: [
      "the good emperor handed over a reward to the soldiers",
      "the good general gave a reward to the soldiers",
      "a good emperor handed over a prize to the soldiers"
    ],
    tenseHint: "tradidit is 3rd Person Singular Perfect Active; militibus is dative plural.",
    grammarFocus: "Cullen Book 1 (Ch 4 & 5): 3rd Declension imperator & Dative",
    tokens: [
      tok("imperator", "emperor / general", "Nominative Singular 3rd Declension (Subject)"),
      tok("bonus", "good", "Nominative Singular Masculine Adjective"),
      tok("praemium", "reward / prize", "Accusative Singular Neuter (Direct Object)"),
      tok("militibus", "to the soldiers", "Dative Plural 3rd Declension (Indirect Object)"),
      tok("tradidit", "handed over / gave", "3rd Pers Sing Perfect Active Verb")
    ]
  },
  {
    latin: "servi fortiter ad urbem venerunt.",
    primaryTranslation: "The slaves came bravely to the city.",
    acceptedTranslations: [
      "the slaves came bravely to the city",
      "slaves came bravely to the city",
      "the slaves bravely arrived at the city"
    ],
    tenseHint: "venerunt is 3rd Person Plural Perfect Active of venio ('came').",
    grammarFocus: "Cullen Book 1 (Ch 4 & 5): 4th Conjugation Perfect venerunt & urbs",
    tokens: [
      tok("servi", "slaves", "Nominative Plural (Subject)"),
      tok("fortiter", "bravely", "Adverb"),
      tok("ad", "to / towards", "Preposition (+ accusative)"),
      tok("urbem", "city", "Accusative Singular 3rd Declension"),
      tok("venerunt", "came / arrived", "3rd Pers Plur Perfect Active Verb")
    ]
  },
  {
    latin: "hostes prope portam currebant.",
    primaryTranslation: "The enemies were running near the gate.",
    acceptedTranslations: [
      "the enemies were running near the gate",
      "the enemy was running near the gate",
      "enemies ran near the gate"
    ],
    tenseHint: "currebant is 3rd Person Plural Imperfect Active of curro.",
    grammarFocus: "Cullen Book 1 (Ch 4 & 5): Imperfect Active currebant & hostes",
    tokens: [
      tok("hostes", "enemies / enemy", "Nominative Plural 3rd Declension (Subject)"),
      tok("prope", "near", "Preposition (+ accusative)"),
      tok("portam", "gate", "Accusative Singular"),
      tok("currebant", "were running", "3rd Pers Plur Imperfect Active Verb")
    ]
  },
  {
    latin: "dux magnus librum amico tradidit.",
    primaryTranslation: "The great leader handed over a book to a friend.",
    acceptedTranslations: [
      "the great leader handed over a book to a friend",
      "the great general gave a book to a friend",
      "a great leader handed over a book to his friend"
    ],
    tenseHint: "tradidit is 3rd Person Singular Perfect Active; dux is 3rd declension.",
    grammarFocus: "Cullen Book 1 (Ch 4 & 5): 3rd Declension dux & 2nd Declension liber",
    tokens: [
      tok("dux", "leader / general", "Nominative Singular 3rd Declension (Subject)"),
      tok("magnus", "great / big", "Nominative Singular Masculine Adjective"),
      tok("librum", "book", "Accusative Singular (Direct Object)"),
      tok("amico", "to a friend", "Dative Singular (Indirect Object)"),
      tok("tradidit", "handed over / gave", "3rd Pers Sing Perfect Active Verb")
    ]
  }
];

// 3. Hard sentences: 42 sentences
const hardList = [
  {
    latin: "mater benigna liberos caros amplexa est.",
    primaryTranslation: "The kind mother embraced her dear children.",
    acceptedTranslations: [
      "the kind mother embraced her dear children",
      "a kind mother embraced her dear children",
      "the kind mother hugged her dear children"
    ],
    tenseHint: "amplexa est is 3rd Person Singular Perfect of deponent verb amplector (NOT in Book 1).",
    grammarFocus: "Beyond Book 1: Deponent Verb (amplexor)",
    tokens: [
      tok("mater", "mother", "Nominative Singular 3rd Declension (Subject)"),
      tok("benigna", "kind", "Nominative Singular Feminine Adjective"),
      tok("liberos", "children", "Accusative Plural (Direct Object)"),
      tok("caros", "dear", "Accusative Plural Masculine Adjective"),
      tok("amplexa est", "embraced / hugged", "3rd Pers Sing Perfect Deponent Verb")
    ]
  },
  {
    latin: "hostes victi pacem a senatu petiverunt.",
    primaryTranslation: "The defeated enemies sought peace from the senate.",
    acceptedTranslations: [
      "the defeated enemies sought peace from the senate",
      "the defeated enemy sought peace from the senate",
      "having been defeated the enemies sought peace from the senate"
    ],
    tenseHint: "victi is Perfect Passive Participle (vinco); senatu is 4th Declension ablative (NOT in Book 1).",
    grammarFocus: "Beyond Book 1: Perfect Passive Participle & 4th Declension",
    tokens: [
      tok("hostes", "enemies / enemy", "Nominative Plural 3rd Declension (Subject)"),
      tok("victi", "defeated / conquered", "Nominative Plural Perfect Passive Participle"),
      tok("pacem", "peace", "Accusative Singular 3rd Declension (Direct Object)"),
      tok("a", "from", "Preposition (+ ablative)"),
      tok("senatu", "senate", "Ablative Singular 4th Declension"),
      tok("petiverunt", "sought / begged for", "3rd Pers Plur Perfect Active Verb")
    ]
  },
  {
    latin: "centurio audax primus murum ascendit.",
    primaryTranslation: "The bold centurion climbed the wall first.",
    acceptedTranslations: [
      "the bold centurion climbed the wall first",
      "the daring centurion was the first to climb the wall",
      "a bold centurion climbed the wall first"
    ],
    tenseHint: "centurio (centurion) and ascendo (climb) are OCR Book 2 military terms not in Book 1.",
    grammarFocus: "Beyond Book 1: Non-Book 1 OCR Vocabulary (centurio)",
    tokens: [
      tok("centurio", "centurion", "Nominative Singular 3rd Declension (Subject)"),
      tok("audax", "bold / daring", "Nominative Singular 3rd Declension Adjective"),
      tok("primus", "first", "Nominative Singular Masculine Adjective"),
      tok("murum", "wall", "Accusative Singular (Direct Object)"),
      tok("ascendit", "climbed / ascended", "3rd Pers Sing Perfect Active Verb")
    ]
  },
  {
    latin: "feminae orationem sacerdotis attente audiebant.",
    primaryTranslation: "The women were listening attentively to the priest's speech.",
    acceptedTranslations: [
      "the women were listening attentively to the priest's speech",
      "the women listened attentively to the speech of the priest",
      "women were listening attentively to the priest's speech"
    ],
    tenseHint: "oratio (speech) and sacerdos (priest) are OCR Book 2 civic/religious vocabulary.",
    grammarFocus: "Beyond Book 1: Non-Book 1 OCR Vocabulary (oratio & sacerdos)",
    tokens: [
      tok("feminae", "women", "Nominative Plural (Subject)"),
      tok("orationem", "speech", "Accusative Singular 3rd Declension (Direct Object)"),
      tok("sacerdotis", "of the priest", "Genitive Singular 3rd Declension"),
      tok("attente", "attentively", "Adverb"),
      tok("audiebant", "were listening to / were hearing", "3rd Pers Plur Imperfect Active Verb")
    ]
  },
  {
    latin: "senatores consilium prudentissimum ceperunt.",
    primaryTranslation: "The senators made a very wise plan.",
    acceptedTranslations: [
      "the senators made a very wise plan",
      "the senators adopted a very sensible plan",
      "senators made a most wise plan"
    ],
    tenseHint: "prudentissimum is superlative degree adjective; consilium capere is advanced idiom.",
    grammarFocus: "Beyond Book 1: Superlative Degree & Advanced Idiom",
    tokens: [
      tok("senatores", "senators", "Nominative Plural 3rd Declension (Subject)"),
      tok("consilium", "plan", "Accusative Singular Neuter (Direct Object)"),
      tok("prudentissimum", "very wise / most sensible", "Accusative Singular Neuter Superlative"),
      tok("ceperunt", "made / took", "3rd Pers Plur Perfect Active Verb")
    ]
  },
  {
    latin: "captivus miser e carcere effugere temptabat.",
    primaryTranslation: "The wretched prisoner was trying to escape from the prison.",
    acceptedTranslations: [
      "the wretched prisoner was trying to escape from the prison",
      "the miserable captive was trying to escape from prison",
      "the wretched prisoner tried to escape from the prison"
    ],
    tenseHint: "carcer (prison) is Book 2 legal vocabulary not taught in Book 1.",
    grammarFocus: "Beyond Book 1: Non-Book 1 Vocabulary (carcer)",
    tokens: [
      tok("captivus", "prisoner / captive", "Nominative Singular (Subject)"),
      tok("miser", "wretched / miserable", "Nominative Singular Masculine Adjective"),
      tok("e", "out of / from", "Preposition (+ ablative)"),
      tok("carcere", "prison", "Ablative Singular 3rd Declension"),
      tok("effugere", "to escape", "Present Active Infinitive"),
      tok("temptabat", "was trying / attempted", "3rd Pers Sing Imperfect Active Verb")
    ]
  },
  {
    latin: "agricolae frumentum in horreo condiderunt.",
    primaryTranslation: "The farmers stored grain in the granary.",
    acceptedTranslations: [
      "the farmers stored grain in the granary",
      "the farmers stored corn in the granary",
      "farmers put away grain in the granary"
    ],
    tenseHint: "horreum (granary) and condo/condiderunt (store/found) are Book 2 vocabulary.",
    grammarFocus: "Beyond Book 1: Non-Book 1 OCR Vocabulary (condo & horreum)",
    tokens: [
      tok("agricolae", "farmers", "Nominative Plural (Subject)"),
      tok("frumentum", "grain / corn", "Accusative Singular Neuter (Direct Object)"),
      tok("in", "in", "Preposition (+ ablative)"),
      tok("horreo", "granary", "Ablative Singular 2nd Declension"),
      tok("condiderunt", "stored / hid away", "3rd Pers Plur Perfect Active Verb")
    ]
  },
  {
    latin: "ancilla poculum vini domino offerebat.",
    primaryTranslation: "The slave-girl was offering a cup of wine to the master.",
    acceptedTranslations: [
      "the slave-girl was offering a cup of wine to the master",
      "the maidservant offered a cup of wine to the master",
      "the slave-girl was offering a goblet of wine to her master"
    ],
    tenseHint: "offero (offer) is irregular compound verb and poculum is Book 2 vocabulary.",
    grammarFocus: "Beyond Book 1: Irregular Compound Verb offero",
    tokens: [
      tok("ancilla", "slave-girl / maidservant", "Nominative Singular (Subject)"),
      tok("poculum", "cup / goblet", "Accusative Singular Neuter (Direct Object)"),
      tok("vini", "of wine", "Genitive Singular Neuter"),
      tok("domino", "to the master", "Dative Singular (Indirect Object)"),
      tok("offerebat", "was offering", "3rd Pers Sing Imperfect Active Verb")
    ]
  },
  {
    latin: "pastor oves in colle custodiebat.",
    primaryTranslation: "The shepherd was guarding the sheep on the hill.",
    acceptedTranslations: [
      "the shepherd was guarding the sheep on the hill",
      "the shepherd guarded the sheep on the hill",
      "a shepherd was watching sheep on a hill"
    ],
    tenseHint: "pastor (shepherd), ovis (sheep), and collis (hill) are Book 2 agricultural terms.",
    grammarFocus: "Beyond Book 1: Non-Book 1 OCR Vocabulary (pastor & collis)",
    tokens: [
      tok("pastor", "shepherd", "Nominative Singular 3rd Declension (Subject)"),
      tok("oves", "sheep", "Accusative Plural 3rd Declension (Direct Object)"),
      tok("in", "on", "Preposition (+ ablative)"),
      tok("colle", "hill", "Ablative Singular 3rd Declension"),
      tok("custodiebat", "was guarding / watching", "3rd Pers Sing Imperfect Active Verb")
    ]
  },
  {
    latin: "senator togam albam in curia gerebat.",
    primaryTranslation: "The senator was wearing a white toga in the senate-house.",
    acceptedTranslations: [
      "the senator was wearing a white toga in the senate-house",
      "the senator wore a white toga in the curia",
      "a senator was wearing a white toga in the senate-house"
    ],
    tenseHint: "senator and curia (senate house) are Book 2 Roman political terms not in Book 1.",
    grammarFocus: "Beyond Book 1: Non-Book 1 OCR Vocabulary (curia & senator)",
    tokens: [
      tok("senator", "senator", "Nominative Singular 3rd Declension (Subject)"),
      tok("togam", "toga", "Accusative Singular (Direct Object)"),
      tok("albam", "white", "Accusative Singular Feminine Adjective"),
      tok("in", "in", "Preposition (+ ablative)"),
      tok("curia", "senate-house / curia", "Ablative Singular"),
      tok("gerebat", "was wearing / bore", "3rd Pers Sing Imperfect Active Verb")
    ]
  },
  {
    latin: "puellae cantum suavem in theatro canebant.",
    primaryTranslation: "The girls were singing a sweet song in the theatre.",
    acceptedTranslations: [
      "the girls were singing a sweet song in the theatre",
      "the girls sang a sweet song in the theatre",
      "girls were singing a pleasant song in the theatre"
    ],
    tenseHint: "cantus is 4th Declension noun; theatrum is Book 2 cultural vocabulary.",
    grammarFocus: "Beyond Book 1: 4th Declension Noun (cantus)",
    tokens: [
      tok("puellae", "girls", "Nominative Plural (Subject)"),
      tok("cantum", "song / singing", "Accusative Singular 4th Declension (Direct Object)"),
      tok("suavem", "sweet / pleasant", "Accusative Singular 3rd Declension Adjective"),
      tok("in", "in", "Preposition (+ ablative)"),
      tok("theatro", "theatre", "Ablative Singular 2nd Declension Neuter"),
      tok("canebant", "were singing", "3rd Pers Plur Imperfect Active Verb")
    ]
  },
  {
    latin: "dominus iratus servum stultum castigavit.",
    primaryTranslation: "The angry master punished the foolish slave.",
    acceptedTranslations: [
      "the angry master punished the foolish slave",
      "the angry master scolded the foolish slave",
      "an angry master punished a foolish slave"
    ],
    tenseHint: "castigo (rebuke/punish) is Book 2 vocabulary (distinct from Book 1 punio).",
    grammarFocus: "Beyond Book 1: Non-Book 1 OCR Vocabulary (castigo)",
    tokens: [
      tok("dominus", "master", "Nominative Singular (Subject)"),
      tok("iratus", "angry", "Nominative Singular Masculine Adjective"),
      tok("servum", "slave", "Accusative Singular (Direct Object)"),
      tok("stultum", "foolish / stupid", "Accusative Singular Masculine Adjective"),
      tok("castigavit", "punished / rebuked", "3rd Pers Sing Perfect Active Verb")
    ]
  },
  {
    latin: "agricola fessus boves ad agros ducebat.",
    primaryTranslation: "The tired farmer was leading the oxen to the fields.",
    acceptedTranslations: [
      "the tired farmer was leading the oxen to the fields",
      "the tired farmer led the oxen to the fields",
      "the weary farmer was leading cattle to the fields"
    ],
    tenseHint: "bos/boves (ox/cattle) is irregular 3rd declension noun not taught in Book 1.",
    grammarFocus: "Beyond Book 1: Irregular 3rd Declension (bos, bovis)",
    tokens: [
      tok("agricola", "farmer", "Nominative Singular 1st Declension Masculine (Subject)"),
      tok("fessus", "tired / weary", "Nominative Singular Masculine Adjective"),
      tok("boves", "oxen / cattle", "Accusative Plural Irregular 3rd Declension"),
      tok("ad", "to / towards", "Preposition (+ accusative)"),
      tok("agros", "fields", "Accusative Plural"),
      tok("ducebat", "was leading", "3rd Pers Sing Imperfect Active Verb")
    ]
  },
  {
    latin: "regina superba in aula aurea sedet.",
    primaryTranslation: "The proud queen sits in the golden palace.",
    acceptedTranslations: [
      "the proud queen sits in the golden palace",
      "the proud queen is sitting in the golden palace",
      "a proud queen sits in the golden palace"
    ],
    tenseHint: "aula (palace) and aureus are Book 2 vocabulary not introduced in Cullen Book 1.",
    grammarFocus: "Beyond Book 1: Non-Book 1 OCR Vocabulary (aula)",
    tokens: [
      tok("regina", "queen", "Nominative Singular 1st Declension (Subject)"),
      tok("superba", "proud / haughty", "Nominative Singular Feminine Adjective"),
      tok("in", "in", "Preposition (+ ablative)"),
      tok("aula", "palace", "Ablative Singular 1st Declension"),
      tok("aurea", "golden", "Ablative Singular Feminine Adjective"),
      tok("sedet", "sits / is sitting", "3rd Pers Sing Present Active Verb")
    ]
  },
  {
    latin: "ancillae villam diligenter purgabant.",
    primaryTranslation: "The slave-girls were diligently cleaning the villa.",
    acceptedTranslations: [
      "the slave-girls were diligently cleaning the villa",
      "the maidservants cleaned the villa diligently",
      "slave-girls were diligently cleaning the house"
    ],
    tenseHint: "purgo (clean/purify) is Book 2 household vocabulary not in Book 1.",
    grammarFocus: "Beyond Book 1: Non-Book 1 OCR Vocabulary (purgo)",
    tokens: [
      tok("ancillae", "slave-girls / maidservants", "Nominative Plural (Subject)"),
      tok("villam", "villa / house", "Accusative Singular (Direct Object)"),
      tok("diligenter", "diligently / carefully", "Adverb"),
      tok("purgabant", "were cleaning", "3rd Pers Plur Imperfect Active Verb")
    ]
  },
  {
    latin: "civis Romanus in foro orationem audiebat.",
    primaryTranslation: "The Roman citizen was listening to a speech in the forum.",
    acceptedTranslations: [
      "the Roman citizen was listening to a speech in the forum",
      "a Roman citizen listened to a speech in the forum",
      "the Roman citizen heard a speech in the forum"
    ],
    tenseHint: "oratio (speech) is Book 2 rhetorical vocabulary not found in Book 1.",
    grammarFocus: "Beyond Book 1: Non-Book 1 OCR Vocabulary (oratio)",
    tokens: [
      tok("civis", "citizen", "Nominative Singular 3rd Declension (Subject)"),
      tok("Romanus", "Roman", "Nominative Singular Masculine Adjective"),
      tok("in", "in", "Preposition (+ ablative)"),
      tok("foro", "forum / marketplace", "Ablative Singular"),
      tok("orationem", "speech", "Accusative Singular 3rd Declension (Direct Object)"),
      tok("audiebat", "was listening to / was hearing", "3rd Pers Sing Imperfect Active Verb")
    ]
  },
  {
    latin: "deus orationes civium laete audiebat.",
    primaryTranslation: "The god was listening gladly to the citizens' prayers.",
    acceptedTranslations: [
      "the god was listening gladly to the citizens' prayers",
      "the god gladly heard the citizens' prayers",
      "a god listened gladly to the prayers of the citizens"
    ],
    tenseHint: "oratio in religious context means 'prayers/supplications' (Book 2).",
    grammarFocus: "Beyond Book 1: Non-Book 1 Meaning & Vocabulary (oratio)",
    tokens: [
      tok("deus", "god", "Nominative Singular 2nd Declension (Subject)"),
      tok("orationes", "prayers / speeches", "Accusative Plural 3rd Declension"),
      tok("civium", "of the citizens", "Genitive Plural 3rd Declension"),
      tok("laete", "gladly / happily", "Adverb"),
      tok("audiebat", "was listening to / heard", "3rd Pers Sing Imperfect Active Verb")
    ]
  },
  {
    latin: "puer clamans per vias currebat.",
    primaryTranslation: "The shouting boy was running through the streets.",
    acceptedTranslations: [
      "the shouting boy was running through the streets",
      "the boy, shouting, was running through the streets",
      "a shouting boy ran through the streets"
    ],
    tenseHint: "clamans is Present Active Participle (-ns, -ntis), introduced in Book 2.",
    grammarFocus: "Beyond Book 1: Present Active Participle (PAP)",
    tokens: [
      tok("puer", "boy", "Nominative Singular (Subject)"),
      tok("clamans", "shouting / crying out", "Nominative Singular Present Active Participle"),
      tok("per", "through", "Preposition (+ accusative)"),
      tok("vias", "streets", "Accusative Plural"),
      tok("currebat", "was running", "3rd Pers Sing Imperfect Active Verb")
    ]
  },
  {
    latin: "milites graviter vulnerati in castris manebant.",
    primaryTranslation: "The seriously wounded soldiers were staying in the camp.",
    acceptedTranslations: [
      "the seriously wounded soldiers were staying in the camp",
      "the heavily wounded soldiers remained in the camp",
      "soldiers, seriously wounded, stayed in the camp"
    ],
    tenseHint: "vulnerati is Perfect Passive Participle (PPP), taught in Book 2.",
    grammarFocus: "Beyond Book 1: Perfect Passive Participle (PPP)",
    tokens: [
      tok("milites", "soldiers", "Nominative Plural 3rd Declension (Subject)"),
      tok("graviter", "seriously / heavily", "Adverb"),
      tok("vulnerati", "wounded", "Nominative Plural Perfect Passive Participle"),
      tok("in", "in", "Preposition (+ ablative)"),
      tok("castris", "camp", "Ablative Plural Neuter"),
      tok("manebant", "were staying / remained", "3rd Pers Plur Imperfect Active Verb")
    ]
  },
  {
    latin: "urbs a militibus Romanis fortiter defenditur.",
    primaryTranslation: "The city is bravely defended by Roman soldiers.",
    acceptedTranslations: [
      "the city is bravely defended by Roman soldiers",
      "the city is being bravely defended by Roman soldiers",
      "a city is bravely defended by Roman soldiers"
    ],
    tenseHint: "defenditur is 3rd Person Singular Present Passive (passive voice is Book 2).",
    grammarFocus: "Beyond Book 1: Passive Voice Indicative (-tur)",
    tokens: [
      tok("urbs", "city", "Nominative Singular 3rd Declension (Subject)"),
      tok("a", "by", "Preposition (+ ablative of agent)"),
      tok("militibus", "soldiers", "Ablative Plural 3rd Declension (Agent)"),
      tok("Romanis", "Roman", "Ablative Plural Adjective"),
      tok("fortiter", "bravely", "Adverb"),
      tok("defenditur", "is defended / is being defended", "3rd Pers Sing Present Passive Verb")
    ]
  },
  {
    latin: "pons novus trans flumen celeriter aedificabatur.",
    primaryTranslation: "A new bridge was quickly being built across the river.",
    acceptedTranslations: [
      "a new bridge was quickly being built across the river",
      "the new bridge was quickly being built across the river",
      "a new bridge was built quickly across the river"
    ],
    tenseHint: "aedificabatur is 3rd Person Singular Imperfect Passive (-batur), Book 2.",
    grammarFocus: "Beyond Book 1: Imperfect Passive Voice (-batur)",
    tokens: [
      tok("pons", "bridge", "Nominative Singular 3rd Declension (Subject)"),
      tok("novus", "new", "Nominative Singular Masculine Adjective"),
      tok("trans", "across", "Preposition (+ accusative)"),
      tok("flumen", "river", "Accusative Singular 3rd Declension Neuter"),
      tok("celeriter", "quickly", "Adverb"),
      tok("aedificabatur", "was being built", "3rd Pers Sing Imperfect Passive Verb")
    ]
  },
  {
    latin: "exercitus Romanus impetum fortem in barbaros fecit.",
    primaryTranslation: "The Roman army made a strong attack against the barbarians.",
    acceptedTranslations: [
      "the Roman army made a strong attack against the barbarians",
      "the Roman army launched a brave attack against the barbarians",
      "a Roman army made a strong charge on the barbarians"
    ],
    tenseHint: "exercitus and impetus are 4th Declension nouns (-us, -us), introduced in Book 2.",
    grammarFocus: "Beyond Book 1: 4th Declension Nouns (exercitus & impetus)",
    tokens: [
      tok("exercitus", "army", "Nominative Singular 4th Declension (Subject)"),
      tok("Romanus", "Roman", "Nominative Singular Masculine Adjective"),
      tok("impetum", "attack / charge", "Accusative Singular 4th Declension (Direct Object)"),
      tok("fortem", "strong / brave", "Accusative Singular 3rd Declension Adjective"),
      tok("in", "against / into", "Preposition (+ accusative)"),
      tok("barbaros", "barbarians", "Accusative Plural"),
      tok("fecit", "made", "3rd Pers Sing Perfect Active Verb")
    ]
  },
  {
    latin: "dux manum ad caelum sustulit.",
    primaryTranslation: "The leader raised his hand to the sky.",
    acceptedTranslations: [
      "the leader raised his hand to the sky",
      "the general lifted his hand to heaven",
      "the leader lifted a hand to the sky"
    ],
    tenseHint: "manus (hand) is 4th Declension; sustulit is irregular perfect of tollo (Book 2).",
    grammarFocus: "Beyond Book 1: 4th Declension manus & Irregular tollo",
    tokens: [
      tok("dux", "leader / general", "Nominative Singular 3rd Declension (Subject)"),
      tok("manum", "hand", "Accusative Singular 4th Declension (Direct Object)"),
      tok("ad", "to / towards", "Preposition (+ accusative)"),
      tok("caelum", "sky / heaven", "Accusative Singular Neuter"),
      tok("sustulit", "raised / lifted up", "3rd Pers Sing Perfect Active Verb")
    ]
  },
  {
    latin: "dies victoriae omnibus civibus gratus erat.",
    primaryTranslation: "The day of victory was pleasing to all citizens.",
    acceptedTranslations: [
      "the day of victory was pleasing to all citizens",
      "the day of victory was welcome to all citizens",
      "the day of victory was pleasing to every citizen"
    ],
    tenseHint: "dies (day) is 5th Declension noun (-es, -ei), introduced in Book 2.",
    grammarFocus: "Beyond Book 1: 5th Declension Noun (dies)",
    tokens: [
      tok("dies", "day", "Nominative Singular 5th Declension (Subject)"),
      tok("victoriae", "of victory", "Genitive Singular 1st Declension"),
      tok("omnibus", "to all", "Dative Plural 3rd Declension Adjective"),
      tok("civibus", "citizens", "Dative Plural 3rd Declension"),
      tok("gratus", "pleasing / welcome", "Nominative Singular Masculine Adjective"),
      tok("erat", "was", "3rd Pers Sing Imperfect Verb")
    ]
  },
  {
    latin: "nuntius dixit hostes appropinquare.",
    primaryTranslation: "The messenger said that the enemies were approaching.",
    acceptedTranslations: [
      "the messenger said that the enemies were approaching",
      "the messenger said that the enemy was approaching",
      "a messenger said that the enemies were approaching"
    ],
    tenseHint: "Indirect Statement with accusative hostes and infinitive appropinquare (Book 2).",
    grammarFocus: "Beyond Book 1: Indirect Statement (Acc. & Inf.)",
    tokens: [
      tok("nuntius", "messenger", "Nominative Singular (Subject)"),
      tok("dixit", "said", "3rd Pers Sing Perfect Active Verb"),
      tok("hostes", "that the enemies", "Accusative Subject of Indirect Statement"),
      tok("appropinquare", "were approaching", "Present Active Infinitive")
    ]
  },
  {
    latin: "dux scivit urbem captam esse.",
    primaryTranslation: "The leader knew that the city had been captured.",
    acceptedTranslations: [
      "the leader knew that the city had been captured",
      "the general knew that the city was captured",
      "the leader knew the city had been captured"
    ],
    tenseHint: "Indirect statement with perfect passive infinitive captam esse (Book 2).",
    grammarFocus: "Beyond Book 1: Indirect Statement with Perfect Passive Inf.",
    tokens: [
      tok("dux", "leader / general", "Nominative Singular 3rd Declension (Subject)"),
      tok("scivit", "knew", "3rd Pers Sing Perfect Active Verb"),
      tok("urbem", "that the city", "Accusative Subject of Indirect Statement"),
      tok("captam esse", "had been captured", "Perfect Passive Infinitive")
    ]
  },
  {
    latin: "milites e castris primo mane profecti sunt.",
    primaryTranslation: "The soldiers set out from the camp early in the morning.",
    acceptedTranslations: [
      "the soldiers set out from the camp early in the morning",
      "the soldiers departed from the camp early in the morning",
      "soldiers set out from camp at first light"
    ],
    tenseHint: "profecti sunt is Perfect of deponent verb proficiscor ('set out'), Book 2.",
    grammarFocus: "Beyond Book 1: Deponent Verb proficiscor",
    tokens: [
      tok("milites", "soldiers", "Nominative Plural 3rd Declension (Subject)"),
      tok("e", "out of / from", "Preposition (+ ablative)"),
      tok("castris", "camp", "Ablative Plural Neuter"),
      tok("primo", "first / early", "Ablative Singular Adjective"),
      tok("mane", "in the morning", "Adverb / Ablative of Time"),
      tok("profecti sunt", "set out / departed", "3rd Pers Plur Perfect Deponent Verb")
    ]
  },
  {
    latin: "dux verba gravia coram militibus locutus est.",
    primaryTranslation: "The leader spoke serious words before the soldiers.",
    acceptedTranslations: [
      "the leader spoke serious words before the soldiers",
      "the general spoke serious words in the presence of the soldiers",
      "the leader said weighty words before the soldiers"
    ],
    tenseHint: "locutus est is Perfect of deponent verb loquor ('spoke'), Book 2.",
    grammarFocus: "Beyond Book 1: Deponent Verb loquor",
    tokens: [
      tok("dux", "leader / general", "Nominative Singular 3rd Declension (Subject)"),
      tok("verba", "words", "Accusative Plural Neuter (Direct Object)"),
      tok("gravia", "serious / heavy", "Accusative Plural 3rd Declension Neuter Adjective"),
      tok("coram", "before / in the presence of", "Preposition (+ ablative)"),
      tok("militibus", "soldiers", "Ablative Plural 3rd Declension"),
      tok("locutus est", "spoke / said", "3rd Pers Sing Perfect Deponent Verb")
    ]
  },
  {
    latin: "ancilla dominam per vias pavidas secuta est.",
    primaryTranslation: "The slave-girl followed her mistress through the fearful streets.",
    acceptedTranslations: [
      "the slave-girl followed her mistress through the fearful streets",
      "the maidservant followed her mistress through the fearful streets",
      "the slave-girl followed the mistress through the fearful streets"
    ],
    tenseHint: "secuta est is Perfect of deponent verb sequor ('followed'), Book 2.",
    grammarFocus: "Beyond Book 1: Deponent Verb sequor",
    tokens: [
      tok("ancilla", "slave-girl / maidservant", "Nominative Singular (Subject)"),
      tok("dominam", "mistress", "Accusative Singular (Direct Object)"),
      tok("per", "through", "Preposition (+ accusative)"),
      tok("vias", "streets", "Accusative Plural"),
      tok("pavidas", "fearful / terrified", "Accusative Plural Feminine Adjective"),
      tok("secuta est", "followed", "3rd Pers Sing Perfect Deponent Verb")
    ]
  },
  {
    latin: "captivus e vinculis effugere conatus est.",
    primaryTranslation: "The prisoner tried to escape from chains.",
    acceptedTranslations: [
      "the prisoner tried to escape from chains",
      "the captive attempted to escape from chains",
      "a prisoner tried to escape from chains"
    ],
    tenseHint: "conatus est is Perfect of deponent verb conor ('tried'), Book 2.",
    grammarFocus: "Beyond Book 1: Deponent Verb conor",
    tokens: [
      tok("captivus", "prisoner / captive", "Nominative Singular (Subject)"),
      tok("e", "out of / from", "Preposition (+ ablative)"),
      tok("vinculis", "chains / bonds", "Ablative Plural"),
      tok("effugere", "to escape", "Present Active Infinitive"),
      tok("conatus est", "tried / attempted", "3rd Pers Sing Perfect Deponent Verb")
    ]
  },
  {
    latin: "femina flens filium amissum quaerebat.",
    primaryTranslation: "The weeping woman was searching for her lost son.",
    acceptedTranslations: [
      "the weeping woman was searching for her lost son",
      "the woman, weeping, was looking for her lost son",
      "a weeping woman looked for her lost son"
    ],
    tenseHint: "flens is Present Active Participle (-ns); amissum is Perfect Passive Participle (Book 2).",
    grammarFocus: "Beyond Book 1: Present Active Participle (flens)",
    tokens: [
      tok("femina", "woman", "Nominative Singular (Subject)"),
      tok("flens", "weeping / crying", "Nominative Singular Present Active Participle"),
      tok("filium", "son", "Accusative Singular (Direct Object)"),
      tok("amissum", "lost", "Accusative Singular Perfect Passive Participle"),
      tok("quaerebat", "was searching for / looking for", "3rd Pers Sing Imperfect Active Verb")
    ]
  },
  {
    latin: "epistula scripta statim ad imperatorem missa est.",
    primaryTranslation: "The written letter was immediately sent to the commander.",
    acceptedTranslations: [
      "the written letter was immediately sent to the commander",
      "having been written the letter was sent immediately to the general",
      "the written letter was sent at once to the emperor"
    ],
    tenseHint: "missa est is Perfect Passive Indicative; scripta is Perfect Passive Participle (Book 2).",
    grammarFocus: "Beyond Book 1: Perfect Passive Indicative (missa est)",
    tokens: [
      tok("epistula", "letter", "Nominative Singular (Subject)"),
      tok("scripta", "written / having been written", "Nominative Singular Feminine PPP"),
      tok("statim", "immediately / at once", "Adverb"),
      tok("ad", "to / towards", "Preposition (+ accusative)"),
      tok("imperatorem", "commander / emperor", "Accusative Singular 3rd Declension"),
      tok("missa est", "was sent", "3rd Pers Sing Perfect Passive Verb")
    ]
  },
  {
    latin: "clamor ingens in foro a civibus audiebatur.",
    primaryTranslation: "A huge shout was being heard in the forum by the citizens.",
    acceptedTranslations: [
      "a huge shout was being heard in the forum by the citizens",
      "the huge shout was heard in the forum by the citizens",
      "a huge clamour was being heard in the forum by the citizens"
    ],
    tenseHint: "audiebatur is 3rd Person Singular Imperfect Passive (-batur), Book 2.",
    grammarFocus: "Beyond Book 1: Imperfect Passive Voice (-batur)",
    tokens: [
      tok("clamor", "shout / clamour", "Nominative Singular 3rd Declension (Subject)"),
      tok("ingens", "huge", "Nominative Singular 3rd Declension Adjective"),
      tok("in", "in", "Preposition (+ ablative)"),
      tok("foro", "forum", "Ablative Singular"),
      tok("a", "by", "Preposition (+ ablative of agent)"),
      tok("civibus", "citizens", "Ablative Plural 3rd Declension (Agent)"),
      tok("audiebatur", "was being heard", "3rd Pers Sing Imperfect Passive Verb")
    ]
  },
  {
    latin: "castra Romana noctu ab hostibus oppugnabantur.",
    primaryTranslation: "The Roman camp was being attacked at night by the enemies.",
    acceptedTranslations: [
      "the Roman camp was being attacked at night by the enemies",
      "the Roman camp was attacked at night by the enemy",
      "the Roman camp was being attacked by the enemies at night"
    ],
    tenseHint: "oppugnabantur is 3rd Person Plural Imperfect Passive (-bantur), Book 2.",
    grammarFocus: "Beyond Book 1: Imperfect Passive Plural (-bantur)",
    tokens: [
      tok("castra", "camp", "Nominative Plural Neuter (Subject)"),
      tok("Romana", "Roman", "Nominative Plural Neuter Adjective"),
      tok("noctu", "at night", "Ablative of Time"),
      tok("ab", "by", "Preposition (+ ablative of agent)"),
      tok("hostibus", "enemies / enemy", "Ablative Plural 3rd Declension (Agent)"),
      tok("oppugnabantur", "were being attacked", "3rd Pers Plur Imperfect Passive Verb")
    ]
  },
  {
    latin: "nuntius ad aulam regis missus est.",
    primaryTranslation: "The messenger was sent to the palace of the king.",
    acceptedTranslations: [
      "the messenger was sent to the palace of the king",
      "a messenger was sent to the palace of the king",
      "the messenger was sent to the king's palace"
    ],
    tenseHint: "missus est is Perfect Passive Indicative; aula is Book 2 vocabulary.",
    grammarFocus: "Beyond Book 1: Perfect Passive & Non-Book 1 aula",
    tokens: [
      tok("nuntius", "messenger", "Nominative Singular (Subject)"),
      tok("ad", "to / towards", "Preposition (+ accusative)"),
      tok("aulam", "palace", "Accusative Singular 1st Declension"),
      tok("regis", "of the king", "Genitive Singular 3rd Declension"),
      tok("missus est", "was sent", "3rd Pers Sing Perfect Passive Verb")
    ]
  },
  {
    latin: "viatores in silvam obscuram ingressi sunt.",
    primaryTranslation: "The travellers entered into the dark forest.",
    acceptedTranslations: [
      "the travellers entered into the dark forest",
      "the travellers entered the dark wood",
      "travellers went into the dark forest"
    ],
    tenseHint: "ingressi sunt is Perfect of deponent verb ingredior ('entered'), Book 2.",
    grammarFocus: "Beyond Book 1: Deponent Verb ingredior",
    tokens: [
      tok("viatores", "travellers", "Nominative Plural 3rd Declension (Subject)"),
      tok("in", "into", "Preposition (+ accusative)"),
      tok("silvam", "forest / wood", "Accusative Singular"),
      tok("obscuram", "dark", "Accusative Singular Feminine Adjective"),
      tok("ingressi sunt", "entered", "3rd Pers Plur Perfect Deponent Verb")
    ]
  },
  {
    latin: "senex fessus in pace mortuus est.",
    primaryTranslation: "The tired old man died in peace.",
    acceptedTranslations: [
      "the tired old man died in peace",
      "the weary old man died in peace",
      "a tired old man died peacefully"
    ],
    tenseHint: "mortuus est is Perfect of deponent verb morior ('died'), Book 2.",
    grammarFocus: "Beyond Book 1: Deponent Verb morior",
    tokens: [
      tok("senex", "old man", "Nominative Singular 3rd Declension (Subject)"),
      tok("fessus", "tired / weary", "Nominative Singular Masculine Adjective"),
      tok("in", "in", "Preposition (+ ablative)"),
      tok("pace", "peace", "Ablative Singular 3rd Declension"),
      tok("mortuus est", "died", "3rd Pers Sing Perfect Deponent Verb")
    ]
  },
  {
    latin: "res publica periculis magnis liberata est.",
    primaryTranslation: "The republic was freed from great dangers.",
    acceptedTranslations: [
      "the republic was freed from great dangers",
      "the state was freed from great dangers",
      "the commonwealth was liberated from great dangers"
    ],
    tenseHint: "res publica contains 5th declension res; liberata est is Perfect Passive.",
    grammarFocus: "Beyond Book 1: 5th Declension res publica & Passive",
    tokens: [
      tok("res publica", "the republic / state", "Nominative Singular 5th Declension Feminine (Subject)"),
      tok("periculis", "from dangers", "Ablative Plural Neuter (Separation)"),
      tok("magnis", "great", "Ablative Plural Neuter Adjective"),
      tok("liberata est", "was freed / liberated", "3rd Pers Sing Perfect Passive Verb")
    ]
  },
  {
    latin: "credimus amicos mox venturos esse.",
    primaryTranslation: "We believe that our friends will come soon.",
    acceptedTranslations: [
      "we believe that our friends will come soon",
      "we believe that friends will come soon",
      "we believe our friends will arrive soon"
    ],
    tenseHint: "Indirect Statement with future active infinitive venturos esse (Book 2).",
    grammarFocus: "Beyond Book 1: Indirect Statement with Future Infinitive",
    tokens: [
      tok("credimus", "we believe", "1st Pers Plur Present Active Verb"),
      tok("amicos", "that our friends", "Accusative Subject of Indirect Statement"),
      tok("mox", "soon", "Adverb"),
      tok("venturos esse", "will come", "Future Active Infinitive")
    ]
  },
  {
    latin: "audivi milites fortiter pugnare.",
    primaryTranslation: "I heard that the soldiers were fighting bravely.",
    acceptedTranslations: [
      "I heard that the soldiers were fighting bravely",
      "I heard that the soldiers fought bravely",
      "I heard the soldiers were fighting bravely"
    ],
    tenseHint: "Indirect Statement with present active infinitive pugnare (Book 2).",
    grammarFocus: "Beyond Book 1: Indirect Statement (Acc. & Inf.)",
    tokens: [
      tok("audivi", "I heard", "1st Pers Sing Perfect Active Verb"),
      tok("milites", "that the soldiers", "Accusative Subject of Indirect Statement"),
      tok("fortiter", "bravely", "Adverb"),
      tok("pugnare", "were fighting", "Present Active Infinitive")
    ]
  },
  {
    latin: "omnes cives sperabant pacem mox futuram esse.",
    primaryTranslation: "All the citizens were hoping that peace would soon come.",
    acceptedTranslations: [
      "all the citizens were hoping that peace would soon come",
      "all citizens hoped that peace would be soon",
      "all the citizens were hoping that there would be peace soon"
    ],
    tenseHint: "Indirect Statement with future infinitive futuram esse (Book 2).",
    grammarFocus: "Beyond Book 1: Indirect Statement (spero + Future Inf.)",
    tokens: [
      tok("omnes", "all", "Nominative Plural 3rd Declension Adjective"),
      tok("cives", "citizens", "Nominative Plural 3rd Declension (Subject)"),
      tok("sperabant", "were hoping", "3rd Pers Plur Imperfect Active Verb"),
      tok("pacem", "that peace", "Accusative Subject of Indirect Statement"),
      tok("mox", "soon", "Adverb"),
      tok("futuram esse", "would be / would come", "Future Infinitive of sum")
    ]
  },
  {
    latin: "milites Romani fortiores quam barbari erant.",
    primaryTranslation: "The Roman soldiers were braver than the barbarians.",
    acceptedTranslations: [
      "the Roman soldiers were braver than the barbarians",
      "the Roman soldiers were more brave than the barbarians",
      "Roman soldiers were braver than the barbarians"
    ],
    tenseHint: "fortiores is Comparative Adjective (fortior, -ius) with comparison particle quam.",
    grammarFocus: "Beyond Book 1: Comparative Degree (fortior quam)",
    tokens: [
      tok("milites", "soldiers", "Nominative Plural 3rd Declension (Subject)"),
      tok("Romani", "Roman", "Nominative Plural Masculine Adjective"),
      tok("fortiores", "braver", "Nominative Plural Comparative Adjective"),
      tok("quam", "than", "Comparison Conjunction"),
      tok("barbari", "the barbarians", "Nominative Plural Masculine"),
      tok("erant", "were", "3rd Pers Plur Imperfect Verb")
    ]
  }
];

// 4. GCSE sentences: 38 sentences
const gcseList = [
  {
    latin: "milites venerunt ut urbem defenderent.",
    primaryTranslation: "The soldiers came in order to defend the city.",
    acceptedTranslations: [
      "the soldiers came in order to defend the city",
      "the soldiers came to defend the city",
      "the soldiers came that they might defend the city",
      "soldiers came to defend the city"
    ],
    tenseHint: "Purpose clause with ut + imperfect subjunctive defenderent ('in order that they might defend').",
    grammarFocus: "GCSE Syntax: Purpose Clause (ut + Subjunctive)",
    tokens: [
      tok("milites", "soldiers", "Nominative Plural 3rd Declension (Subject)"),
      tok("venerunt", "came", "3rd Pers Plur Perfect Active Verb"),
      tok("ut", "in order to / so that", "Conjunction of Purpose"),
      tok("urbem", "the city", "Accusative Singular 3rd Declension (Direct Object)"),
      tok("defenderent", "they might defend", "3rd Pers Plur Imperfect Subjunctive Active Verb")
    ]
  },
  {
    latin: "puer fugit ne a domino puniretur.",
    primaryTranslation: "The boy fled lest he be punished by his master.",
    acceptedTranslations: [
      "the boy fled lest he be punished by his master",
      "the boy ran away so that he would not be punished by his master",
      "the boy fled in order not to be punished by the master",
      "the boy ran away lest he be punished by the master"
    ],
    tenseHint: "Negative purpose clause with ne + imperfect passive subjunctive puniretur.",
    grammarFocus: "GCSE Syntax: Negative Purpose Clause (ne + Subjunctive)",
    tokens: [
      tok("puer", "boy", "Nominative Singular (Subject)"),
      tok("fugit", "fled / ran away", "3rd Pers Sing Perfect Active Verb"),
      tok("ne", "lest / so that not", "Negative Conjunction of Purpose"),
      tok("a", "by", "Preposition (+ ablative of agent)"),
      tok("domino", "master", "Ablative Singular (Agent)"),
      tok("puniretur", "he might be punished", "3rd Pers Sing Imperfect Passive Subjunctive Verb")
    ]
  },
  {
    latin: "tam fessus erat ut ambulare non posset.",
    primaryTranslation: "He was so tired that he could not walk.",
    acceptedTranslations: [
      "he was so tired that he could not walk",
      "he was so weary that he was not able to walk",
      "he was so tired that he could not walk at all"
    ],
    tenseHint: "Result clause with signpost tam + ut + imperfect subjunctive posset.",
    grammarFocus: "GCSE Syntax: Result Clause (tam... ut + Subjunctive)",
    tokens: [
      tok("tam", "so / so much", "Adverb (Signpost word for result)"),
      tok("fessus", "tired / weary", "Nominative Singular Masculine Adjective"),
      tok("erat", "he was", "3rd Pers Sing Imperfect Verb"),
      tok("ut", "that", "Conjunction of Result"),
      tok("ambulare", "to walk", "Present Active Infinitive"),
      tok("non", "not", "Adverb"),
      tok("posset", "he was able / could", "3rd Pers Sing Imperfect Subjunctive Verb")
    ]
  },
  {
    latin: "tantus erat clamor ut omnes cives terrerentur.",
    primaryTranslation: "So great was the shout that all the citizens were terrified.",
    acceptedTranslations: [
      "so great was the shout that all the citizens were terrified",
      "the shout was so great that all citizens were terrified",
      "so great was the clamour that all the citizens were frightened"
    ],
    tenseHint: "Result clause with signpost tantus + ut + imperfect passive subjunctive terrerentur.",
    grammarFocus: "GCSE Syntax: Result Clause with tantus",
    tokens: [
      tok("tantus", "so great", "Nominative Singular Masculine Adjective (Signpost)"),
      tok("erat", "was", "3rd Pers Sing Imperfect Verb"),
      tok("clamor", "shout / clamour", "Nominative Singular 3rd Declension (Subject)"),
      tok("ut", "that", "Conjunction of Result"),
      tok("omnes", "all", "Nominative Plural 3rd Declension Adjective"),
      tok("cives", "citizens", "Nominative Plural 3rd Declension"),
      tok("terrerentur", "were terrified", "3rd Pers Plur Imperfect Passive Subjunctive Verb")
    ]
  },
  {
    latin: "dux militibus imperavit ut castra custodirent.",
    primaryTranslation: "The leader ordered the soldiers to guard the camp.",
    acceptedTranslations: [
      "the leader ordered the soldiers to guard the camp",
      "the general ordered the soldiers to guard the camp",
      "the leader commanded the soldiers that they should guard the camp"
    ],
    tenseHint: "Indirect Command with impero (+ dative) + ut + imperfect subjunctive custodirent.",
    grammarFocus: "GCSE Syntax: Indirect Command (impero ut)",
    tokens: [
      tok("dux", "leader / general", "Nominative Singular 3rd Declension (Subject)"),
      tok("militibus", "to the soldiers", "Dative Plural 3rd Declension"),
      tok("imperavit", "ordered / commanded", "3rd Pers Sing Perfect Active Verb"),
      tok("ut", "that / to", "Conjunction of Indirect Command"),
      tok("castra", "camp", "Accusative Plural Neuter (Direct Object)"),
      tok("custodirent", "they should guard", "3rd Pers Plur Imperfect Subjunctive Active Verb")
    ]
  },
  {
    latin: "senex iuvenem monuit ne flumen transiret.",
    primaryTranslation: "The old man warned the young man not to cross the river.",
    acceptedTranslations: [
      "the old man warned the young man not to cross the river",
      "the old man warned the youth not to cross the river",
      "an old man warned the young man not to cross the river"
    ],
    tenseHint: "Negative indirect command / warning with moneo + ne + subjunctive transiret.",
    grammarFocus: "GCSE Syntax: Indirect Warning (moneo ne)",
    tokens: [
      tok("senex", "old man", "Nominative Singular 3rd Declension (Subject)"),
      tok("iuvenem", "young man / youth", "Accusative Singular 3rd Declension (Direct Object)"),
      tok("monuit", "warned / advised", "3rd Pers Sing Perfect Active Verb"),
      tok("ne", "not to / lest", "Negative Conjunction"),
      tok("flumen", "river", "Accusative Singular 3rd Declension Neuter"),
      tok("transiret", "he should cross", "3rd Pers Sing Imperfect Subjunctive Active Verb")
    ]
  },
  {
    latin: "imperator rogavit cur milites timuissent.",
    primaryTranslation: "The commander asked why the soldiers had been afraid.",
    acceptedTranslations: [
      "the commander asked why the soldiers had been afraid",
      "the emperor asked why the soldiers had been afraid",
      "the general asked why the soldiers had feared"
    ],
    tenseHint: "Indirect Question with question word cur + pluperfect subjunctive timuissent.",
    grammarFocus: "GCSE Syntax: Indirect Question (cur + Subjunctive)",
    tokens: [
      tok("imperator", "commander / general", "Nominative Singular 3rd Declension (Subject)"),
      tok("rogavit", "asked", "3rd Pers Sing Perfect Active Verb"),
      tok("cur", "why", "Interrogative Adverb"),
      tok("milites", "the soldiers", "Nominative Plural 3rd Declension (Subject of indirect clause)"),
      tok("timuissent", "had feared / had been afraid", "3rd Pers Plur Pluperfect Subjunctive Active Verb")
    ]
  },
  {
    latin: "dux nesciebat ubi hostes castra posuissent.",
    primaryTranslation: "The leader did not know where the enemy had pitched camp.",
    acceptedTranslations: [
      "the leader did not know where the enemy had pitched camp",
      "the general did not know where the enemy had pitched camp",
      "the leader did not know where the enemies had pitched camp"
    ],
    tenseHint: "Indirect Question introduced by ubi + pluperfect subjunctive posuissent.",
    grammarFocus: "GCSE Syntax: Indirect Question (ubi + Subjunctive)",
    tokens: [
      tok("dux", "leader / general", "Nominative Singular 3rd Declension (Subject)"),
      tok("nesciebat", "did not know", "3rd Pers Sing Imperfect Active Verb"),
      tok("ubi", "where", "Interrogative Adverb"),
      tok("hostes", "the enemies / enemy", "Nominative Plural 3rd Declension"),
      tok("castra", "camp", "Accusative Plural Neuter"),
      tok("posuissent", "had placed / pitched", "3rd Pers Plur Pluperfect Subjunctive Active Verb")
    ]
  },
  {
    latin: "cum dux signum dedisset, milites impetum fecerunt.",
    primaryTranslation: "When the leader had given the signal, the soldiers attacked.",
    acceptedTranslations: [
      "when the leader had given the signal, the soldiers attacked",
      "when the general had given the signal, the soldiers made an attack",
      "since the leader had given the signal, the soldiers charged"
    ],
    tenseHint: "Cum historical clause with pluperfect subjunctive dedisset ('when he had given').",
    grammarFocus: "GCSE Syntax: Cum Clause (Historical Subjunctive)",
    tokens: [
      tok("cum", "when / since", "Conjunction (+ subjunctive)"),
      tok("dux", "leader / general", "Nominative Singular 3rd Declension"),
      tok("signum", "signal", "Accusative Singular Neuter"),
      tok("dedisset", "had given", "3rd Pers Sing Pluperfect Subjunctive Active Verb"),
      tok("milites", "soldiers", "Nominative Plural 3rd Declension (Main Subject)"),
      tok("impetum", "attack / charge", "Accusative Singular 4th Declension"),
      tok("fecerunt", "made", "3rd Pers Plur Perfect Active Verb")
    ]
  },
  {
    latin: "cum nox appropinquaret, in villa mansimus.",
    primaryTranslation: "Since night was approaching, we stayed in the villa.",
    acceptedTranslations: [
      "since night was approaching, we stayed in the villa",
      "when night was approaching, we remained in the villa",
      "as night approached, we stayed in the house"
    ],
    tenseHint: "Cum causal/temporal clause with imperfect subjunctive appropinquaret.",
    grammarFocus: "GCSE Syntax: Cum Clause with Imperfect Subjunctive",
    tokens: [
      tok("cum", "since / as / when", "Conjunction (+ subjunctive)"),
      tok("nox", "night", "Nominative Singular 3rd Declension"),
      tok("appropinquaret", "was approaching", "3rd Pers Sing Imperfect Subjunctive Active Verb"),
      tok("in", "in", "Preposition (+ ablative)"),
      tok("villa", "villa / house", "Ablative Singular"),
      tok("mansimus", "we stayed / remained", "1st Pers Plur Perfect Active Verb")
    ]
  },
  {
    latin: "cives timebant ne urbs a barbaris deleretur.",
    primaryTranslation: "The citizens feared that the city would be destroyed by barbarians.",
    acceptedTranslations: [
      "the citizens feared that the city would be destroyed by barbarians",
      "the citizens were afraid that the city would be destroyed by barbarians",
      "citizens feared lest the city be destroyed by barbarians"
    ],
    tenseHint: "Fear clause with timeo + ne + imperfect passive subjunctive deleretur.",
    grammarFocus: "GCSE Syntax: Fear Clause (timeo ne + Subjunctive)",
    tokens: [
      tok("cives", "citizens", "Nominative Plural 3rd Declension (Subject)"),
      tok("timebant", "were afraid / feared", "3rd Pers Plur Imperfect Active Verb"),
      tok("ne", "that / lest", "Conjunction with Verbs of Fearing"),
      tok("urbs", "the city", "Nominative Singular 3rd Declension"),
      tok("a", "by", "Preposition (+ ablative of agent)"),
      tok("barbaris", "barbarians", "Ablative Plural (Agent)"),
      tok("deleretur", "would be destroyed / might be destroyed", "3rd Pers Sing Imperfect Passive Subjunctive Verb")
    ]
  },
  {
    latin: "signo dato, milites tela in hostes iecerunt.",
    primaryTranslation: "When the signal was given, the soldiers threw weapons at the enemy.",
    acceptedTranslations: [
      "when the signal was given, the soldiers threw weapons at the enemy",
      "with the signal having been given, the soldiers hurled weapons into the enemy",
      "after the signal was given, the soldiers threw weapons at the enemy"
    ],
    tenseHint: "Ablative Absolute: signo dato (noun + PPP in ablative case).",
    grammarFocus: "GCSE Syntax: Ablative Absolute (signo dato)",
    tokens: [
      tok("signo", "signal", "Ablative Singular Neuter (Ablative Absolute)"),
      tok("dato", "given / having been given", "Ablative Singular Neuter PPP (Ablative Absolute)"),
      tok("milites", "soldiers", "Nominative Plural 3rd Declension (Subject)"),
      tok("tela", "weapons / darts", "Accusative Plural Neuter (Direct Object)"),
      tok("in", "at / against", "Preposition (+ accusative)"),
      tok("hostes", "the enemies / enemy", "Accusative Plural 3rd Declension"),
      tok("iecerunt", "threw / hurled", "3rd Pers Plur Perfect Active Verb")
    ]
  },
  {
    latin: "urbe capta, multi cives e moenibus effugerunt.",
    primaryTranslation: "When the city was captured, many citizens fled from the walls.",
    acceptedTranslations: [
      "when the city was captured, many citizens fled from the walls",
      "with the city captured, many citizens fled from the walls",
      "after the city had been captured, many citizens escaped from the walls"
    ],
    tenseHint: "Ablative Absolute: urbe capta (noun + PPP in ablative case).",
    grammarFocus: "GCSE Syntax: Ablative Absolute (urbe capta)",
    tokens: [
      tok("urbe", "city", "Ablative Singular 3rd Declension (Ablative Absolute)"),
      tok("capta", "captured / taken", "Ablative Singular Feminine PPP (Ablative Absolute)"),
      tok("multi", "many", "Nominative Plural Masculine Adjective"),
      tok("cives", "citizens", "Nominative Plural 3rd Declension (Subject)"),
      tok("e", "out of / from", "Preposition (+ ablative)"),
      tok("moenibus", "walls / fortifications", "Ablative Plural 3rd Declension Neuter"),
      tok("effugerunt", "fled / escaped", "3rd Pers Plur Perfect Active Verb")
    ]
  },
  {
    latin: "hostibus tandem victis, dux laetus triumphum egit.",
    primaryTranslation: "With the enemies finally defeated, the joyful leader celebrated a triumph.",
    acceptedTranslations: [
      "with the enemies finally defeated, the joyful leader celebrated a triumph",
      "when the enemy was finally defeated, the joyful general celebrated a triumph",
      "after the enemies were at last conquered, the happy leader held a triumph"
    ],
    tenseHint: "Ablative Absolute: hostibus victis (noun + PPP in ablative case).",
    grammarFocus: "GCSE Syntax: Ablative Absolute (hostibus victis)",
    tokens: [
      tok("hostibus", "enemies / enemy", "Ablative Plural 3rd Declension (Ablative Absolute)"),
      tok("tandem", "at last / finally", "Adverb"),
      tok("victis", "defeated / conquered", "Ablative Plural PPP (Ablative Absolute)"),
      tok("dux", "leader / general", "Nominative Singular 3rd Declension (Subject)"),
      tok("laetus", "joyful / happy", "Nominative Singular Masculine Adjective"),
      tok("triumphum", "triumph", "Accusative Singular (Direct Object)"),
      tok("egit", "celebrated / led", "3rd Pers Sing Perfect Active Verb")
    ]
  },
  {
    latin: "his verbis auditis, omnes cives tacuerunt.",
    primaryTranslation: "Having heard these words, all the citizens fell silent.",
    acceptedTranslations: [
      "having heard these words, all the citizens fell silent",
      "when these words were heard, all the citizens fell silent",
      "with these words having been heard, all the citizens were silent"
    ],
    tenseHint: "Ablative Absolute: his verbis auditis (demonstrative + noun + PPP in ablative).",
    grammarFocus: "GCSE Syntax: Ablative Absolute (his verbis auditis)",
    tokens: [
      tok("his", "these", "Ablative Plural Neuter Demonstrative"),
      tok("verbis", "words", "Ablative Plural Neuter (Ablative Absolute)"),
      tok("auditis", "heard / having been heard", "Ablative Plural Neuter PPP (Ablative Absolute)"),
      tok("omnes", "all", "Nominative Plural 3rd Declension Adjective"),
      tok("cives", "citizens", "Nominative Plural 3rd Declension (Subject)"),
      tok("tacuerunt", "fell silent / were silent", "3rd Pers Plur Perfect Active Verb")
    ]
  },
  {
    latin: "nobis pro patria fortiter pugnandum est.",
    primaryTranslation: "We must fight bravely for our fatherland.",
    acceptedTranslations: [
      "we must fight bravely for our fatherland",
      "we have to fight bravely for our fatherland",
      "it is necessary for us to fight bravely for our country"
    ],
    tenseHint: "Gerundive of Obligation: pugnandum est with dative of agent nobis ('we must fight').",
    grammarFocus: "GCSE Syntax: Gerundive of Obligation (-ndum est)",
    tokens: [
      tok("nobis", "by us / for us", "Dative Plural Personal Pronoun (Dative of Agent)"),
      tok("pro", "for / on behalf of", "Preposition (+ ablative)"),
      tok("patria", "fatherland / country", "Ablative Singular 1st Declension"),
      tok("fortiter", "bravely", "Adverb"),
      tok("pugnandum est", "must be fought / we must fight", "Gerundive of Obligation Neuter + est")
    ]
  },
  {
    latin: "milites ad urbem defendendam celeriter contenderunt.",
    primaryTranslation: "The soldiers hastened quickly to defend the city.",
    acceptedTranslations: [
      "the soldiers hastened quickly to defend the city",
      "the soldiers hurried quickly to defend the city",
      "the soldiers marched swiftly to defend the city"
    ],
    tenseHint: "Gerundive of Purpose: ad + accusative gerundive construction urbem defendendam.",
    grammarFocus: "GCSE Syntax: Gerundive of Purpose (ad + Gerundive)",
    tokens: [
      tok("milites", "soldiers", "Nominative Plural 3rd Declension (Subject)"),
      tok("ad", "to / for the purpose of", "Preposition (+ accusative)"),
      tok("urbem", "city", "Accusative Singular 3rd Declension"),
      tok("defendendam", "defending / to be defended", "Accusative Singular Feminine Gerundive"),
      tok("celeriter", "quickly / swiftly", "Adverb"),
      tok("contenderunt", "hastened / marched", "3rd Pers Plur Perfect Active Verb")
    ]
  },
  {
    latin: "Caesari omnia uno tempore erant agenda.",
    primaryTranslation: "Caesar had to do everything at one time.",
    acceptedTranslations: [
      "Caesar had to do everything at one time",
      "everything had to be done by Caesar at one time",
      "all things were to be done by Caesar at one time"
    ],
    tenseHint: "Classical OCR GCSE quotation from Caesar: Gerundive of Obligation agenda erant with dative Caesari.",
    grammarFocus: "GCSE Syntax: Caesar Prescribed Gerundive (-nda erant)",
    tokens: [
      tok("Caesari", "by Caesar", "Dative Singular 3rd Declension (Dative of Agent)"),
      tok("omnia", "all things / everything", "Nominative Plural Neuter (Subject)"),
      tok("uno", "one / single", "Ablative Singular Neuter Adjective"),
      tok("tempore", "at a time", "Ablative Singular 3rd Declension Neuter (Time when)"),
      tok("erant agenda", "had to be done", "Neuter Plural Gerundive + Imperfect Verb")
    ]
  },
  {
    latin: "nuntius festinavit ut senatui victoriam nuntiaret.",
    primaryTranslation: "The messenger hurried to announce the victory to the senate.",
    acceptedTranslations: [
      "the messenger hurried to announce the victory to the senate",
      "the messenger hastened in order to report the victory to the senate",
      "a messenger hurried to announce the victory to the senate"
    ],
    tenseHint: "Purpose clause with ut + imperfect subjunctive nuntiaret; senatui is 4th declension dative.",
    grammarFocus: "GCSE Syntax: Purpose Clause (ut + Subjunctive)",
    tokens: [
      tok("nuntius", "messenger", "Nominative Singular (Subject)"),
      tok("festinavit", "hurried / hastened", "3rd Pers Sing Perfect Active Verb"),
      tok("ut", "in order to / to", "Conjunction of Purpose"),
      tok("senatui", "to the senate", "Dative Singular 4th Declension"),
      tok("victoriam", "victory", "Accusative Singular (Direct Object)"),
      tok("nuntiaret", "he might announce", "3rd Pers Sing Imperfect Subjunctive Active Verb")
    ]
  },
  {
    latin: "gladios paravimus ut contra hostes pugnaremus.",
    primaryTranslation: "We prepared swords in order to fight against the enemies.",
    acceptedTranslations: [
      "we prepared swords in order to fight against the enemies",
      "we prepared swords so that we might fight against the enemies",
      "we got swords ready to fight against the enemy"
    ],
    tenseHint: "Purpose clause with ut + 1st person plural imperfect subjunctive pugnaremus.",
    grammarFocus: "GCSE Syntax: Purpose Clause (1st Plural Subjunctive)",
    tokens: [
      tok("gladios", "swords", "Accusative Plural (Direct Object)"),
      tok("paravimus", "we prepared", "1st Pers Plur Perfect Active Verb"),
      tok("ut", "so that / in order to", "Conjunction of Purpose"),
      tok("contra", "against", "Preposition (+ accusative)"),
      tok("hostes", "the enemies / enemy", "Accusative Plural 3rd Declension"),
      tok("pugnaremus", "we might fight", "1st Pers Plur Imperfect Subjunctive Active Verb")
    ]
  },
  {
    latin: "cives e moenibus descenderunt ut pacem peterent.",
    primaryTranslation: "The citizens came down from the walls to seek peace.",
    acceptedTranslations: [
      "the citizens came down from the walls to seek peace",
      "the citizens descended from the walls in order to ask for peace",
      "citizens came down from the walls to beg for peace"
    ],
    tenseHint: "Purpose clause with ut + imperfect subjunctive peterent.",
    grammarFocus: "GCSE Syntax: Purpose Clause with peterent",
    tokens: [
      tok("cives", "citizens", "Nominative Plural 3rd Declension (Subject)"),
      tok("e", "out of / down from", "Preposition (+ ablative)"),
      tok("moenibus", "walls / ramparts", "Ablative Plural 3rd Declension Neuter"),
      tok("descenderunt", "came down / descended", "3rd Pers Plur Perfect Active Verb"),
      tok("ut", "in order to / to", "Conjunction of Purpose"),
      tok("pacem", "peace", "Accusative Singular 3rd Declension"),
      tok("peterent", "they might seek", "3rd Pers Plur Imperfect Subjunctive Active Verb")
    ]
  },
  {
    latin: "milites ita fortiter pugnaverunt ut hostes superarent.",
    primaryTranslation: "The soldiers fought so bravely that they overcame the enemies.",
    acceptedTranslations: [
      "the soldiers fought so bravely that they overcame the enemies",
      "the soldiers fought so bravely that they defeated the enemy",
      "soldiers fought so bravely that they overcame the enemies"
    ],
    tenseHint: "Result clause with signpost adverb ita + ut + imperfect subjunctive superarent.",
    grammarFocus: "GCSE Syntax: Result Clause (ita... ut + Subjunctive)",
    tokens: [
      tok("milites", "soldiers", "Nominative Plural 3rd Declension (Subject)"),
      tok("ita", "so / in such a way", "Adverb (Signpost word for result)"),
      tok("fortiter", "bravely", "Adverb"),
      tok("pugnaverunt", "fought", "3rd Pers Plur Perfect Active Verb"),
      tok("ut", "that", "Conjunction of Result"),
      tok("hostes", "the enemies / enemy", "Accusative Plural 3rd Declension"),
      tok("superarent", "they overcame / defeated", "3rd Pers Plur Imperfect Subjunctive Active Verb")
    ]
  },
  {
    latin: "adeo timebat rex ut e regno effugeret.",
    primaryTranslation: "The king was so afraid that he fled from the kingdom.",
    acceptedTranslations: [
      "the king was so afraid that he fled from the kingdom",
      "the king feared so much that he escaped from the kingdom",
      "so greatly was the king afraid that he fled from the kingdom"
    ],
    tenseHint: "Result clause with signpost adverb adeo + ut + imperfect subjunctive effugeret.",
    grammarFocus: "GCSE Syntax: Result Clause with adeo",
    tokens: [
      tok("adeo", "so much / so greatly", "Adverb (Signpost word for result)"),
      tok("timebat", "was afraid / feared", "3rd Pers Sing Imperfect Active Verb"),
      tok("rex", "king", "Nominative Singular 3rd Declension (Subject)"),
      tok("ut", "that", "Conjunction of Result"),
      tok("e", "out of / from", "Preposition (+ ablative)"),
      tok("regno", "kingdom", "Ablative Singular Neuter"),
      tok("effugeret", "he fled / escaped", "3rd Pers Sing Imperfect Subjunctive Active Verb")
    ]
  },
  {
    latin: "tam celeriter cucurrit puer ut nemo eum capere posset.",
    primaryTranslation: "The boy ran so quickly that no one could catch him.",
    acceptedTranslations: [
      "the boy ran so quickly that no one could catch him",
      "the boy ran so fast that nobody was able to catch him",
      "so quickly did the boy run that no one could seize him"
    ],
    tenseHint: "Result clause with signpost tam + ut + nemo + imperfect subjunctive posset.",
    grammarFocus: "GCSE Syntax: Negative Result Clause (nemo... posset)",
    tokens: [
      tok("tam", "so", "Adverb (Signpost word)"),
      tok("celeriter", "quickly / fast", "Adverb"),
      tok("cucurrit", "ran", "3rd Pers Sing Perfect Active Verb"),
      tok("puer", "boy", "Nominative Singular (Subject)"),
      tok("ut", "that", "Conjunction of Result"),
      tok("nemo", "no one / nobody", "Nominative Singular Pronoun"),
      tok("eum", "him", "Accusative Singular Pronoun (Direct Object)"),
      tok("capere", "to catch / seize", "Present Active Infinitive"),
      tok("posset", "could / was able", "3rd Pers Sing Imperfect Subjunctive Verb")
    ]
  },
  {
    latin: "amico meo persuasi ut nobiscum in villa maneret.",
    primaryTranslation: "I persuaded my friend to stay with us in the villa.",
    acceptedTranslations: [
      "I persuaded my friend to stay with us in the villa",
      "I persuaded my friend that he should remain with us in the villa",
      "I persuaded my friend to remain with us in the house"
    ],
    tenseHint: "Indirect Command with persuadeo (+ dative) + ut + subjunctive maneret.",
    grammarFocus: "GCSE Syntax: Indirect Command (persuadeo ut)",
    tokens: [
      tok("amico", "friend", "Dative Singular (Indirect Object)"),
      tok("meo", "my", "Dative Singular Masculine Possessive"),
      tok("persuasi", "I persuaded", "1st Pers Sing Perfect Active Verb"),
      tok("ut", "to / that", "Conjunction of Indirect Command"),
      tok("nobiscum", "with us", "Ablative Plural Pronoun + cum"),
      tok("in", "in", "Preposition (+ ablative)"),
      tok("villa", "villa / house", "Ablative Singular"),
      tok("maneret", "he should stay / remain", "3rd Pers Sing Imperfect Subjunctive Active Verb")
    ]
  },
  {
    latin: "tribunus civibus imperavit ut arma traderent.",
    primaryTranslation: "The tribune ordered the citizens to hand over their weapons.",
    acceptedTranslations: [
      "the tribune ordered the citizens to hand over their weapons",
      "the tribune commanded the citizens to give up their arms",
      "a tribune ordered the citizens to surrender their weapons"
    ],
    tenseHint: "Indirect Command with impero (+ dative) + ut + imperfect subjunctive traderent.",
    grammarFocus: "GCSE Syntax: Indirect Command (tribunus imperavit ut)",
    tokens: [
      tok("tribunus", "tribune", "Nominative Singular 2nd Declension (Subject)"),
      tok("civibus", "to the citizens", "Dative Plural 3rd Declension"),
      tok("imperavit", "ordered / commanded", "3rd Pers Sing Perfect Active Verb"),
      tok("ut", "to / that", "Conjunction of Indirect Command"),
      tok("arma", "weapons / arms", "Accusative Plural Neuter (Direct Object)"),
      tok("traderent", "they should hand over", "3rd Pers Plur Imperfect Subjunctive Active Verb")
    ]
  },
  {
    latin: "imperator militibus persuasit ut murum ascenderent.",
    primaryTranslation: "The commander persuaded the soldiers to climb the wall.",
    acceptedTranslations: [
      "the commander persuaded the soldiers to climb the wall",
      "the general persuaded the soldiers to scale the wall",
      "the emperor persuaded the soldiers to climb the wall"
    ],
    tenseHint: "Indirect Command with persuadeo (+ dative) + ut + subjunctive ascenderent.",
    grammarFocus: "GCSE Syntax: Indirect Command (persuasit ut)",
    tokens: [
      tok("imperator", "commander / general", "Nominative Singular 3rd Declension (Subject)"),
      tok("militibus", "to the soldiers", "Dative Plural 3rd Declension"),
      tok("persuasit", "persuaded", "3rd Pers Sing Perfect Active Verb"),
      tok("ut", "to / that", "Conjunction of Indirect Command"),
      tok("murum", "wall", "Accusative Singular (Direct Object)"),
      tok("ascenderent", "they should climb / scale", "3rd Pers Plur Imperfect Subjunctive Active Verb")
    ]
  },
  {
    latin: "cives rogaverunt quid in foro accidisset.",
    primaryTranslation: "The citizens asked what had happened in the forum.",
    acceptedTranslations: [
      "the citizens asked what had happened in the forum",
      "citizens asked what had occurred in the forum",
      "the citizens asked what had happened in the marketplace"
    ],
    tenseHint: "Indirect Question introduced by quid + pluperfect subjunctive accidisset.",
    grammarFocus: "GCSE Syntax: Indirect Question (quid + Subjunctive)",
    tokens: [
      tok("cives", "citizens", "Nominative Plural 3rd Declension (Subject)"),
      tok("rogaverunt", "asked", "3rd Pers Plur Perfect Active Verb"),
      tok("quid", "what", "Interrogative Pronoun Neuter"),
      tok("in", "in", "Preposition (+ ablative)"),
      tok("foro", "forum", "Ablative Singular"),
      tok("accidisset", "had happened / occurred", "3rd Pers Sing Pluperfect Subjunctive Active Verb")
    ]
  },
  {
    latin: "senator rogavit num dux salvus esset.",
    primaryTranslation: "The senator asked whether the leader was safe.",
    acceptedTranslations: [
      "the senator asked whether the leader was safe",
      "the senator asked if the general was safe",
      "a senator asked whether the leader was unhurt"
    ],
    tenseHint: "Indirect Question introduced by particle num ('whether') + imperfect subjunctive esset.",
    grammarFocus: "GCSE Syntax: Indirect Question (num + esset)",
    tokens: [
      tok("senator", "senator", "Nominative Singular 3rd Declension (Subject)"),
      tok("rogavit", "asked", "3rd Pers Sing Perfect Active Verb"),
      tok("num", "whether / if", "Interrogative Particle"),
      tok("dux", "the leader / general", "Nominative Singular 3rd Declension"),
      tok("salvus", "safe / unharmed", "Nominative Singular Masculine Adjective"),
      tok("esset", "was", "3rd Pers Sing Imperfect Subjunctive Verb")
    ]
  },
  {
    latin: "nemo sciebat quis litteras ad regem misisset.",
    primaryTranslation: "No one knew who had sent the letters to the king.",
    acceptedTranslations: [
      "no one knew who had sent the letters to the king",
      "nobody knew who had sent a letter to the king",
      "no one was knowing who had sent letters to the king"
    ],
    tenseHint: "Indirect Question introduced by quis + pluperfect subjunctive misisset.",
    grammarFocus: "GCSE Syntax: Indirect Question (quis + Subjunctive)",
    tokens: [
      tok("nemo", "no one / nobody", "Nominative Singular Pronoun (Subject)"),
      tok("sciebat", "knew / was knowing", "3rd Pers Sing Imperfect Active Verb"),
      tok("quis", "who", "Interrogative Pronoun"),
      tok("litteras", "the letters / letter", "Accusative Plural (Direct Object)"),
      tok("ad", "to", "Preposition (+ accusative)"),
      tok("regem", "king", "Accusative Singular 3rd Declension"),
      tok("misisset", "had sent", "3rd Pers Sing Pluperfect Subjunctive Active Verb")
    ]
  },
  {
    latin: "cum hostes castra oppugnavissent, Romani fortiter restiterunt.",
    primaryTranslation: "When the enemies had attacked the camp, the Romans resisted bravely.",
    acceptedTranslations: [
      "when the enemies had attacked the camp, the Romans resisted bravely",
      "when the enemy had attacked the camp, the Romans resisted bravely",
      "since the enemies had attacked the camp, the Romans resisted bravely"
    ],
    tenseHint: "Cum historical clause with pluperfect subjunctive oppugnavissent.",
    grammarFocus: "GCSE Syntax: Cum Clause with Pluperfect Subjunctive",
    tokens: [
      tok("cum", "when / since", "Conjunction (+ subjunctive)"),
      tok("hostes", "the enemies / enemy", "Nominative Plural 3rd Declension"),
      tok("castra", "camp", "Accusative Plural Neuter"),
      tok("oppugnavissent", "had attacked", "3rd Pers Plur Pluperfect Subjunctive Active Verb"),
      tok("Romani", "the Romans", "Nominative Plural Masculine (Main Subject)"),
      tok("fortiter", "bravely", "Adverb"),
      tok("restiterunt", "resisted / stood firm", "3rd Pers Plur Perfect Active Verb")
    ]
  },
  {
    latin: "cum epistulam legisset, mater vehementer lacrimavit.",
    primaryTranslation: "When she had read the letter, the mother wept profusely.",
    acceptedTranslations: [
      "when she had read the letter, the mother wept profusely",
      "when the mother had read the letter, she wept bitterly",
      "having read the letter, the mother cried vehemently"
    ],
    tenseHint: "Cum historical clause with pluperfect subjunctive legisset.",
    grammarFocus: "GCSE Syntax: Cum Clause with legisset",
    tokens: [
      tok("cum", "when / after", "Conjunction (+ subjunctive)"),
      tok("epistulam", "letter", "Accusative Singular (Direct Object)"),
      tok("legisset", "she had read", "3rd Pers Sing Pluperfect Subjunctive Active Verb"),
      tok("mater", "the mother", "Nominative Singular 3rd Declension (Subject)"),
      tok("vehementer", "profusely / vehemently / bitterly", "Adverb"),
      tok("lacrimavit", "wept / cried", "3rd Pers Sing Perfect Active Verb")
    ]
  },
  {
    latin: "cum omnia parata essent, legiones e castris discesserunt.",
    primaryTranslation: "Since everything had been prepared, the legions departed from the camp.",
    acceptedTranslations: [
      "since everything had been prepared, the legions departed from the camp",
      "when all things were prepared, the legions left the camp",
      "as everything was ready, the legions departed from camp"
    ],
    tenseHint: "Cum causal clause with pluperfect passive subjunctive parata essent.",
    grammarFocus: "GCSE Syntax: Cum Clause (Pluperfect Passive Subjunctive)",
    tokens: [
      tok("cum", "since / when", "Conjunction (+ subjunctive)"),
      tok("omnia", "all things / everything", "Nominative Plural Neuter (Subject of cum clause)"),
      tok("parata essent", "had been prepared", "3rd Pers Plur Pluperfect Passive Subjunctive Verb"),
      tok("legiones", "the legions", "Nominative Plural 3rd Declension (Main Subject)"),
      tok("e", "out of / from", "Preposition (+ ablative)"),
      tok("castris", "camp", "Ablative Plural Neuter"),
      tok("discesserunt", "departed / left", "3rd Pers Plur Perfect Active Verb")
    ]
  },
  {
    latin: "dux timuit ne hostes castra caperent.",
    primaryTranslation: "The leader feared lest the enemies capture the camp.",
    acceptedTranslations: [
      "the leader feared lest the enemies capture the camp",
      "the general was afraid that the enemy would capture the camp",
      "the leader feared that the enemies might capture the camp"
    ],
    tenseHint: "Fear clause with timeo + ne + imperfect subjunctive caperent ('feared that they would capture').",
    grammarFocus: "GCSE Syntax: Fear Clause (timuit ne)",
    tokens: [
      tok("dux", "leader / general", "Nominative Singular 3rd Declension (Subject)"),
      tok("timuit", "feared / was afraid", "3rd Pers Sing Perfect Active Verb"),
      tok("ne", "that / lest", "Conjunction with Verbs of Fearing"),
      tok("hostes", "the enemies / enemy", "Nominative Plural 3rd Declension"),
      tok("castra", "camp", "Accusative Plural Neuter (Direct Object)"),
      tok("caperent", "would capture / might seize", "3rd Pers Plur Imperfect Subjunctive Active Verb")
    ]
  },
  {
    latin: "senator timebat ne civitas in periculum caderet.",
    primaryTranslation: "The senator feared that the state would fall into danger.",
    acceptedTranslations: [
      "the senator feared that the state would fall into danger",
      "the senator was afraid that the state would fall into danger",
      "a senator feared lest the city fall into danger"
    ],
    tenseHint: "Fear clause with timebat + ne + imperfect subjunctive caderet.",
    grammarFocus: "GCSE Syntax: Fear Clause with caderet",
    tokens: [
      tok("senator", "senator", "Nominative Singular 3rd Declension (Subject)"),
      tok("timebat", "feared / was afraid", "3rd Pers Sing Imperfect Active Verb"),
      tok("ne", "that / lest", "Conjunction with Verbs of Fearing"),
      tok("civitas", "the state / citizenship", "Nominative Singular 3rd Declension"),
      tok("in", "into", "Preposition (+ accusative)"),
      tok("periculum", "danger", "Accusative Singular Neuter"),
      tok("caderet", "would fall", "3rd Pers Sing Imperfect Subjunctive Active Verb")
    ]
  },
  {
    latin: "bello tandem confecto, legiones ad urbem redierunt.",
    primaryTranslation: "With the war finally finished, the legions returned to the city.",
    acceptedTranslations: [
      "with the war finally finished, the legions returned to the city",
      "when the war was at last finished, the legions returned to the city",
      "the war being finally completed, the legions returned to the city"
    ],
    tenseHint: "Ablative Absolute: bello confecto (noun + PPP in ablative case).",
    grammarFocus: "GCSE Syntax: Ablative Absolute (bello confecto)",
    tokens: [
      tok("bello", "war", "Ablative Singular Neuter (Ablative Absolute)"),
      tok("tandem", "at last / finally", "Adverb"),
      tok("confecto", "finished / completed", "Ablative Singular Neuter PPP (Ablative Absolute)"),
      tok("legiones", "the legions", "Nominative Plural 3rd Declension (Subject)"),
      tok("ad", "to / towards", "Preposition (+ accusative)"),
      tok("urbem", "city", "Accusative Singular 3rd Declension"),
      tok("redierunt", "returned", "3rd Pers Plur Perfect Active Verb")
    ]
  },
  {
    latin: "custodibus dormientibus, captivi e carcere effugerunt.",
    primaryTranslation: "While the guards were sleeping, the prisoners escaped from prison.",
    acceptedTranslations: [
      "while the guards were sleeping, the prisoners escaped from prison",
      "with the guards sleeping, the prisoners escaped from the prison",
      "the guards being asleep, the captives escaped from prison"
    ],
    tenseHint: "Ablative Absolute: custodibus dormientibus (noun + Present Participle in ablative case).",
    grammarFocus: "GCSE Syntax: Ablative Absolute with Present Participle",
    tokens: [
      tok("custodibus", "guards", "Ablative Plural 3rd Declension (Ablative Absolute)"),
      tok("dormientibus", "sleeping", "Ablative Plural Present Active Participle (Ablative Absolute)"),
      tok("captivi", "prisoners / captives", "Nominative Plural (Subject)"),
      tok("e", "out of / from", "Preposition (+ ablative)"),
      tok("carcere", "prison", "Ablative Singular 3rd Declension"),
      tok("effugerunt", "escaped / fled", "3rd Pers Plur Perfect Active Verb")
    ]
  },
  {
    latin: "omnibus civibus leges patriae observandae sunt.",
    primaryTranslation: "All citizens must observe the laws of their fatherland.",
    acceptedTranslations: [
      "all citizens must observe the laws of their fatherland",
      "the laws of the fatherland must be observed by all citizens",
      "all citizens have to obey the laws of the country"
    ],
    tenseHint: "Gerundive of Obligation: observandae sunt with dative of agent omnibus civibus.",
    grammarFocus: "GCSE Syntax: Gerundive of Obligation (observandae sunt)",
    tokens: [
      tok("omnibus", "by all", "Dative Plural 3rd Declension Adjective (Dative of Agent)"),
      tok("civibus", "citizens", "Dative Plural 3rd Declension (Dative of Agent)"),
      tok("leges", "the laws", "Nominative Plural 3rd Declension (Subject)"),
      tok("patriae", "of the fatherland", "Genitive Singular 1st Declension"),
      tok("observandae sunt", "must be observed", "Feminine Plural Gerundive + Present Verb")
    ]
  }
];

// Combine into exact 175-sentence dataset
// Tag difficulties explicitly
easyList.forEach(s => s.difficulty = 'easy');
intermediateList.forEach(s => s.difficulty = 'intermediate');
hardList.forEach(s => s.difficulty = 'hard');
gcseList.forEach(s => s.difficulty = 'gcse');

const allCombined = [...easyList, ...intermediateList, ...hardList, ...gcseList];
allCombined.forEach((s, idx) => {
  s.id = idx + 1;
});

console.log('Total sentences generated:', allCombined.length);
console.log('Easy:', allCombined.filter(s => s.difficulty === 'easy').length);
console.log('Intermediate:', allCombined.filter(s => s.difficulty === 'intermediate').length);
console.log('Hard:', allCombined.filter(s => s.difficulty === 'hard').length);
console.log('GCSE:', allCombined.filter(s => s.difficulty === 'gcse').length);

fs.writeFileSync('scripts/cullen_175_sentences.json', JSON.stringify(allCombined, null, 2));
console.log('Successfully wrote scripts/cullen_175_sentences.json');
