import { LP } from './components/landing/constants';
import { Nav } from './components/landing/Nav';
import { Hero } from './components/landing/Hero';
import { Note } from './components/landing/Note';
import { Tour } from './components/landing/Tour';
import { Shortcuts } from './components/landing/Shortcuts';
import { Filters } from './components/landing/Filters';
import { Changelog } from './components/landing/Changelog';
import { FAQ } from './components/landing/FAQ';
import { Install } from './components/landing/Install';
import { SiteFooter } from './components/landing/SiteFooter';

export default function Landing() {
  return (
    <div
      style={{
        background: LP.bg0,
        color: LP.fg0,
        minHeight: '100vh',
        fontFamily: 'var(--ondeck-sans)',
        letterSpacing: -0.05,
      }}
    >
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
