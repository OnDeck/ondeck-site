import type { ThemeTokens, DensityPreset } from '../../types';
import { SearchIcon, CogIcon } from './Icons';

interface HeaderProps {
  t: ThemeTokens;
  d: DensityPreset;
  count: number;
}

export function Header({ t, d, count }: HeaderProps) {
  return (
    <div
      style={{
        height: d.headerH,
        display: 'flex',
        alignItems: 'center',
        padding: '0 12px',
        borderBottom: `1px solid ${t.line}`,
        background: t.bg1,
        flexShrink: 0,
      }}
    >
      <img src="/icons/icon.svg" alt="" style={{ width: 22, height: 22, marginRight: 10 }} />
      <div style={{ fontSize: 13, fontWeight: 600, color: t.fg0, letterSpacing: -0.2 }}>
        OnDeck
      </div>
      <div
        style={{
          marginLeft: 8,
          padding: '2px 6px',
          borderRadius: 4,
          background: t.bg3,
          color: t.fg2,
          fontSize: 10.5,
          fontFamily: 'var(--ondeck-mono)',
          fontWeight: 500,
          lineHeight: 1,
        }}
      >
        {count}
      </div>
      <div style={{ flex: 1 }} />
      <button
        style={{
          width: 24,
          height: 24,
          borderRadius: 4,
          border: 'none',
          background: 'transparent',
          color: t.fg2,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        title="Search · ⌘K"
      >
        <SearchIcon />
      </button>
      <button
        style={{
          width: 24,
          height: 24,
          borderRadius: 4,
          border: 'none',
          background: 'transparent',
          color: t.fg2,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        title="Settings"
      >
        <CogIcon />
      </button>
    </div>
  );
}
