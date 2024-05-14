import { parseCsv } from '@vital-fantasy/parse-csv';
import { Rider } from '@vital-fantasy/constants';

type Result = {
  semiRank: number;
};

type Results = {
  [key: string]: Result;
};

export async function parseResults(
  rstream: NodeJS.ReadableStream
): Promise<Results> {
  const records = await parseCsv(rstream);

  const stats = records.reduce((acc: Results, record) => {
    const rider = new Rider(record[0], record[1]);
    acc[rider.toString()] = {
      semiRank: Number(record[2]),
    };
    return acc;
  }, {});

  return stats;
}

export { Result, Results };
