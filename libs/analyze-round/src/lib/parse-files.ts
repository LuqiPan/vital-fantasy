import { parseStats, Stats } from '@vital-fantasy/parse-stats';
import * as fs from 'fs';

export const parseStatsCsv = async function (
  statsCsvPath: string,
  statsRiderNameIndex: number,
  statsRiderClassIndex: number,
  statsRiderCostIndex: number,
): Promise<Stats> {
  const statsCsv = fs.createReadStream(statsCsvPath);
  return parseStats(
    statsCsv,
    statsRiderNameIndex,
    statsRiderClassIndex,
    statsRiderCostIndex,
  );
};
