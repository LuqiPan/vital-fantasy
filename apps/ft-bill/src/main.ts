import { parseFiles } from '@vital-fantasy/parse-files';

(async () => {
  const statsCsvPath =
    'apps/ft-bill/src/assets/Fort William Advanced Stats.csv';

  const resultsCsvPath = 'apps/ft-bill/src/assets/ft-bill-results.csv';

  const { predictions, outliers } = await parseFiles(
    statsCsvPath,
    resultsCsvPath
  );
  console.log(predictions);
  console.log(outliers);
})();
