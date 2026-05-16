import type { Filter, ThemeTokens, DensityPreset } from '../../types';

interface ChipRailProps {
  t: ThemeTokens;
  d: DensityPreset;
  active: string;
  setActive: (id: string) => void;
  items: Filter[];
}

export function ChipRail({ t, d, active, setActive, items }: ChipRailProps) {
  return (
    <div
      style={{
        display: 'flex',
        gap: 4,
        padding: '8px 12px',
        borderBottom: `1px solid ${t.line}`,
        background: t.bg1,
        overflowX: 'auto',
        flexShrink: 0,
        scrollbarWidth: 'none',
      }}
    >
      {items.map((f) => {
        const on = active === f.id;
        return (
          <button
            key={f.id}
            onClick={() => setActive(f.id)}
            style={{
              height: d.chipH,
              padding: '0 9px',
              borderRadius: 5,
              border: `1px solid ${on ? t.accentBorder : t.line}`,
              background: on ? t.accentSoft : 'transparent',
              color: on ? t.accent : t.fg1,
              fontSize: 11.5,
              fontWeight: 500,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              whiteSpace: 'nowrap',
              flexShrink: 0,
              letterSpacing: -0.1,
              transition: 'background 80ms, border-color 80ms, color 80ms',
            }}
          >
            <span>{f.label}</span>
            <span
              style={{
                fontFamily: 'var(--ondeck-mono)',
                fontSize: 10,
                color: on ? t.accent : t.fg3,
                opacity: on ? 0.85 : 1,
              }}
            >
              {f.count}
            </span>
          </button>
        );
      })}
    </div>
  );
}
