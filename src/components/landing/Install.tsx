export function Install() {
  return (
    <section
      id="install"
      className="py-22 px-7 border-t border-lp-line relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #fdfbf7 0%, #fbf0d8 100%)',
      }}
    >
      <div className="absolute -bottom-[100px] -left-20 w-80 h-80 rounded-full bg-[radial-gradient(circle,rgba(42,95,217,0.18)_0%,transparent_70%)] pointer-events-none z-0" />
      <div className="absolute -top-[60px] -right-[60px] w-[280px] h-[280px] rounded-full bg-[radial-gradient(circle,rgba(117,73,184,0.18)_0%,transparent_70%)] pointer-events-none z-0" />

      <div className="relative z-[1] max-w-[720px] mx-auto text-center">
        <h2 className="text-[44px] tracking-tight font-semibold text-lp-fg0 m-0 leading-[1.05] mb-4">
          Try it. Worst case, you uninstall.
        </h2>
        <p className="text-base text-lp-fg1 mx-auto max-w-[520px] leading-[1.55] tracking-tight mb-7">
          Two clicks to install. About a minute to paste in a token. After that it just sits in
          your toolbar and notices things.
        </p>
        <div className="flex gap-[10px] justify-center flex-wrap">
          <a
            href="#"
            className="py-[13px] px-[22px] bg-lp-ink text-white rounded-[7px] text-[15px] font-medium no-underline tracking-tight whitespace-nowrap inline-flex items-center gap-[9px] shadow-[0_4px_14px_-4px_rgba(0,0,0,0.3)] hover:bg-opacity-90 transition-all"
          >
            Install for Chrome
            <span className="font-mono text-xs opacity-55">↗</span>
          </a>
          <a
            href="#"
            className="py-[13px] px-[18px] bg-white/60 text-lp-fg0 border border-lp-lineStrong rounded-[7px] text-[15px] font-medium no-underline tracking-tight whitespace-nowrap backdrop-blur-[6px] hover:bg-white/80 transition-all"
          >
            Setup notes
          </a>
        </div>
      </div>
    </section>
  );
}
