import { analyzeRound } from './analyze-round.js';
import { testStatsCsvPath } from './asset-path.js';

const testResults = {
  'Abigail Hogie|Elite Women': { semiRank: 1 },
};

describe('analyzeRound', () => {
  it('should work', async () => {
    const consoleSpy = vi.spyOn(console, 'log');

    await analyzeRound('Test Round', testStatsCsvPath, testResults);

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
