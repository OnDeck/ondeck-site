#!/usr/bin/env node
// Adds a release from the extension's release workflow to src/releases.json.
// Usage: node scripts/add-release.mjs <payload.json>
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const RELEASES_PATH = fileURLToPath(new URL('../src/releases.json', import.meta.url));
const TONES = new Set(['red', 'amber', 'green', 'blue', 'purple']);
const MAX_ITEMS = 6;
const MAX_ITEM_LENGTH = 200;

function fail(message) {
  console.error(`❌ ${message}`);
  process.exit(1);
}

function validate(payload) {
  if (typeof payload !== 'object' || payload === null) fail('Payload must be an object');
  const { version, date, tag, tone, items } = payload;
  if (typeof version !== 'string' || !/^\d+\.\d+\.\d+$/.test(version)) fail(`Bad version: ${version}`);
  if (typeof date !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(date)) fail(`Bad date: ${date}`);
  if (typeof tag !== 'string' || !/^[a-z-]{1,20}$/.test(tag)) fail(`Bad tag: ${tag}`);
  if (!TONES.has(tone)) fail(`Bad tone: ${tone}`);
  if (!Array.isArray(items) || items.length === 0) fail('items must be a non-empty array');
  const cleanItems = items.slice(0, MAX_ITEMS).map((item) => {
    if (typeof item !== 'string' || item.trim() === '') fail('Every item must be a non-empty string');
    return item.trim().slice(0, MAX_ITEM_LENGTH);
  });
  return { version, date, tag, tone, items: cleanItems };
}

function compareVersionsDesc(a, b) {
  const pa = a.version.split('.').map(Number);
  const pb = b.version.split('.').map(Number);
  for (let i = 0; i < 3; i++) if (pa[i] !== pb[i]) return pb[i] - pa[i];
  return 0;
}

const payloadPath = process.argv[2];
if (!payloadPath) fail('Usage: node scripts/add-release.mjs <payload.json>');

let payload;
try {
  payload = JSON.parse(readFileSync(payloadPath, 'utf8'));
} catch (error) {
  fail(`Couldn't read payload: ${error.message}`);
}

const release = validate(payload);
const existing = JSON.parse(readFileSync(RELEASES_PATH, 'utf8'));
// Re-running a release replaces its entry rather than duplicating it.
const releases = [release, ...existing.filter((r) => r.version !== release.version)].sort(compareVersionsDesc);

writeFileSync(RELEASES_PATH, `${JSON.stringify(releases, null, 2)}\n`);
console.log(`✅ Added v${release.version} (${releases.length} releases)`);
