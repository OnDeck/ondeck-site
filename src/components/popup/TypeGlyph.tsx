import type { NotificationType, ThemeTokens } from '../../types';
import { TYPE_GLYPH } from './constants';

interface TypeGlyphProps {
  type: NotificationType;
  t: ThemeTokens;
}

export function TypeGlyph({ type, t }: TypeGlyphProps) {
  const g = TYPE_GLYPH[type] || { code: '·', color: t.fg2 };

  return (
    <span
      style={{
        fontFamily: 'var(--ondeck-mono)',
        fontSize: 9.5,
        fontWeight: 600,
        letterSpacing: 0.4,
        color: g.color,
        padding: '2px 5px',
        borderRadius: 3,
        background: 'rgba(255,255,255,0.04)',
        border: `1px solid ${t.line}`,
        lineHeight: 1,
        display: 'inline-flex',
        alignItems: 'center',
        height: 14,
        flexShrink: 0,
      }}
    >
      {g.code}
    </span>
  );
}
