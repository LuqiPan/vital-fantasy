import { pointsBreakdown } from '@vital-fantasy/constants';
import { combine, ReturnValues } from './combine';
import { Results } from '@vital-fantasy/parse-results';
import { Stats } from '@vital-fantasy/parse-stats';

describe('combine', () => {
  it.each([
    [{}, {}, new ReturnValues()],
    [{ 'Abigail Hogie|Elite Women': { cost: 14000 } }, {}, new ReturnValues()],
    [
      {},
      { 'Abigail Hogie|Elite Women': { semiRank: 1 } },
      new ReturnValues({}, [['Abigail Hogie|Elite Women', '{"semiRank":1}']]),
    ],
    [
      {},
      {
        'Abigail Hogie|Elite Women': { semiRank: 1 },
        'Someone Else|Not Real Class': { semiRank: 1 },
      },
      new ReturnValues({}, [
        ['Abigail Hogie|Elite Women', '{"semiRank":1}'],
        ['Someone Else|Not Real Class', '{"semiRank":1}'],
      ]),
    ],
    [
      { 'Abigail Hogie|Not Real Class': { cost: 14000 } },
      { 'Abigail Hogie|Not Real Class': { semiRank: 1 } },
      new ReturnValues({}, [
        ['Abigail Hogie|Not Real Class', '{"semiRank":1}'],
      ]),
    ],
    [
      { 'Abigail Hogie|Elite Women': { cost: 14000 } },
      { 'Abigail Hogie|Elite Women': { semiRank: 1 } },
      new ReturnValues({
        'Abigail Hogie|Elite Women': {
          PointsPerCost: pointsBreakdown['Elite Women'][0] / 14000,
        },
      }),
    ],
  ])(
    'combine(%s, %s) -> %s',
    (stats: Stats, results: Results, expected: ReturnValues) => {
      expect(expected).toEqual(combine(stats, results));
    }
  );
});
