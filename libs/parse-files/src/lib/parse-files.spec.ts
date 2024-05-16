import { pointsBreakdown } from '@vital-fantasy/constants';
import { parseFiles } from '@vital-fantasy/parse-files';

const statsCsvPath = './src/assets/test-stats.csv';
const resultsCsvPath = './src/assets/test-results.csv';

describe('parseFiles', () => {
  it('should work', async () => {
    const { predictions, outliers } = await parseFiles(
      statsCsvPath,
      resultsCsvPath
    );

    expect(predictions).toEqual({
      'Abigail Hogie|Elite Women': {
        PointsPerCost: pointsBreakdown['Elite Women'][0] / 14000,
      },
    });
    expect(outliers).toBeUndefined;
  });
});
