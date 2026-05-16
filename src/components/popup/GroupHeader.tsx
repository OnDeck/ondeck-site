import type { ThemeTokens } from '../../types';
import { ChevronIcon } from './Icons';

interface GroupHeaderProps {
  t: ThemeTokens;
  label: string;
  count: number;
  collapsed: boolean;
  onToggle: () => void;
}

export function GroupHeader({ t, label, count, collapsed, onToggle }: GroupHeaderProps) {
  return (
    <div
      onClick={onToggle}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        padding: '6px 12px 6px 10px',
        fontSize: 10.5,
        fontFamily: 'var(--ondeck-mono)',
        color: t.fg2,
        fontWeight: 600,
        letterSpacing: 0.6,
        textTransform: 'uppercase',
        cursor: 'pointer',
        userSelect: 'none',
        background: t.bg1,
        borderBottom: `1px solid ${t.line}`,
        position: 'sticky',
        top: 0,
        zIndex: 1,
        lineHeight: 1,
      }}
    >
      <ChevronIcon
        style={{
          transform: collapsed ? 'rotate(-90deg)' : 'none',
          transition: 'transform 120ms',
          opacity: 0.7,
        }}
      />
      <span>{label}</span>
      <span style={{ color: t.fg3, fontWeight: 500 }}>{count}</span>
    </div>
  );
}
