import { analyzeRound } from '@vital-fantasy/analyze-round';

const results = {
  'Vali Holl|Elite Women': { Rank: 1 },
  'Gloria Scarsi|Elite Women': { Rank: 9 },
  'Frida Helena Ronning|Elite Women': { Rank: 12 },
  'Troy Brosnan|Elite Men': { Rank: 1 },
};

const statsCsvPath = 'apps/ft-bill/src/assets/Fort William Advanced Stats.csv';

await analyzeRound('Fort William', statsCsvPath, results);
