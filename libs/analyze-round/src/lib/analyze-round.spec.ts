import { analyzeRound } from './analyze-round';
import { testStatsCsvPath, testResultsCsvPath } from '@vital-fantasy/constants';

describe('analyzeRound', () => {
  it('should work', async () => {
    const consoleSpy = vi.spyOn(console, 'log');

    await analyzeRound('Test Round', testStatsCsvPath, testResultsCsvPath);

    expect(consoleSpy).toHaveBeenCalledTimes(5);
    expect(consoleSpy).toHaveBeenNthCalledWith(
      1,
      '---Test Round Predictions---'
    );
    expect(consoleSpy).toHaveBeenNthCalledWith(
      4,
      '\n---Test Round Outliers---'
    );
    expect(consoleSpy).toHaveBeenLastCalledWith(undefined);
  });
});
