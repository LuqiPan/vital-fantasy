import { sampleCsv } from './constants';

describe('sampleCsv', () => {
  it('should contain at least one newline', () => {
    expect(sampleCsv.indexOf('\n')).not.toEqual(-1);
  });
});
