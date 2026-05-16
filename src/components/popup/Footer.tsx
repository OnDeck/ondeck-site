import type { ThemeTokens, Density } from '../../types';

interface FooterProps {
  t: ThemeTokens;
  selected: number;
  density: Density;
}

function kbdStyle(t: ThemeTokens) {
  return {
    fontFamily: 'var(--ondeck-mono)',
    fontSize: 9.5,
    padding: '1px 4px',
    background: t.bg3,
    border: `1px solid ${t.lineStrong}`,
    borderRadius: 3,
    color: t.fg1,
    marginRight: 4,
  };
}

export function Footer({ t, selected, density }: FooterProps) {
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
        gap: 10,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
      }}
    >
      <span style={{ display: 'inline-flex', alignItems: 'center' }}>
        <kbd style={kbdStyle(t)}>↑↓</kbd>navigate
      </span>
      <span style={{ display: 'inline-flex', alignItems: 'center' }}>
        <kbd style={kbdStyle(t)}>E</kbd>archive
      </span>
      <span style={{ display: 'inline-flex', alignItems: 'center' }}>
        <kbd style={kbdStyle(t)}>R</kbd>reply
      </span>
      <span style={{ marginLeft: 'auto', color: t.fg2, flexShrink: 0 }}>
        {selected} selected
      </span>
    </div>
  );
}
