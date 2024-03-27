import { it } from "vitest";
import { escapeString } from "../src/index";
import { escapedString, unescapedString } from "./case";

it("测试转义", () => {
  escapeString(unescapedString) === escapedString;
});
