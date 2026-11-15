import { Nav } from './components/landing/Nav';
import { Hero } from './components/landing/Hero';
import { Note } from './components/landing/Note';
import { Tour } from './components/landing/Tour';
import { Shortcuts } from './components/landing/Shortcuts';
import { Changelog } from './components/landing/Changelog';
import { FAQ } from './components/landing/FAQ';
import { Install } from './components/landing/Install';
import { Setup } from './components/landing/Setup';
import { SiteFooter } from './components/landing/SiteFooter';

export default function Landing() {
  return (
    <div className="bg-stone-50 text-slate-900 min-h-screen font-sans tracking-tight">
      <Nav />
      <Hero />
      <Note />
      <Tour />
      <Shortcuts />
      <Changelog />
      <FAQ />
      <Install />
      <Setup />
      <SiteFooter />
    </div>
  );
}
