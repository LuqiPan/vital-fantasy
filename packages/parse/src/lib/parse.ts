import { finished } from 'node:stream/promises';
const csvParser = require('csv-parser');

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
  var stats: Stats = {};
  var firstRow = true;

  rstream
    .pipe(
      csvParser({
        mapHeaders: (header: string) =>
          header.replaceAll(' ', '').replaceAll('-', ''),
      })
    )
    .on('data', (row: any) => {
      if (firstRow) {
        firstRow = false;
        return;
      }

      const rider = new Rider(row['_0'], row['_3']);

      stats[rider.toString()] = {
        cost: Number(row['_4']),
      };
    });

  await finished(rstream);
  return stats;
}
