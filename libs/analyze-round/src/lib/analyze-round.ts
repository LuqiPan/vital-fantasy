import { parseResultsCsv, parseStatsCsv } from './parse-files';
import { combine } from '@vital-fantasy/combine';
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

export const analyzeRound = async (
  round: string,
  statsCsvPath: string,
  resultsCsvPath: string
) => {
  const stats = await parseStatsCsv(
    statsCsvPath,
    statsRiderNameIndex,
    statsRiderClassIndex,
    statsRiderCostIndex
  );

  const results = await parseResultsCsv(
    resultsCsvPath,
    resultsRiderNameIndex,
    resultsRiderClassIndex,
    resultsRiderSemiRankIndex
  );

  const { predictions, outliers } = combine(stats, results);

  console.log(`---${round} Predictions---`);
  console.log('Points Per Cost \t|\tRank \t|\tCost \t|\tRider');
  console.log(stringForPrint(predictions));

  console.log(`\n---${round} Outliers---`);
  console.log(outliers);
};
