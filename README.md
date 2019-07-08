# eslint-plugin-import-webpack-comment-with-regex-bugs
https://github.com/benmosher/eslint-plugin-import/issues/1407
## Steps
1. Run `npm install` or `yarn`
3. Run `npm run lint` or `yarn lint`
```
D:\Projects\eslint-plugin-import-webpack-comment-with-regex-bug\index.js
  1:1  error  dynamic imports require a leading comment in the form /* webpackChunkName: "[0-9a-zA-Z-_/.]+",? */  import/dynamic-import-chunkname

✖ 1 problem (1 error, 0 warnings)
```
