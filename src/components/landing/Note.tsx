import { LP } from './constants';

export function Note() {
  return (
    <section style={{ padding: '0 28px 64px' }}>
      <div
        style={{
          maxWidth: 760,
          margin: '0 auto',
          padding: '24px 26px',
          background: LP.bg2,
          border: `1px solid ${LP.line}`,
          borderRadius: 10,
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: -10,
            left: 22,
            padding: '2px 10px',
            background: LP.bg0,
            border: `1px solid ${LP.line}`,
            borderRadius: 12,
            fontSize: 11,
            fontFamily: 'var(--ondeck-mono)',
            color: LP.fg2,
            letterSpacing: 0.2,
          }}
        >
          README.md
        </div>
        <p
          style={{
            margin: 0,
            fontSize: 15,
            lineHeight: 1.65,
            color: LP.fg1,
            letterSpacing: -0.1,
          }}
        >
          I built this because the GitHub notifications page kept being the reason I forgot to ship
          things. Reviews I owed, CI I&rsquo;d broken, the @mention from two days ago I never saw
          &mdash; all of it buried under release watchers and bot activity. Other people had the
          same complaint, so I cleaned it up. No team behind it, no investors, just a thing that
          runs in your browser and bothers you correctly.
        </p>
        <div
          style={{
            marginTop: 14,
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            fontSize: 13,
            color: LP.fg2,
          }}
        >
          <span
            style={{
              width: 22,
              height: 22,
              borderRadius: 11,
              background: LP.purple,
              color: '#fff',
              fontFamily: 'var(--ondeck-mono)',
              fontSize: 10,
              fontWeight: 600,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            SK
          </span>
          <span style={{ color: LP.fg1 }}>Dillan Kerai.</span>
          <span style={{ color: LP.fg3 }}>· mobile eng</span>
        </div>
      </div>
    </section>
  );
}
