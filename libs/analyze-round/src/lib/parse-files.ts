import { parseStats, Stats } from '@vital-fantasy/parse-stats';
import { parseResults, Results } from '@vital-fantasy/parse-results';
import * as fs from 'fs';

export const parseStatsCsv = async function (
  statsCsvPath: string,
  statsRiderNameIndex: number,
  statsRiderClassIndex: number,
  statsRiderCostIndex: number
): Promise<Stats> {
  const statsCsv = fs.createReadStream(statsCsvPath);
  return parseStats(
    statsCsv,
    statsRiderNameIndex,
    statsRiderClassIndex,
    statsRiderCostIndex
  );
};

export const parseResultsCsv = async function (
  resultsCsvPath: string,
  resultsRiderNameIndex: number,
  resultsRiderClassIndex: number,
  resultsRiderSemiRankIndex: number
): Promise<Results> {
  const resultsCsv = fs.createReadStream(resultsCsvPath);
  return parseResults(
    resultsCsv,
    resultsRiderNameIndex,
    resultsRiderClassIndex,
    resultsRiderSemiRankIndex
  );
};
