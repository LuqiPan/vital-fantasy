/// <reference types='vitest' />
import { defineConfig } from 'vitest/config';

import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/libs/string-for-print',

  plugins: [nxViteTsPaths()],

  test: {
    globals: true,
    environment: 'node',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    watch: false,

    reporters: ['default'],
    coverage: {
      enabled: true,
      reportsDirectory: '../../coverage/libs/string-for-print',
      provider: 'istanbul',
    },
  },
});
