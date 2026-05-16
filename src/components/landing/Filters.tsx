import { LP } from './constants';
import { sectionH2, sectionLead, inlineCode } from './styles';

interface CodeLine {
  c?: string;
  t?: string;
  spans?: Array<{ t: string; c: string }>;
}

const lines: CodeLine[] = [
  { c: LP.fg3, t: '# Unread reviews on repos you own' },
  {
    spans: [
      { t: 'is:', c: LP.purple },
      { t: 'unread ', c: LP.fg0 },
      { t: 'type:', c: LP.purple },
      { t: 'review ', c: LP.fg0 },
      { t: 'repo:', c: LP.purple },
      { t: 'acme/*', c: LP.fg0 },
    ],
  },
  { t: '' },
  { c: LP.fg3, t: '# Things blocking you, last 24h' },
  {
    spans: [
      { t: 'priority:', c: LP.purple },
      { t: 'critical,important ', c: LP.fg0 },
      { t: 'age:', c: LP.purple },
      { t: '<24h', c: LP.fg0 },
    ],
  },
  { t: '' },
  { c: LP.fg3, t: '# Specific person mentioning you' },
  {
    spans: [
      { t: 'is:', c: LP.purple },
      { t: 'mention ', c: LP.fg0 },
      { t: 'author:', c: LP.purple },
      { t: 'maya.chen', c: LP.fg0 },
    ],
  },
];

export function Filters() {
  return (
    <section
      id="filters"
      style={{
        padding: '72px 28px',
        borderTop: `1px solid ${LP.line}`,
        background: LP.bg2,
      }}
    >
      <div
        style={{
          maxWidth: 1120,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 56,
          alignItems: 'start',
        }}
      >
        <div>
          <h2 style={sectionH2()}>
            Filters that read like <span style={{ color: LP.purple }}>grep</span>.
          </h2>
          <p style={sectionLead()}>
            Same syntax as GitHub&rsquo;s own search. OnDeck adds three keys for the things GitHub
            doesn&rsquo;t have: <code style={inlineCode(LP.purple)}>priority:</code>,{' '}
            <code style={inlineCode(LP.purple)}>age:</code>, and{' '}
            <code style={inlineCode(LP.purple)}>thread:</code>.
          </p>
          <p style={{ ...sectionLead(), marginTop: 16 }}>
            Save any query as a preset. Pin presets to the chip rail. The command palette (
            <kbd
              style={{
                fontFamily: 'var(--ondeck-mono)',
                fontSize: 11.5,
                padding: '1px 6px',
                background: LP.bg1,
                border: `1px solid ${LP.lineStrong}`,
                borderRadius: 3,
                color: LP.fg0,
                boxShadow: `0 1px 0 ${LP.line}`,
              }}
            >
              ⌘ k
            </kbd>
            ) autocompletes from your repos and orgs.
          </p>
        </div>

        <div
          style={{
            background: LP.bg1,
            border: `1px solid ${LP.line}`,
            borderRadius: 8,
            overflow: 'hidden',
            fontFamily: 'var(--ondeck-mono)',
            fontSize: 13.5,
            lineHeight: 1.75,
            boxShadow: '0 12px 32px -16px rgba(60,40,15,0.20)',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              padding: '9px 13px',
              background: LP.bg2,
              borderBottom: `1px solid ${LP.line}`,
              fontSize: 11.5,
              color: LP.fg2,
              letterSpacing: 0.2,
              fontFamily: 'var(--ondeck-mono)',
            }}
          >
            <span style={{ width: 9, height: 9, borderRadius: 5, background: '#e5a8a3' }} />
            <span style={{ width: 9, height: 9, borderRadius: 5, background: '#e5cba3' }} />
            <span style={{ width: 9, height: 9, borderRadius: 5, background: '#a3cfae' }} />
            <span style={{ marginLeft: 10 }}>~/ondeck/presets.conf</span>
          </div>
          <div style={{ padding: '16px 18px' }}>
            {lines.map((l, i) => {
              if (l.spans) {
                return (
                  <div key={i} style={{ minHeight: 24, whiteSpace: 'pre' }}>
                    {l.spans.map((s, j) => (
                      <span key={j} style={{ color: s.c }}>
                        {s.t}
                      </span>
                    ))}
                  </div>
                );
              }
              return (
                <div
                  key={i}
                  style={{
                    color: l.c || LP.fg2,
                    minHeight: 24,
                    whiteSpace: 'pre',
                  }}
                >
                  {l.t || ' '}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
