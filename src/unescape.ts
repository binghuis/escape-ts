// `unescape` method
// https://tc39.es/ecma262/#sec-unescape-string

// https://github.com/zloirock/core-js?tab=readme-ov-file#ecmascript-string-and-regexp

export function unescapeHtml(text: string) {
  const fromCharCode = String.fromCharCode;
  const hex2 = /^[\da-f]{2}$/i;
  const hex4 = /^[\da-f]{4}$/i;

  const str = String(text);
  const length = str.length;

  let result = "";
  let index = 0;
  let chr, part;

  while (index < length) {
    chr = str.charAt(index++);
    if (chr === "%") {
      if (str.charAt(index) === "u") {
        part = str.slice(index + 1, index + 5);
        if (hex4.exec(part)) {
          result += fromCharCode(parseInt(part, 16));
          index += 5;
          continue;
        }
      } else {
        part = str.slice(index, index + 2);
        if (hex2.exec(part)) {
          result += fromCharCode(parseInt(part, 16));
          index += 2;
          continue;
        }
      }
    }
    result += chr;
  }
  return result;
}

// export function unescapeHtml(text: string) {
//   // 将 %uXXXX 格式的编码转换为对应的字符
//   text = text.replace(/%u([0-9A-Fa-f]{4})/g, function (match, p1) {
//     return String.fromCharCode(parseInt(p1, 16))
//   })

//   // 将字符串中的 %XX 替换为对应的字符
//   text = text.replace(/%([0-9A-Fa-f]{2})/g, function (match, p1) {
//     return String.fromCharCode(parseInt(p1, 16))
//   })
//   return text
// }
