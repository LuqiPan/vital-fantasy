import { Predictions } from '@vital-fantasy/combine';

export function stringForPrint(predictions: Predictions): string {
  return Object.entries(predictions)
    .sort((e1, e2) => {
      return e2[1].PointsPerCost - e1[1].PointsPerCost;
    })
    .map(
      (e) =>
        e[1].PointsPerCost.toFixed(20) +
        '\t|\t' +
        e[1].SemiRank +
        '\t|\t' +
        e[1].Cost +
        '\t|\t' +
        e[0],
    )
    .reduce((s, e) => s + '\n' + e);
}
