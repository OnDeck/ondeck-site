import { useState, useMemo } from 'react';
import type { Density, FilterMode, GroupBy, Theme } from './types';
import { ONDECK_NOTIFS, ONDECK_FILTERS } from './data';
import { ONDECK_TOKENS, DENSITY_PRESETS } from './components/popup/constants';
import { groupNotifs } from './components/popup/utils';
import { Header } from './components/popup/Header';
import { ChipRail } from './components/popup/ChipRail';
import { NotifRow } from './components/popup/NotifRow';
import { GroupHeader } from './components/popup/GroupHeader';
import { Footer } from './components/popup/Footer';

interface OnDeckPopupProps {
  density?: Density;
  filterMode?: FilterMode;
  priorityColors?: boolean;
  groupBy?: GroupBy;
  theme?: Theme;
  width?: number;
  height?: number;
  sampleSelected?: string;
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
}: OnDeckPopupProps) {
  const t = ONDECK_TOKENS[theme];
  const d = DENSITY_PRESETS[density];
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedId, setSelectedId] = useState(sampleSelected);
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});

  const filtered = useMemo(() => {
    const list = ONDECK_NOTIFS;
    if (activeFilter === 'all') return list;
    if (activeFilter === 'unread') return list.filter((n) => n.unread);
    const f = ONDECK_FILTERS.find((x) => x.id === activeFilter);
    if (f?.type) return list.filter((n) => n.type === f.type);
    return list;
  }, [activeFilter]);

  const groups = useMemo(() => groupNotifs(filtered, groupBy), [filtered, groupBy]);

  return (
    <div
      style={{
        width,
        height,
        display: 'flex',
        flexDirection: 'column',
        background: t.bg0,
        color: t.fg0,
        fontFamily: 'var(--ondeck-sans)',
        fontSize: 13,
        letterSpacing: -0.1,
        overflow: 'hidden',
        position: 'relative',
        boxShadow:
          theme === 'dark'
            ? 'inset 0 0 0 0.5px rgba(255,255,255,0.04)'
            : 'inset 0 0 0 0.5px rgba(0,0,0,0.05)',
      }}
    >
      <Header t={t} d={d} count={filtered.length} />

      {filterMode === 'chips' && (
        <ChipRail
          t={t}
          d={d}
          active={activeFilter}
          setActive={setActiveFilter}
          items={ONDECK_FILTERS}
        />
      )}

      <div style={{ flex: 1, display: 'flex', minHeight: 0 }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
          <div
            style={{
              flex: 1,
              overflowY: 'auto',
              background: t.bg1,
              scrollbarWidth: 'thin',
            }}
          >
            {groups.map((g) => (
              <div key={g.key}>
                {g.label && (
                  <GroupHeader
                    t={t}
                    label={g.label}
                    count={g.items.length}
                    collapsed={!!collapsed[g.key]}
                    onToggle={() =>
                      setCollapsed((c) => ({ ...c, [g.key]: !c[g.key] }))
                    }
                  />
                )}
                {!collapsed[g.key] &&
                  g.items.map((n, i) => (
                    <div
                      key={n.id}
                      style={{
                        borderBottom:
                          i === g.items.length - 1 ? 'none' : `1px solid ${t.line}`,
                      }}
                    >
                      <NotifRow
                        n={n}
                        density={density}
                        priorityColors={priorityColors}
                        selected={n.id === selectedId}
                        t={t}
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
