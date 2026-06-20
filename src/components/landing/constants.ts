// Standard Tailwind colors for tone mapping
export const TONE_MAP = {
  red: { c: '#dc2626', bg: '#fee2e2' },       // red-600, red-100
  amber: { c: '#d97706', bg: '#fef3c7' },     // amber-600, amber-100
  green: { c: '#16a34a', bg: '#dcfce7' },     // green-600, green-100
  blue: { c: '#2563eb', bg: '#dbeafe' },      // blue-600, blue-100
  purple: { c: '#9333ea', bg: '#f3e8ff' },    // purple-600, purple-100
};

export type ToneColor = keyof typeof TONE_MAP;

// External links, kept in one place so install/source/token URLs stay in sync.
// NOTE: replace CHROME_WEB_STORE_URL with the final listing URL (it includes the
// published extension id) once the store page is live.
export const CHROME_WEB_STORE_URL =
  'https://chromewebstore.google.com/detail/ondeck';
export const GITHUB_REPO_URL = 'https://github.com/OnDeck/ondeck-extension';
// The extension authenticates with /user and reads notifications + repo data,
// so it needs read:user in addition to notifications and repo.
export const GITHUB_TOKEN_URL =
  'https://github.com/settings/tokens/new?description=OnDeck&scopes=read:user,notifications,repo';
