import test from "node:test";
import assert from "node:assert/strict";
import { getAlternateLocalePath, getLocaleFromPathname } from "../src/lib/locale.js";

test("identifies the locale from portfolio paths", () => {
  assert.equal(getLocaleFromPathname("/"), "pt");
  assert.equal(getLocaleFromPathname("/work/5.mirofish"), "pt");
  assert.equal(getLocaleFromPathname("/en"), "en");
  assert.equal(getLocaleFromPathname("/en/work/5.mirofish"), "en");
});

test("preserves the equivalent page when switching languages", () => {
  assert.equal(getAlternateLocalePath("/"), "/en");
  assert.equal(getAlternateLocalePath("/work/5.mirofish"), "/en/work/5.mirofish");
  assert.equal(getAlternateLocalePath("/en"), "/");
  assert.equal(getAlternateLocalePath("/en/work/5.mirofish"), "/work/5.mirofish");
});
