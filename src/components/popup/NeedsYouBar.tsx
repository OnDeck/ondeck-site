import type { NotificationType, ThemeTokens } from '../../types';

// Mirrors the extension's NEEDS_YOU_REASONS (review request, assignment, mention, security alert)
const NEEDS_YOU: ReadonlySet<NotificationType> = new Set(['review', 'issue', 'mention', 'security']);

interface NeedsYouBarProps {
  type: NotificationType;
  t: ThemeTokens;
}

export function NeedsYouBar({ type, t }: NeedsYouBarProps) {
  return (
    <div
      style={{
        width: 2,
        alignSelf: 'stretch',
        marginRight: 10,
        marginTop: 4,
        marginBottom: 4,
        background: NEEDS_YOU.has(type) ? t.accent : 'transparent',
        borderRadius: 1,
      }}
    />
  );
}
