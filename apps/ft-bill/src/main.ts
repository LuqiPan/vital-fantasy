import { parseFiles } from '@vital-fantasy/analyze-round';
import { stringForPrint } from '@vital-fantasy/string-for-print';
import {
  statsRiderNameIndex,
  statsRiderClassIndex,
  statsRiderCostIndex,
} from '@vital-fantasy/constants';
import {
  resultsRiderNameIndex,
  resultsRiderClassIndex,
  resultsRiderSemiRankIndex,
} from '@vital-fantasy/constants';

const statsCsvPath = 'apps/ft-bill/src/assets/Fort William Advanced Stats.csv';
const resultsCsvPath = 'apps/ft-bill/src/assets/ft-bill-results.csv';

const analyzeRound = async (
  round: string,
  statsCsvPath: string,
  resultsCsvPath: string
) => {
  const { predictions, outliers } = await parseFiles(
    statsCsvPath,
    statsRiderNameIndex,
    statsRiderClassIndex,
    statsRiderCostIndex,
    resultsCsvPath,
    resultsRiderNameIndex,
    resultsRiderClassIndex,
    resultsRiderSemiRankIndex
  );

  console.log(`---${round} Predictions---`);
  console.log('Points Per Cost \t|\tRank \t|\tCost \t|\tRider');
  console.log(stringForPrint(predictions));

  console.log(`\n---${round} Outliers---`);
  console.log(outliers);
};

analyzeRound('Fort William', statsCsvPath, resultsCsvPath);
