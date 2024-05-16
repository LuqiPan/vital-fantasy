import { pointsBreakdown, Rider } from '@vital-fantasy/constants';
import { Result, Results } from '@vital-fantasy/parse-results';
import { Stats } from '@vital-fantasy/parse-stats';

export type Prediction = {
  PointsPerCost: number;
};

export type Predictions = {
  [key: string]: Prediction;
};

class ReturnValues {
  predictions: Predictions;
  outliers?: [[string, string]];

  constructor(
    predictions: Predictions = {},
    outliers: [[string, string]] | undefined = undefined
  ) {
    this.predictions = predictions;
    this.outliers = outliers;
  }

  recordOutlier(riderString: string, result: Result) {
    if (this.outliers === undefined) {
      this.outliers = [[riderString, JSON.stringify(result)]];
    } else {
      this.outliers.push([riderString, JSON.stringify(result)]);
    }
  }
}

export { ReturnValues };

export function combine(stats: Stats, results: Results): ReturnValues {
  const returnValues = new ReturnValues();

  for (const [riderString, result] of Object.entries(results)) {
    const splits = riderString.split('|');
    const rider = new Rider(splits[0], splits[1]);

    if (!(riderString in stats)) {
      returnValues.recordOutlier(riderString, result);
      continue;
    }

    if (!(rider.Class in pointsBreakdown)) {
      returnValues.recordOutlier(riderString, result);
      continue;
    }

    const pointsByRank: number[] = pointsBreakdown[rider.Class];
    const points = pointsByRank[result.semiRank - 1];
    returnValues.predictions[riderString] = {
      PointsPerCost: points / stats[riderString].cost,
    };
  }

  return returnValues;
}
