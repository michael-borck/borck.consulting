import fs from 'node:fs';
import path from 'node:path';

let cache = null;

function readFrontmatter(text) {
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return {};
  const data = {};
  for (const line of match[1].split(/\r?\n/)) {
    const entry = line.match(/^([A-Za-z]+):\s*(.*)$/);
    if (!entry) continue;
    data[entry[1]] = entry[2].trim().replace(/^["']|["']$/g, '');
  }
  return data;
}

function readCollection(dir, kind) {
  const base = path.join(process.cwd(), 'src', 'content', dir);
  const entries = new Map();
  if (!fs.existsSync(base)) return entries;
  for (const file of fs.readdirSync(base)) {
    if (!file.endsWith('.md') || file.startsWith('._')) continue;
    const frontmatter = readFrontmatter(fs.readFileSync(path.join(base, file), 'utf8'));
    const slug = frontmatter.slug || file.replace(/\.md$/, '');
    let live = frontmatter.draft !== 'true';
    if (kind === 'essays' && frontmatter.publishDate) {
      const published = Date.parse(frontmatter.publishDate);
      if (!Number.isNaN(published)) live = live && published <= Date.now();
    }
    entries.set(slug, live);
  }
  return entries;
}

function loadLiveEntries() {
  return {
    writing: readCollection('essays', 'essays'),
    resources: readCollection('resources', 'resources'),
  };
}

function walk(node, type, visit) {
  if (!node || typeof node !== 'object') return;
  if (node.type === type) visit(node);
  for (const value of Object.values(node)) {
    if (Array.isArray(value)) {
      for (const child of value) walk(child, type, visit);
    } else if (value && typeof value === 'object') {
      walk(value, type, visit);
    }
  }
}

export default function remarkLiveInternalLinks() {
  return (tree) => {
    if (process.env.NODE_ENV === 'development') return;
    if (!cache) cache = loadLiveEntries();
    walk(tree, 'link', (node) => {
      const match = (node.url || '').match(/^\/(writing|resources)\/([^/?#]+)\/?$/);
      if (!match) return;
      const [, section, slug] = match;
      const live = cache[section].get(slug);
      if (live === false) node.url = `/${section}`;
    });
  };
}
