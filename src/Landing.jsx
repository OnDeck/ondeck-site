import React from 'react';
import OnDeckPopup from './Popup.jsx';

// OnDeck — landing page. Light + warm, with color accents.
// The popup stays dark (the product is dark-first) but the marketing surface is bright.

const LP = {
  bg0: '#fdfbf7',
  bg1: '#ffffff',
  bg2: '#f5f1ea',
  bg3: '#ede7dc',
  line: '#e7e0d2',
  lineStrong: '#d6cdba',

  fg0: '#1a1814',
  fg1: '#4a463e',
  fg2: '#7a7568',
  fg3: '#a39d8e',
  fg4: '#c4bda8',

  blue: '#2a5fd9',
  blueSoft: '#e6edfb',
  amber: '#d68a1f',
  amberSoft: '#fbf0d8',
  red: '#c5443d',
  redSoft: '#fae0dd',
  green: '#3d8a4d',
  greenSoft: '#dff0e0',
  purple: '#7549b8',
  purpleSoft: '#ede4f8',
  ink: '#1a1814',
};

const navLink = { color: LP.fg1, textDecoration: 'none', letterSpacing: -0.1 };

function Nav() {
  return (
    <nav style={{
      height: 56,
      display: 'flex', alignItems: 'center',
      padding: '0 28px',
      borderBottom: `1px solid ${LP.line}`,
      background: LP.bg0,
      position: 'sticky', top: 0, zIndex: 50,
    }}>
      <a href="#" style={{
        display: 'flex', alignItems: 'center', gap: 9,
        textDecoration: 'none', color: LP.fg0,
      }}>
        <span style={{
          width: 22, height: 22, borderRadius: 6,
          background: LP.ink,
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          color: '#fff',
          transform: 'rotate(-4deg)',
        }}>
          <svg width="11" height="11" viewBox="0 0 14 14" fill="currentColor">
            <rect x="1" y="2" width="12" height="2.4" rx="0.6" />
            <rect x="5.8" y="4.4" width="2.4" height="7.6" rx="0.6" />
          </svg>
        </span>
        <span style={{ fontSize: 15, fontWeight: 600, letterSpacing: -0.3 }}>ondeck</span>
      </a>

      <div style={{ flex: 1 }} />

      <div style={{ display: 'flex', alignItems: 'center', gap: 22, fontSize: 13 }}>
        <a href="#tour" style={navLink}>Tour</a>
        <a href="#shortcuts" style={navLink}>Shortcuts</a>
        <a href="#filters" style={navLink}>Filters</a>
        <a href="https://github.com" style={navLink}>Source</a>
        <a href="#install" style={{
          padding: '7px 12px',
          background: LP.blue, color: '#fff',
          borderRadius: 5,
          fontSize: 13, fontWeight: 500,
          textDecoration: 'none',
          letterSpacing: -0.1,
          whiteSpace: 'nowrap',
        }}>Install</a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section style={{
      padding: '88px 28px 88px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: -120, right: -80,
        width: 460, height: 460, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(42,95,217,0.10) 0%, transparent 70%)',
        pointerEvents: 'none', zIndex: 0,
      }} />
      <div style={{
        position: 'absolute', top: 120, left: -100,
        width: 380, height: 380, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(214,138,31,0.10) 0%, transparent 70%)',
        pointerEvents: 'none', zIndex: 0,
      }} />

      <div style={{
        position: 'relative', zIndex: 1,
        maxWidth: 1120, margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 480px',
        gap: 72, alignItems: 'center',
      }}>
        <div>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '5px 12px 5px 8px',
            background: LP.bg1,
            border: `1px solid ${LP.line}`,
            borderRadius: 100,
            fontSize: 12.5,
            color: LP.fg1,
            marginBottom: 24,
          }}>
            <span style={{
              width: 7, height: 7, borderRadius: 4, background: LP.green,
              boxShadow: `0 0 0 3px ${LP.greenSoft}`,
            }} />
            <span style={{ fontFamily: 'var(--ondeck-mono)', fontSize: 11.5 }}>v0.4.2</span>
            <span style={{ color: LP.fg3 }}>·</span>
            <span>shipped this morning</span>
          </div>

          <h1 style={{
            fontSize: 62, lineHeight: 1.0,
            letterSpacing: -2.4, fontWeight: 600,
            color: LP.fg0,
            margin: 0, marginBottom: 24,
          }}>
            Your GitHub<br />
            inbox, but{' '}
            <span style={{
              background: `linear-gradient(180deg, transparent 65%, ${LP.amberSoft} 65%)`,
              padding: '0 4px',
              marginLeft: -4,
            }}>quiet</span>.
          </h1>
          <p style={{
            fontSize: 17, lineHeight: 1.55,
            color: LP.fg1, margin: 0,
            maxWidth: 460,
            letterSpacing: -0.15,
          }}>
            A Chrome extension that ranks the reviews you actually owe people
            and the CI breakages you&rsquo;re causing above the watcher noise &mdash; so
            you can clear your inbox without leaving the keyboard.
          </p>

          <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginTop: 32, marginBottom: 18 }}>
            <a href="#install" style={{
              padding: '11px 18px',
              background: LP.ink, color: '#fff',
              borderRadius: 7,
              fontSize: 14, fontWeight: 500,
              textDecoration: 'none', letterSpacing: -0.1,
              whiteSpace: 'nowrap',
              display: 'inline-flex', alignItems: 'center', gap: 8,
              boxShadow: '0 1px 0 rgba(0,0,0,0.04), 0 4px 12px -4px rgba(0,0,0,0.2)',
            }}>
              Install for Chrome
              <span style={{
                fontFamily: 'var(--ondeck-mono)', fontSize: 11,
                opacity: 0.6,
              }}>↗</span>
            </a>
            <a href="https://github.com" style={{
              padding: '11px 16px',
              background: 'transparent', color: LP.fg0,
              border: `1px solid ${LP.lineStrong}`,
              borderRadius: 7,
              fontSize: 14, fontWeight: 500,
              textDecoration: 'none', letterSpacing: -0.1,
              whiteSpace: 'nowrap',
            }}>
              View source
            </a>
          </div>

          <p style={{
            fontSize: 12.5, color: LP.fg2,
            margin: 0, letterSpacing: -0.05,
            fontFamily: 'var(--ondeck-mono)',
          }}>
            free · local-only · personal &amp; GHES
          </p>
        </div>

        <div style={{ position: 'relative', justifySelf: 'end' }}>
          <div style={{
            position: 'absolute',
            inset: -16,
            background: LP.amberSoft,
            borderRadius: 16,
            transform: 'rotate(2deg)',
            zIndex: 0,
          }} />
          <div style={{
            position: 'absolute',
            inset: -8,
            background: LP.bg1,
            borderRadius: 12,
            transform: 'rotate(-1deg)',
            border: `1px solid ${LP.line}`,
            zIndex: 1,
          }} />

          <div style={{
            position: 'relative', zIndex: 2,
            width: 440, height: 600,
            borderRadius: 10,
            overflow: 'hidden',
            border: `1px solid ${LP.lineStrong}`,
            boxShadow: '0 24px 60px -20px rgba(60,40,15,0.25), 0 8px 20px -8px rgba(60,40,15,0.15)',
          }}>
            <OnDeckPopup
              density="cozy" filterMode="chips" groupBy="priority"
              priorityColors theme="dark"
              width={440} height={600}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Note() {
  return (
    <section style={{ padding: '0 28px 64px' }}>
      <div style={{
        maxWidth: 760, margin: '0 auto',
        padding: '24px 26px',
        background: LP.bg2,
        border: `1px solid ${LP.line}`,
        borderRadius: 10,
        position: 'relative',
      }}>
        <div style={{
          position: 'absolute', top: -10, left: 22,
          padding: '2px 10px',
          background: LP.bg0,
          border: `1px solid ${LP.line}`,
          borderRadius: 12,
          fontSize: 11, fontFamily: 'var(--ondeck-mono)',
          color: LP.fg2, letterSpacing: 0.2,
        }}>
          README.md
        </div>
        <p style={{
          margin: 0,
          fontSize: 15, lineHeight: 1.65,
          color: LP.fg1,
          letterSpacing: -0.1,
        }}>
          I built this because the GitHub notifications page kept being the reason I
          forgot to ship things. Reviews I owed, CI I&rsquo;d broken, the @mention from two
          days ago I never saw &mdash; all of it buried under release watchers and bot
          activity. Other people had the same complaint, so I cleaned it up. No team
          behind it, no investors, just a thing that runs in your browser and bothers
          you correctly.
        </p>
        <div style={{
          marginTop: 14,
          display: 'flex', alignItems: 'center', gap: 8,
          fontSize: 13, color: LP.fg2,
        }}>
          <span style={{
            width: 22, height: 22, borderRadius: 11,
            background: LP.purple, color: '#fff',
            fontFamily: 'var(--ondeck-mono)', fontSize: 10, fontWeight: 600,
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          }}>SK</span>
          <span style={{ color: LP.fg1 }}>sam k.</span>
          <span style={{ color: LP.fg3 }}>· staff eng, infra</span>
        </div>
      </div>
    </section>
  );
}

const TONE_MAP = {
  red:    { c: '#c5443d', bg: '#fae0dd' },
  amber:  { c: '#d68a1f', bg: '#fbf0d8' },
  green:  { c: '#3d8a4d', bg: '#dff0e0' },
  blue:   { c: '#2a5fd9', bg: '#e6edfb' },
  purple: { c: '#7549b8', bg: '#ede4f8' },
};

function Annotation({ num, title, body, tone = 'blue' }) {
  const T = TONE_MAP[tone];
  return (
    <div>
      <div style={{
        display: 'inline-flex', alignItems: 'center',
        padding: '2px 9px',
        fontSize: 10.5, fontFamily: 'var(--ondeck-mono)',
        color: T.c, fontWeight: 600, letterSpacing: 0.4,
        background: T.bg,
        borderRadius: 4,
        marginBottom: 10,
      }}>{num}</div>
      <h3 style={{
        fontSize: 17, fontWeight: 600, letterSpacing: -0.3,
        color: LP.fg0, margin: 0, marginBottom: 8,
      }}>{title}</h3>
      <p style={{
        fontSize: 13.5, color: LP.fg2,
        margin: 0, lineHeight: 1.6, letterSpacing: -0.05,
      }}>{body}</p>
    </div>
  );
}

function sectionH2() {
  return {
    fontSize: 36, letterSpacing: -1.2, fontWeight: 600,
    color: LP.fg0, margin: 0, marginBottom: 12,
    lineHeight: 1.1,
  };
}
function sectionLead() {
  return {
    fontSize: 16, color: LP.fg1, lineHeight: 1.55,
    margin: 0, maxWidth: 560,
    letterSpacing: -0.1,
  };
}
function kbdInline() {
  return {
    fontFamily: 'var(--ondeck-mono)', fontSize: 11.5,
    padding: '1px 6px', background: LP.bg1,
    border: `1px solid ${LP.lineStrong}`,
    borderRadius: 3, color: LP.fg0,
    boxShadow: `0 1px 0 ${LP.line}`,
  };
}
function inlineCode(color) {
  return {
    fontFamily: 'var(--ondeck-mono)',
    fontSize: 13,
    padding: '1px 6px',
    background: LP.bg1,
    border: `1px solid ${LP.line}`,
    borderRadius: 4,
    color: color || LP.fg0,
  };
}

function Tour() {
  return (
    <section id="tour" style={{
      padding: '72px 28px',
      borderTop: `1px solid ${LP.line}`,
      background: LP.bg1,
    }}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        <h2 style={sectionH2()}>
          What&rsquo;s <span style={{ color: LP.blue }}>in</span> the popup.
        </h2>
        <p style={sectionLead()}>
          Open it with the keyboard shortcut or the toolbar icon. Everything you can
          do, you can do without the mouse.
        </p>

        <div style={{
          marginTop: 48,
          display: 'grid',
          gridTemplateColumns: '1fr 440px 1fr',
          gap: 56,
          alignItems: 'center',
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 56, textAlign: 'right' }}>
            <Annotation tone="red" num="01" title="Priority groups"
              body="Critical means CI is broken or a security alert dropped. Important means you're blocking someone or someone's blocking you. Everything else falls down." />
            <Annotation tone="blue" num="02" title="Filter chips"
              body="One tap to scope to mentions, reviews, or your assigned issues. Counts update live." />
            <Annotation tone="purple" num="03" title="Type codes"
              body="PR · RV · @ · CI · SEC — same three letters every time, in the same colors. Skim once, you've read it." />
          </div>

          <div style={{
            width: 440, height: 600,
            borderRadius: 10,
            overflow: 'hidden',
            border: `1px solid ${LP.lineStrong}`,
            boxShadow: '0 20px 50px -16px rgba(60,40,15,0.22)',
            justifySelf: 'center',
          }}>
            <OnDeckPopup
              density="cozy" filterMode="chips" groupBy="priority"
              priorityColors theme="dark"
              width={440} height={600}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 56 }}>
            <Annotation tone="amber" num="04" title="Density toggle"
              body="Three settings. Compact fits 16 rows per popup. Spacious is for when you actually want to read." />
            <Annotation tone="green" num="05" title="Inline triage"
              body="Archive, snooze, mute thread, mark read — all from the keyboard. The footer always shows what's available." />
            <Annotation tone="blue" num="06" title="Group however"
              body="By priority, repository, or time bucket. Group headers collapse. State sticks per session." />
          </div>
        </div>
      </div>
    </section>
  );
}

function Shortcuts() {
  const groups = [
    { tone: 'blue', head: 'navigate', rows: [
      ['j', 'next notification'],
      ['k', 'previous notification'],
      ['o · enter', 'open in github'],
      ['g i', 'go to inbox'],
      ['g m', 'go to mentions'],
    ]},
    { tone: 'amber', head: 'triage', rows: [
      ['e', 'archive'],
      ['shift e', 'archive thread'],
      ['s', 'snooze (1h / tmrw / mon)'],
      ['m', 'mute thread'],
      ['shift u', 'mark as read'],
    ]},
    { tone: 'purple', head: 'filter', rows: [
      ['⌘ k', 'open command palette'],
      ['/', 'quick filter'],
      ['1 2 3 4', 'jump to priority bucket'],
      ['u', 'toggle unread only'],
      ['?', 'help'],
    ]},
  ];

  return (
    <section id="shortcuts" style={{
      padding: '72px 28px',
      borderTop: `1px solid ${LP.line}`,
    }}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        <h2 style={sectionH2()}>Every <span style={{ color: LP.amber }}>key</span>, mapped.</h2>
        <p style={sectionLead()}>
          OnDeck is for people who&rsquo;d rather memorize fifteen keys than move a mouse.
          Press <kbd style={kbdInline()}>?</kbd> anywhere to see this list inside the popup.
        </p>

        <div style={{
          marginTop: 40,
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 16,
        }}>
          {groups.map((g) => {
            const T = TONE_MAP[g.tone];
            return (
              <div key={g.head} style={{
                background: LP.bg1,
                border: `1px solid ${LP.line}`,
                borderRadius: 10,
                overflow: 'hidden',
              }}>
                <div style={{
                  padding: '10px 18px',
                  background: T.bg,
                  borderBottom: `1px solid ${LP.line}`,
                  fontSize: 11, fontFamily: 'var(--ondeck-mono)',
                  color: T.c, fontWeight: 600,
                  letterSpacing: 0.6,
                }}>{g.head}</div>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'var(--ondeck-mono)' }}>
                  <tbody>
                    {g.rows.map(([k, d], i) => (
                      <tr key={k} style={{
                        borderBottom: i === g.rows.length - 1 ? 'none' : `1px solid ${LP.line}`,
                      }}>
                        <td style={{
                          padding: '10px 14px 10px 18px',
                          fontSize: 12.5, color: LP.fg0,
                          whiteSpace: 'nowrap',
                          verticalAlign: 'top',
                          fontWeight: 500,
                          width: '40%',
                        }}>{k}</td>
                        <td style={{
                          padding: '10px 18px 10px 0',
                          fontSize: 13, color: LP.fg2,
                          fontFamily: 'var(--ondeck-sans)',
                        }}>{d}</td>
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

function Filters() {
  const lines = [
    { c: LP.fg3, t: '# Unread reviews on repos you own' },
    { spans: [
      { t: 'is:', c: LP.purple },
      { t: 'unread ', c: LP.fg0 },
      { t: 'type:', c: LP.purple },
      { t: 'review ', c: LP.fg0 },
      { t: 'repo:', c: LP.purple },
      { t: 'acme/*', c: LP.fg0 },
    ]},
    { t: '' },
    { c: LP.fg3, t: '# Things blocking you, last 24h' },
    { spans: [
      { t: 'priority:', c: LP.purple },
      { t: 'critical,important ', c: LP.fg0 },
      { t: 'age:', c: LP.purple },
      { t: '<24h', c: LP.fg0 },
    ]},
    { t: '' },
    { c: LP.fg3, t: '# Specific person mentioning you' },
    { spans: [
      { t: 'is:', c: LP.purple },
      { t: 'mention ', c: LP.fg0 },
      { t: 'author:', c: LP.purple },
      { t: 'maya.chen', c: LP.fg0 },
    ]},
  ];
  return (
    <section id="filters" style={{
      padding: '72px 28px',
      borderTop: `1px solid ${LP.line}`,
      background: LP.bg2,
    }}>
      <div style={{
        maxWidth: 1120, margin: '0 auto',
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56,
        alignItems: 'start',
      }}>
        <div>
          <h2 style={sectionH2()}>
            Filters that read like <span style={{ color: LP.purple }}>grep</span>.
          </h2>
          <p style={sectionLead()}>
            Same syntax as GitHub&rsquo;s own search. OnDeck adds three keys for the things
            GitHub doesn&rsquo;t have: <code style={inlineCode(LP.purple)}>priority:</code>,
            {' '}<code style={inlineCode(LP.purple)}>age:</code>, and{' '}
            <code style={inlineCode(LP.purple)}>thread:</code>.
          </p>
          <p style={{ ...sectionLead(), marginTop: 16 }}>
            Save any query as a preset. Pin presets to the chip rail. The command
            palette (<kbd style={kbdInline()}>⌘ k</kbd>) autocompletes from your
            repos and orgs.
          </p>
        </div>

        <div style={{
          background: LP.bg1,
          border: `1px solid ${LP.line}`,
          borderRadius: 8,
          overflow: 'hidden',
          fontFamily: 'var(--ondeck-mono)',
          fontSize: 13.5, lineHeight: 1.75,
          boxShadow: '0 12px 32px -16px rgba(60,40,15,0.20)',
        }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 6,
            padding: '9px 13px',
            background: LP.bg2,
            borderBottom: `1px solid ${LP.line}`,
            fontSize: 11.5, color: LP.fg2, letterSpacing: 0.2,
            fontFamily: 'var(--ondeck-mono)',
          }}>
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
                      <span key={j} style={{ color: s.c }}>{s.t}</span>
                    ))}
                  </div>
                );
              }
              return (
                <div key={i} style={{
                  color: l.c || LP.fg2, minHeight: 24, whiteSpace: 'pre',
                }}>{l.t || ' '}</div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Changelog() {
  const entries = [
    { v: '0.4.2', d: 'today', tag: 'patch', tone: 'green', items: [
      'Snooze now respects working hours. Tomorrow = next workday.',
      'Fixed: priority colors got muddy in light theme.',
    ]},
    { v: '0.4.0', d: '2 weeks ago', tag: 'feature', tone: 'blue', items: [
      'Command palette. /, ⌘K, type: anywhere.',
      'Group-by-repo collapsable headers.',
      'GHES support behind a token-scopes check.',
    ]},
    { v: '0.3.4', d: '1 month ago', tag: 'patch', tone: 'green', items: [
      'Local telemetry dashboard. None of it leaves your laptop.',
      'Backoff when GitHub rate-limits — was too aggressive before.',
    ]},
  ];
  return (
    <section style={{ padding: '72px 28px', borderTop: `1px solid ${LP.line}` }}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        <div style={{
          display: 'flex', alignItems: 'baseline', gap: 16,
          marginBottom: 32, flexWrap: 'wrap',
        }}>
          <h2 style={{ ...sectionH2(), margin: 0 }}>
            What changed <span style={{ color: LP.green }}>recently</span>.
          </h2>
          <a href="#" style={{
            fontSize: 13, color: LP.blue,
            textDecoration: 'none', letterSpacing: -0.1,
          }}>full changelog →</a>
        </div>

        <div style={{
          background: LP.bg1,
          border: `1px solid ${LP.line}`,
          borderRadius: 10,
          overflow: 'hidden',
        }}>
          {entries.map((e, i) => {
            const T = TONE_MAP[e.tone];
            return (
              <div key={e.v} style={{
                display: 'grid', gridTemplateColumns: '180px 1fr',
                gap: 32,
                padding: '24px 28px',
                borderBottom: i === entries.length - 1 ? 'none' : `1px solid ${LP.line}`,
              }}>
                <div>
                  <div style={{
                    fontSize: 16, fontFamily: 'var(--ondeck-mono)',
                    color: LP.fg0, fontWeight: 600,
                    letterSpacing: -0.1,
                    marginBottom: 4,
                  }}>v{e.v}</div>
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: 6,
                    fontSize: 12, color: LP.fg2, fontFamily: 'var(--ondeck-mono)',
                  }}>
                    <span style={{
                      padding: '1px 7px', borderRadius: 3,
                      background: T.bg, color: T.c,
                      fontWeight: 600, fontSize: 10.5, letterSpacing: 0.4,
                    }}>{e.tag}</span>
                    <span>{e.d}</span>
                  </div>
                </div>
                <ul style={{
                  margin: 0, padding: 0, listStyle: 'none',
                  display: 'flex', flexDirection: 'column', gap: 9,
                }}>
                  {e.items.map((it, j) => (
                    <li key={j} style={{
                      fontSize: 14, color: LP.fg1, lineHeight: 1.55,
                      paddingLeft: 18, position: 'relative',
                      letterSpacing: -0.05,
                    }}>
                      <span style={{
                        position: 'absolute', left: 0, top: 8,
                        width: 8, height: 1.5, background: T.c, borderRadius: 1,
                      }} />
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

function FAQ() {
  const qs = [
    { q: 'Does it send my notifications to a server?',
      a: 'No. The extension talks to GitHub directly from your browser using your personal access token. The token never leaves your machine. There is no server.' },
    { q: 'Does it work with GitHub Enterprise?',
      a: 'Yes. Set a custom API hostname in settings. SSO works because Chrome handles the cookies.' },
    { q: 'Why not just use GitHub’s own notifications page?',
      a: 'Because that page treats a CI failure on main the same as a thumbs-up on a closed issue, and you can’t scope it by repo + type + recency in one filter. OnDeck exists because nobody at GitHub seems to care to fix this.' },
    { q: 'Is it really free?',
      a: 'Yes. Open source, MIT. If at some point this becomes a thing people pay teams for, that’ll be a separate product. The single-user version stays free forever.' },
  ];
  return (
    <section style={{
      padding: '72px 28px',
      borderTop: `1px solid ${LP.line}`,
      background: LP.bg1,
    }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <h2 style={{ ...sectionH2(), marginBottom: 28 }}>
          <span style={{ color: LP.red }}>Honest</span> questions.
        </h2>
        <div>
          {qs.map((it, i) => (
            <div key={i} style={{
              padding: '22px 0',
              borderTop: `1px solid ${LP.line}`,
              borderBottom: i === qs.length - 1 ? `1px solid ${LP.line}` : 'none',
              display: 'grid', gridTemplateColumns: '32px 1fr', gap: 14,
            }}>
              <div style={{
                fontFamily: 'var(--ondeck-mono)',
                fontSize: 14, color: LP.fg3, fontWeight: 500,
                paddingTop: 1,
              }}>Q{String(i + 1).padStart(2, '0')}</div>
              <div>
                <div style={{
                  fontSize: 15.5, fontWeight: 600,
                  color: LP.fg0, marginBottom: 8,
                  letterSpacing: -0.2,
                }}>{it.q}</div>
                <div style={{
                  fontSize: 14.5, color: LP.fg1, lineHeight: 1.6,
                  letterSpacing: -0.05,
                }}>{it.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Install() {
  return (
    <section id="install" style={{
      padding: '88px 28px',
      borderTop: `1px solid ${LP.line}`,
      background: `linear-gradient(180deg, ${LP.bg0} 0%, ${LP.amberSoft} 100%)`,
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', bottom: -100, left: -80,
        width: 320, height: 320, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(42,95,217,0.18) 0%, transparent 70%)',
        pointerEvents: 'none', zIndex: 0,
      }} />
      <div style={{
        position: 'absolute', top: -60, right: -60,
        width: 280, height: 280, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(117,73,184,0.18) 0%, transparent 70%)',
        pointerEvents: 'none', zIndex: 0,
      }} />

      <div style={{
        position: 'relative', zIndex: 1,
        maxWidth: 720, margin: '0 auto',
        textAlign: 'center',
      }}>
        <h2 style={{
          fontSize: 44, letterSpacing: -1.6, fontWeight: 600,
          color: LP.fg0, margin: 0, lineHeight: 1.05,
          marginBottom: 16,
        }}>
          Try it. Worst case, you uninstall.
        </h2>
        <p style={{
          fontSize: 16, color: LP.fg1, margin: '0 auto',
          maxWidth: 520,
          lineHeight: 1.55, letterSpacing: -0.1,
          marginBottom: 28,
        }}>
          Two clicks to install. About a minute to paste in a token. After that it
          just sits in your toolbar and notices things.
        </p>
        <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#" style={{
            padding: '13px 22px',
            background: LP.ink, color: '#fff',
            borderRadius: 7, fontSize: 15, fontWeight: 500,
            textDecoration: 'none', letterSpacing: -0.1,
            whiteSpace: 'nowrap',
            display: 'inline-flex', alignItems: 'center', gap: 9,
            boxShadow: '0 4px 14px -4px rgba(0,0,0,0.3)',
          }}>
            Install for Chrome
            <span style={{ fontFamily: 'var(--ondeck-mono)', fontSize: 12, opacity: 0.55 }}>↗</span>
          </a>
          <a href="#" style={{
            padding: '13px 18px',
            background: 'rgba(255,255,255,0.6)',
            color: LP.fg0,
            border: `1px solid ${LP.lineStrong}`,
            borderRadius: 7, fontSize: 15, fontWeight: 500,
            textDecoration: 'none', letterSpacing: -0.1,
            whiteSpace: 'nowrap',
            backdropFilter: 'blur(6px)',
            WebkitBackdropFilter: 'blur(6px)',
          }}>Setup notes</a>
        </div>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer style={{
      padding: '26px 28px',
      borderTop: `1px solid ${LP.line}`,
      background: LP.bg0,
    }}>
      <div style={{
        maxWidth: 1120, margin: '0 auto',
        display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap',
        fontSize: 12.5, color: LP.fg2,
        fontFamily: 'var(--ondeck-mono)',
        letterSpacing: 0.1,
      }}>
        <span style={{ color: LP.fg1 }}>ondeck 0.4.2</span>
        <span style={{ color: LP.fg4 }}>·</span>
        <span>MIT</span>
        <span style={{ color: LP.fg4 }}>·</span>
        <a href="#" style={{ color: LP.fg2, textDecoration: 'none' }}>source</a>
        <a href="#" style={{ color: LP.fg2, textDecoration: 'none' }}>issues</a>
        <a href="#" style={{ color: LP.fg2, textDecoration: 'none' }}>privacy</a>
        <span style={{ marginLeft: 'auto', color: LP.fg3 }}>built by one tired engineer · in Brooklyn</span>
      </div>
    </footer>
  );
}

export default function Landing() {
  return (
    <div style={{
      background: LP.bg0, color: LP.fg0, minHeight: '100vh',
      fontFamily: 'var(--ondeck-sans)', letterSpacing: -0.05,
    }}>
      <Nav />
      <Hero />
      <Note />
      <Tour />
      <Shortcuts />
      <Filters />
      <Changelog />
      <FAQ />
      <Install />
      <SiteFooter />
    </div>
  );
}
