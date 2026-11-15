export type Priority = 'critical' | 'important' | 'normal' | 'muted';

export type NotificationType =
  | 'pr'
  | 'review'
  | 'mention'
  | 'issue'
  | 'ci'
  | 'security'
  | 'release'
  | 'discussion';

export interface Notification {
  id: string;
  priority: Priority;
  type: NotificationType;
  repo: string;
  org: string;
  title: string;
  actor: string;
  actorInit: string;
  actorColor: string;
  meta: string;
  ago: string;
  unread: boolean;
  pr: string | null;
  reason: string;
  branch?: string;
}

export interface Filter {
  id: string;
  label: string;
  count: number;
  types?: NotificationType[];
}

export type Density = 'compact' | 'cozy' | 'spacious';
export type Theme = 'dark' | 'light';
export type FilterMode = 'chips' | 'search';
export type GroupBy = 'none' | 'priority' | 'repository';

export interface ThemeTokens {
  bg0: string;
  bg1: string;
  bg2: string;
  bg3: string;
  bg4: string;
  line: string;
  lineStrong: string;
  fg0: string;
  fg1: string;
  fg2: string;
  fg3: string;
  accent: string;
  accentSoft: string;
  accentBorder: string;
  critical: string;
  criticalSoft: string;
  important: string;
  importantSoft: string;
  success: string;
  successSoft: string;
  muted: string;
}

export interface DensityPreset {
  rowPy: number;
  rowGap: number;
  avatar: number;
  fs: number;
  fsMeta: number;
  lineClamp: number;
  headerH: number;
  chipH: number;
}

export interface TypeGlyph {
  code: string;
  color: string;
}

export interface NotificationGroup {
  key: string;
  label: string | null;
  items: Notification[];
}
