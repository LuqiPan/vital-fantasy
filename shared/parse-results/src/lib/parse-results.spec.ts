import { parseResults } from './parse-results';
import { Readable } from 'stream';

const rStream = Readable.from(`Rider,Class,"Semi Rank"
"Abigail Hogie","Elite Women",1`);

describe('parseResults', () => {
  it('should work', async () => {
    const results = await parseResults(rStream);
    expect(results).toEqual({
      'Abigail Hogie|Elite Women': { semiRank: 1 },
    });
  });
});
