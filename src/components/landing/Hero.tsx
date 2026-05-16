import OnDeckPopup from '../../Popup';
import { LP } from './constants';

export function Hero() {
  return (
    <section
      style={{
        padding: '88px 28px 88px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: -120,
          right: -80,
          width: 460,
          height: 460,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(42,95,217,0.10) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 120,
          left: -100,
          width: 380,
          height: 380,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(214,138,31,0.10) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: 1120,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 480px',
          gap: 72,
          alignItems: 'center',
        }}
      >
        <div>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '5px 12px 5px 8px',
              background: LP.bg1,
              border: `1px solid ${LP.line}`,
              borderRadius: 100,
              fontSize: 12.5,
              color: LP.fg1,
              marginBottom: 24,
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: 4,
                background: LP.green,
                boxShadow: `0 0 0 3px ${LP.greenSoft}`,
              }}
            />
            <span style={{ fontFamily: 'var(--ondeck-mono)', fontSize: 11.5 }}>v1.0.0</span>
          </div>

          <h1
            style={{
              fontSize: 62,
              lineHeight: 1.0,
              letterSpacing: -2.4,
              fontWeight: 600,
              color: LP.fg0,
              margin: 0,
              marginBottom: 24,
            }}
          >
            Your GitHub
            <br />
            inbox, but{' '}
            <span
              style={{
                background: `linear-gradient(180deg, transparent 65%, ${LP.amberSoft} 65%)`,
                padding: '0 4px',
                marginLeft: -4,
              }}
            >
              quiet
            </span>
            .
          </h1>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.55,
              color: LP.fg1,
              margin: 0,
              maxWidth: 460,
              letterSpacing: -0.15,
            }}
          >
            A Chrome extension that ranks the reviews you actually owe people and the CI breakages
            you&rsquo;re causing above the watcher noise &mdash; so you can clear your inbox
            without leaving the keyboard.
          </p>

          <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginTop: 32, marginBottom: 18 }}>
            <a
              href="#install"
              style={{
                padding: '11px 18px',
                background: LP.ink,
                color: '#fff',
                borderRadius: 7,
                fontSize: 14,
                fontWeight: 500,
                textDecoration: 'none',
                letterSpacing: -0.1,
                whiteSpace: 'nowrap',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                boxShadow: '0 1px 0 rgba(0,0,0,0.04), 0 4px 12px -4px rgba(0,0,0,0.2)',
              }}
            >
              Install for Chrome
              <span style={{ fontFamily: 'var(--ondeck-mono)', fontSize: 11, opacity: 0.6 }}>
                ↗
              </span>
            </a>
            <a
              href="https://github.com/OnDeck/ondeck-extension"
              style={{
                padding: '11px 16px',
                background: 'transparent',
                color: LP.fg0,
                border: `1px solid ${LP.lineStrong}`,
                borderRadius: 7,
                fontSize: 14,
                fontWeight: 500,
                textDecoration: 'none',
                letterSpacing: -0.1,
                whiteSpace: 'nowrap',
              }}
            >
              View source
            </a>
          </div>

          <p
            style={{
              fontSize: 12.5,
              color: LP.fg2,
              margin: 0,
              letterSpacing: -0.05,
              fontFamily: 'var(--ondeck-mono)',
            }}
          >
            free · local-only · personal &amp; GHES
          </p>
        </div>

        <div style={{ position: 'relative', justifySelf: 'end' }}>
          <div
            style={{
              position: 'absolute',
              inset: -16,
              background: LP.amberSoft,
              borderRadius: 16,
              transform: 'rotate(2deg)',
              zIndex: 0,
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: -8,
              background: LP.bg1,
              borderRadius: 12,
              transform: 'rotate(-1deg)',
              border: `1px solid ${LP.line}`,
              zIndex: 1,
            }}
          />

          <div
            style={{
              position: 'relative',
              zIndex: 2,
              width: 440,
              height: 600,
              borderRadius: 10,
              overflow: 'hidden',
              border: `1px solid ${LP.lineStrong}`,
              boxShadow:
                '0 24px 60px -20px rgba(60,40,15,0.25), 0 8px 20px -8px rgba(60,40,15,0.15)',
            }}
          >
            <OnDeckPopup
              density="cozy"
              filterMode="chips"
              groupBy="priority"
              priorityColors
              theme="dark"
              width={440}
              height={600}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
