import { LP } from './constants';
import { navLink } from './styles';

export function Nav() {
  return (
    <nav
      style={{
        height: 56,
        display: 'flex',
        alignItems: 'center',
        padding: '0 28px',
        borderBottom: `1px solid ${LP.line}`,
        background: LP.bg0,
        position: 'sticky',
        top: 0,
        zIndex: 50,
      }}
    >
      <a
        href="#"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 9,
          textDecoration: 'none',
          color: LP.fg0,
        }}
      >
        <span
          style={{
            width: 22,
            height: 22,
            borderRadius: 6,
            background: LP.ink,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            transform: 'rotate(-4deg)',
          }}
        >
          <svg width="11" height="11" viewBox="0 0 14 14" fill="currentColor">
            <rect x="1" y="2" width="12" height="2.4" rx="0.6" />
            <rect x="5.8" y="4.4" width="2.4" height="7.6" rx="0.6" />
          </svg>
        </span>
        <span style={{ fontSize: 15, fontWeight: 600, letterSpacing: -0.3 }}>ondeck</span>
      </a>

      <div style={{ flex: 1 }} />

      <div style={{ display: 'flex', alignItems: 'center', gap: 22, fontSize: 13 }}>
        <a href="#tour" style={navLink}>
          Tour
        </a>
        <a href="#shortcuts" style={navLink}>
          Shortcuts
        </a>
        <a href="#filters" style={navLink}>
          Filters
        </a>
        <a href="https://github.com/OnDeck/ondeck-extension" style={navLink}>
          Source
        </a>
        <a
          href="#install"
          style={{
            padding: '7px 12px',
            background: LP.blue,
            color: '#fff',
            borderRadius: 5,
            fontSize: 13,
            fontWeight: 500,
            textDecoration: 'none',
            letterSpacing: -0.1,
            whiteSpace: 'nowrap',
          }}
        >
          Install
        </a>
      </div>
    </nav>
  );
}
