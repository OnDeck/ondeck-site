import { LP } from './constants';

export function Install() {
  return (
    <section
      id="install"
      style={{
        padding: '88px 28px',
        borderTop: `1px solid ${LP.line}`,
        background: `linear-gradient(180deg, ${LP.bg0} 0%, ${LP.amberSoft} 100%)`,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          bottom: -100,
          left: -80,
          width: 320,
          height: 320,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(42,95,217,0.18) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: -60,
          right: -60,
          width: 280,
          height: 280,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(117,73,184,0.18) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: 720,
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <h2
          style={{
            fontSize: 44,
            letterSpacing: -1.6,
            fontWeight: 600,
            color: LP.fg0,
            margin: 0,
            lineHeight: 1.05,
            marginBottom: 16,
          }}
        >
          Try it. Worst case, you uninstall.
        </h2>
        <p
          style={{
            fontSize: 16,
            color: LP.fg1,
            margin: '0 auto',
            maxWidth: 520,
            lineHeight: 1.55,
            letterSpacing: -0.1,
            marginBottom: 28,
          }}
        >
          Two clicks to install. About a minute to paste in a token. After that it just sits in
          your toolbar and notices things.
        </p>
        <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="#"
            style={{
              padding: '13px 22px',
              background: LP.ink,
              color: '#fff',
              borderRadius: 7,
              fontSize: 15,
              fontWeight: 500,
              textDecoration: 'none',
              letterSpacing: -0.1,
              whiteSpace: 'nowrap',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 9,
              boxShadow: '0 4px 14px -4px rgba(0,0,0,0.3)',
            }}
          >
            Install for Chrome
            <span style={{ fontFamily: 'var(--ondeck-mono)', fontSize: 12, opacity: 0.55 }}>
              ↗
            </span>
          </a>
          <a
            href="#"
            style={{
              padding: '13px 18px',
              background: 'rgba(255,255,255,0.6)',
              color: LP.fg0,
              border: `1px solid ${LP.lineStrong}`,
              borderRadius: 7,
              fontSize: 15,
              fontWeight: 500,
              textDecoration: 'none',
              letterSpacing: -0.1,
              whiteSpace: 'nowrap',
              backdropFilter: 'blur(6px)',
              WebkitBackdropFilter: 'blur(6px)',
            }}
          >
            Setup notes
          </a>
        </div>
      </div>
    </section>
  );
}
