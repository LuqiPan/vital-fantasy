import { parse } from 'csv-parse';
import { finished } from 'stream/promises';

export async function parseCsv(rstream: NodeJS.ReadableStream) {
  const records: any[] = [];
  let firstRow = true;

  const parser = parse();

  parser.on('readable', function () {
    let record;
    while ((record = parser.read()) !== null) {
      if (firstRow) {
        firstRow = false;
        continue;
      }

      records.push(record);
    }
  });

  // Catch any error
  parser.on('error', function (err) {
    console.error('parser error:', err.message);
  });

  rstream.pipe(parser);

  await finished(rstream);

  return records;
}
