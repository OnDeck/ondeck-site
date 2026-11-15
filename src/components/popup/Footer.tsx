import type { ThemeTokens, Density } from '../../types';

interface FooterProps {
  t: ThemeTokens;
  density: Density;
}

export function Footer({ t, density }: FooterProps) {
  return (
    <div
      style={{
        height: density === 'compact' ? 26 : 30,
        display: 'flex',
        alignItems: 'center',
        padding: '0 10px',
        borderTop: `1px solid ${t.line}`,
        background: t.bg1,
        fontSize: 10.5,
        fontFamily: 'var(--ondeck-mono)',
        color: t.fg3,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
      }}
    >
      <span>Updated just now</span>
      <span style={{ marginLeft: 'auto', color: t.fg2 }}>Open GitHub inbox ↗</span>
    </div>
  );
}
