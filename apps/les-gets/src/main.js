import { analyzeRound } from '@vital-fantasy/analyze-round';

const results = {
  // Elite Women
  'Vali Holl|Elite Women': { Rank: 1 },
  'Myriam Nicole|Elite Women': { Rank: 2 },
  'Tahnee Seagrave|Elite Women': { Rank: 3 },
  'Monika Hrastnik|Elite Women': { Rank: 4 },
  'Mille Johnset|Elite Women': { Rank: 5 },
  'Phoebe Gale|Elite Women': { Rank: 6 },
  'Marine Cabirou|Elite Women': { Rank: 7 },
  'Eleonora Farina|Elite Women': { Rank: 8 },
  'Louise Ferguson|Elite Women': { Rank: 9 },
  'Frida Helena Ronning|Elite Women': { Rank: 10 },

  // Protected
  'Nina Hoffmann|Elite Women': { Rank: 6 },
  'Anna Newkirk|Elite Women': { Rank: 6 },

  // Elite Men
  'Dakotah Norton|Elite Men': { Rank: 1 },
  'Amaury Pierron|Elite Men': { Rank: 2 },
  'Loic Bruni|Elite Men': { Rank: 3 },
  'Luca Shaw|Elite Men': { Rank: 4 },
  'Remi Thirion|Elite Men': { Rank: 5 },
  'Ronan Dunne|Elite Men': { Rank: 6 },
  'Andreas Kolb|Elite Men': { Rank: 7 },
  'Troy Brosnan|Elite Men': { Rank: 8 },
  'Finn Iles|Elite Men': { Rank: 9 },
  'Lachlan Stevens-Mcnab|Elite Men': { Rank: 10 },
  'Ryan Pinkerton|Elite Men': { Rank: 11 },
  'Jakob Jewett|Elite Men': { Rank: 12 },
  'Loris Vergier|Elite Men': { Rank: 13 },
  'Remy Meier-Smith|Elite Men': { Rank: 14 },
  'Benoit Coulanges|Elite Men': { Rank: 15 },
  'Luke Meier-Smith|Elite Men': { Rank: 16 },
  'Ollie Davis|Elite Men': { Rank: 17 },
  'Ethan Craik|Elite Men': { Rank: 18 },
  'Nathan Pontvianne|Elite Men': { Rank: 19 },
  'Bernard Kerr|Elite Men': { Rank: 20 },
  'Davide Palazzari|Elite Men': { Rank: 21 },
  'Thomas Estaque|Elite Men': { Rank: 22 },
  'Phil Atwill|Elite Men': { Rank: 23 },
  'Jack Piercy|Elite Men': { Rank: 24 },
  'Max Hartenstern|Elite Men': { Rank: 25 },
  'Stefano Introzzi|Elite Men': { Rank: 26 },
  'Austin Dooley|Elite Men': { Rank: 27 },
  'Bodhi Kuhn|Elite Men': { Rank: 28 },
  'Charlie Hatton|Elite Men': { Rank: 29 },
  'Greg Minnaar|Elite Men': { Rank: 30 },

  // Protected
  'Oisin O’Callaghan|Elite Men': { Rank: 11 },

  // Junior Women
  'Heather Wilson|Junior Women': { Rank: 1 },
  'Ella Svegby|Junior Women': { Rank: 2 },
  'Eliana Hulsebosch|Junior Women': { Rank: 3 },
  'Erice Van Leuven|Junior Women': { Rank: 4 },
  'Sacha Earnest|Junior Women': { Rank: 5 },
  'Sacha Mills|Junior Women': { Rank: 6 },
  'Matilda Melton|Junior Women': { Rank: 7 },
  'Soline Besson|Junior Women': { Rank: 8 },
  'Arielle Behr|Junior Women': { Rank: 9 },
  'Kale Cushman|Junior Women': { Rank: 10 },

  // Junior Men
  'Asa Vermette|Junior Men': { Rank: 1 },
  'Max Alran|Junior Men': { Rank: 2 },
  'Jon Mozell|Junior Men': { Rank: 3 },
  'Dane Jewett|Junior Men': { Rank: 4 },
  'Rafael Pelletier|Junior Men': { Rank: 5 },
  'Oscar Griffiths|Junior Men': { Rank: 6 },
  'Ryan Griffith|Junior Men': { Rank: 7 },
  'Raphael Giambi|Junior Men': { Rank: 8 },
  'Lucas Dedora|Junior Men': { Rank: 9 },
  'Bode Burke|Junior Men': { Rank: 10 },
  'Till Alran|Junior Men': { Rank: 11 },
  'Luke Wayman|Junior Men': { Rank: 12 },
  'Vincent Jouvenal|Junior Men': { Rank: 13 },
  'Dylan Marino|Junior Men': { Rank: 14 },
  'Oli Clark|Junior Men': { Rank: 15 },
  'Roee Ostfeld|Junior Men': { Rank: 16 },
  'Christian Hauser|Junior Men': { Rank: 17 },
  'Mae Rogier|Junior Men': { Rank: 18 },
  'Michael Delesalle|Junior Men': { Rank: 19 },
  'Gavin Tomlinson|Junior Men': { Rank: 20 },
  'Drake Parker|Junior Men': { Rank: 21 },
  'Mylann Falquet|Junior Men': { Rank: 22 },
  'Ignacio Garcia|Junior Men': { Rank: 23 },
  'Rudi Eichhorn|Junior Men': { Rank: 24 },
  'Oriol Cuadrat|Junior Men': { Rank: 25 },
};

const statsCsvPath = 'apps/les-gets/src/assets/Les Gets Advanced Stats.csv';

await analyzeRound('Les Gets', statsCsvPath, results);
