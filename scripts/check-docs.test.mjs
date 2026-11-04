import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { checkDocuments } from './check-docs.mjs';

function fixture(files, run) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'didmail-docs-'));
  try {
    for (const [name, content] of Object.entries(files)) {
      fs.mkdirSync(path.dirname(path.join(root, name)), { recursive: true });
      fs.writeFileSync(path.join(root, name), content);
    }
    run(root);
  } finally {
    fs.rmSync(root, { recursive: true, force: true });
  }
}

test('checks real Markdown references, encoded paths, duplicate/Unicode headings and images without fetching remote URLs', () => {
  fixture({
    'README.md': '# Overview\n[guide][g]\n[g]: <docs/a (b).md#重复-1>\n![mark](mark.svg)\n[private](https://private.invalid/no-network)\n```md\n[example](missing.md)\n```\n',
    'docs/a (b).md': '# Guide\n## 重复\n## 重复\n',
    'mark.svg': '<svg/>',
  }, root => assert.deepEqual(checkDocuments(root, ['README.md', 'docs/a (b).md']), []));
});

test('a missing document or image fails with its source and target', () => {
  fixture({ 'README.md': '# Overview\n[guide](missing.md)\n![mark](absent.svg)\n' }, root => {
    const errors = checkDocuments(root, ['README.md']);
    assert.equal(errors.length, 2);
    assert.match(errors[0], /README\.md: missing\.md:/);
    assert.match(errors[1], /absent\.svg/);
  });
});

test('broken fragments fail while real Markdown and explicit HTML anchors pass', () => {
  fixture({ 'README.md': '# Overview\n## **A & B**\n<a id="manual"></a>\n[ok](#a--b)\n[manual](#manual)\n[broken](#missing)\n' }, root => {
    assert.deepEqual(checkDocuments(root, ['README.md']), ['README.md: #missing: missing heading or anchor #missing']);
  });
});

test('comments, inert template contents and attribute text cannot invent HTML anchors', () => {
  fixture({
    'README.md': '# Overview\n<!-- <a id="comment"></a> -->\n<a title="example id=\'attribute\'"></a>\n<template><a id="inert"></a></template>\n[comment](#comment)\n[attribute](#attribute)\n[inert](#inert)\n',
  }, root => {
    const errors = checkDocuments(root, ['README.md']);
    assert.equal(errors.length, 3);
    assert.ok(errors.every(error => /missing heading or anchor/.test(error)));
  });
});

test('local links cannot escape the repository or rely on sibling checkouts', () => {
  fixture({ 'README.md': '# Overview\n[old](../other/README.md)\n[absolute](/etc/passwd)\n' }, root => {
    const errors = checkDocuments(root, ['README.md']);
    assert.equal(errors.length, 2);
    assert.match(errors[0], /leaves this repository/);
    assert.match(errors[1], /repository-relative/);
  });
});

test('symlinks cannot make external files count as repository documentation', () => {
  fixture({ 'README.md': '# Overview\n[external](outside)\n' }, root => {
    fs.symlinkSync(os.tmpdir(), path.join(root, 'outside'));
    assert.match(checkDocuments(root, ['README.md'])[0], /symlink leaves this repository/);
  });
});

test('missing and repeated page titles, and an empty input set, fail', () => {
  fixture({ 'none.md': 'No title\n', 'two.md': '# One\n# Two\n' }, root => {
    assert.equal(checkDocuments(root, ['none.md', 'two.md']).length, 2);
    assert.equal(checkDocuments(root, []).length, 1);
  });
});
