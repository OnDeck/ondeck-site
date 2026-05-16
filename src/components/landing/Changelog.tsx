import { LP, TONE_MAP, type ToneColor } from './constants';
import { sectionH2 } from './styles';

interface ChangelogEntry {
  v: string;
  d: string;
  tag: string;
  tone: ToneColor;
  items: string[];
}

const entries: ChangelogEntry[] = [
  {
    v: '1.0.0',
    d: 'today',
    tag: 'launch',
    tone: 'green',
    items: ['Local telemetry dashboard. None of it leaves your laptop.'],
  },
];

export function Changelog() {
  return (
    <section style={{ padding: '72px 28px', borderTop: `1px solid ${LP.line}` }}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: 16,
            marginBottom: 32,
            flexWrap: 'wrap',
          }}
        >
          <h2 style={{ ...sectionH2(), margin: 0 }}>
            What changed <span style={{ color: LP.green }}>recently</span>.
          </h2>
          <a
            href="#"
            style={{
              fontSize: 13,
              color: LP.blue,
              textDecoration: 'none',
              letterSpacing: -0.1,
            }}
          >
            full changelog →
          </a>
        </div>

        <div
          style={{
            background: LP.bg1,
            border: `1px solid ${LP.line}`,
            borderRadius: 10,
            overflow: 'hidden',
          }}
        >
          {entries.map((e, i) => {
            const T = TONE_MAP[e.tone];
            return (
              <div
                key={e.v}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '180px 1fr',
                  gap: 32,
                  padding: '24px 28px',
                  borderBottom: i === entries.length - 1 ? 'none' : `1px solid ${LP.line}`,
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: 16,
                      fontFamily: 'var(--ondeck-mono)',
                      color: LP.fg0,
                      fontWeight: 600,
                      letterSpacing: -0.1,
                      marginBottom: 4,
                    }}
                  >
                    v{e.v}
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 6,
                      fontSize: 12,
                      color: LP.fg2,
                      fontFamily: 'var(--ondeck-mono)',
                    }}
                  >
                    <span
                      style={{
                        padding: '1px 7px',
                        borderRadius: 3,
                        background: T.bg,
                        color: T.c,
                        fontWeight: 600,
                        fontSize: 10.5,
                        letterSpacing: 0.4,
                      }}
                    >
                      {e.tag}
                    </span>
                    <span>{e.d}</span>
                  </div>
                </div>
                <ul
                  style={{
                    margin: 0,
                    padding: 0,
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 9,
                  }}
                >
                  {e.items.map((it, j) => (
                    <li
                      key={j}
                      style={{
                        fontSize: 14,
                        color: LP.fg1,
                        lineHeight: 1.55,
                        paddingLeft: 18,
                        position: 'relative',
                        letterSpacing: -0.05,
                      }}
                    >
                      <span
                        style={{
                          position: 'absolute',
                          left: 0,
                          top: 8,
                          width: 8,
                          height: 1.5,
                          background: T.c,
                          borderRadius: 1,
                        }}
                      />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
