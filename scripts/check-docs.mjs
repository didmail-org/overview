import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import MarkdownIt from 'markdown-it';
import GithubSlugger from 'github-slugger';
import { parseFragment } from 'parse5';

const markdown = new MarkdownIt({ html: true });
const inside = (root, target) => {
  const relative = path.relative(root, target);
  return relative !== '..' && !relative.startsWith('..' + path.sep) && !path.isAbsolute(relative);
};
function localPath(root, target) {
  if (!inside(root, target)) throw new Error('local link leaves this repository');
  const real = fs.realpathSync(target);
  if (!inside(root, real)) throw new Error('symlink leaves this repository');
  return real;
}
function parse(text) {
  const tokens = markdown.parse(text, {});
  const slugger = new GithubSlugger();
  const anchors = new Set();
  const links = [];
  let titles = 0;
  for (let i = 0; i < tokens.length; i++) {
    if (tokens[i].type !== 'heading_open') continue;
    const heading = (tokens[i + 1]?.children || [])
      .filter(token => token.type !== 'html_inline')
      .map(token => token.content)
      .join('');
    tokens[i].attrSet('id', slugger.slug(heading));
  }
  const collect = node => {
    if (node.tagName === 'h1') titles++;
    for (const attribute of node.attrs || []) {
      if (attribute.name === 'id' || (node.tagName === 'a' && attribute.name === 'name')) {
        anchors.add(attribute.value);
      }
      if ((node.tagName === 'a' && attribute.name === 'href') ||
          (node.tagName === 'img' && attribute.name === 'src')) {
        links.push(attribute.value);
      }
    }
    for (const child of node.childNodes || []) collect(child);
  };
  // Build one inert HTML tree to preserve surrounding comments, quoted
  // attributes and template context. No browser or script execution is used.
  collect(parseFragment(markdown.renderer.render(tokens, markdown.options, {})));
  return { anchors, links, titles };
}

// Check documents without executing HTML or fetching remote/private URLs.
export function checkDocuments(directory, files) {
  const root = fs.realpathSync(directory);
  const errors = [];
  const cache = new Map();
  const read = target => {
    const real = localPath(root, target);
    if (!cache.has(real)) cache.set(real, parse(fs.readFileSync(real, 'utf8')));
    return cache.get(real);
  };
  if (!files.length) errors.push('No tracked Markdown documents found.');
  for (const file of files) {
    try {
      const source = path.resolve(root, file);
      const document = read(source);
      if (document.titles !== 1) errors.push(`${file}: expected one H1, found ${document.titles}`);
      for (const href of document.links) {
        if (/^[a-z][a-z\d+.-]*:/i.test(href) || href.startsWith('//')) continue;
        try {
          const hash = href.indexOf('#');
          const fragment = hash === -1 ? '' : decodeURIComponent(href.slice(hash + 1));
          const pathname = decodeURIComponent((hash === -1 ? href : href.slice(0, hash)).split('?')[0]);
          if (pathname.startsWith('/')) throw new Error('use a repository-relative local link');
          const target = localPath(root, pathname ? path.resolve(path.dirname(source), pathname) : source);
          if (fragment && /\.md$/i.test(target) && !read(target).anchors.has(fragment)) {
            throw new Error(`missing heading or anchor #${fragment}`);
          }
        } catch (error) {
          errors.push(`${file}: ${href}: ${error.message}`);
        }
      }
    } catch (error) {
      errors.push(`${file}: ${error.message}`);
    }
  }
  return errors;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const root = path.resolve(import.meta.dirname, '..');
  const files = execFileSync('git', ['ls-files', '-z', '--', '*.md'], { cwd: root })
    .toString().split('\0').filter(Boolean);
  const errors = checkDocuments(root, files);
  if (errors.length) {
    console.error(errors.join('\n'));
    process.exitCode = 1;
  } else {
    console.log(`Checked ${files.length} tracked Markdown documents: local links, anchors and H1 titles passed. Remote URLs were not fetched.`);
  }
}
