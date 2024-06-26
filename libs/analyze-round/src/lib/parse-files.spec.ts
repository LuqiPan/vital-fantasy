import { pointsBreakdown } from '@vital-fantasy/constants';
import { parseStatsCsv } from './parse-files.js';
import { testStatsCsvPath } from './asset-path.js';
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
      statsRiderCostIndex,
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
      statsRiderCostIndex,
    );

    const results = {
      'Abigail Hogie|Elite Women': { Rank: 1 },
    };

    const { predictions, outliers } = combine(stats, results);

    expect(predictions).toEqual({
      'Abigail Hogie|Elite Women': {
        PointsPerCost: pointsBreakdown['Elite Women'][1] / 14000,
        Rank: 1,
        Cost: 14000,
      },
    });
    expect(outliers).toBeUndefined;
  });
});
