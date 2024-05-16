import { parseStats } from '@vital-fantasy/parse-stats';
import { parseResults } from '@vital-fantasy/parse-results';
import { combine } from '@vital-fantasy/combine';

(async () => {
  try {
    const fs = require('fs');

    const statsCsv = fs.createReadStream(
      'apps/ft-bill/src/assets/Fort William Advanced Stats.csv'
    );
    const stats = await parseStats(statsCsv);

    const resultsCsv = fs.createReadStream(
      'apps/ft-bill/src/assets/ft-bill-results.csv'
    );
    const results = await parseResults(resultsCsv);

    const { predictions, outliers } = combine(stats, results);
    console.log(predictions);
    console.log(outliers);
  } catch (e) {
    console.log('ERROR', e);
    process.exit(1);
  }
})();
