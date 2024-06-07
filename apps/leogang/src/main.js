import { analyzeRound } from '@vital-fantasy/analyze-round';

const results = {
  'Vali Holl|Elite Women': { Rank: 1 },
  'Gloria Scarsi|Elite Women': { Rank: 9 },
  'Frida Helena Ronning|Elite Women': { Rank: 12 },
  'Troy Brosnan|Elite Men': { Rank: 1 },
};

const statsCsvPath = 'apps/leogang/src/assets/Leogang Advanced Stats.csv';

await analyzeRound('Leogang', statsCsvPath, results);
