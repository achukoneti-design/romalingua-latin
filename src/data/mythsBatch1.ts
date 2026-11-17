import type { MythExtract } from './mythLexicon';

export const MYTHS_BATCH_1: MythExtract[] = [
  {
    myth_id: 'm001',
    title: 'The Twins by the Tiber',
    source: 'Livy, Ab Urbe Condita (Adapted)',
    difficulty: 'easy',
    latin_text: 'rex saevus Romulum et Remum, geminos parvos, in flumen Tiberim iecit. deinde lupa saeva ad ripam fluminis venit et pueros invenit. lupa infantes non necavit, sed eos diligenter curavit. postea pastor bonus, Faustulus nomine, geminos vidit et domum portavit. pueri ibi tuti creverunt et post multos annos urbem Romam condiderunt.',
    comprehension_questions: [
      {
        question: 'How did the she-wolf treat Romulus and Remus when she found them?',
        options: [
          'She did not kill them, but looked after them carefully.',
          'She carried them straight to the king.',
          'She chased Faustulus away from the bank.',
          'She left them alone by the water.'
        ],
        correct_answer: 'She did not kill them, but looked after them carefully.',
        explanation: 'The Latin reads: "lupa infantes non necavit, sed eos diligenter curavit."'
      },
      {
        question: 'What does "urbem Romam condiderunt" tell us the twins eventually did?',
        options: [
          'They founded the city of Rome.',
          'They returned to the river.',
          'They built a house for Faustulus.',
          'They defeated the cruel shepherd.'
        ],
        correct_answer: 'They founded the city of Rome.',
        explanation: '"condiderunt" comes from "condo" (to found/establish), with direct object "urbem Romam".'
      }
    ]
  },
  {
    myth_id: 'm002',
    title: 'Hercules and the Nemean Lion',
    source: 'Traditional Roman Myth',
    difficulty: 'easy',
    latin_text: 'olim leo ingens agros prope Nemeam vastabat et multos cives terrebat. rex Eurystheus Herculem iussit hunc leonem ferocem necare. heros fortis arma cepit et statim ad silvam ambulavit. gladius tamen et sagittae pellem duram leonis vulnerare non poterant. tandem Hercules bestiam manibus validis cepit et eam superavit.',
    comprehension_questions: [
      {
        question: 'Why could Hercules not kill the lion with his sword or arrows?',
        options: [
          'Its tough hide could not be wounded by weapons.',
          'He lost his sword inside the forest.',
          'Eurystheus forbade him from using weapons.',
          'The lion escaped before he arrived.'
        ],
        correct_answer: 'Its tough hide could not be wounded by weapons.',
        explanation: '"pellem duram leonis vulnerare non poterant" shows the lion’s hide was impenetrable.'
      },
      {
        question: 'How did Hercules finally overcome the beast?',
        options: [
          'He seized it with his strong hands.',
          'He shot it with a poison arrow.',
          'He trapped it in a deep pit.',
          'He drove it out of the city gates.'
        ],
        correct_answer: 'He seized it with his strong hands.',
        explanation: '"manibus validis cepit" is an ablative of means: "with his strong hands".'
      }
    ]
  },
  {
    myth_id: 'm003',
    title: 'The Flight of Icarus',
    source: 'Ovid, Metamorphoses VIII (Adapted)',
    difficulty: 'intermediate',
    latin_text: 'Daedalus, qui in insula Creta a rege Minoe retinebatur, alas ex pennis et cera fecit ut per caelum effugeret. alis perfectis, pater filium Icarum monuit ne prope solem volaret. Icarus tamen mox oblitus est quid pater dixisset, et altius ascendere coepit. sol calidus ceram subito liquefecit, ita ut pennae ex umeris iuvenis caderent. puer miser se servare non potuit et in mare altum cecidit.',
    comprehension_questions: [
      {
        question: 'What specific warning did Daedalus give to Icarus?',
        options: [
          'Not to fly too close to the sun.',
          'Not to land on the island of Crete.',
          'Not to speak to King Minos.',
          'Not to fly over the deep sea.'
        ],
        correct_answer: 'Not to fly too close to the sun.',
        explanation: '"monuit ne prope solem volaret" is a negative indirect command: "warned him not to fly near the sun".'
      },
      {
        question: 'What caused the feathers to fall from Icarus’ shoulders?',
        options: [
          'The hot sun melted the wax holding them.',
          'A fierce wind tore the wings apart.',
          'A sea monster struck him from below.',
          'The feathers were too heavy to lift.'
        ],
        correct_answer: 'The hot sun melted the wax holding them.',
        explanation: '"sol calidus ceram subito liquefecit" explains that the heat melted the wax.'
      }
    ]
  },
  {
    myth_id: 'm004',
    title: 'Perseus and Medusa',
    source: 'Ovid, Metamorphoses IV (Adapted)',
    difficulty: 'intermediate',
    latin_text: 'Perseus audivit Medusam, quae serpentes pro capillis habebat, homines in saxum vertere posse. cum ad speluncam monstri pervenisset, heros clipeum aeneum sustulit ne vultum eius aspiceret. Medusa graviter dormiente, Perseus imaginem Gorgonis in clipeo polito vidit. tum gladium acutum celerrime strinxit et caput horribile uno ictu abscidit. hoste superato, Perseus caput in peram posuit et per auras avolavit.',
    comprehension_questions: [
      {
        question: 'How did Perseus avoid looking directly at Medusa’s face?',
        options: [
          'He looked at her reflection in his polished bronze shield.',
          'He kept his eyes tightly shut the entire time.',
          'He waited until the snakes fell asleep in the dark.',
          'He covered Medusa’s head with a cloak first.'
        ],
        correct_answer: 'He looked at her reflection in his polished bronze shield.',
        explanation: '"imaginem Gorgonis in clipeo polito vidit" states he used the shield as a mirror.'
      },
      {
        question: 'What grammatical construction is "Medusam ... homines in saxum vertere posse"?',
        options: [
          'An indirect statement introduced by "audivit".',
          'A purpose clause after "sustulit".',
          'An ablative absolute describing Medusa.',
          'A direct question asked by Perseus.'
        ],
        correct_answer: 'An indirect statement introduced by "audivit".',
        explanation: 'Verbs of hearing ("audivit") take an accusative subject ("Medusam") and infinitive ("posse").'
      }
    ]
  },
  {
    myth_id: 'm005',
    title: 'The Escape from Burning Troy',
    source: 'Vergil, Aeneid II (Adapted)',
    difficulty: 'hard',
    latin_text: 'flammis iam per tecta urbis saevientibus, Aeneas senem patrem Anchisen umeris imponere constituit, cum nihil aliud salutis superesset. dextra manum parvi Iuli tenens, pius dux uxorem Creusam sequi iussit, ne quis in tenebris erraret. dum per vias obscuras festinant, Aeneas clamorem Graecorum prope portas audivit, qui omnia ferro ignique vastabant. ubi tandem ad templum antiquum extra moenia venerunt, Aeneas animadvertit coniugem nusquam adesse, quamquam ipse nullum periculum timuerat. quamvis maestissimus esset, patriam novam quaerere coactus est, fata deorum secutus.',
    comprehension_questions: [
      {
        question: 'What tragic discovery did Aeneas make at the temple outside Troy’s walls?',
        options: [
          'His wife Creusa was missing.',
          'His father Anchises had fallen behind.',
          'The Greeks had already destroyed the temple.',
          'Little Iulus refused to leave the city.'
        ],
        correct_answer: 'His wife Creusa was missing.',
        explanation: '"Aeneas animadvertit coniugem nusquam adesse" means he noticed his wife was nowhere present.'
      },
      {
        question: 'Why did Aeneas order Creusa to follow close behind?',
        options: [
          'So that no one would get lost in the darkness.',
          'Because Anchises could not walk by himself.',
          'Because the Greeks were guarding the temple.',
          'To show the Trojans the road to the sea.'
        ],
        correct_answer: 'So that no one would get lost in the darkness.',
        explanation: '"ne quis in tenebris erraret" is a negative purpose clause ("lest anyone wander in the darkness").'
      }
    ]
  },
  {
    myth_id: 'm006',
    title: 'Horatius at the Bridge',
    source: 'Livy, Ab Urbe Condita II (Adapted)',
    difficulty: 'easy',
    latin_text: 'rex Porsenna cum magno exercitu Etruscorum ad urbem Romam appropinquabat. cives Romani valde timebant quod hostes pontem transire poterant. Horatius tamen vir fortissimus erat et solus in ponte stetit. dum socii pontem post tergum frangunt, Horatius contra multos hostes diu pugnavit. denique ponte fracto, heros in flumen desiluit et salvus ad ripam natavit.',
    comprehension_questions: [
      {
        question: 'What were Horatius’ companions doing while he fought on the bridge?',
        options: [
          'Breaking down the bridge behind him.',
          'Swimming across the river to surrender.',
          'Running back inside their houses.',
          'Firing arrows at Porsenna’s camp.'
        ],
        correct_answer: 'Breaking down the bridge behind him.',
        explanation: '"dum socii pontem post tergum frangunt" means "while his comrades break the bridge behind his back".'
      },
      {
        question: 'How did Horatius survive after the bridge collapsed?',
        options: [
          'He jumped into the river and swam safely to the bank.',
          'He captured a horse from the Etruscans.',
          'He surrendered to King Porsenna.',
          'His friends pulled him up with ropes.'
        ],
        correct_answer: 'He jumped into the river and swam safely to the bank.',
        explanation: '"in flumen desiluit et salvus ad ripam natavit."'
      }
    ]
  },
  {
    myth_id: 'm007',
    title: 'Theseus and the Minotaur',
    source: 'Traditional Roman Myth',
    difficulty: 'easy',
    latin_text: 'in insula Creta monstrum saevum, Minotaurus nomine, in magno labyrintho habitabat. quotannis septem pueri et septem puellae ex urbe Athenis ad Cretam mittebantur. tandem Theseus ad Cretam navigavit quod monstrum necare cupiebat. Ariadne, filia regis, iuvenem pulchrum amavit et ei gladium filumque dedit. Theseus Minotaurum necavit et auxilio fili ex labyrintho exiit.',
    comprehension_questions: [
      {
        question: 'What two things did Ariadne give Theseus to help him?',
        options: [
          'A sword and thread.',
          'A shield and a bronze helmet.',
          'A ship and gold coins.',
          'A map and a torch.'
        ],
        correct_answer: 'A sword and thread.',
        explanation: '"ei gladium filumque dedit" means "gave him a sword and thread".'
      },
      {
        question: 'Why did Theseus sail to Crete?',
        options: [
          'He wanted to kill the Minotaur.',
          'He wanted to become king of Crete.',
          'He was sent to buy weapons in Athens.',
          'He was fleeing from enemies at home.'
        ],
        correct_answer: 'He wanted to kill the Minotaur.',
        explanation: '"quod monstrum necare cupiebat" directly gives his reason.'
      }
    ]
  },
  {
    myth_id: 'm008',
    title: 'King Midas and the Golden Touch',
    source: 'Ovid, Metamorphoses XI (Adapted)',
    difficulty: 'easy',
    latin_text: 'rex Midas divitias maxime amabat et plus auri semper cupiebat. olim deus Bacchus regi donum mirabile dedit quod hospitem bene curaverat. omnia quae Midas tangebat statim aurum fiebant. primo rex laetissimus erat et arbores lapidesque tangebat. mox tamen miser erat quod neque cibum edere neque aquam bibere poterat.',
    comprehension_questions: [
      {
        question: 'Why did King Midas soon become miserable despite his gift?',
        options: [
          'He could neither eat food nor drink water because everything turned to gold.',
          'Bacchus took away all his existing treasure.',
          'His citizens attacked the palace for gold.',
          'All the trees in his garden disappeared.'
        ],
        correct_answer: 'He could neither eat food nor drink water because everything turned to gold.',
        explanation: '"neque cibum edere neque aquam bibere poterat" explains his misery.'
      },
      {
        question: 'Why had Bacchus granted Midas this wish in the first place?',
        options: [
          'Midas had looked after a guest well.',
          'Midas defeated Bacchus in a contest.',
          'Midas built a golden temple for the god.',
          'Midas prayed for help during a famine.'
        ],
        correct_answer: 'Midas had looked after a guest well.',
        explanation: '"quod hospitem bene curaverat" ("because he had cared well for a guest").'
      }
    ]
  },
  {
    myth_id: 'm009',
    title: 'Cincinnatus Called from the Plough',
    source: 'Livy, Ab Urbe Condita III (Adapted)',
    difficulty: 'intermediate',
    latin_text: 'cum exercitus Romanus ab Aequis in monte obsessus esset, senatus de salute rei publicae desperabat. nuntii statim ad agrum parvum missi sunt ubi Cincinnatus terram arabat. ubi audivit se dictatorem creatum esse, togam induit et Romam festinavit. copiis celeriter paratis, Cincinnatus nocte ad castra hostium contendit et eos circumvenit. urbe servata, vir modestus imperium deposuit et post sedecim dies ad agrum rediit.',
    comprehension_questions: [
      {
        question: 'What was Cincinnatus doing when the Senate’s messengers arrived?',
        options: [
          'Ploughing his small field.',
          'Delivering a speech in the Forum.',
          'Commanding troops on a mountain.',
          'Training horses outside the walls.'
        ],
        correct_answer: 'Ploughing his small field.',
        explanation: '"ubi Cincinnatus terram arabat" tells us he was ploughing the land.'
      },
      {
        question: 'What made Cincinnatus especially admired by the Romans after saving the city?',
        options: [
          'He laid down supreme power after sixteen days and returned to his farm.',
          'He demanded a golden crown from the Senate.',
          'He stayed dictator for the rest of his life.',
          'He divided the enemy’s land among his family.'
        ],
        correct_answer: 'He laid down supreme power after sixteen days and returned to his farm.',
        explanation: '"imperium deposuit et post sedecim dies ad agrum rediit."'
      }
    ]
  },
  {
    myth_id: 'm010',
    title: 'Mucius Scaevola before Porsenna',
    source: 'Livy, Ab Urbe Condita II (Adapted)',
    difficulty: 'intermediate',
    latin_text: 'cum Romani fame laborarent, iuvenis audax Gaius Mucius in castra hostium clam intravit ut regem Porsennam necaret. errore tamen facto, scribam pro rege interfecit et statim a custodibus comprehensus est. ductus ad regem iratum, Mucius dixit trecentos iuvenes Romanos idem iuravisse. ut ostenderet se poenam non timere, dextram manum in ignem ardentem posuit. rex tanta virtute perterritus iuvenem dimisit et pacem cum Romanis fecit.',
    comprehension_questions: [
      {
        question: 'What mistake did Mucius make inside the enemy camp?',
        options: [
          'He killed the king’s secretary instead of King Porsenna.',
          'He dropped his sword before reaching the tent.',
          'He shouted loudly and woke up the guards.',
          'He accidentally entered the Roman camp by mistake.'
        ],
        correct_answer: 'He killed the king’s secretary instead of King Porsenna.',
        explanation: '"scribam pro rege interfecit" means "he killed the secretary instead of the king".'
      },
      {
        question: 'Why did King Porsenna release Mucius and make peace?',
        options: [
          'He was terrified by Mucius’ courage in burning his own right hand.',
          'The Roman army broke through the camp gates.',
          'Mucius offered Porsenna silver and hostages.',
          'The guards advised the king to spare the prisoner.'
        ],
        correct_answer: 'He was terrified by Mucius’ courage in burning his own right hand.',
        explanation: '"rex tanta virtute perterritus iuvenem dimisit et pacem cum Romanis fecit."'
      }
    ]
  },
  {
    myth_id: 'm011',
    title: 'Orpheus and Eurydice',
    source: 'Ovid, Metamorphoses X (Adapted)',
    difficulty: 'intermediate',
    latin_text: 'Orpheus uxorem Eurydicen vehementer amabat, sed illa morsu serpentis subito mortua est. poeta maestus ad regnum mortuorum descendit ut eam ad lucem reduceret. carmine dulci cantato, ipse Pluto lacrimavit et uxorem ei reddere constituit. deus tamen imperavit ne Orpheus uxorem respiceret antequam ex umbris exiisset. prope portam lucis Orpheus amore victus respexit, et Eurydice statim in tenebras relapsa est.',
    comprehension_questions: [
      {
        question: 'On what condition did Pluto agree to return Eurydice to Orpheus?',
        options: [
          'Orpheus was not to look back at her before leaving the Underworld.',
          'Orpheus had to leave his lyre behind forever.',
          'Orpheus had to defeat Cerberus without music.',
          'Eurydice had to remain silent during the journey.'
        ],
        correct_answer: 'Orpheus was not to look back at her before leaving the Underworld.',
        explanation: '"ne Orpheus uxorem respiceret antequam ex umbris exiisset."'
      },
      {
        question: 'Why did Orpheus fail just before reaching the upper world?',
        options: [
          'Overcome by love, he looked back too soon.',
          'A snake bit him near the exit gate.',
          'His lyre broke in the darkness.',
          'Pluto changed his mind and closed the gate.'
        ],
        correct_answer: 'Overcome by love, he looked back too soon.',
        explanation: '"amore victus respexit, et Eurydice statim in tenebras relapsa est."'
      }
    ]
  },
  {
    myth_id: 'm012',
    title: 'The Trojan Horse',
    source: 'Vergil, Aeneid II (Adapted)',
    difficulty: 'hard',
    latin_text: 'cum Graeci per decem annos urbem Troiam capere non potuissent, consilium callidum inierunt. equum ligneum ingentem aedificaverunt, in quo milites fortissimi clam celati sunt. ceteri Graeci naves conscenderunt et ad insulam proximam navigaverunt, simulantes se domum redire. Troiani portis patefactis equum mirati sunt et eum intra moenia traxerunt, quamquam Laocoon clamabat dolum latere. nocte media Graeci ex equo egressi custodes dormientes occiderunt et portas sociis aperuerunt.',
    comprehension_questions: [
      {
        question: 'Why did the Greek fleet sail to a nearby island?',
        options: [
          'To pretend they were sailing home and trick the Trojans.',
          'To gather more wood to build a second horse.',
          'Because a sudden storm drove their ships away.',
          'To ask the gods for advice after ten years.'
        ],
        correct_answer: 'To pretend they were sailing home and trick the Trojans.',
        explanation: '"simulantes se domum redire" means "pretending that they were returning home".'
      },
      {
        question: 'What warning did Laocoon give before the Trojans pulled the horse inside?',
        options: [
          'He shouted that a trick was hidden inside it.',
          'He urged them to burn the Greek ships immediately.',
          'He told them to keep the gates locked until dawn.',
          'He declared the horse was a gift from Neptune.'
        ],
        correct_answer: 'He shouted that a trick was hidden inside it.',
        explanation: '"quamquam Laocoon clamabat dolum latere" ("although Laocoon kept shouting that a trick was lurking").'
      }
    ]
  },
  {
    myth_id: 'm013',
    title: 'The Sacred Geese of the Capitol',
    source: 'Livy, Ab Urbe Condita V (Adapted)',
    difficulty: 'easy',
    latin_text: 'Galli urbem Romam ceperunt, sed pauci Romani in summo Capitolio resistebant. nocte obscura hostes saxa alta clam ascendere coeperunt. custodes Romani fessi erant et graviter dormiebant. anseres tamen sacri Iunonis sonitum audiverunt et statim clamaverunt. Marcus Manlius clamore excitatus primos Gallos de saxo deiecit et arcem servavit.',
    comprehension_questions: [
      {
        question: 'Why did the Roman guards not notice the Gauls climbing the cliff?',
        options: [
          'They were exhausted and fast asleep.',
          'The fog hid the entire hill.',
          'They were eating dinner inside the temple.',
          'The Gauls bribed the sentries to look away.'
        ],
        correct_answer: 'They were exhausted and fast asleep.',
        explanation: '"custodes Romani fessi erant et graviter dormiebant."'
      },
      {
        question: 'Who raised the alarm that woke Marcus Manlius?',
        options: [
          'The sacred geese of Juno.',
          'Watchdogs outside the temple.',
          'A messenger from the city.',
          'Priests guarding the gates.'
        ],
        correct_answer: 'The sacred geese of Juno.',
        explanation: '"anseres tamen sacri Iunonis sonitum audiverunt et statim clamaverunt."'
      }
    ]
  },
  {
    myth_id: 'm014',
    title: 'Cloelia Swims the Tiber',
    source: 'Livy, Ab Urbe Condita II (Adapted)',
    difficulty: 'intermediate',
    latin_text: 'pace facta, Romani multos obsides, inter quos erat virgo Cloelia, regi Porsennae tradiderunt. Cloelia tamen custodes Etruscos fefellit et ceteras virgines ad flumen Tiberim duxit. inter tela hostium omnes flumen tranaverunt et salvae Romam pervenerunt. ubi rex hoc audivit, primo iratus erat, sed mox virtutem puellae maxime miratus est. itaque non solum Cloeliam laudavit, sed etiam ei permisit ut partem obsidum liberaret.',
    comprehension_questions: [
      {
        question: 'How did Cloelia and the other Roman maidens escape from Porsenna’s camp?',
        options: [
          'They slipped past the guards and swam across the River Tiber.',
          'Roman soldiers attacked the camp at midnight.',
          'They disguised themselves as Etruscan messengers.',
          'Porsenna released them as soon as peace was signed.'
        ],
        correct_answer: 'They slipped past the guards and swam across the River Tiber.',
        explanation: '"custodes Etruscos fefellit ... inter tela hostium omnes flumen tranaverunt."'
      },
      {
        question: 'How did King Porsenna’s reaction change after his initial anger?',
        options: [
          'He admired Cloelia’s courage and allowed her to free some of the hostages.',
          'He demanded double the number of hostages from Rome.',
          'He immediately marched back to attack the city.',
          'He imprisoned her guards for failing their duty.'
        ],
        correct_answer: 'He admired Cloelia’s courage and allowed her to free some of the hostages.',
        explanation: '"virtutem puellae maxime miratus est ... ei permisit ut partem obsidum liberaret."'
      }
    ]
  },
  {
    myth_id: 'm015',
    title: 'Apollo and Daphne',
    source: 'Ovid, Metamorphoses I (Adapted)',
    difficulty: 'intermediate',
    latin_text: 'Apollo nympham pulchram Daphnen per silvas sequebatur quod eam vehementer amabat. Daphne tamen nuptias nolebat et quam celerrime currebat ut deum effugeret. iam fessa ad flumen patris sui pervenit et auxilium magna voce rogavit. vix prece finita, corpus puellae cortice duro tectum est et capilli in frondes virides mutati sunt. Apollo arborem novam amplexus laurum sibi sacram esse constituit.',
    comprehension_questions: [
      {
        question: 'What happened to Daphne right after she prayed to her father’s river?',
        options: [
          'She was transformed into a laurel tree.',
          'She turned into a swift mountain stream.',
          'She vanished into an underground cave.',
          'She flew away in the shape of a dove.'
        ],
        correct_answer: 'She was transformed into a laurel tree.',
        explanation: '"corpus puellae cortice duro tectum est et capilli in frondes virides mutati sunt" describes her turning into the laurel.'
      },
      {
        question: 'What does "quam celerrime" mean in sentence 2?',
        options: [
          'As swiftly as possible.',
          'More slowly than before.',
          'Without looking back.',
          'Too quickly to be seen.'
        ],
        correct_answer: 'As swiftly as possible.',
        explanation: '"quam" + superlative adverb ("celerrime") always translates as "as ... as possible".'
      }
    ]
  },
  {
    myth_id: 'm016',
    title: 'Ulysses and the Cyclops',
    source: 'Traditional Roman Myth',
    difficulty: 'easy',
    latin_text: 'Ulixes cum duodecim sociis speluncam Cyclopis ingentis intravit. Cyclops saxo maximo portam clausit et duos nautas statim devoravit. Ulixes callidus vinum dulce monstro dedit et nomen suum "Neminem" esse dixit. Cyclope ebrio dormiente, Graeci sudem ardentem in oculum unum eius miserunt. postridie Ulixes et socii sub ovibus latuerunt et ex spelunca tuti exierunt.',
    comprehension_questions: [
      {
        question: 'What clever false name did Ulysses tell the Cyclops?',
        options: [
          'Nobody ("Nemo").',
          'King of Ithaca.',
          'Friend of Neptune.',
          'Stranger from Troy.'
        ],
        correct_answer: 'Nobody ("Nemo").',
        explanation: '"nomen suum Neminem esse dixit" — accusative of "Nemo" is "Neminem".'
      },
      {
        question: 'How did Ulysses and his men escape from the cave the next day?',
        options: [
          'They hid underneath the sheep.',
          'They rolled away the huge boulder together.',
          'They dug a tunnel behind the flock.',
          'They sailed straight out of a hidden river.'
        ],
        correct_answer: 'They hid underneath the sheep.',
        explanation: '"sub ovibus latuerunt et ex spelunca tuti exierunt."'
      }
    ]
  },
  {
    myth_id: 'm017',
    title: 'Baucis and Philemon',
    source: 'Ovid, Metamorphoses VIII (Adapted)',
    difficulty: 'easy',
    latin_text: 'olim Iuppiter et Mercurius specie mortalium in Phrygia ambulabant. mille domos adierunt, sed omnes cives divites portas hospitibus clauserunt. tandem ad casam parvam pervenerunt ubi senes pauperes Baucis et Philemon habitabant. hi hospites laete acceperunt et cibum modicum vinumque praebuerunt. dei mirati sunt quod vinum semper crescebat, et senibus bonis templum pro casa dederunt.',
    comprehension_questions: [
      {
        question: 'How did the wealthy citizens behave towards Jupiter and Mercury in disguise?',
        options: [
          'They shut their doors to the strangers.',
          'They invited them to a grand banquet.',
          'They offered them gold coins for a temple.',
          'They recognized the gods immediately.'
        ],
        correct_answer: 'They shut their doors to the strangers.',
        explanation: '"omnes cives divites portas hospitibus clauserunt."'
      },
      {
        question: 'What reward did the gods give Baucis and Philemon for their hospitality?',
        options: [
          'They turned their small cottage into a temple.',
          'They gave them a palace in Rome.',
          'They made them young warriors again.',
          'They filled their fields with golden apples.'
        ],
        correct_answer: 'They turned their small cottage into a temple.',
        explanation: '"senibus bonis templum pro casa dederunt" ("gave the good old couple a temple instead of a cottage").'
      }
    ]
  },
  {
    myth_id: 'm018',
    title: 'Hannibal Crosses the Alps',
    source: 'Livy, Ab Urbe Condita XXI (Adapted)',
    difficulty: 'hard',
    latin_text: 'Hannibal, odio Romanorum incensus, bellum in Italiam ipsam inferre constituit. exercitu ingenti cum multis elephantis congregato, dux Carthaginiensis ad montes Alpes iter fecit. nivibus altis viam tegentibus, milites frigore et fame paene confecti sunt. Hannibal tamen eos hortatus est ut animos servarent, ostendens campos fertiles Italiae procul iacere. tandem post multos labores et caedes, hostes ex montibus in Italiam descenderunt.',
    comprehension_questions: [
      {
        question: 'What hardships nearly broke Hannibal’s soldiers while crossing the Alps?',
        options: [
          'Deep snows, bitter cold, and hunger.',
          'Burning desert heat and lack of rivers.',
          'Mutiny among the sailors in the fleet.',
          'Ambush by Caesar’s legions at the summit.'
        ],
        correct_answer: 'Deep snows, bitter cold, and hunger.',
        explanation: '"nivibus altis viam tegentibus, milites frigore et fame paene confecti sunt."'
      },
      {
        question: 'How did Hannibal encourage his troops to keep going?',
        options: [
          'He pointed out the fertile plains of Italy lying in the distance.',
          'He promised to return to Carthage immediately after winter.',
          'He doubled every soldier’s gold pay on the mountain.',
          'He ordered the elephants to carry all the wounded.'
        ],
        correct_answer: 'He pointed out the fertile plains of Italy lying in the distance.',
        explanation: '"ostendens campos fertiles Italiae procul iacere."'
      }
    ]
  },
  {
    myth_id: 'm019',
    title: 'Caesar Crosses the Rubicon',
    source: 'Suetonius, Divus Iulius (Adapted)',
    difficulty: 'intermediate',
    latin_text: 'senatu iubente ut Caesar exercitum suum dimitteret, dux clarus ad flumen Rubiconem pervenit. ibi paulisper constitit, reputans quantum periculum bellum civile allaturum esset. nam si flumen cum legionibus transiisset, hostis rei publicae habitus esset. tandem, signo quodam viso, Caesar exclamavit aleam iactam esse. statim equum in aquam impulit et Romam cum militibus fidelibus contendit.',
    comprehension_questions: [
      {
        question: 'Why did Caesar pause at the River Rubicon?',
        options: [
          'He was considering how great a danger civil war would bring if he crossed.',
          'The bridge had collapsed during a heavy winter storm.',
          'Pompey’s cavalry was blocking the opposite bank.',
          'His soldiers refused to march without fresh supplies.'
        ],
        correct_answer: 'He was considering how great a danger civil war would bring if he crossed.',
        explanation: '"reputans quantum periculum bellum civile allaturum esset" ("reflecting on how much danger civil war would bring").'
      },
      {
        question: 'What did Caesar declare as he decided to cross?',
        options: [
          'That the die was cast.',
          'That he came, saw, and conquered.',
          'That Rome would belong to the Senate forever.',
          'That no citizen should fear his legions.'
        ],
        correct_answer: 'That the die was cast.',
        explanation: '"exclamavit aleam iactam esse" ("he shouted out that the die had been cast").'
      }
    ]
  },
  {
    myth_id: 'm020',
    title: 'Boudica’s Rebellion in Britain',
    source: 'Tacitus, Annales XIV (Adapted)',
    difficulty: 'hard',
    latin_text: 'postquam rex Icenorum mortuus est, milites Romani regnum eius diripuerunt et uxorem Boudicam verberaverunt. regina ira iusta incensa multas gentes Britannorum ad arma vocavit. priusquam legati Romani auxilia mittere possent, Britanni Camulodunum et Londinium incenderunt. tandem tamen exercitus Britannicus a legionibus Romanis acie ordinata victus est. Boudica, ne in manus hostium viva caderet, venenum bibisse dicitur.',
    comprehension_questions: [
      {
        question: 'What provoked Boudica to unite the British tribes against Rome?',
        options: [
          'Roman soldiers plundered her dead husband’s kingdom and flogged her.',
          'Rome raised taxes on grain ships sailing to Gaul.',
          'The Romans arrested her commanders at Londinium.',
          'King Cogidubnus invaded Iceni territory.'
        ],
        correct_answer: 'Roman soldiers plundered her dead husband’s kingdom and flogged her.',
        explanation: '"milites Romani regnum eius diripuerunt et uxorem Boudicam verberaverunt."'
      },
      {
        question: 'Why is Boudica said to have drunk poison after the final battle?',
        options: [
          'So that she would not fall alive into Roman hands.',
          'By mistake, thinking it was healing medicine.',
          'Because she had been severely wounded by a spear.',
          'As part of a victory ritual for the gods.'
        ],
        correct_answer: 'So that she would not fall alive into Roman hands.',
        explanation: '"ne in manus hostium viva caderet" is a negative purpose clause.'
      }
    ]
  },
  {
    myth_id: 'm021',
    title: 'Pyramus and Thisbe',
    source: 'Ovid, Metamorphoses IV (Adapted)',
    difficulty: 'easy',
    latin_text: 'Pyramus et Thisbe in Babylone habitabant et inter se maxime amabant. patres tamen eorum nuptias prohibebant, itaque iuvenes per rimam muri clam loquebantur. nocte quadam constituerunt sub arbore prope fontem convenire. Thisbe prima venit, sed leona ore cruento visa in speluncam fugit et velamen reliquit. Pyramus velamen cruentum invenit et credens puellam mortuam esse se gladio necavit.',
    comprehension_questions: [
      {
        question: 'How did Pyramus and Thisbe talk to each other when their fathers forbade them to meet?',
        options: [
          'Secretly through a crack in the wall.',
          'By sending letters through a faithful slave.',
          'By singing across the garden rooftops.',
          'In the marketplace at midday.'
        ],
        correct_answer: 'Secretly through a crack in the wall.',
        explanation: '"per rimam muri clam loquebantur" ("they spoke secretly through a crack in the wall").'
      },
      {
        question: 'What misled Pyramus into thinking Thisbe was dead?',
        options: [
          'He found her blood-stained veil left behind near the spring.',
          'He saw the lioness dragging someone into the cave.',
          'A shepherd told him she had drowned.',
          'He heard her screaming inside the city.'
        ],
        correct_answer: 'He found her blood-stained veil left behind near the spring.',
        explanation: '"velamen cruentum invenit et credens puellam mortuam esse..."'
      }
    ]
  },
  {
    myth_id: 'm022',
    title: 'Pandora’s Jar',
    source: 'Traditional Classical Myth',
    difficulty: 'easy',
    latin_text: 'dei olim feminam primam, Pandoram nomine, finxerunt et ei dolium clausum dederunt. Iuppiter feminam monuit ne umquam hoc dolium aperiret. Pandora tamen curiositate capta est et operculum subito removit. statim omnes morbi et dolores per mundum volaverunt. sola Spes in fundo dolii mansit ut homines consolaretur.',
    comprehension_questions: [
      {
        question: 'What remained inside the jar after all the evils flew out?',
        options: [
          'Hope alone.',
          'Gold and silver.',
          'A healing potion.',
          'A golden key.'
        ],
        correct_answer: 'Hope alone.',
        explanation: '"sola Spes in fundo dolii mansit" ("Hope alone stayed at the bottom of the jar").'
      },
      {
        question: 'Why did Pandora open the jar despite Jupiter’s warning?',
        options: [
          'She was overcome by curiosity.',
          'Her husband ordered her to inspect it.',
          'She thought food was hidden inside.',
          'She dropped it on a stone floor by accident.'
        ],
        correct_answer: 'She was overcome by curiosity.',
        explanation: '"Pandora tamen curiositate capta est."'
      }
    ]
  },
  {
    myth_id: 'm023',
    title: 'Arachne and Minerva',
    source: 'Ovid, Metamorphoses VI (Adapted)',
    difficulty: 'intermediate',
    latin_text: 'Arachne puella superba erat quae telas pulcherrimas texere solebat. cum omnes artem eius laudarent, negavit se a dea Minerva doctam esse. dea irata anum se simulavit et puellam monuit ut modestior esset. Arachne autem deam ipsam ad certamen provocavit, et ambas telas mirabiles texuerunt. Minerva, opere puellae viso, telam rupit et Arachnen in araneam mutavit.',
    comprehension_questions: [
      {
        question: 'Why did Minerva become angry with Arachne?',
        options: [
          'Arachne denied she had been taught by the goddess and challenged her to a contest.',
          'Arachne refused to weave a robe for Jupiter’s temple.',
          'Arachne tore up the goddess’s sacred tapestry.',
          'Arachne mocked the citizens of Athens in public.'
        ],
        correct_answer: 'Arachne denied she had been taught by the goddess and challenged her to a contest.',
        explanation: '"negavit se a dea Minerva doctam esse ... deam ipsam ad certamen provocavit."'
      },
      {
        question: 'What disguise did Minerva first adopt to warn Arachne?',
        options: [
          'An old woman.',
          'A shepherdess.',
          'A Roman priest.',
          'A sea nymph.'
        ],
        correct_answer: 'An old woman.',
        explanation: '"anum se simulavit" ("she pretended to be an old woman").'
      }
    ]
  },
  {
    myth_id: 'm024',
    title: 'Cornelia’s Jewels',
    source: 'Valerius Maximus, Facta et Dicta Memorabilia (Adapted)',
    difficulty: 'easy',
    latin_text: 'Cornelia, mater Tiberii et Gaii Gracchorum, femina Romana clarissima erat. olim hospita dives domum eius venit et ornamenta aurea gemmasque ostendit. hospita Corneliam rogavit cur nullas gemmas gereret. Cornelia, ubi filii sui e ludo domum redierunt, eos manu tenuit. "ecce," inquit, "haec sunt ornamenta mea!"',
    comprehension_questions: [
      {
        question: 'What did Cornelia’s wealthy visitor proudly show off?',
        options: [
          'Golden ornaments and jewels.',
          'Painted marble statues.',
          'Silk robes from the East.',
          'Silver coins from a victory.'
        ],
        correct_answer: 'Golden ornaments and jewels.',
        explanation: '"ornamenta aurea gemmasque ostendit."'
      },
      {
        question: 'What did Cornelia call her true "ornaments" (jewels)?',
        options: [
          'Her two sons, Tiberius and Gaius.',
          'Her family’s books of Greek philosophy.',
          'Her husband’s military trophies.',
          'Her simple country garden.'
        ],
        correct_answer: 'Her two sons, Tiberius and Gaius.',
        explanation: 'When her sons returned from school ("e ludo domum redierunt"), she held them and declared "haec sunt ornamenta mea!"'
      }
    ]
  },
  {
    myth_id: 'm025',
    title: 'Hercules and the Hydra',
    source: 'Traditional Roman Myth',
    difficulty: 'intermediate',
    latin_text: 'secundo labore Hercules ad paludem Lernam missus est ut Hydram horribilem necaret. hoc monstrum novem capita habebat, quorum unum immortale erat. quoties Hercules unum caput gladio abscidit, duo nova statim creverunt. tandem Iolaus comes fidus faces ardentes attulit ut colla ustulata non crescerent. capite immortali sub saxo ingenti posito, Hercules victoriam reportavit.',
    comprehension_questions: [
      {
        question: 'Why was cutting off the Hydra’s heads ineffective at first?',
        options: [
          'Every time Hercules cut off one head, two new ones grew back.',
          'His sword broke on the monster’s scales.',
          'The swamp water put out his strength.',
          'All nine heads were completely immortal.'
        ],
        correct_answer: 'Every time Hercules cut off one head, two new ones grew back.',
        explanation: '"quoties Hercules unum caput gladio abscidit, duo nova statim creverunt."'
      },
      {
        question: 'How did Iolaus help Hercules solve the problem?',
        options: [
          'He brought burning torches to cauterize the necks so new heads could not grow.',
          'He distracted the monster by throwing rocks from a tree.',
          'He pulled the immortal head out with a chariot.',
          'He brought Athena’s bronze mirror.'
        ],
        correct_answer: 'He brought burning torches to cauterize the necks so new heads could not grow.',
        explanation: '"Iolaus comes fidus faces ardentes attulit ut colla ustulata non crescerent."'
      }
    ]
  },
  {
    myth_id: 'm026',
    title: 'King Midas and the Ass’s Ears',
    source: 'Ovid, Metamorphoses XI (Adapted)',
    difficulty: 'intermediate',
    latin_text: 'cum Pan et Apollo de musica contenderent, rex Midas stulte Panem victorem iudicavit. Apollo iratus dixit tales aures non humanas esse, et eas in aures asini mutavit. Midas pudore confusus caput tiara purpurea semper tegebat ne quis deformitatem videret. tonsor tamen eius rem cognovit, et quod tacere non poterat, foveam in terra fodit. ibi secretum susurravit, sed harundines mox natae ventis verba prodiderunt.',
    comprehension_questions: [
      {
        question: 'Why did Apollo punish Midas with donkey ears?',
        options: [
          'Midas foolishly judged Pan the winner over Apollo in a music contest.',
          'Midas refused to pay for a statue of the god.',
          'Midas stole Apollo’s golden lyre.',
          'Midas mocked Apollo’s oracle at Delphi.'
        ],
        correct_answer: 'Midas foolishly judged Pan the winner over Apollo in a music contest.',
        explanation: '"rex Midas stulte Panem victorem iudicavit."'
      },
      {
        question: 'How was Midas’ secret eventually revealed to the world?',
        options: [
          'Reeds grew from the hole where the barber whispered it and spread the words in the wind.',
          'The king’s purple cap blew off during a storm.',
          'The barber shouted the secret in the forum.',
          'Apollo announced it to the citizens himself.'
        ],
        correct_answer: 'Reeds grew from the hole where the barber whispered it and spread the words in the wind.',
        explanation: '"harundines mox natae ventis verba prodiderunt."'
      }
    ]
  },
  {
    myth_id: 'm027',
    title: 'Narcissus and Echo',
    source: 'Ovid, Metamorphoses III (Adapted)',
    difficulty: 'intermediate',
    latin_text: 'Narcissus iuvenis pulcherrimus erat, qui tamen omnes nymphas superbia sprevit. nympha Echo eum amavit, sed poena Iunonis tantum ultima verba aliorum repetere poterat. a iuvene reiecta, Echo dolore contabuit donec sola vox in silvis mansit. mox Narcissus ad fontem clarum venit, ubi imaginem suam in aqua vidit et se ipsum amavit. neque cibum capere neque discedere potuit, et tandem in florem candidum mutatus est.',
    comprehension_questions: [
      {
        question: 'What curse prevented Echo from speaking freely to Narcissus?',
        options: [
          'She could only repeat the last words spoken by others.',
          'She became invisible whenever anyone looked at her.',
          'She could only sing in the middle of the night.',
          'She lost her voice entirely near water.'
        ],
        correct_answer: 'She could only repeat the last words spoken by others.',
        explanation: '"tantum ultima verba aliorum repetere poterat."'
      },
      {
        question: 'What happened to Narcissus at the clear spring?',
        options: [
          'He fell in love with his own reflection and turned into a white flower.',
          'He drowned trying to rescue Echo.',
          'Juno transformed him into a deer.',
          'He forgot his name and wandered into the mountains.'
        ],
        correct_answer: 'He fell in love with his own reflection and turned into a white flower.',
        explanation: '"imaginem suam in aqua vidit et se ipsum amavit ... in florem candidum mutatus est."'
      }
    ]
  },
  {
    myth_id: 'm028',
    title: 'Phaethon Drives the Sun Chariot',
    source: 'Ovid, Metamorphoses II (Adapted)',
    difficulty: 'hard',
    latin_text: 'Phaethon patrem Solem oravit ut sibi currum igneum per unum diem agere liceret. pater quamquam pertimescebat, iuramento obligatus currum filio invitissimus tradidit. equi feroces mox senserunt pondus leve esse, et relicto cursu recto per caelum vagati sunt. terra ardere coepit et flumina maxima siccabantur, ita ut omnes gentes clamarent. Iuppiter, ne mundus totus periret, fulmine misso iuvenem de caelo deiecit.',
    comprehension_questions: [
      {
        question: 'Why did the horses of the sun bolt off their regular course?',
        options: [
          'They sensed the chariot’s weight was much lighter than usual.',
          'Phaethon struck them angrily with Jupiter’s lightning.',
          'A thick cloud blocked their view of the earth.',
          'They were frightened by the noise of rivers below.'
        ],
        correct_answer: 'They sensed the chariot’s weight was much lighter than usual.',
        explanation: '"equi feroces mox senserunt pondus leve esse, et relicto cursu recto..."'
      },
      {
        question: 'Why did Jupiter strike Phaethon with a thunderbolt?',
        options: [
          'To stop the entire world from being destroyed by fire.',
          'Because Phaethon refused to return the chariot at night.',
          'To punish the Sun god for breaking an oath.',
          'Because Phaethon attacked Mount Olympus.'
        ],
        correct_answer: 'To stop the entire world from being destroyed by fire.',
        explanation: '"ne mundus totus periret" ("so that the whole world would not perish").'
      }
    ]
  },
  {
    myth_id: 'm029',
    title: 'Proserpina and the Underworld',
    source: 'Ovid, Metamorphoses V (Adapted)',
    difficulty: 'intermediate',
    latin_text: 'dum Proserpina flores in campo Siciliae legit, Pluto eam vidit et statim rapuit. mater Ceres filiam per totum orbem terrarum frustra quaerebat et irata fruges crescere vetuit. fame crescente, Iuppiter Mercurium misit ut puellam a rege mortuorum reduceret. Proserpina tamen septem grana mali Punici in umbris iam gustaverat. itaque constitutum est ut partem anni apud matrem, partem sub terra ageret.',
    comprehension_questions: [
      {
        question: 'How did Ceres react when she could not find her daughter Proserpina?',
        options: [
          'Out of anger, she forbade crops to grow on earth.',
          'She sailed to the Underworld to fight Pluto.',
          'She flooded the fields of Sicily with seawater.',
          'She asked Mercury to punish the farmers.'
        ],
        correct_answer: 'Out of anger, she forbade crops to grow on earth.',
        explanation: '"irata fruges crescere vetuit" ("in anger she forbade the crops to grow").'
      },
      {
        question: 'Why could Proserpina not stay permanently on earth with her mother?',
        options: [
          'She had already eaten seven pomegranate seeds in the Underworld.',
          'She wanted to rule the ghosts alongside Pluto.',
          'Mercury arrived too late to open the gates.',
          'Jupiter refused to listen to Ceres’ prayers.'
        ],
        correct_answer: 'She had already eaten seven pomegranate seeds in the Underworld.',
        explanation: '"septem grana mali Punici in umbris iam gustaverat."'
      }
    ]
  },
  {
    myth_id: 'm030',
    title: 'The Eruption of Mount Vesuvius',
    source: 'Pliny the Younger, Epistulae VI.16 (Adapted)',
    difficulty: 'hard',
    latin_text: 'die vicesimo quarto mensis Augusti nubes ingens forma pini ex monte Vesuvio ascendere visa est. Plinius maior, qui classi Romanae praeerat, naves parari iussit ut amicis periclitantibus auxilium ferret. cinere iam et lapidibus ardentibus in naves cadentibus, gubernator timens suadebat ut retro verterent. dux tamen intrepidus respondit fortunam fortes iuvare et ad litus perrexit. postridie corpus eius prope Stabias inventum est, fumo denso oppressum.',
    comprehension_questions: [
      {
        question: 'Why did the Elder Pliny order ships to be prepared?',
        options: [
          'To bring rescue and help to friends in danger.',
          'To collect volcanic rocks for the emperor.',
          'To evacuate the entire fleet away from Italy.',
          'To attack pirates taking advantage of the ash.'
        ],
        correct_answer: 'To bring rescue and help to friends in danger.',
        explanation: '"ut amicis periclitantibus auxilium ferret" (purpose clause).'
      },
      {
        question: 'What famous saying did Pliny speak when the helmsman urged him to turn back?',
        options: [
          'Fortune favours the brave.',
          'While there is life, there is hope.',
          'Knowledge conquers all fear.',
          'Rome never abandons its citizens.'
        ],
        correct_answer: 'Fortune favours the brave.',
        explanation: '"respondit fortunam fortes iuvare" (indirect statement: "fortune helps the brave").'
      }
    ]
  },
  {
    myth_id: 'm031',
    title: 'The Rape of the Sabine Women',
    source: 'Livy, Ab Urbe Condita I (Adapted)',
    difficulty: 'easy',
    latin_text: 'urbs Roma nova multos viros habebat, sed feminae paucae erant. itaque Romulus ludos magnos paravit et finitimos Sabinos cum familiis invitavit. dum omnes spectacula laete spectant, iuvenes Romani signum exspectabant. signo dato, Romani virgines Sabinas rapuerunt et domum portaverunt. postea autem feminae ipsae pacem inter patres suos et maritos fecerunt.',
    comprehension_questions: [
      {
        question: 'Why did Romulus invite the Sabines to great games?',
        options: [
          'Rome had many men but very few women.',
          'The Sabines were threatening to starve the city.',
          'He wanted to celebrate defeating King Amulius.',
          'He hoped to trade grain for Sabine horses.'
        ],
        correct_answer: 'Rome had many men but very few women.',
        explanation: '"urbs Roma nova multos viros habebat, sed feminae paucae erant."'
      },
      {
        question: 'How was conflict between the Romans and Sabines finally resolved?',
        options: [
          'The Sabine women themselves made peace between their fathers and husbands.',
          'Romulus paid a huge sum of gold to the Sabine king.',
          'The Roman army burned the Sabine towns.',
          'Jupiter sent a storm that separated the armies.'
        ],
        correct_answer: 'The Sabine women themselves made peace between their fathers and husbands.',
        explanation: '"feminae ipsae pacem inter patres suos et maritos fecerunt."'
      }
    ]
  },
  {
    myth_id: 'm032',
    title: 'Lucretia and the End of the Kings',
    source: 'Livy, Ab Urbe Condita I (Adapted)',
    difficulty: 'intermediate',
    latin_text: 'cum filius regis Tarquinii iniuriam gravem Lucretiae fecisset, femina casta patrem et maritum arcessivit. re terribili narrata, omnes dolorem maximum senserunt et vindictam iuraverunt. Lucretia autem cultro celato se necavit ne exemplum mali vivendi daret. Brutus cultrum cruentum sustulit et cives concitavit ut reges superbos expellerent. ita regnum finitum est et duo consules quotannis creari coepti sunt.',
    comprehension_questions: [
      {
        question: 'What political change happened in Rome after Brutus rallied the citizens?',
        options: [
          'The monarchy ended and Rome began electing two consuls every year.',
          'Brutus crowned himself king for life.',
          'Tarquin’s son became dictator.',
          'The Senate moved the city to Alba Longa.'
        ],
        correct_answer: 'The monarchy ended and Rome began electing two consuls every year.',
        explanation: '"regnum finitum est et duo consules quotannis creari coepti sunt."'
      },
      {
        question: 'In "ne exemplum mali vivendi daret", why did Lucretia take her own life?',
        options: [
          'So that she would not set a bad example of living.',
          'Because her father refused to help her.',
          'Because Tarquin’s guards were breaking down the door.',
          'To hide the truth from the Roman people.'
        ],
        correct_answer: 'So that she would not set a bad example of living.',
        explanation: 'A negative purpose clause ("ne ... daret") stating her motive.'
      }
    ]
  },
  {
    myth_id: 'm033',
    title: 'Atalanta and the Golden Apples',
    source: 'Ovid, Metamorphoses X (Adapted)',
    difficulty: 'intermediate',
    latin_text: 'Atalanta tam celeriter currebat ut nemo virorum eam cursu vincere posset. quicumque eam in matrimonium ducere volebat, primum cursu certare debebat et victus moriebatur. Hippomenes tamen Venerem oravit, quae ei tria poma aurea clam dedit. inter cursum iuvenis unum pomum proiecit, et puella pulchritudine captata morata est ut tolleret. tertio pomo proiecto, Hippomenes metam primus tetigit et victoriam reportavit.',
    comprehension_questions: [
      {
        question: 'What happened to suitors who lost the footrace against Atalanta?',
        options: [
          'They were put to death.',
          'They had to serve her father for seven years.',
          'They gave her all their wealth and left.',
          'They were banished from Greece forever.'
        ],
        correct_answer: 'They were put to death.',
        explanation: '"victus moriebatur" means "once defeated, he used to die".'
      },
      {
        question: 'How did Hippomenes manage to beat Atalanta?',
        options: [
          'He threw three golden apples from Venus during the race, causing her to stop and pick them up.',
          'Venus slowed Atalanta down with a strong headwind.',
          'He started running before the signal was given.',
          'He wore winged sandals lent by Mercury.'
        ],
        correct_answer: 'He threw three golden apples from Venus during the race, causing her to stop and pick them up.',
        explanation: '"tria poma aurea ... morata est ut tolleret."'
      }
    ]
  },
  {
    myth_id: 'm034',
    title: 'The Schoolmaster of Falerii',
    source: 'Livy, Ab Urbe Condita V (Adapted)',
    difficulty: 'hard',
    latin_text: 'Camillo Falerios obsidente, magister ludi filios principum urbis extra moenia dolo duxit. traditor pueros ad castra Romana attulit, sperans se urbem ita Romanis traditurum esse. Camillus tamen scelus abominatus respondit Romanos cum viris armatis, non cum pueris, bellum gerere. itaque manus magistri post tergum vinciri iussit et pueris virgas dedit ut eum in urbem agerent. cives Falisci tanta fide Romanorum moti portas sua sponte aperuerunt et pacem petiverunt.',
    comprehension_questions: [
      {
        question: 'Why did Camillus reject the treacherous schoolmaster’s offer?',
        options: [
          'He declared Romans wage war against armed men, not children.',
          'He distrusted whether the boys were actually nobles’ sons.',
          'The Roman camp had no room to guard hostages.',
          'He had already captured the citadel the night before.'
        ],
        correct_answer: 'He declared Romans wage war against armed men, not children.',
        explanation: '"respondit Romanos cum viris armatis, non cum pueris, bellum gerere."'
      },
      {
        question: 'How did the citizens of Falerii respond to Camillus’ honourable action?',
        options: [
          'Moved by Roman integrity, they voluntarily opened their gates and sought peace.',
          'They executed the boys’ fathers and fought harder.',
          'They paid a ransom to free the schoolmaster.',
          'They fled to a neighbouring mountain city.'
        ],
        correct_answer: 'Moved by Roman integrity, they voluntarily opened their gates and sought peace.',
        explanation: '"tanta fide Romanorum moti portas sua sponte aperuerunt et pacem petiverunt."'
      }
    ]
  },
  {
    myth_id: 'm035',
    title: 'Regulus Keeps His Word',
    source: 'Cicero, De Officiis III (Adapted)',
    difficulty: 'hard',
    latin_text: 'primo bello Punico Regulus dux Romanus a Carthaginiensibus captus est. postea hostes eum Romam miserunt ut de captivis permutandis ageret, iureiurando adstrictum ut rediret si res infecta esset. cum in senatum venisset, Regulus ipse dissuasit ne captivi redderentur, quod iuvenes hostium fortes essent. quamquam uxor liberi amici eum retinebant, fidem hosti datam fallere noluit. itaque Carthaginem regressus crudelissimum supplicium fortiter passus est.',
    comprehension_questions: [
      {
        question: 'Why did Regulus advise the Roman Senate NOT to exchange prisoners?',
        options: [
          'Because the captured enemy soldiers were young and strong.',
          'Because Carthage refused to release any Roman senators.',
          'Because Rome lacked the ships to transport them.',
          'Because he believed the war had already been lost.'
        ],
        correct_answer: 'Because the captured enemy soldiers were young and strong.',
        explanation: '"dissuasit ne captivi redderentur, quod iuvenes hostium fortes essent."'
      },
      {
        question: 'Why did Regulus return to Carthage despite the pleas of his family and friends?',
        options: [
          'He refused to break the sworn oath he had given even to an enemy.',
          'Carthaginian guards were waiting outside Rome.',
          'The Senate ordered him to carry back a declaration of war.',
          'He hoped to escape from the ship on the return voyage.'
        ],
        correct_answer: 'He refused to break the sworn oath he had given even to an enemy.',
        explanation: '"fidem hosti datam fallere noluit" ("he refused to betray his word given to an enemy").'
      }
    ]
  }
];
