import { Predictions } from '@vital-fantasy/combine';

export function stringForPrint(predictions: Predictions): string {
  return Object.entries(predictions)
    .sort((e1, e2) => {
      return e1[1].PointsPerCost - e2[1].PointsPerCost;
    })
    .map((e) => e[1].PointsPerCost.toString() + ' ' + e[0])
    .reduce((s, e) => s + '\n' + e, '');
}
