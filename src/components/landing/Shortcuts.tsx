import { LP, TONE_MAP } from './constants';
import { sectionH2, sectionLead, kbdInline } from './styles';

interface ShortcutGroup {
  tone: keyof typeof TONE_MAP;
  head: string;
  rows: Array<[string, string]>;
}

const groups: ShortcutGroup[] = [
  {
    tone: 'blue',
    head: 'navigate',
    rows: [
      ['j', 'next notification'],
      ['k', 'previous notification'],
      ['o · enter', 'open in github'],
      ['g i', 'go to inbox'],
      ['g m', 'go to mentions'],
    ],
  },
  {
    tone: 'amber',
    head: 'triage',
    rows: [
      ['e', 'archive'],
      ['shift e', 'archive thread'],
      ['s', 'snooze (1h / tmrw / mon)'],
      ['m', 'mute thread'],
      ['shift u', 'mark as read'],
    ],
  },
  {
    tone: 'purple',
    head: 'filter',
    rows: [
      ['⌘ k', 'open command palette'],
      ['/', 'quick filter'],
      ['1 2 3 4', 'jump to priority bucket'],
      ['u', 'toggle unread only'],
      ['?', 'help'],
    ],
  },
];

export function Shortcuts() {
  return (
    <section
      id="shortcuts"
      style={{
        padding: '72px 28px',
        borderTop: `1px solid ${LP.line}`,
      }}
    >
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        <h2 style={sectionH2()}>
          Every <span style={{ color: LP.amber }}>key</span>, mapped.
        </h2>
        <p style={sectionLead()}>
          OnDeck is for people who&rsquo;d rather memorize fifteen keys than move a mouse. Press{' '}
          <kbd style={kbdInline()}>?</kbd> anywhere to see this list inside the popup.
        </p>

        <div
          style={{
            marginTop: 40,
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 16,
          }}
        >
          {groups.map((g) => {
            const T = TONE_MAP[g.tone];
            return (
              <div
                key={g.head}
                style={{
                  background: LP.bg1,
                  border: `1px solid ${LP.line}`,
                  borderRadius: 10,
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    padding: '10px 18px',
                    background: T.bg,
                    borderBottom: `1px solid ${LP.line}`,
                    fontSize: 11,
                    fontFamily: 'var(--ondeck-mono)',
                    color: T.c,
                    fontWeight: 600,
                    letterSpacing: 0.6,
                  }}
                >
                  {g.head}
                </div>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'var(--ondeck-mono)' }}>
                  <tbody>
                    {g.rows.map(([k, d], i) => (
                      <tr
                        key={k}
                        style={{
                          borderBottom: i === g.rows.length - 1 ? 'none' : `1px solid ${LP.line}`,
                        }}
                      >
                        <td
                          style={{
                            padding: '10px 14px 10px 18px',
                            fontSize: 12.5,
                            color: LP.fg0,
                            whiteSpace: 'nowrap',
                            verticalAlign: 'top',
                            fontWeight: 500,
                            width: '40%',
                          }}
                        >
                          {k}
                        </td>
                        <td
                          style={{
                            padding: '10px 18px 10px 0',
                            fontSize: 13,
                            color: LP.fg2,
                            fontFamily: 'var(--ondeck-sans)',
                          }}
                        >
                          {d}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
