# escape-ts

此项目方法 `escapeString`、`unescapeString` 是 [JS 标准库](https://github.com/zloirock/core-js) `escape`、`unescape` 方法的 TypeScript 实现。

尽管 `escape` 和 `unescape` 方法在当前 web 标准中已被移除。

但是由于它们和 `encodeURI`、`encodeURIComponent` 的转义规则不一样。

因此为了兼容一些老代码，特意保留了此备份。

## 使用

`pnpm i escape-ts`

`import { escapeString, unescapeString } from 'escape-ts'`
