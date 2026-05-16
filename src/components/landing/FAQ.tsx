import { LP } from './constants';
import { sectionH2 } from './styles';

interface FAQItem {
  q: string;
  a: string;
}

const qs: FAQItem[] = [
  {
    q: 'Does it send my notifications to a server?',
    a: 'No. The extension talks to GitHub directly from your browser using your personal access token. The token never leaves your machine. There is no server.',
  },
  {
    q: 'Does it work with GitHub Enterprise?',
    a: 'Yes. Set a custom API hostname in settings. SSO works because Chrome handles the cookies.',
  },
  {
    q: "Why not just use GitHub's own notifications page?",
    a: "Because that page treats a CI failure on main the same as a thumbs-up on a closed issue, and you can't scope it by repo + type + recency in one filter. OnDeck exists because nobody at GitHub seems to care to fix this.",
  },
  {
    q: 'Is it really free?',
    a: "Yes. Open source, MIT. If at some point this becomes a thing people pay teams for, that'll be a separate product. The single-user version stays free forever.",
  },
];

export function FAQ() {
  return (
    <section
      style={{
        padding: '72px 28px',
        borderTop: `1px solid ${LP.line}`,
        background: LP.bg1,
      }}
    >
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <h2 style={{ ...sectionH2(), marginBottom: 28 }}>
          <span style={{ color: LP.red }}>Honest</span> questions.
        </h2>
        <div>
          {qs.map((it, i) => (
            <div
              key={i}
              style={{
                padding: '22px 0',
                borderTop: `1px solid ${LP.line}`,
                borderBottom: i === qs.length - 1 ? `1px solid ${LP.line}` : 'none',
                display: 'grid',
                gridTemplateColumns: '32px 1fr',
                gap: 14,
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--ondeck-mono)',
                  fontSize: 14,
                  color: LP.fg3,
                  fontWeight: 500,
                  paddingTop: 1,
                }}
              >
                Q{String(i + 1).padStart(2, '0')}
              </div>
              <div>
                <div
                  style={{
                    fontSize: 15.5,
                    fontWeight: 600,
                    color: LP.fg0,
                    marginBottom: 8,
                    letterSpacing: -0.2,
                  }}
                >
                  {it.q}
                </div>
                <div
                  style={{
                    fontSize: 14.5,
                    color: LP.fg1,
                    lineHeight: 1.6,
                    letterSpacing: -0.05,
                  }}
                >
                  {it.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
