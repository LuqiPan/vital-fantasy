import { parseStatsCsv } from './parse-files.js';
import { combine } from '@vital-fantasy/combine';
import { stringForPrint } from '@vital-fantasy/string-for-print';
import { Results } from '@vital-fantasy/types';

import {
  statsRiderNameIndex,
  statsRiderClassIndex,
  statsRiderCostIndex,
} from '@vital-fantasy/constants';

export const analyzeRound = async (
  round: string,
  statsCsvPath: string,
  results: Results,
) => {
  const stats = await parseStatsCsv(
    statsCsvPath,
    statsRiderNameIndex,
    statsRiderClassIndex,
    statsRiderCostIndex,
  );

  const { predictions, outliers } = combine(stats, results);

  console.log(`---${round} Predictions---`);
  console.log('Points Per Cost \t|\tRank \t|\tCost \t|\tRider');
  console.log(stringForPrint(predictions));

  console.log(`\n---${round} Outliers---`);
  console.log(outliers);
};
