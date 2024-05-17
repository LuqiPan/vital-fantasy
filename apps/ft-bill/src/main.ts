import { analyzeRound } from '@vital-fantasy/analyze-round';

const results = {
  'Vali Holl|Elite Women': { semiRank: 1 },
  'Gloria Scarsi|Elite Women': { semiRank: 9 },
  'Frida Helena Ronning|Elite Women': { semiRank: 12 },
  'Troy Brosnan|Elite Men': { semiRank: 1 },
};

const statsCsvPath = 'apps/ft-bill/src/assets/Fort William Advanced Stats.csv';

await analyzeRound('Fort William', statsCsvPath, results);
