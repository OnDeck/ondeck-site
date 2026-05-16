import { LP } from './constants';

export const sectionH2 = () => ({
  fontSize: 36,
  letterSpacing: -1.2,
  fontWeight: 600,
  color: LP.fg0,
  margin: 0,
  marginBottom: 12,
  lineHeight: 1.1,
});

export const sectionLead = () => ({
  fontSize: 16,
  color: LP.fg1,
  lineHeight: 1.55,
  margin: 0,
  maxWidth: 560,
  letterSpacing: -0.1,
});

export const kbdInline = () => ({
  fontFamily: 'var(--ondeck-mono)',
  fontSize: 11.5,
  padding: '1px 6px',
  background: LP.bg1,
  border: `1px solid ${LP.lineStrong}`,
  borderRadius: 3,
  color: LP.fg0,
  boxShadow: `0 1px 0 ${LP.line}`,
});

export const inlineCode = (color?: string) => ({
  fontFamily: 'var(--ondeck-mono)',
  fontSize: 13,
  padding: '1px 6px',
  background: LP.bg1,
  border: `1px solid ${LP.line}`,
  borderRadius: 4,
  color: color || LP.fg0,
});

export const navLink = {
  color: LP.fg1,
  textDecoration: 'none',
  letterSpacing: -0.1,
};
