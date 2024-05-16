import { Predictions } from '@vital-fantasy/combine';
import { stringForPrint } from './string-for-print';

describe('stringForPrint', () => {
  it('should work', () => {
    const predictions: Predictions = {
      'Lower PPC': {
        PointsPerCost: 0,
      },
      'Higher PPC': {
        PointsPerCost: 250 / 240000,
      },
    };
    const forPrint = stringForPrint(predictions);

    console.log('---Predictions---');
    console.log(forPrint);

    const higherIndex = forPrint.indexOf('Higher PPC');
    const lowerIndex = forPrint.indexOf('Lower PPC');
    expect(higherIndex).toBeLessThan(lowerIndex);
  });
});
