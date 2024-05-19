import { analyzeRound } from '@vital-fantasy/analyze-round';

const results = {
  // Elite Women
  'Vali Holl|Elite Women': { semiRank: 1 },
  'Tahnee Seagrave|Elite Women': { semiRank: 2 },
  'Marine Cabirou|Elite Women': { semiRank: 3 },
  'Veronika Widmann|Elite Women': { semiRank: 4 },
  'Jess Blewitt|Elite Women': { semiRank: 5 },
  'Louise Ferguson|Elite Women': { semiRank: 6 },
  'Camille Balanche|Elite Women': { semiRank: 7 },
  'Anna Newkirk|Elite Women': { semiRank: 8 },
  'Phoebe Gale|Elite Women': { semiRank: 9 },
  'Gloria Scarsi|Elite Women': { semiRank: 10 },
  // Protected
  'Nina Hoffmann|Elite Women': { semiRank: 10 },

  'Dakotah Norton|Elite Men': { semiRank: 1 },
  // my adjustment
  'Loris Vergier|Elite Men': { semiRank: 3 },
  // my adjustment
  'Luca Shaw|Elite Men': { semiRank: 5 },
  'Ronan Dunne|Elite Men': { semiRank: 4 },
  'Lachlan Stevens-Mcnab|Elite Men': { semiRank: 5 },
  'Amaury Pierron|Elite Men': { semiRank: 6 },
  'Finn Iles|Elite Men': { semiRank: 7 },
  'Angel Suarez|Elite Men': { semiRank: 8 },
  'Charlie Hatton|Elite Men': { semiRank: 9 },
  'Jordan Williams|Elite Men': { semiRank: 10 },
  'Remi Thirion|Elite Men': { semiRank: 11 },
  'Andreas Kolb|Elite Men': { semiRank: 12 },
  'Ethan Craik|Elite Men': { semiRank: 13 },
  'Thibaut Daprela|Elite Men': { semiRank: 14 },
  'Remy Meier-Smith|Elite Men': { semiRank: 15 },
  'Ollie Davis|Elite Men': { semiRank: 16 },
  'Dylan Maples|Elite Men': { semiRank: 17 },
  'Bernard Kerr|Elite Men': { semiRank: 18 },
  'Danny Hart|Elite Men': { semiRank: 19 },
  'Max Hartenstern|Elite Men': { semiRank: 20 },
  'Nathan Pontvianne|Elite Men': { semiRank: 21 },
  'Jakob Jewett|Elite Men': { semiRank: 22 },
  'Henry Kerr|Elite Men': { semiRank: 23 },
  'Luke Meier-Smith|Elite Men': { semiRank: 24 },
  'Laurie Greenland|Elite Men': { semiRank: 25 },
  'Austin Dooley|Elite Men': { semiRank: 26 },
  'Oisin O’Callaghan|Elite Men': { semiRank: 27 },
  'Dan Slack|Elite Men': { semiRank: 28 },
  'Dylan Levesque|Elite Men': { semiRank: 29 },
  'Bodhi Kuhn|Elite Men': { semiRank: 30 },
  // Protected
  'Greg Williamson|Elite Men': { semiRank: 10 },
  'Benoit Coulanges|Elite Men': { semiRank: 5 },
  'Troy Brosnan|Elite Men': { semiRank: 3 },
  'Loic Bruni|Elite Men': { semiRank: 3 },

  // Junior Women
  'Eliana Hulsebosch|Junior Women': { semiRank: 1 },
  'Erice Van Leuven|Junior Women': { semiRank: 2 },
  'Heather Wilson|Junior Women': { semiRank: 3 },
  'Sacha Earnest|Junior Women': { semiRank: 4 },
  'Kale Cushman|Junior Women': { semiRank: 5 },
  'Teagan Heap|Junior Women': { semiRank: 6 },
  'Minu Stoffers|Junior Women': { semiRank: 7 },
  'Matilda Melton|Junior Women': { semiRank: 8 },
  'Sacha Mills|Junior Women': { semiRank: 9 },
  'Maxima Jaax|Junior Women': { semiRank: 10 },

  // Junior Men
  'Till Alran|Junior Men': { semiRank: 1 },
  'Ryan Griffith|Junior Men': { semiRank: 2 },
  'Mike Huter|Junior Men': { semiRank: 3 },
  'Dane Jewett|Junior Men': { semiRank: 4 },
  'Gavin Tomlinson|Junior Men': { semiRank: 5 },
  'Max Alran|Junior Men': { semiRank: 6 },
  'Raphael Giambi|Junior Men': { semiRank: 7 },
  'Luke Wayman|Junior Men': { semiRank: 8 },
  'Mylann Falquet|Junior Men': { semiRank: 9 },
  'Clement Laugier|Junior Men': { semiRank: 10 },
  'Daniel Parfitt|Junior Men': { semiRank: 11 },
  'Lucas Dedora|Junior Men': { semiRank: 12 },
  'Rudi Eichhorn|Junior Men': { semiRank: 13 },
  'Oscar Griffiths|Junior Men': { semiRank: 14 },
  'Marco Lamaris|Junior Men': { semiRank: 15 },
  'Riko Maeuibo|Junior Men': { semiRank: 16 },
  'George Madley|Junior Men': { semiRank: 17 },
  'Christian Hauser|Junior Men': { semiRank: 18 },
  'Asa Vermette|Junior Men': { semiRank: 19 },
  'Rory Meek|Junior Men': { semiRank: 20 },
  'Marius Krahenbuhl|Junior Men': { semiRank: 21 },
  'Noa Hirst Walker|Junior Men': { semiRank: 22 },
  'Carter Sloan|Junior Men': { semiRank: 23 },
  'Oliver Vogl|Junior Men': { semiRank: 24 },
  'Morgan Williams|Junior Men': { semiRank: 25 },
};

const statsCsvPath =
  'apps/bielsko-biala/src/assets/Bielsko-Biala Advanced Stats.csv';

await analyzeRound('Bielsko Biala', statsCsvPath, results);
