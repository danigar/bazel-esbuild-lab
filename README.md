## ESBUILD test lab repo

This repository has been created to setup building a simple webapp using esbuild.
The build fails because bad dependencies resolution importing `@mui/material`.

`@mui/material` depends on `@emotion/react` that depends on v1.1.0 of `@emotion/utils`, but the rule looks for emotion/utils dep in node_modules/@emotion/utils (version 0.11.3) instead of in node_modules/@emotion/react/node_modules/@emotion/utils (right version).

### Repro steps

`bazel build //pkg/front/app:bundle` throws ✘ [ERROR] No matching export in "bazel-out/darwin_arm64-fastbuild/bin/external/npm/node_modules/@emotion/utils/dist/utils.browser.esm.js" for import "registerStyles"


It works if you run the app with webpack dev server instead of esbuild!

`bazel run //pkg/front/app:dev_server`
