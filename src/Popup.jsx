import React, { useState, useMemo } from 'react';
import { ONDECK_NOTIFS, ONDECK_FILTERS } from './data.js';

export const ONDECK_TOKENS = {
  dark: {
    bg0: '#0a0b0d',
    bg1: '#101216',
    bg2: '#161a20',
    bg3: '#1d2128',
    bg4: '#252a33',
    line: '#1f242c',
    lineStrong: '#2a313c',
    fg0: '#e8eaee',
    fg1: '#b3b9c4',
    fg2: '#7a818c',
    fg3: '#525864',
    accent: '#3b82f6',
    accentSoft: 'rgba(59,130,246,0.12)',
    accentBorder: 'rgba(59,130,246,0.35)',
    critical: '#ef6b6b',
    criticalSoft: 'rgba(239,107,107,0.13)',
    important: '#f59e0b',
    importantSoft: 'rgba(245,158,11,0.13)',
    success: '#34d399',
    successSoft: 'rgba(52,211,153,0.13)',
    muted: '#64748b',
  },
  light: {
    bg0: '#f7f8fa',
    bg1: '#ffffff',
    bg2: '#f0f2f5',
    bg3: '#e6e9ee',
    bg4: '#dfe3ea',
    line: '#e6e9ee',
    lineStrong: '#d3d8e0',
    fg0: '#0f1419',
    fg1: '#3a4150',
    fg2: '#6b7280',
    fg3: '#9ca3af',
    accent: '#2563eb',
    accentSoft: 'rgba(37,99,235,0.10)',
    accentBorder: 'rgba(37,99,235,0.35)',
    critical: '#dc2626',
    criticalSoft: 'rgba(220,38,38,0.08)',
    important: '#d97706',
    importantSoft: 'rgba(217,119,6,0.10)',
    success: '#059669',
    successSoft: 'rgba(5,150,105,0.10)',
    muted: '#6b7280',
  },
};

const DENSITY_PRESETS = {
  compact: { rowPy: 8, rowGap: 0, avatar: 18, fs: 12, fsMeta: 11, lineClamp: 1, headerH: 40, chipH: 24 },
  cozy:    { rowPy: 11, rowGap: 1, avatar: 22, fs: 13, fsMeta: 11, lineClamp: 2, headerH: 44, chipH: 26 },
  spacious:{ rowPy: 15, rowGap: 2, avatar: 26, fs: 13, fsMeta: 12, lineClamp: 2, headerH: 48, chipH: 28 },
};

const TYPE_GLYPH = {
  pr:        { code: 'PR',  color: '#8b5cf6' },
  review:    { code: 'RV',  color: '#3b82f6' },
  mention:   { code: '@',   color: '#f59e0b' },
  issue:     { code: 'IS',  color: '#22c55e' },
  ci:        { code: 'CI',  color: '#06b6d4' },
  security:  { code: 'SEC', color: '#ef6b6b' },
  release:   { code: 'REL', color: '#64748b' },
  discussion:{ code: 'DIS', color: '#a855f7' },
};

const Icon = {
  search: (p) => (
    <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" {...p}>
      <circle cx="6" cy="6" r="4" />
      <path d="M9 9l3.5 3.5" />
    </svg>
  ),
  cog: (p) => (
    <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" {...p}>
      <circle cx="7" cy="7" r="2.2" />
      <path d="M7 1v1.4M7 11.6V13M1 7h1.4M11.6 7H13M2.7 2.7l1 1M10.3 10.3l1 1M11.3 2.7l-1 1M3.7 10.3l-1 1" />
    </svg>
  ),
  chevron: (p) => (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" {...p}>
      <path d="M2.5 3.5l2.5 2.5 2.5-2.5" />
    </svg>
  ),
  logo: (p) => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" {...p}>
      <rect x="1" y="2" width="12" height="2.4" rx="0.6" />
      <rect x="5.8" y="4.4" width="2.4" height="7.6" rx="0.6" />
    </svg>
  ),
};

function priorityColor(p, t) {
  if (p === 'critical') return t.critical;
  if (p === 'important') return t.important;
  if (p === 'normal') return t.accent;
  return t.fg3;
}

function groupNotifs(list, by) {
  if (by === 'none') return [{ key: 'all', label: null, items: list }];
  if (by === 'priority') {
    const order = ['critical', 'important', 'normal', 'muted'];
    const labels = { critical: 'Critical', important: 'Important', normal: 'Normal', muted: 'Muted' };
    return order
      .map((k) => ({ key: k, label: labels[k], items: list.filter((n) => n.priority === k) }))
      .filter((g) => g.items.length);
  }
  if (by === 'repository') {
    const map = new Map();
    list.forEach((n) => { if (!map.has(n.repo)) map.set(n.repo, []); map.get(n.repo).push(n); });
    return [...map.entries()].map(([k, items]) => ({ key: k, label: k, items }));
  }
  return [{ key: 'all', label: null, items: list }];
}

function PriorityBar({ priority, priorityColors, t }) {
  const color = priorityColors ? priorityColor(priority, t) : t.fg3;
  const opacity = priority === 'muted' ? 0.35 : 1;
  return (
    <div style={{
      width: 2, alignSelf: 'stretch', marginRight: 10, marginTop: 4, marginBottom: 4,
      background: color, opacity, borderRadius: 1,
    }} />
  );
}

function TypeGlyph({ type, t }) {
  const g = TYPE_GLYPH[type] || { code: '·', color: t.fg2 };
  return (
    <span style={{
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
    }}>{g.code}</span>
  );
}

function Avatar({ n, size }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: size / 2,
      background: n.actorColor, color: '#fff',
      fontSize: size <= 18 ? 8 : size <= 22 ? 9 : 10,
      fontWeight: 600,
      letterSpacing: 0.3,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      flexShrink: 0,
      boxShadow: 'inset 0 0 0 0.5px rgba(255,255,255,0.15), 0 1px 2px rgba(0,0,0,0.25)',
      fontFamily: 'var(--ondeck-mono)',
    }}>{n.actorInit}</div>
  );
}

function NotifRow({ n, density, priorityColors, selected, t, onClick }) {
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
      onMouseEnter={(e) => { if (!selected) e.currentTarget.style.background = t.bg2; }}
      onMouseLeave={(e) => { if (!selected) e.currentTarget.style.background = 'transparent'; }}
    >
      <PriorityBar priority={n.priority} priorityColors={priorityColors} t={t} />

      <div style={{ width: 8, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', paddingTop: d.rowPy === 8 ? 5 : 6 }}>
        {n.unread && (
          <div style={{
            width: 5, height: 5, borderRadius: 3,
            background: priorityColors ? priorityColor(n.priority, t) : t.accent,
            boxShadow: priorityColors && n.priority === 'critical' ? `0 0 0 2px ${t.criticalSoft}` : 'none',
          }} />
        )}
      </div>

      <div style={{ marginLeft: 6, marginTop: 1 }}>
        <Avatar n={n} size={d.avatar} />
      </div>

      <div style={{ flex: 1, minWidth: 0, marginLeft: 10 }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 6,
          fontSize: d.fsMeta, color: t.fg2,
          fontFamily: 'var(--ondeck-mono)',
          marginBottom: density === 'compact' ? 1 : 3,
          lineHeight: 1,
        }}>
          <TypeGlyph type={n.type} t={t} />
          <span style={{ color: t.fg1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', minWidth: 0 }}>
            {n.repo}
          </span>
          {n.pr && <span style={{ color: t.fg2 }}>#{n.pr}</span>}
          <span style={{ marginLeft: 'auto', color: t.fg3, flexShrink: 0 }}>{n.ago}</span>
        </div>

        <div style={{
          fontSize: d.fs,
          color: n.unread ? t.fg0 : t.fg1,
          fontWeight: n.unread ? 500 : 400,
          lineHeight: 1.35,
          display: '-webkit-box',
          WebkitLineClamp: d.lineClamp,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          letterSpacing: -0.1,
        }}>
          {n.title}
        </div>

        {density !== 'compact' && (
          <div style={{
            marginTop: 4,
            fontSize: d.fsMeta,
            color: t.fg3,
            fontFamily: 'var(--ondeck-mono)',
            lineHeight: 1,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}>
            {n.actor}
            <span style={{ color: t.fg3, margin: '0 6px' }}>·</span>
            {n.meta}
          </div>
        )}
      </div>
    </div>
  );
}

function Header({ t, d, count }) {
  return (
    <div style={{
      height: d.headerH,
      display: 'flex', alignItems: 'center',
      padding: '0 12px',
      borderBottom: `1px solid ${t.line}`,
      background: t.bg1,
      flexShrink: 0,
    }}>
      <div style={{
        width: 22, height: 22, borderRadius: 5,
        background: 'linear-gradient(180deg, #1d2128 0%, #11141a 100%)',
        border: `1px solid ${t.lineStrong}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: t.fg0,
        marginRight: 10,
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04)',
      }}>
        <Icon.logo style={{ width: 11, height: 11 }} />
      </div>
      <div style={{ fontSize: 13, fontWeight: 600, color: t.fg0, letterSpacing: -0.2 }}>OnDeck</div>
      <div style={{
        marginLeft: 8, padding: '2px 6px', borderRadius: 4,
        background: t.bg3, color: t.fg2,
        fontSize: 10.5, fontFamily: 'var(--ondeck-mono)', fontWeight: 500,
        lineHeight: 1,
      }}>{count}</div>
      <div style={{ flex: 1 }} />
      <button style={{
        width: 24, height: 24, borderRadius: 4, border: 'none',
        background: 'transparent', color: t.fg2, cursor: 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }} title="Search · ⌘K">
        <Icon.search />
      </button>
      <button style={{
        width: 24, height: 24, borderRadius: 4, border: 'none',
        background: 'transparent', color: t.fg2, cursor: 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }} title="Settings">
        <Icon.cog />
      </button>
    </div>
  );
}

function ChipRail({ t, d, active, setActive, items }) {
  return (
    <div style={{
      display: 'flex', gap: 4, padding: '8px 12px',
      borderBottom: `1px solid ${t.line}`,
      background: t.bg1,
      overflowX: 'auto', flexShrink: 0, scrollbarWidth: 'none',
    }}>
      {items.map((f) => {
        const on = active === f.id;
        return (
          <button key={f.id}
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
              display: 'inline-flex', alignItems: 'center', gap: 6,
              whiteSpace: 'nowrap', flexShrink: 0,
              letterSpacing: -0.1,
              transition: 'background 80ms, border-color 80ms, color 80ms',
            }}>
            <span>{f.label}</span>
            <span style={{
              fontFamily: 'var(--ondeck-mono)',
              fontSize: 10,
              color: on ? t.accent : t.fg3,
              opacity: on ? 0.85 : 1,
            }}>{f.count}</span>
          </button>
        );
      })}
    </div>
  );
}

function GroupHeader({ t, label, count, collapsed, onToggle }) {
  return (
    <div onClick={onToggle} style={{
      display: 'flex', alignItems: 'center', gap: 6,
      padding: '6px 12px 6px 10px',
      fontSize: 10.5, fontFamily: 'var(--ondeck-mono)',
      color: t.fg2, fontWeight: 600,
      letterSpacing: 0.6, textTransform: 'uppercase',
      cursor: 'pointer', userSelect: 'none',
      background: t.bg1,
      borderBottom: `1px solid ${t.line}`,
      position: 'sticky', top: 0, zIndex: 1,
      lineHeight: 1,
    }}>
      <Icon.chevron style={{ transform: collapsed ? 'rotate(-90deg)' : 'none', transition: 'transform 120ms', opacity: 0.7 }} />
      <span>{label}</span>
      <span style={{ color: t.fg3, fontWeight: 500 }}>{count}</span>
    </div>
  );
}

function kbdStyle(t) {
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

function Footer({ t, selected, density }) {
  return (
    <div style={{
      height: density === 'compact' ? 26 : 30,
      display: 'flex', alignItems: 'center',
      padding: '0 10px',
      borderTop: `1px solid ${t.line}`,
      background: t.bg1,
      fontSize: 10.5, fontFamily: 'var(--ondeck-mono)',
      color: t.fg3,
      flexShrink: 0,
      gap: 10,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
    }}>
      <span style={{ display: 'inline-flex', alignItems: 'center' }}><kbd style={kbdStyle(t)}>↑↓</kbd>navigate</span>
      <span style={{ display: 'inline-flex', alignItems: 'center' }}><kbd style={kbdStyle(t)}>E</kbd>archive</span>
      <span style={{ display: 'inline-flex', alignItems: 'center' }}><kbd style={kbdStyle(t)}>R</kbd>reply</span>
      <span style={{ marginLeft: 'auto', color: t.fg2, flexShrink: 0 }}>{selected} selected</span>
    </div>
  );
}

export default function OnDeckPopup({
  density = 'cozy',
  filterMode = 'chips',
  priorityColors = true,
  groupBy = 'priority',
  theme = 'dark',
  width = 400,
  height = 600,
  sampleSelected = 'n3',
}) {
  const t = ONDECK_TOKENS[theme];
  const d = DENSITY_PRESETS[density];
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedId, setSelectedId] = useState(sampleSelected);
  const [collapsed, setCollapsed] = useState({});

  const filtered = useMemo(() => {
    const list = ONDECK_NOTIFS;
    if (activeFilter === 'all') return list;
    if (activeFilter === 'unread') return list.filter((n) => n.unread);
    const f = ONDECK_FILTERS.find((x) => x.id === activeFilter);
    if (f && f.type) return list.filter((n) => n.type === f.type);
    return list;
  }, [activeFilter]);

  const groups = useMemo(() => groupNotifs(filtered, groupBy), [filtered, groupBy]);

  return (
    <div style={{
      width, height,
      display: 'flex', flexDirection: 'column',
      background: t.bg0,
      color: t.fg0,
      fontFamily: 'var(--ondeck-sans)',
      fontSize: 13,
      letterSpacing: -0.1,
      overflow: 'hidden',
      position: 'relative',
      boxShadow: theme === 'dark' ? 'inset 0 0 0 0.5px rgba(255,255,255,0.04)' : 'inset 0 0 0 0.5px rgba(0,0,0,0.05)',
    }}>
      <Header t={t} d={d} count={filtered.length} />

      {filterMode === 'chips' && (
        <ChipRail t={t} d={d} active={activeFilter} setActive={setActiveFilter} items={ONDECK_FILTERS} />
      )}

      <div style={{ flex: 1, display: 'flex', minHeight: 0 }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
          <div style={{ flex: 1, overflowY: 'auto', background: t.bg1, scrollbarWidth: 'thin' }}>
            {groups.map((g) => (
              <div key={g.key}>
                {g.label && (
                  <GroupHeader
                    t={t} label={g.label} count={g.items.length}
                    collapsed={!!collapsed[g.key]}
                    onToggle={() => setCollapsed((c) => ({ ...c, [g.key]: !c[g.key] }))}
                  />
                )}
                {!collapsed[g.key] && g.items.map((n, i) => (
                  <div key={n.id} style={{
                    borderBottom: i === g.items.length - 1 ? 'none' : `1px solid ${t.line}`,
                  }}>
                    <NotifRow
                      n={n} density={density} priorityColors={priorityColors}
                      selected={n.id === selectedId} t={t}
                      onClick={() => setSelectedId(n.id)}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer t={t} selected={selectedId ? 1 : 0} density={density} />
    </div>
  );
}
