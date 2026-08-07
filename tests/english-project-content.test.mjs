import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const root = new URL("..", import.meta.url).pathname;
const portugueseProjects = path.join(root, "src", "app", "work", "projects");
const englishProjects = path.join(root, "src", "content", "en", "work", "projects");

function mdxNames(directory) {
  return fs.readdirSync(directory).filter((file) => file.endsWith(".mdx")).sort();
}

test("English project content has a matching document for every Portuguese project", () => {
  assert.deepEqual(mdxNames(englishProjects), mdxNames(portugueseProjects));
});

test("English project documents preserve required frontmatter", () => {
  for (const filename of mdxNames(englishProjects)) {
    const source = fs.readFileSync(path.join(englishProjects, filename), "utf8");
    assert.match(source, /^---\n[\s\S]*?title:/, `${filename} has no title frontmatter`);
    assert.match(source, /^---\n[\s\S]*?summary:/, `${filename} has no summary frontmatter`);
    assert.match(source, /^---\n[\s\S]*?publishedAt:/, `${filename} has no publishedAt frontmatter`);
  }
});
