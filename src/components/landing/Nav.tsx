export function Nav() {
  return (
    <nav className="h-14 flex items-center px-7 border-b border-lp-line bg-lp-bg0 sticky top-0 z-50">
      <a href="#" className="flex items-center gap-2 no-underline text-lp-fg0">
        <img
          src="/icons/icon.svg"
          alt="OnDeck"
          className="w-[22px] h-[22px] -rotate-[4deg]"
        />
        <span className="text-[15px] font-semibold tracking-tight">ondeck</span>
      </a>

      <div className="flex-1" />

      <div className="flex items-center gap-[22px] text-[13px]">
        <a href="#tour" className="text-lp-fg1 no-underline tracking-tight hover:text-lp-fg0 transition-colors">
          Tour
        </a>
        <a href="#shortcuts" className="text-lp-fg1 no-underline tracking-tight hover:text-lp-fg0 transition-colors">
          Shortcuts
        </a>
        <a href="#filters" className="text-lp-fg1 no-underline tracking-tight hover:text-lp-fg0 transition-colors">
          Filters
        </a>
        <a href="https://github.com/OnDeck/ondeck-extension" className="text-lp-fg1 no-underline tracking-tight hover:text-lp-fg0 transition-colors">
          Source
        </a>
        <a
          href="#install"
          className="py-[7px] px-3 bg-lp-blue text-white rounded-[5px] text-[13px] font-medium no-underline tracking-tight whitespace-nowrap hover:bg-opacity-90 transition-all"
        >
          Install
        </a>
      </div>
    </nav>
  );
}
