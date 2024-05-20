import { analyzeRound } from '@vital-fantasy/analyze-round';

const results = {
  // Elite Women
  'Vali Holl|Elite Women': { Rank: 1 },
  'Tahnee Seagrave|Elite Women': { Rank: 2 },
  'Marine Cabirou|Elite Women': { Rank: 3 },
  'Veronika Widmann|Elite Women': { Rank: 4 },
  'Jess Blewitt|Elite Women': { Rank: 5 },
  'Louise Ferguson|Elite Women': { Rank: 6 },
  'Camille Balanche|Elite Women': { Rank: 7 },
  'Anna Newkirk|Elite Women': { Rank: 8 },
  'Phoebe Gale|Elite Women': { Rank: 9 },
  'Gloria Scarsi|Elite Women': { Rank: 10 },
  // Protected
  'Nina Hoffmann|Elite Women': { Rank: 10 },

  'Dakotah Norton|Elite Men': { Rank: 1 },
  // my adjustment
  'Loris Vergier|Elite Men': { Rank: 3 },
  // my adjustment
  'Luca Shaw|Elite Men': { Rank: 5 },
  'Ronan Dunne|Elite Men': { Rank: 4 },
  'Lachlan Stevens-Mcnab|Elite Men': { Rank: 5 },
  'Amaury Pierron|Elite Men': { Rank: 6 },
  'Finn Iles|Elite Men': { Rank: 7 },
  'Angel Suarez|Elite Men': { Rank: 8 },
  'Charlie Hatton|Elite Men': { Rank: 9 },
  'Jordan Williams|Elite Men': { Rank: 10 },
  'Remi Thirion|Elite Men': { Rank: 11 },
  'Andreas Kolb|Elite Men': { Rank: 12 },
  'Ethan Craik|Elite Men': { Rank: 13 },
  'Thibaut Daprela|Elite Men': { Rank: 14 },
  'Remy Meier-Smith|Elite Men': { Rank: 15 },
  'Ollie Davis|Elite Men': { Rank: 16 },
  'Dylan Maples|Elite Men': { Rank: 17 },
  'Bernard Kerr|Elite Men': { Rank: 18 },
  'Danny Hart|Elite Men': { Rank: 19 },
  'Max Hartenstern|Elite Men': { Rank: 20 },
  'Nathan Pontvianne|Elite Men': { Rank: 21 },
  'Jakob Jewett|Elite Men': { Rank: 22 },
  'Henry Kerr|Elite Men': { Rank: 23 },
  'Luke Meier-Smith|Elite Men': { Rank: 24 },
  'Laurie Greenland|Elite Men': { Rank: 25 },
  'Austin Dooley|Elite Men': { Rank: 26 },
  'Oisin O’Callaghan|Elite Men': { Rank: 27 },
  'Dan Slack|Elite Men': { Rank: 28 },
  'Dylan Levesque|Elite Men': { Rank: 29 },
  'Bodhi Kuhn|Elite Men': { Rank: 30 },
  // Protected
  'Greg Williamson|Elite Men': { Rank: 10 },
  'Benoit Coulanges|Elite Men': { Rank: 5 },
  'Troy Brosnan|Elite Men': { Rank: 3 },
  'Loic Bruni|Elite Men': { Rank: 3 },

  // Junior Women
  'Eliana Hulsebosch|Junior Women': { Rank: 1 },
  'Erice Van Leuven|Junior Women': { Rank: 2 },
  'Heather Wilson|Junior Women': { Rank: 3 },
  'Sacha Earnest|Junior Women': { Rank: 4 },
  'Kale Cushman|Junior Women': { Rank: 5 },
  'Teagan Heap|Junior Women': { Rank: 6 },
  'Minu Stoffers|Junior Women': { Rank: 7 },
  'Matilda Melton|Junior Women': { Rank: 8 },
  'Sacha Mills|Junior Women': { Rank: 9 },
  'Maxima Jaax|Junior Women': { Rank: 10 },

  // Junior Men
  'Till Alran|Junior Men': { Rank: 1 },
  'Ryan Griffith|Junior Men': { Rank: 2 },
  'Mike Huter|Junior Men': { Rank: 3 },
  'Dane Jewett|Junior Men': { Rank: 4 },
  'Gavin Tomlinson|Junior Men': { Rank: 5 },
  'Max Alran|Junior Men': { Rank: 6 },
  'Raphael Giambi|Junior Men': { Rank: 7 },
  'Luke Wayman|Junior Men': { Rank: 8 },
  'Mylann Falquet|Junior Men': { Rank: 9 },
  'Clement Laugier|Junior Men': { Rank: 10 },
  'Daniel Parfitt|Junior Men': { Rank: 11 },
  'Lucas Dedora|Junior Men': { Rank: 12 },
  'Rudi Eichhorn|Junior Men': { Rank: 13 },
  'Oscar Griffiths|Junior Men': { Rank: 14 },
  'Marco Lamaris|Junior Men': { Rank: 15 },
  'Riko Maeuibo|Junior Men': { Rank: 16 },
  'George Madley|Junior Men': { Rank: 17 },
  'Christian Hauser|Junior Men': { Rank: 18 },
  'Asa Vermette|Junior Men': { Rank: 19 },
  'Rory Meek|Junior Men': { Rank: 20 },
  'Marius Krahenbuhl|Junior Men': { Rank: 21 },
  'Noa Hirst Walker|Junior Men': { Rank: 22 },
  'Carter Sloan|Junior Men': { Rank: 23 },
  'Oliver Vogl|Junior Men': { Rank: 24 },
  'Morgan Williams|Junior Men': { Rank: 25 },
};

const statsCsvPath =
  'apps/bielsko-biala/src/assets/Bielsko-Biala Advanced Stats.csv';

await analyzeRound('Bielsko Biala', statsCsvPath, results);
