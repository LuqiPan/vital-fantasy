import { parseCsv } from './parse-csv';
import { Readable } from 'stream';
import { sampleCsv } from '@vital-fantasy/constants';

describe('parseCsv', () => {
  it('should work', async () => {
    const rStream = Readable.from(sampleCsv);
    const rows = await parseCsv(rStream);
    expect(rows.length).toEqual(1);

    const row = rows[0];
    expect(row[0]).toEqual('Abigail Hogie');
    expect(row[3]).toEqual('Elite Women');
    expect(Number(row[4])).toEqual(14000);
  });

  it('log error when there is one', async () => {
    const consoleSpy = vi.spyOn(console, 'error');
    const rStream = Readable.from(`lol
    one,two`);

    const rows = await parseCsv(rStream);
    expect(rows.length).toEqual(0);

    expect(consoleSpy).toHaveBeenCalledOnce();
  });
});
