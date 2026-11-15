import { readFileSync, writeFileSync } from 'node:fs';

// Keep in sync with TONE_MAP in src/components/landing/constants.ts
const TONES = ['red', 'amber', 'green', 'blue', 'purple'];
const changelogPath = new URL('../src/components/landing/changelog.json', import.meta.url);

const isText = (value) => typeof value === 'string' && value.trim().length > 0;

function parsePayload(raw) {
  const payload = JSON.parse(raw);
  const valid =
    /^\d+\.\d+\.\d+$/.test(payload?.version) &&
    /^\d{4}-\d{2}-\d{2}$/.test(payload.date) &&
    isText(payload.tag) &&
    TONES.includes(payload.tone) &&
    Array.isArray(payload.items) &&
    payload.items.length > 0 &&
    payload.items.every(isText);

  if (!valid) {
    throw new Error(`Invalid changelog payload: ${raw}`);
  }

  const { version, date, tag, tone, items } = payload;
  return { v: version, d: date, tag, tone, items };
}

const entry = parsePayload(process.env.PAYLOAD ?? '');
const entries = JSON.parse(readFileSync(changelogPath, 'utf8')).filter((existing) => existing.v !== entry.v);

writeFileSync(changelogPath, `${JSON.stringify([entry, ...entries], null, 2)}\n`);
console.log(`Changelog updated to v${entry.v}`);
