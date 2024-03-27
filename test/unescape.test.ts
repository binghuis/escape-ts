import { it } from "vitest";
import { unescapeString } from "../src/index";
import { escapedString, unescapedString } from "./case";

it("测试反转义", () => {
  unescapeString(escapedString) === unescapedString;
});
