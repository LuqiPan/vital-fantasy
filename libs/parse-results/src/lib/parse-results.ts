import { parseCsv } from '@vital-fantasy/parse-csv';
import { Rider } from '@vital-fantasy/constants';

type Result = {
  semiRank: number;
};

type Results = {
  [key: string]: Result;
};

export { Result, Results };

export async function parseResults(
  rstream: NodeJS.ReadableStream,
  riderNameIndex: number,
  riderClassIndex: number,
  riderSemiRankIndex: number
): Promise<Results> {
  const records = await parseCsv(rstream);

  const stats = records.reduce((acc: Results, record) => {
    const rider = new Rider(record[riderNameIndex], record[riderClassIndex]);
    acc[rider.toString()] = {
      semiRank: Number(record[riderSemiRankIndex]),
    };
    return acc;
  }, {});

  return stats;
}
