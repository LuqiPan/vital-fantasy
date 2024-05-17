import { pointsBreakdown, testStatsCsvPath } from '@vital-fantasy/constants';
import { parseStatsCsv } from './parse-files.js';
import {
  statsRiderNameIndex,
  statsRiderClassIndex,
  statsRiderCostIndex,
} from '@vital-fantasy/constants';
import { combine } from '@vital-fantasy/combine';

describe('parseStatsCsv', () => {
  it('should work', async () => {
    const stats = await parseStatsCsv(
      testStatsCsvPath,
      statsRiderNameIndex,
      statsRiderClassIndex,
      statsRiderCostIndex
    );

    expect(stats).toEqual({
      'Abigail Hogie|Elite Women': { cost: 14000 },
    });
  });
});

describe('parseStatsCsv and testResults', () => {
  it('combine as expected', async () => {
    const stats = await parseStatsCsv(
      testStatsCsvPath,
      statsRiderNameIndex,
      statsRiderClassIndex,
      statsRiderCostIndex
    );

    const results = {
      'Abigail Hogie|Elite Women': { semiRank: 1 },
    };

    const { predictions, outliers } = combine(stats, results);

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
