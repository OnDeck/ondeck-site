export function Note() {
  return (
    <section className="px-7 pb-16">
      <div className="max-w-[760px] mx-auto py-6 px-[26px] bg-lp-bg2 border border-lp-line rounded-[10px] relative">
        <div className="absolute -top-[10px] left-[22px] py-[2px] px-[10px] bg-lp-bg0 border border-lp-line rounded-xl text-[11px] font-mono text-lp-fg2 tracking-wide">
          README.md
        </div>
        <p className="m-0 text-[15px] leading-[1.65] text-lp-fg1 tracking-tight">
          I built this because the GitHub notifications page kept being the reason I forgot to ship
          things. Reviews I owed, CI I&rsquo;d broken, the @mention from two days ago I never saw
          &mdash; all of it buried under release watchers and bot activity. Other people had the
          same complaint, so I cleaned it up. No team behind it, no investors, just a thing that
          runs in your browser and bothers you correctly.
        </p>
        <div className="mt-[14px] flex items-center gap-2 text-[13px] text-lp-fg2">
          <span className="w-[22px] h-[22px] rounded-full bg-lp-purple text-white font-mono text-[10px] font-semibold inline-flex items-center justify-center">
            DK
          </span>
          <span className="text-lp-fg1">Dillan Kerai.</span>
          <span className="text-lp-fg3">· mobile eng</span>
        </div>
      </div>
    </section>
  );
}
