import { it } from "vitest";
import { escapeHtml } from "../src/index";
import { escapedString, unescapedString } from "./case";

it("测试转义", () => {
  escapeHtml(unescapedString) === escapedString;
});
