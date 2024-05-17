import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const testStatsCsvSuffix = '/../assets/test-stats.csv';

export const testStatsCsvPath = __dirname + testStatsCsvSuffix;
