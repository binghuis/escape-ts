// `escape` method
// https://tc39.es/ecma262/#sec-escape-string

const raw = /[\w*+\-./@]/;

const hex = function (code: number, length: number) {
  let result = code.toString(16);
  while (result.length < length) result = "0" + result;
  return result;
};

export const escapeHtml = (string: string) => {
  const str = string;
  let result = "";
  const length = str.length;
  let index = 0;
  let chr, code;
  while (index < length) {
    chr = str.charAt(index++);
    if (raw.exec(chr)) {
      result += chr;
    } else {
      code = chr.charCodeAt(0);
      if (code < 256) {
        result += "%" + hex(code, 2);
      } else {
        result += "%u" + hex(code, 4).toUpperCase();
      }
    }
  }
  return result;
};
