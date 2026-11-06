// Local package/asset experiment. No Cloudflare API calls or application secrets.
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { mkdtempSync, readFileSync, readdirSync, mkdirSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { tmpdir } from 'node:os';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
// Reuse an installed Miniflare; do not install or mutate component dependencies.
const dependencyManifest = path.resolve(process.argv[2] || path.join(root, '../server/package.json'));
const require = createRequire(dependencyManifest);
const { Miniflare, convertV4MiniflareOptions } = require('miniflare');
const work = mkdtempSync(path.join(tmpdir(), 'arc-cloudflare-probe-'));
const demo = path.join(work, 'demo');
const id = 'arc-cf-research-demo';
const run = args => execFileSync('arc', args, { cwd: work, encoding: 'utf8', timeout: 60_000 });
const versions = { node: process.version, arc: run(['--version']).trim(), miniflare: require('miniflare/package.json').version };
const steps = [];
for (const args of [
  ['blocklet', 'create', demo, '--name', id, '--recipe', 'minimal-app'],
  ['dsl', 'validate', demo],
  ['blocklet', 'check', demo, '--profile', 'minimal-app'],
  ['blocklet', 'build', demo],
  ['blocklet', 'deploy', demo, '--cloud', 'none', '--project', id, '--staging-root', path.join(work, 'staging')],
]) steps.push({ args, output: run(args) });

const staging = path.join(work, 'staging', id);
const json = file => JSON.parse(readFileSync(file, 'utf8'));
const manifest = json(path.join(staging, '.afs/manifest.json'));
assert.equal(manifest.type, 'readonly-tree');
for (const file of manifest.files) {
  const bytes = readFileSync(path.join(staging, file.path));
  assert.equal(bytes.length, file.size, file.path);
  assert.equal(createHash('sha256').update(bytes).digest('hex'), file.sha256, file.path);
}
const files = readdirSync(staging, { recursive: true }).map(String);
const entrypoints = files.filter(file => /(^|[/\\])(index\.html|_worker\.js)$/.test(file));
const distribution = json(path.join(demo, 'dist/blocklet.dist.json'));

// Explicit options bypass Wrangler project/env discovery entirely. This is a
// Workers Static Assets control, not the Pages production stack or an ARC host.
const options = {
  modules: true,
  script: 'export default {fetch(request, env) {return env.ASSETS.fetch(request)}}',
  compatibilityDate: '2026-10-26',
  host: '127.0.0.1', port: 0,
  assets: { directory: staging, binding: 'ASSETS' },
  outboundService: () => new Response('Outbound disabled in this probe', { status: 502 }),
};
const mf = new Miniflare(convertV4MiniflareOptions ? convertV4MiniflareOptions(options) : options);
const routes = [];
try {
  await mf.ready;
  for (const [route, expectedStatus] of [
    ['/', 404], ['/.afs/manifest.json', 200], ['/.afs/bundle.json', 200],
    [`/${id}/.afs/preflight.json`, 200], [`/${id}/.aup/app.aup`, 200],
    ['/app', 404], [`/${id}/`, 404],
  ]) {
    const response = await mf.dispatchFetch('http://demo.test' + route);
    const body = await response.arrayBuffer();
    routes.push({ route, status: response.status, contentType: response.headers.get('content-type'), bytes: body.byteLength });
    assert.equal(response.status, expectedStatus, route);
  }
} finally {
  await mf.dispose();
}
assert.deepEqual(entrypoints, [], 'Reassess the conclusion if ARC starts emitting an HTTP runtime entrypoint');
const output = path.join(root, 'artifacts/arc-cloudflare-probe');
mkdirSync(output, { recursive: true });
const result = {
  timestamp: new Date().toISOString(), versions, work, staging,
  verifiedManifestEntries: manifest.files.length, entrypoints,
  instance: distribution.instance, routes,
  acceptance: 'Local ARC packaging and workerd static-asset delivery only. No hosted ARC, Pages production, browser, login, state writes or remote deployment acceptance.',
};
writeFileSync(path.join(output, 'results.json'), JSON.stringify(result, null, 2) + '\n');
writeFileSync(path.join(output, 'commands.json'), JSON.stringify(steps, null, 2) + '\n');
console.log(JSON.stringify(result, null, 2));
console.log(`Evidence: ${output}`);
