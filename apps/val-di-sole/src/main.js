import { analyzeRound } from '@vital-fantasy/analyze-round';

const results = {
  // Elite Women
  'Jess Blewitt|Elite Women': { Rank: 1 },
  'Myriam Nicole|Elite Women': { Rank: 2 },
  'Vali Holl|Elite Women': { Rank: 3 },
  'Marine Cabirou|Elite Women': { Rank: 4 },
  'Lisa Baumann|Elite Women': { Rank: 5 },
  'Phoebe Gale|Elite Women': { Rank: 6 },
  'Anna Newkirk|Elite Women': { Rank: 7 },
  'Monika Hrastnik|Elite Women': { Rank: 8 },
  'Lisa Bouladou|Elite Women': { Rank: 9 },
  'Valentina Roa Sanchez|Elite Women': { Rank: 10 },
  // Protected
  'Nina Hoffmann|Elite Women': { Rank: 5 },
  'Tahnee Seagrave|Elite Women': { Rank: 5 },

  // Elite Men
  'Amaury Pierron|Elite Men': { Rank: 1 },
  'Finn Iles|Elite Men': { Rank: 2 },
  'Troy Brosnan|Elite Men': { Rank: 3 },
  'Loris Vergier|Elite Men': { Rank: 4 },
  'Andreas Kolb|Elite Men': { Rank: 5 },
  'Oisin O’Callaghan|Elite Men': { Rank: 6 },
  'Remi Thirion|Elite Men': { Rank: 7 },
  'Luca Shaw|Elite Men': { Rank: 8 },
  'Joe Breeden|Elite Men': { Rank: 9 },
  'Simon Chapelet|Elite Men': { Rank: 10 },
  'Stefano Introzzi|Elite Men': { Rank: 11 },
  'Dylan Maples|Elite Men': { Rank: 12 },
  'Toby Meek|Elite Men': { Rank: 13 },
  'Charlie Hatton|Elite Men': { Rank: 14 },
  'Ryan Pinkerton|Elite Men': { Rank: 15 },
  'Ronan Dunne|Elite Men': { Rank: 16 },
  'Ollie Davis|Elite Men': { Rank: 17 },
  'Danny Hart|Elite Men': { Rank: 18 },
  'Matt Walker|Elite Men': { Rank: 19 },
  'Thibaut Daprela|Elite Men': { Rank: 20 },
  'Jakob Jewett|Elite Men': { Rank: 21 },
  'Luke Meier-Smith|Elite Men': { Rank: 22 },
  'Sebastien Holguin Villa|Elite Men': { Rank: 23 },
  'Loic Bruni|Elite Men': { Rank: 24 },
  'Dante Silva|Elite Men': { Rank: 25 },
  'Bodhi Kuhn|Elite Men': { Rank: 26 },
  'Greg Williamson|Elite Men': { Rank: 27 },
  'Richie Rude|Elite Men': { Rank: 28 },
  'Greg Minnaar|Elite Men': { Rank: 29 },
  'Antoine Vidal|Elite Men': { Rank: 30 },

  // Protected
  'Dakotah Norton|Elite Men': { Rank: 8 },
  'Benoit Coulanges|Elite Men': { Rank: 5 },

  // Junior Women
  'Eliana Hulsebosch|Junior Women': { Rank: 1 },
  'Sacha Earnest|Junior Women': { Rank: 2 },
  'Erice Van Leuven|Junior Women': { Rank: 3 },
  'Teagan Heap|Junior Women': { Rank: 4 },
  'Ella Svegby|Junior Women': { Rank: 5 },
  'Heather Wilson|Junior Women': { Rank: 6 },
  'Kale Cushman|Junior Women': { Rank: 7 },
  'Maxima Jaax|Junior Women': { Rank: 8 },
  'Clarissa Carzolio|Junior Women': { Rank: 9 },
  'Amelia Dudek|Junior Women': { Rank: 10 },

  // Junior Men
  'Max Alran|Junior Men': { Rank: 1 },
  'Asa Vermette|Junior Men': { Rank: 2 },
  'Rafael Pelletier|Junior Men': { Rank: 3 },
  'Dane Jewett|Junior Men': { Rank: 4 },
  'Raphael Giambi|Junior Men': { Rank: 5 },
  'Mylann Falquet|Junior Men': { Rank: 6 },
  'Christian Hauser|Junior Men': { Rank: 7 },
  'Till Alran|Junior Men': { Rank: 8 },
  'Zac Bradley|Junior Men': { Rank: 9 },
  'Daniel Parfitt|Junior Men': { Rank: 10 },
  'Jon Mozell|Junior Men': { Rank: 11 },
  'Oriol Cuadrat|Junior Men': { Rank: 12 },
  'Mike Huter|Junior Men': { Rank: 13 },
  'Ryder Lawrence|Junior Men': { Rank: 14 },
  'Gavin Tomlinson|Junior Men': { Rank: 15 },
  'Noa Hirst Walker|Junior Men': { Rank: 16 },
  'Rudi Eichhorn|Junior Men': { Rank: 17 },
  'Oli Clark|Junior Men': { Rank: 18 },
  'Luke Wayman|Junior Men': { Rank: 19 },
  'Loick Hudon|Junior Men': { Rank: 20 },
  'Seth Stylie|Junior Men': { Rank: 21 },
  'George Madley|Junior Men': { Rank: 22 },
  'William Pugh|Junior Men': { Rank: 23 },
  'Ryan Griffith|Junior Men': { Rank: 24 },
  'Jack Macleod|Junior Men': { Rank: 25 },
};

const statsCsvPath =
  'apps/val-di-sole/src/assets/Val di Sole Advanced Stats.csv';

await analyzeRound('Val di Sole', statsCsvPath, results);
