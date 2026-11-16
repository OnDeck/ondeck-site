import type { ReactNode } from 'react';
import { Nav } from './components/landing/Nav';
import { SiteFooter } from './components/landing/SiteFooter';
import { GITHUB_REPO_URL } from './components/landing/constants';

const LAST_UPDATED = '16 November 2026';

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-12">
      <h2 className="text-[22px] font-semibold tracking-tight text-slate-900 m-0 mb-4">{title}</h2>
      <div className="flex flex-col gap-4 text-[15px] leading-[1.65] text-slate-700">{children}</div>
    </section>
  );
}

function List({ children }: { children: ReactNode }) {
  return <ul className="m-0 pl-5 flex flex-col gap-2.5 list-disc marker:text-slate-400">{children}</ul>;
}

function Code({ children }: { children: ReactNode }) {
  return <code className="font-mono text-[13.5px] text-slate-900 bg-stone-200/60 rounded px-1 py-px">{children}</code>;
}

function Link({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} className="text-blue-700 underline underline-offset-2 hover:text-blue-800">
      {children}
    </a>
  );
}

export default function Privacy() {
  return (
    <div className="bg-stone-50 text-slate-900 min-h-screen font-sans tracking-tight flex flex-col">
      <Nav linkBase="/" />
      <main className="flex-1 px-7 py-16">
        <article className="max-w-[720px] mx-auto">
          <h1 className="text-4xl font-semibold tracking-tight m-0 mb-3 leading-tight">Privacy policy</h1>
          <p className="m-0 text-[13px] font-mono text-slate-500">Last updated {LAST_UPDATED}</p>

          <div className="mt-8 rounded-[10px] border border-stone-300 bg-white px-5 py-4 text-[15px] leading-[1.6] text-slate-700">
            <strong className="text-slate-900">The short version:</strong> OnDeck has no servers. The extension
            talks to GitHub and nothing else. There are no analytics, no tracking, no ads, and your data is never
            sold or shared.
          </div>

          <Section title="What the extension stores">
            <p className="m-0">Everything stays in your browser's extension storage on your computer:</p>
            <List>
              <li>
                <strong className="text-slate-900">Your GitHub access token</strong>, encrypted with AES-GCM. The key
                is generated in your browser and stored next to it in local storage, which Chrome doesn't sync.
              </li>
              <li>
                <strong className="text-slate-900">Your GitHub username and avatar link</strong>, so the popup can
                show who's signed in.
              </li>
              <li>
                <strong className="text-slate-900">A cache of your recent notifications</strong> (titles,
                repositories, reasons and timestamps) so the popup opens instantly, plus a list of the ones you've
                already been alerted about so you aren't alerted twice.
              </li>
              <li>
                <strong className="text-slate-900">Your settings</strong> (how often to check and which
                notifications trigger desktop alerts), in Chrome's sync storage. If you use Chrome sync, Google copies
                these settings to your other browsers. They contain nothing about your GitHub account.
              </li>
              <li>
                <strong className="text-slate-900">While you sign in with GitHub</strong>, the one-time code, kept in
                session storage that Chrome clears when the browser closes.
              </li>
            </List>
          </Section>

          <Section title="Where your data goes">
            <p className="m-0">Requests go straight from your browser to GitHub:</p>
            <List>
              <li>
                <Code>github.com/login</Code>, only during <em>Sign in with GitHub</em>, to get a one-time code and
                swap it for an access token.
              </li>
              <li>
                <Code>api.github.com</Code>, to check the token, read your notifications and mark them as read.
              </li>
              <li>
                <Code>avatars.githubusercontent.com</Code>, to show your avatar.
              </li>
            </List>
            <p className="m-0">
              Opening a notification opens it on github.com in a new tab, like any link. GitHub's handling of these
              requests is covered by the{' '}
              <Link href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement">
                GitHub General Privacy Statement
              </Link>
              .
            </p>
            <p className="m-0">
              Nothing goes anywhere else. There's no OnDeck server, no analytics or crash reporting, and fonts ship
              inside the extension.
            </p>
          </Section>

          <Section title="Why the extension needs its permissions">
            <List>
              <li>
                <Code>storage</Code>: keeps the token, cache and settings listed above.
              </li>
              <li>
                <Code>notifications</Code>: shows desktop alerts you've turned on.
              </li>
              <li>
                <Code>alarms</Code>: checks GitHub in the background on the schedule you choose.
              </li>
              <li>
                Access to <Code>api.github.com</Code> and <Code>github.com/login</Code>: the two GitHub addresses
                above. The extension can't read any other site.
              </li>
            </List>
          </Section>

          <Section title="How we use it">
            <p className="m-0">
              Only to show you your GitHub notifications and let you act on them. Your data isn't sold, transferred
              to anyone, used for advertising, or used to decide creditworthiness. OnDeck's use of your data follows
              the{' '}
              <Link href="https://developer.chrome.com/docs/webstore/program-policies/policies">
                Chrome Web Store User Data Policy
              </Link>
              , including the Limited Use requirements.
            </p>
          </Section>

          <Section title="Deleting your data">
            <List>
              <li>
                <strong className="text-slate-900">Sign out</strong> from the extension's settings. That removes the
                token, your username, the notification cache and the encryption key.
              </li>
              <li>
                <strong className="text-slate-900">Uninstall</strong> the extension. Chrome deletes all of its storage.
              </li>
              <li>
                <strong className="text-slate-900">Revoke access on GitHub.</strong> Signing out doesn't revoke the
                token itself. Revoke a personal access token under{' '}
                <Link href="https://github.com/settings/tokens">Settings → Tokens</Link>, or a Sign in with GitHub
                authorisation under <Link href="https://github.com/settings/applications">Settings → Applications</Link>.
              </li>
            </List>
          </Section>

          <Section title="This website">
            <p className="m-0">
              The site is hosted on Vercel, which keeps standard server logs such as IP addresses and browser types
              (see{' '}
              <Link href="https://vercel.com/legal/privacy-policy">Vercel's privacy policy</Link>). Pages load fonts
              from Google Fonts, so Google sees your IP address when a page loads. The site sets no cookies and runs no
              analytics or tracking scripts.
            </p>
          </Section>

          <Section title="Changes">
            <p className="m-0">
              If this policy changes, the date at the top changes too, and the release notes say what's different.
            </p>
          </Section>

          <Section title="Contact">
            <p className="m-0">
              Questions or requests: open an issue on <Link href={`${GITHUB_REPO_URL}/issues`}>GitHub</Link>.
            </p>
          </Section>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
