import type { Notification, Density, ThemeTokens } from '../../types';
import { DENSITY_PRESETS } from './constants';
import { priorityColor } from './utils';
import { PriorityBar } from './PriorityBar';
import { Avatar } from './Avatar';
import { TypeGlyph } from './TypeGlyph';

interface NotifRowProps {
  n: Notification;
  density: Density;
  priorityColors: boolean;
  selected: boolean;
  t: ThemeTokens;
  onClick: () => void;
}

export function NotifRow({ n, density, priorityColors, selected, t, onClick }: NotifRowProps) {
  const d = DENSITY_PRESETS[density];
  const dim = n.priority === 'muted' || !n.unread;

  return (
    <div
      onClick={onClick}
      style={{
        display: 'flex',
        padding: `${d.rowPy}px 12px ${d.rowPy}px 0`,
        cursor: 'pointer',
        background: selected ? t.bg3 : 'transparent',
        position: 'relative',
        transition: 'background 80ms ease',
        opacity: dim && !n.unread ? 0.66 : 1,
      }}
      onMouseEnter={(e) => {
        if (!selected) e.currentTarget.style.background = t.bg2;
      }}
      onMouseLeave={(e) => {
        if (!selected) e.currentTarget.style.background = 'transparent';
      }}
    >
      <PriorityBar priority={n.priority} priorityColors={priorityColors} t={t} />

      <div
        style={{
          width: 8,
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
          paddingTop: d.rowPy === 8 ? 5 : 6,
        }}
      >
        {n.unread && (
          <div
            style={{
              width: 5,
              height: 5,
              borderRadius: 3,
              background: priorityColors ? priorityColor(n.priority, t) : t.accent,
              boxShadow:
                priorityColors && n.priority === 'critical' ? `0 0 0 2px ${t.criticalSoft}` : 'none',
            }}
          />
        )}
      </div>

      <div style={{ marginLeft: 6, marginTop: 1 }}>
        <Avatar n={n} size={d.avatar} />
      </div>

      <div style={{ flex: 1, minWidth: 0, marginLeft: 10 }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            fontSize: d.fsMeta,
            color: t.fg2,
            fontFamily: 'var(--ondeck-mono)',
            marginBottom: density === 'compact' ? 1 : 3,
            lineHeight: 1,
          }}
        >
          <TypeGlyph type={n.type} t={t} />
          <span
            style={{
              color: t.fg1,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              minWidth: 0,
            }}
          >
            {n.repo}
          </span>
          {n.pr && <span style={{ color: t.fg2 }}>#{n.pr}</span>}
          <span style={{ marginLeft: 'auto', color: t.fg3, flexShrink: 0 }}>{n.ago}</span>
        </div>

        <div
          style={{
            fontSize: d.fs,
            color: n.unread ? t.fg0 : t.fg1,
            fontWeight: n.unread ? 500 : 400,
            lineHeight: 1.35,
            display: '-webkit-box',
            WebkitLineClamp: d.lineClamp,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            letterSpacing: -0.1,
          }}
        >
          {n.title}
        </div>

        {density !== 'compact' && (
          <div
            style={{
              marginTop: 4,
              fontSize: d.fsMeta,
              color: t.fg3,
              fontFamily: 'var(--ondeck-mono)',
              lineHeight: 1,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {n.actor}
            <span style={{ color: t.fg3, margin: '0 6px' }}>·</span>
            {n.meta}
          </div>
        )}
      </div>
    </div>
  );
}
