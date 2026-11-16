import { latestRelease } from '../../releases';
import { GITHUB_REPO_URL } from './constants';

export function SiteFooter() {
  return (
    <footer className="py-[26px] px-7 border-t border-stone-300 bg-stone-50">
      <div className="max-w-[1120px] mx-auto flex items-center gap-4 flex-wrap text-[12.5px] text-slate-600 font-mono tracking-wide">
        <span className="text-slate-700">
          ondeck{latestRelease ? ` ${latestRelease.version}` : ''}
        </span>
        <span className="text-slate-300">·</span>
        <span>MIT</span>
        <span className="text-slate-300">·</span>
        <a href={GITHUB_REPO_URL} className="text-slate-600 no-underline hover:text-slate-700 transition-colors">
          source
        </a>
        <a href={`${GITHUB_REPO_URL}/issues`} className="text-slate-600 no-underline hover:text-slate-700 transition-colors">
          issues
        </a>
        <a href="/privacy" className="text-slate-600 no-underline hover:text-slate-700 transition-colors">
          privacy
        </a>
        <span className="ml-auto text-slate-400">built by one tired engineer · in Manchester</span>
      </div>
    </footer>
  );
}
