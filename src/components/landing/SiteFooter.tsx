export function SiteFooter() {
  return (
    <footer className="py-[26px] px-7 border-t border-lp-line bg-lp-bg0">
      <div className="max-w-[1120px] mx-auto flex items-center gap-4 flex-wrap text-[12.5px] text-lp-fg2 font-mono tracking-wide">
        <span className="text-lp-fg1">ondeck 1.0.0</span>
        <span className="text-lp-fg4">·</span>
        <span>MIT</span>
        <span className="text-lp-fg4">·</span>
        <a href="#" className="text-lp-fg2 no-underline hover:text-lp-fg1 transition-colors">
          source
        </a>
        <a href="#" className="text-lp-fg2 no-underline hover:text-lp-fg1 transition-colors">
          issues
        </a>
        <a href="#" className="text-lp-fg2 no-underline hover:text-lp-fg1 transition-colors">
          privacy
        </a>
        <span className="ml-auto text-lp-fg3">built by one tired engineer · in Brooklyn</span>
      </div>
    </footer>
  );
}
