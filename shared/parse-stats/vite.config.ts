/// <reference types='vitest' />
import { defineConfig } from 'vitest/config';

import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/shared/parse-stats',

  plugins: [nxViteTsPaths()],

  test: {
    globals: true,

    environment: 'node',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],

    reporters: ['default'],
    coverage: {
      enabled: true,
      reportsDirectory: '../../coverage/shared/parse-stats',
      provider: 'istanbul',
    },
  },
});
