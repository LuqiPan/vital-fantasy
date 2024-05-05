import { finished } from 'stream/promises';
import { parse } from 'csv-parse';

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
  const stats: Stats = {};
  let firstRow = true;

  const parser = parse();

  parser.on('readable', function () {
    let record;
    while ((record = parser.read()) !== null) {
      if (firstRow) {
        firstRow = false;
        continue;
      }

      const rider = new Rider(record[0], record[3]);
      stats[rider.toString()] = { cost: Number(record[4]) };
    }
  });
  // Catch any error
  parser.on('error', function (err) {
    console.error('error', err.message);
  });

  rstream.pipe(parser);

  await finished(rstream);
  return stats;
}
