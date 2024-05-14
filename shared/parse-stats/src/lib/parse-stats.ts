import { parseCsv } from '@vital-fantasy/parse-csv';
import { Rider } from '@vital-fantasy/constants';

type Stat = {
  cost: number;
};

type Stats = {
  [key: string]: Stat;
};

export async function parseStats(
  rstream: NodeJS.ReadableStream
): Promise<Stats> {
  const records = await parseCsv(rstream);

  const stats = records.reduce((acc: Stats, record: any) => {
    const rider = new Rider(record[0], record[3]);
    acc[rider.toString()] = {
      cost: Number(record[4]),
    };
    return acc;
  }, {});

  return stats;
}
