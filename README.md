# VitalFantasy

### TODO

- try rollup again
- try nx-biome
- only use nx cloud cache on CI
- prettier
- semiRank
- use enum for PointsBreakdown in constants
- DRY parseStats and parseResults

### Notes

- switch from esbuild to swc/tsc
  - need `"external": "none"` to bundle everything, but `external` will be
    deprecated in Nx 20
- switch from esbuild to rollup
  - rollup requires a lib specific package.json file, which becomes contagious,
    meaning, all libs imported into current lib would also need package.json files
- switch from esbuild to vite
  - vite is for web development, node.js modules cannot be used in browser,
    manual node polyfill will fail at `import { finished } from 'stream/promises'`
