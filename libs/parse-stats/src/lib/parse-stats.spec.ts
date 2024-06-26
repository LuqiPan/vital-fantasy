import { parseStats } from './parse-stats';
import { Readable } from 'stream';
import { sampleCsv } from '@vital-fantasy/constants';
import {
  statsRiderNameIndex,
  statsRiderClassIndex,
  statsRiderCostIndex,
} from '@vital-fantasy/constants';

const rStream = Readable.from(sampleCsv);

describe('parseStats', () => {
  it('should work', async () => {
    const stats = await parseStats(
      rStream,
      statsRiderNameIndex,
      statsRiderClassIndex,
      statsRiderCostIndex,
    );
    expect(stats).toEqual({
      'Abigail Hogie|Elite Women': { cost: 14000 },
    });
  });
});
