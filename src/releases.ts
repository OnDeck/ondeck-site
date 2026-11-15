import data from './releases.json';
import type { ToneColor } from './components/landing/constants';

export interface Release {
  version: string;
  date: string;
  tag: string;
  tone: ToneColor;
  items: string[];
}

// Written by .github/workflows/changelog-update.yml when the extension releases.
export const releases = data as Release[];

export const latestRelease: Release | undefined = releases[0];
