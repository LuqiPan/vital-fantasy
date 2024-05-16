import { parseFiles } from '@vital-fantasy/parse-files';
import { stringForPrint } from '@vital-fantasy/string-for-print';

(async () => {
  const statsCsvPath =
    'apps/ft-bill/src/assets/Fort William Advanced Stats.csv';

  const resultsCsvPath = 'apps/ft-bill/src/assets/ft-bill-results.csv';

  const { predictions, outliers } = await parseFiles(
    statsCsvPath,
    resultsCsvPath
  );

  console.log('---Fort William Predictions---');
  console.log('Points Per Cost \t|\tRank \t|\tCost \t|\tRider');
  console.log(stringForPrint(predictions));

  console.log('\n---Fort William Outliers---');
  console.log(outliers);
})();
