# escape-ts

JS 标准库 escape 和 unescape 方法的 TypeScript 实现。

[![npm version](https://img.shields.io/npm/v/escape-ts)](https://www.npmjs.com/package/escape-ts)

尽管 [JS 标准库](https://github.com/zloirock/core-js)中 `escape` 和 `unescape` 方法在当前 web 标准中已被移除。

但是由于它们和 `encodeURI`、`encodeURIComponent` 方法的转义规则不一样。

因此为了兼容一些老代码，特意保留了此备份。

## 使用

`pnpm i escape-ts`

`import { escapeString, unescapeString } from 'escape-ts'`
