import { sampleCsv } from './constants';

describe('constants', () => {
  it('should work', () => {
    expect(sampleCsv.indexOf("\n")).not.toEqual(-1);
  });
});
