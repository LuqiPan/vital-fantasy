/// <reference types='vitest' />
import { defineConfig } from 'vitest/config';

import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';

export default defineConfig({
  root: __dirname,

  plugins: [nxViteTsPaths()],

  test: {
    globals: true,
    environment: 'node',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    watch: false,

    reporters: ['default', 'junit'],
    outputFile: {
      junit: '../../coverage/libs/types/junit.xml',
    },

    passWithNoTests: true,
  },
});
