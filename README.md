# VitalFantasy

### TODO

- results don't need to be in csv file
- protected riders
- use enum for PointsBreakdown in constants
- DRY parseStats and parseResults

### Notes

- switch from esbuild to rollup
- switch from esbuild to vite
  - vite is for web development, node.js modules cannot be used in browser,
    manual node polyfill will fail at `import { finished } from 'stream/promises'`
