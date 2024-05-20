# VitalFantasy

### TODO

- use enum for PointsBreakdown in constants
- DRY parseStats and parseResults
- try nx-biome
  - https://github.com/biomejs/biome/issues/2228

### Notes

- switch from esbuild to swc/tsc
  - need `"external": "none"` to bundle everything, but `external` will be
    deprecated in Nx 20
- switch from esbuild to rollup
  - https://github.com/LuqiPan/vital-fantasy/tree/rollup
  - everything compiles but output index.esm.js files still contains
    `import '@vital-fantasy/analyze-round` so we're getting errors like
    `Cannot find package '@vital-fantasy/analyze-round'`
  - `"external": "none"` is not doing anything, see swc/tsc bullet point
  - need to experiment with interactions betwen build configurations in nx.json
    and tsconfig.json and rollup.config.js
- switch from esbuild to vite
  - vite is for web development, node.js modules cannot be used in browser,
    manual node polyfill will fail at `import { finished } from 'stream/promises'`
