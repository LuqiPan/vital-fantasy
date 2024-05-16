import { parseStats } from '@vital-fantasy/parse-stats';
import { parseResults } from '@vital-fantasy/parse-results';
import { combine, ReturnValues } from '@vital-fantasy/combine';
import * as fs from 'fs';

export async function parseFiles(
  statsCsvPath: string,
  resultsCsvPath: string
): Promise<ReturnValues> {
  const statsCsv = fs.createReadStream(statsCsvPath);
  const stats = await parseStats(statsCsv);

  const resultsCsv = fs.createReadStream(resultsCsvPath);
  const results = await parseResults(resultsCsv);

  return combine(stats, results);
}
