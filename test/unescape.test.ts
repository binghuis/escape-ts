import { it } from "vitest";
import { unescapeHtml } from "../src/index";
import { escapedString, unescapedString } from "./case";

it("测试反转义", () => {
  unescapeHtml(escapedString) === unescapedString;
});
