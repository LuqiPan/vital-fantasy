import { parseCsv } from './parse-csv';

describe('parseCsv', () => {
  it('should work', () => {
    expect(parseCsv()).toEqual('parse-csv');
  });
});
