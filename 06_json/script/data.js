const data = [
  {
    "id": 1,
    "name_german": "Löwe",
    "trivia_german": "Löwen schlafen bis zu 20 Stunden am Tag.",
    "trivia": "Lions sleep up to 20 hours a day.",
    "group": "A",
    "groupname_german": "Raubtiere",
    "groupname": "Predators",
    "group_number": 1,
    "name": "Lion",
    "max_weight": 225,
    "max_age": 16,
    "top_speed": 74,
    "deaths": 100,
    "max_length": 250,
    "litter_size": 4,
    "continents": "Africa, Asia",
    "intelligence": 8
  },
  {
    "id": 2,
    "name_german": "Gepard",
    "trivia_german": "Der Gepard kann nicht brüllen und seine Krallen nicht einziehen.",
    "trivia": "",
    "group": "A",
    "groupname_german": "Raubtiere",
    "groupname": "Predators",
    "group_number": 2,
    "name": "Cheetah",
    "max_weight": 59,
    "max_age": 14,
    "top_speed": 100,
    "deaths": 1,
    "max_length": 150,
    "litter_size": 5,
    "continents": "Africa, Asia",
    "intelligence": 5
  },
  {
    "id": 3,
    "name_german": "Tiger",
    "trivia_german": "Anders als andere Katzen genießen Tiger das Schwimmen.",
    "trivia": "Unlike other cats, tigers enjoy swimming.",
    "group": "A",
    "groupname_german": "Raubtiere",
    "groupname": "Predators",
    "group_number": 3,
    "name": "Tiger",
    "max_weight": 340,
    "max_age": 15,
    "top_speed": 60,
    "deaths": 50,
    "max_length": 290,
    "litter_size": 4,
    "continents": "Asia",
    "intelligence": 7
  },
  {
    "id": 4,
    "name_german": "Hyäne",
    "trivia_german": "Hyänen haben extrem starke Kiefer, die Knochen mühelos zerbrechen können.",
    "trivia": "Hyenas have extremely strong jaws that can easily break bones.",
    "group": "A",
    "groupname_german": "Raubtiere",
    "groupname": "Predators",
    "group_number": 4,
    "name": "Hyena",
    "max_weight": 85,
    "max_age": 12,
    "top_speed": 60,
    "deaths": 12,
    "max_length": 160,
    "litter_size": 3,
    "continents": "Africa, Asia",
    "intelligence": 7
  },
  {
    "id": 5,
    "name_german": "Wanderspinne",
    "trivia_german": "Versteckt sich oft in Bananenstauden, deshalb auch ?Bananenspinne? genannt",
    "trivia": "Often hide in banana trees, so they are also called ?banana spiders?",
    "group": "B",
    "groupname_german": "Giftig und infektiös",
    "groupname": "Poisonous and Infectious",
    "group_number": 1,
    "name": "Wandering Spider",
    "max_weight": "0,01",
    "max_age": 4,
    "top_speed": 12,
    "deaths": 10,
    "max_length": 15,
    "litter_size": 1840,
    "continents": "Americas",
    "intelligence": 2
  },
  {
    "id": 6,
    "name_german": "Skorpion",
    "trivia_german": "Oft gilt bei Skorpionen: Je kleiner die Scheren, desto giftiger der Stich.",
    "trivia": "Often applies to scorpions: The smaller the claws, the more poisonous the sting.",
    "group": "B",
    "groupname_german": "Giftig und infektiös",
    "groupname": "Poisonous and Infectious",
    "group_number": 2,
    "name": "Scorpion",
    "max_weight": "0,06",
    "max_age": 15,
    "top_speed": 19,
    "deaths": 1000,
    "max_length": 21,
    "litter_size": 50,
    "continents": "all",
    "intelligence": 2
  },
  {
    "id": 7,
    "name_german": "Moskito",
    "trivia_german": "Nur weibliche Mücken stechen, da sie Blut für die Eiproduktion benötigen.",
    "trivia": "Only female mosquitoes bite as they need blood to produce eggs.",
    "group": "B",
    "groupname_german": "Giftig und infektiös",
    "groupname": "Poisonous and Infectious",
    "group_number": 3,
    "name": "Mosquito",
    "max_weight": "0,000002",
    "max_age": "0,15",
    "top_speed": 2,
    "deaths": 750000,
    "max_length": 1,
    "litter_size": 400,
    "continents": "all",
    "intelligence": 1
  },
  {
    "id": 8,
    "name_german": "Pfeilgiftfrosch",
    "trivia_german": "Gewinnen ihr Gift durch den Verzehr giftiger Ameisen.",
    "trivia": "Obtain their venom by eating poisonous ants.",
    "group": "B",
    "groupname_german": "Giftig und infektiös",
    "groupname": "Poisonous and Infectious",
    "group_number": 4,
    "name": "Poison Dart Frog",
    "max_weight": "0,010",
    "max_age": 8,
    "top_speed": 15,
    "deaths": 3,
    "max_length": 6,
    "litter_size": 35,
    "continents": "Americas",
    "intelligence": 2
  },
  {
    "id": 9,
    "name_german": "Krokodil",
    "trivia_german": "Haben die stärksten Kiefer im Tierreich, aber kaum Muskeln, um sie zu öffnen.",
    "trivia": "Have the strongest jaws in the animal kingdom, but hardly any muscles to open them.",
    "group": "C",
    "groupname_german": "Reptilien",
    "groupname": "Reptiles",
    "group_number": 1,
    "name": "Crocodile",
    "max_weight": "1100,00",
    "max_age": 70,
    "top_speed": 29,
    "deaths": 2500,
    "max_length": 610,
    "litter_size": 80,
    "continents": "Africa, Asia, Americas, Oceania",
    "intelligence": 4
  },
  {
    "id": 10,
    "name_german": "Kobra",
    "trivia_german": "Manche Kobra-Arten können ihr Gift sogar spucken.",
    "trivia": "Some cobra species can even spit their venom.",
    "group": "C",
    "groupname_german": "Reptilien",
    "groupname": "Reptiles",
    "group_number": 2,
    "name": "Cobra",
    "max_weight": 20,
    "max_age": 20,
    "top_speed": 19,
    "deaths": 30000,
    "max_length": 550,
    "litter_size": 40,
    "continents": "Africa, Asia",
    "intelligence": 4
  },
  {
    "id": 11,
    "name_german": "Komodowaran",
    "trivia_german": "Der Biss enthält eine Mischung aus Gift und gefährlichen Bakterien.",
    "trivia": "The bite contains a mixture of venom and dangerous bacteria.",
    "group": "C",
    "groupname_german": "Reptilien",
    "groupname": "Reptiles",
    "group_number": 3,
    "name": "Komodo Dragon",
    "max_weight": 80,
    "max_age": 40,
    "top_speed": 18,
    "deaths": 1,
    "max_length": 300,
    "litter_size": 30,
    "continents": "Asia",
    "intelligence": 3
  },
  {
    "id": 12,
    "name_german": "Schildkröte",
    "trivia_german": "Charles Darwin entwickelte durch ihre Beobachtung seine Evolutionstheorie.",
    "trivia": "Charles Darwin developed his theory of evolution by observing them.",
    "group": "C",
    "groupname_german": "Reptilien",
    "groupname": "Reptiles",
    "group_number": 4,
    "name": "Galapagos Tortoise",
    "max_weight": "300,0",
    "max_age": 176,
    "top_speed": 1,
    "deaths": 0,
    "max_length": 130,
    "litter_size": 14,
    "continents": "Americas",
    "intelligence": 3
  },
  {
    "id": 13,
    "name_german": "Schwertfisch",
    "trivia_german": "Können Augen und Gehirn erwärmen, um in kalten Tiefen besser zu jagen.",
    "trivia": "Can warm their eyes and brain in order to hunt better in cold depths.",
    "group": "D",
    "groupname_german": "Meeresbewohner",
    "groupname": "Sea Creatures",
    "group_number": 1,
    "name": "Swordfish",
    "max_weight": 650,
    "max_age": 15,
    "top_speed": 100,
    "deaths": 0,
    "max_length": 450,
    "litter_size": 15000000,
    "continents": "",
    "intelligence": 4
  },
  {
    "id": 14,
    "name_german": "Schnecke",
    "trivia_german": "Kegelschnecken nutzen eine harpunen-artige Zunge, um Beute zu lähmen.",
    "trivia": "Cone snails use a harpoon-like tongue to paralyse prey.",
    "group": "D",
    "groupname_german": "Meeresbewohner",
    "groupname": "Sea Creatures",
    "group_number": 2,
    "name": "Snail",
    "max_weight": "14,0",
    "max_age": 1,
    "top_speed": "0,01",
    "deaths": 10000,
    "max_length": 90,
    "litter_size": 20,
    "continents": "",
    "intelligence": 1
  },
  {
    "id": 15,
    "name_german": "Koloss-Kalmar",
    "trivia_german": "Hat einen Schnabel, der Fleisch mühelos zerschneiden kann.",
    "trivia": "Has a beak that can slice through flesh with ease.",
    "group": "D",
    "groupname_german": "Meeresbewohner",
    "groupname": "Sea Creatures",
    "group_number": 3,
    "name": "Colossal Squid",
    "max_weight": 495,
    "max_age": 5,
    "top_speed": 40,
    "deaths": 0,
    "max_length": 1400,
    "litter_size": 10000000,
    "continents": "",
    "intelligence": 6
  },
  {
    "id": 16,
    "name_german": "Walross",
    "trivia_german": "Zieht sich bei Bedarf mit seinen Stoßzähnen auf das Eis.",
    "trivia": "Pulls itself onto the ice with its tusks when needed.",
    "group": "D",
    "groupname_german": "Meeresbewohner",
    "groupname": "Sea Creatures",
    "group_number": 4,
    "name": "Walrus",
    "max_weight": 2000,
    "max_age": 40,
    "top_speed": 35,
    "deaths": 0,
    "max_length": 360,
    "litter_size": 1,
    "continents": "Americas, Europe, Asia",
    "intelligence": 6
  },
  {
    "id": 17,
    "name_german": "Walhai",
    "trivia_german": "Ein friedlicher Riese, der Plankton aus dem Wasser filtert.",
    "trivia": "A peaceful giant that filters plankton from the water.",
    "group": "E",
    "groupname_german": "Meeresgiganten",
    "groupname": "Marine Giants",
    "group_number": 1,
    "name": "Whale Shark",
    "max_weight": 12000,
    "max_age": 75,
    "top_speed": 5,
    "deaths": 0,
    "max_length": 1450,
    "litter_size": 300,
    "continents": "",
    "intelligence": 4
  },
  {
    "id": 18,
    "name_german": "Weißer Hai",
    "trivia_german": "Weiße Haie können einzelne Tropfen Blut in Millionen Litern Wasser riechen.",
    "trivia": "Great white sharks can smell single drops of blood in millions of litres of water.",
    "group": "E",
    "groupname_german": "Meeresgiganten",
    "groupname": "Marine Giants",
    "group_number": 2,
    "name": "White Shark",
    "max_weight": 2500,
    "max_age": 70,
    "top_speed": 60,
    "deaths": 10,
    "max_length": 600,
    "litter_size": 14,
    "continents": "",
    "intelligence": 5
  },
  {
    "id": 19,
    "name_german": "Blauwal",
    "trivia_german": "Kommunizieren über weite Strecken mit den lautesten Gesängen im Tierreich.",
    "trivia": "Communicate over long distances with the loudest songs in the animal kingdom.",
    "group": "E",
    "groupname_german": "Meeresgiganten",
    "groupname": "Marine Giants",
    "group_number": 3,
    "name": "Blue Whale",
    "max_weight": 200000,
    "max_age": 90,
    "top_speed": 48,
    "deaths": 0,
    "max_length": 3360,
    "litter_size": 1,
    "continents": "",
    "intelligence": 8
  },
  {
    "id": 20,
    "name_german": "Orca",
    "trivia_german": "Orcas sind bekannt für Teamwork und ihre ausgeklügelten Jagdstrategien.",
    "trivia": "Orcas are known for their teamwork and ingenious hunting strategies.",
    "group": "E",
    "groupname_german": "Meeresgiganten",
    "groupname": "Marine Giants",
    "group_number": 4,
    "name": "Orca",
    "max_weight": 6500,
    "max_age": 90,
    "top_speed": 56,
    "deaths": 0,
    "max_length": 950,
    "litter_size": 1,
    "continents": "",
    "intelligence": 10
  },
  {
    "id": 21,
    "name_german": "Elefant",
    "trivia_german": "Elefanten können über 70.000 Muskeln im Rüssel kontrollieren.",
    "trivia": "Elephants can control over 70,000 muscles in their trunks.",
    "group": "F",
    "groupname_german": "Großsäuger",
    "groupname": "Large Mammals",
    "group_number": 1,
    "name": "Elephant",
    "max_weight": 6500,
    "max_age": 65,
    "top_speed": 40,
    "deaths": 100,
    "max_length": 750,
    "litter_size": 1,
    "continents": "Africa, Asia",
    "intelligence": 10
  },
  {
    "id": 22,
    "name_german": "Büffel",
    "trivia_german": "Büffel attackieren oft Raubtiere wie Löwen, um ihre Jungen zu schützen.",
    "trivia": "Buffaloes often attack predators such as lions to protect their young.",
    "group": "F",
    "groupname_german": "Großsäuger",
    "groupname": "Large Mammals",
    "group_number": 3,
    "name": "Buffalo",
    "max_weight": 1200,
    "max_age": 20,
    "top_speed": 55,
    "deaths": 200,
    "max_length": 340,
    "litter_size": 1,
    "continents": "Africa, Asia, Americas",
    "intelligence": 5
  },
  {
    "id": 23,
    "name_german": "Eisbär",
    "trivia_german": "Die Haut von Eisbären ist schwarz, um Wärme zu speichern.",
    "trivia": "The skin of polar bears is black to store heat.",
    "group": "F",
    "groupname_german": "Großsäuger",
    "groupname": "Large Mammals",
    "group_number": 4,
    "name": "Polar Bear",
    "max_weight": 1000,
    "max_age": 30,
    "top_speed": 40,
    "deaths": 1,
    "max_length": 340,
    "litter_size": 2,
    "continents": "Americas, Europe, Asia",
    "intelligence": 7
  },
  {
    "id": 24,
    "name_german": "Nilpferd",
    "trivia_german": "Ihre Zähne wachsen ständig nach und werden bis zu 50 cm lang.",
    "trivia": "Their teeth are constantly growing and can be up to 50 cm long.",
    "group": "F",
    "groupname_german": "Großsäuger",
    "groupname": "Large Mammals",
    "group_number": 2,
    "name": "Hippopotamus",
    "max_weight": 4500,
    "max_age": 50,
    "top_speed": 35,
    "deaths": 500,
    "max_length": 500,
    "litter_size": 1,
    "continents": "Africa",
    "intelligence": 5
  },
  {
    "id": 25,
    "name_german": "Gorilla",
    "trivia_german": "Bauen jeden Abend ein neues Nest aus Blättern und Zweigen zum Schlafen.",
    "trivia": "They build a new nest of leaves and twigs every evening to sleep in.",
    "group": "G",
    "groupname_german": "Landsäugetiere",
    "groupname": "Land Mammals",
    "group_number": 1,
    "name": "Gorilla",
    "max_weight": 200,
    "max_age": 40,
    "top_speed": 42,
    "deaths": 0,
    "max_length": 180,
    "litter_size": 1,
    "continents": "Africa",
    "intelligence": 9
  },
  {
    "id": 26,
    "name_german": "Braunbär",
    "trivia_german": "Wenn er sich bedroht fühlt, stellt er sich auf die Hinterbeine, um größer zu wirken.",
    "trivia": "If it feels threatened, it stands up on its hind legs to appear larger.",
    "group": "G",
    "groupname_german": "Landsäugetiere",
    "groupname": "Land Mammals",
    "group_number": 2,
    "name": "Grizzly",
    "max_weight": 680,
    "max_age": 30,
    "top_speed": 62,
    "deaths": 8,
    "max_length": 300,
    "litter_size": 3,
    "continents": "Americas, Europe, Asia",
    "intelligence": 7
  },
  {
    "id": 27,
    "name_german": "Giraffe",
    "trivia_german": "Giraffen schlafen nur etwa 30 Minuten pro Tag.",
    "trivia": "Giraffes only sleep for about 30 minutes a day.",
    "group": "G",
    "groupname_german": "Landsäugetiere",
    "groupname": "Land Mammals",
    "group_number": 3,
    "name": "Giraffe",
    "max_weight": 1900,
    "max_age": 25,
    "top_speed": 55,
    "deaths": 0,
    "max_length": 600,
    "litter_size": 1,
    "continents": "Africa",
    "intelligence": 4
  },
  {
    "id": 28,
    "name_german": "Wolf",
    "trivia_german": "Heulen, um ihr Territorium zu markieren und mit dem Rudel zu kommunizieren.",
    "trivia": "Howl to mark their territory and communicate with the herd.",
    "group": "G",
    "groupname_german": "Landsäugetiere",
    "groupname": "Land Mammals",
    "group_number": 4,
    "name": "Wolf",
    "max_weight": 80,
    "max_age": 13,
    "top_speed": 64,
    "deaths": 2,
    "max_length": 160,
    "litter_size": 6,
    "continents": "Americas, Europe, Asia",
    "intelligence": 9
  },
  {
    "id": 29,
    "name_german": "Strauß",
    "trivia_german": "Hat die größten Augen aller Landtiere und kann 3 Kilometer weit sehen.",
    "trivia": "Has the largest eyes of any land animal and can see 3 kilometres away.",
    "group": "H",
    "groupname_german": "Vögel",
    "groupname": "Birds",
    "group_number": 1,
    "name": "Ostrich",
    "max_weight": 160,
    "max_age": 40,
    "top_speed": 70,
    "deaths": 2,
    "max_length": 280,
    "litter_size": 16,
    "continents": "Africa",
    "intelligence": 4
  },
  {
    "id": 30,
    "name_german": "Wanderfalke",
    "trivia_german": "Wanderfalkenpaare bleiben oft ihr ganzes Leben zusammen.",
    "trivia": "Peregrine pairs often stay together their whole lives.",
    "group": "H",
    "groupname_german": "Vögel",
    "groupname": "Birds",
    "group_number": 2,
    "name": "Peregrine Falcon",
    "max_weight": "1,3",
    "max_age": 17,
    "top_speed": 360,
    "deaths": 0,
    "max_length": 114,
    "litter_size": 5,
    "continents": "all",
    "intelligence": 6
  },
  {
    "id": 31,
    "name_german": "Albatros",
    "trivia_german": "Kann mehrere Jahre am Stück über dem offenen Ozean verbringen.",
    "trivia": "Can spend several years at a time over the open ocean.",
    "group": "H",
    "groupname_german": "Vögel",
    "groupname": "Birds",
    "group_number": 3,
    "name": "Albatross",
    "max_weight": 12,
    "max_age": 80,
    "top_speed": 85,
    "deaths": 0,
    "max_length": 350,
    "litter_size": 1,
    "continents": "all",
    "intelligence": 4
  },
  {
    "id": 32,
    "name_german": "Pfau",
    "trivia_german": "Ein Huhn, das für seine Schönheit bekannt ist.",
    "trivia": "A chicken known for its beauty.",
    "group": "H",
    "groupname_german": "Vögel",
    "groupname": "Birds",
    "group_number": 4,
    "name": "Peacock",
    "max_weight": 6,
    "max_age": 15,
    "top_speed": 16,
    "deaths": 0,
    "max_length": 230,
    "litter_size": 12,
    "continents": "Asia, Africa",
    "intelligence": 3
  }
];