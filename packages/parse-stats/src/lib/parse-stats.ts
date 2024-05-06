import { parseCsv } from '@vital-fantasy/parse-csv';

class Rider {
  private name: string;
  private class: string;

  constructor(name: string, classs: string) {
    this.name = name;
    this.class = classs;
  }

  public toString(): string {
    return `${this.name}|${this.class}`;
  }
}

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

  const stats = records.reduce((acc:Stats, record:any) => {
    const rider = new Rider(record[0], record[3]);
    acc[rider.toString()] = {
      cost: Number(record[4]),
    };
  }, {});

  return stats;
}
