import { LP } from './constants';

export function SiteFooter() {
  return (
    <footer
      style={{
        padding: '26px 28px',
        borderTop: `1px solid ${LP.line}`,
        background: LP.bg0,
      }}
    >
      <div
        style={{
          maxWidth: 1120,
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          flexWrap: 'wrap',
          fontSize: 12.5,
          color: LP.fg2,
          fontFamily: 'var(--ondeck-mono)',
          letterSpacing: 0.1,
        }}
      >
        <span style={{ color: LP.fg1 }}>ondeck 1.0.0</span>
        <span style={{ color: LP.fg4 }}>·</span>
        <span>MIT</span>
        <span style={{ color: LP.fg4 }}>·</span>
        <a href="#" style={{ color: LP.fg2, textDecoration: 'none' }}>
          source
        </a>
        <a href="#" style={{ color: LP.fg2, textDecoration: 'none' }}>
          issues
        </a>
        <a href="#" style={{ color: LP.fg2, textDecoration: 'none' }}>
          privacy
        </a>
        <span style={{ marginLeft: 'auto', color: LP.fg3 }}>
          built by one tired engineer · in Brooklyn
        </span>
      </div>
    </footer>
  );
}
