import { parseCsv } from '@vital-fantasy/parse-csv';
import { Rider } from '@vital-fantasy/constants';

type Stat = {
  cost: number;
};

type Stats = {
  [key: string]: Stat;
};

export async function parseStats(
  rstream: NodeJS.ReadableStream,
  riderNameIndex: number,
  riderClassIndex: number,
  riderCostIndex: number
): Promise<Stats> {
  const records = await parseCsv(rstream);

  const stats = records.reduce((acc: Stats, record) => {
    const rider = new Rider(record[riderNameIndex], record[riderClassIndex]);
    acc[rider.toString()] = {
      cost: Number(record[riderCostIndex]),
    };
    return acc;
  }, {});

  return stats;
}

export { Stats };
