import { pointsBreakdown } from '@vital-fantasy/constants';
import { parseFiles } from './parse-files';
import { statsRiderNameIndex, statsRiderClassIndex, statsRiderCostIndex } from '@vital-fantasy/constants';

const statsCsvPath = './src/assets/test-stats.csv';
const resultsCsvPath = './src/assets/test-results.csv';

describe('parseFiles', () => {
  it('should work', async () => {
    const { predictions, outliers } = await parseFiles(
      statsCsvPath,
      statsRiderNameIndex,
      statsRiderClassIndex,
      statsRiderCostIndex,
      resultsCsvPath,
      // XXX
      0,
      1,
      2
    );

    expect(predictions).toEqual({
      'Abigail Hogie|Elite Women': {
        PointsPerCost: pointsBreakdown['Elite Women'][1] / 14000,
        SemiRank: 1,
        Cost: 14000,
      },
    });
    expect(outliers).toBeUndefined;
  });
});
