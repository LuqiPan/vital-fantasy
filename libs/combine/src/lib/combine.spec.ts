import { pointsBreakdown } from '@vital-fantasy/constants';
import { combine, ReturnValues } from './combine';
import { Results } from '@vital-fantasy/types';
import { Stats } from '@vital-fantasy/parse-stats';

describe('combine', () => {
  it.each([
    ['🟡 empty stats and empty results', {}, {}, new ReturnValues()],
    [
      '🟡 one stat and empty results',
      { 'Abigail Hogie|Elite Women': { cost: 14000 } },
      {},
      new ReturnValues(),
    ],
    [
      '🔴 empty stats and one result',
      {},
      { 'Abigail Hogie|Elite Women': { Rank: 1 } },
      new ReturnValues({}, [['Abigail Hogie|Elite Women', '{"Rank":1}']]),
    ],
    [
      '🔴 empty stats and two results',
      {},
      {
        'Abigail Hogie|Elite Women': { Rank: 1 },
        'Someone Else|Not Real Class': { Rank: 1 },
      },
      new ReturnValues({}, [
        ['Abigail Hogie|Elite Women', '{"Rank":1}'],
        ['Someone Else|Not Real Class', '{"Rank":1}'],
      ]),
    ],
    [
      '🔴 one stat and one result with invalid class',
      { 'Abigail Hogie|Not Real Class': { cost: 14000 } },
      { 'Abigail Hogie|Not Real Class': { Rank: 1 } },
      new ReturnValues({}, [['Abigail Hogie|Not Real Class', '{"Rank":1}']]),
    ],
    [
      '🔴 one stat and one result with non-final Rank',
      { 'Abigail Hogie|Elite Women': { cost: 14000 } },
      { 'Abigail Hogie|Elite Women': { Rank: 11 } },
      new ReturnValues({}, [['Abigail Hogie|Elite Women', '{"Rank":11}']]),
    ],
    [
      '🟢 one stat and one valid result',
      { 'Abigail Hogie|Elite Women': { cost: 14000 } },
      { 'Abigail Hogie|Elite Women': { Rank: 1 } },
      new ReturnValues({
        'Abigail Hogie|Elite Women': {
          PointsPerCost: pointsBreakdown['Elite Women'][1] / 14000,
          Rank: 1,
          Cost: 14000,
        },
      }),
    ],
  ])(
    'combine[%s](%s, %s) -> %s',
    (
      testCaseDescription: string,
      stats: Stats,
      results: Results,
      expected: ReturnValues,
    ) => {
      console.log(testCaseDescription);
      expect(expected).toEqual(combine(stats, results));
    },
  );
});
