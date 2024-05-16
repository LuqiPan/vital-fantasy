import { parseStats } from '@vital-fantasy/parse-stats';
import { parseResults } from '@vital-fantasy/parse-results';
import { combine, ReturnValues } from '@vital-fantasy/combine';
import * as fs from 'fs';

export async function parseFiles(
  statsCsvPath: string,
  statsRiderNameIndex: number,
  statsRiderClassIndex: number,
  statsRiderCostIndex: number,
  resultsCsvPath: string,
  resultsRiderNameIndex: number,
  resultsRiderClassIndex: number,
  resultsRiderSemiRankIndex: number
): Promise<ReturnValues> {
  const statsCsv = fs.createReadStream(statsCsvPath);
  const stats = await parseStats(statsCsv, statsRiderNameIndex, statsRiderClassIndex, statsRiderCostIndex);

  const resultsCsv = fs.createReadStream(resultsCsvPath);
  const results = await parseResults(resultsCsv, resultsRiderNameIndex, resultsRiderClassIndex, resultsRiderSemiRankIndex);

  return combine(stats, results);
}
