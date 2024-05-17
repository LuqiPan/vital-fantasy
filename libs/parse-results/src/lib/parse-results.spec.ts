import { parseResults } from './parse-results';
import { Readable } from 'stream';
import {
  resultsRiderNameIndex,
  resultsRiderClassIndex,
  resultsRiderSemiRankIndex,
} from '@vital-fantasy/constants';

const rStream = Readable.from(`Class,Rider,"Semi Rank"
"Elite Women","Abigail Hogie",1`);

describe('parseResults', () => {
  it('should work', async () => {
    const results = await parseResults(
      rStream,
      resultsRiderNameIndex,
      resultsRiderClassIndex,
      resultsRiderSemiRankIndex
    );
    expect(results).toEqual({
      'Abigail Hogie|Elite Women': { semiRank: 1 },
    });
  });
});
