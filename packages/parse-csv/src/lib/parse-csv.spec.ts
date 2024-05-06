import { parseCsv } from './parse-csv';
import { Readable } from 'stream';

const rStream = Readable.from(`Rider,Class
Abigail Hogie,Elite Women`);

describe('parseCsv', () => {
  it('should work', async () => {
    expect(await parseCsv(rStream)).toEqual([['Abigail Hogie', 'Elite Women']]);
  });
});
