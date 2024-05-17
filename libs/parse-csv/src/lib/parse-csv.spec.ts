import { parseCsv } from './parse-csv';
import { Readable } from 'stream';
import { sampleCsv } from '@vital-fantasy/constants';

const rStream = Readable.from(sampleCsv);

describe('parseCsv', () => {
  it('should work', async () => {
    const rows = await parseCsv(rStream);
    expect(rows.length).toEqual(1);

    const row = rows[0];
    expect(row[0]).toEqual('Abigail Hogie');
    expect(row[3]).toEqual('Elite Women');
    expect(Number(row[4])).toEqual(14000);
  });
});
