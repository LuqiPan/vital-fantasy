import { analyzeRound } from '@vital-fantasy/analyze-round';

const statsCsvPath = 'apps/ft-bill/src/assets/Fort William Advanced Stats.csv';
const resultsCsvPath = 'apps/ft-bill/src/assets/ft-bill-results.csv';

analyzeRound('Fort William', statsCsvPath, resultsCsvPath);
