interface CodeLine {
  c?: string;
  t?: string;
  spans?: Array<{ t: string; c: string }>;
}

const lines: CodeLine[] = [
  { c: '#a39d8e', t: '# Unread reviews on repos you own' },
  {
    spans: [
      { t: 'is:', c: '#7549b8' },
      { t: 'unread ', c: '#1a1814' },
      { t: 'type:', c: '#7549b8' },
      { t: 'review ', c: '#1a1814' },
      { t: 'repo:', c: '#7549b8' },
      { t: 'acme/*', c: '#1a1814' },
    ],
  },
  { t: '' },
  { c: '#a39d8e', t: '# Things blocking you, last 24h' },
  {
    spans: [
      { t: 'priority:', c: '#7549b8' },
      { t: 'critical,important ', c: '#1a1814' },
      { t: 'age:', c: '#7549b8' },
      { t: '<24h', c: '#1a1814' },
    ],
  },
  { t: '' },
  { c: '#a39d8e', t: '# Specific person mentioning you' },
  {
    spans: [
      { t: 'is:', c: '#7549b8' },
      { t: 'mention ', c: '#1a1814' },
      { t: 'author:', c: '#7549b8' },
      { t: 'maya.chen', c: '#1a1814' },
    ],
  },
];

export function Filters() {
  return (
    <section id="filters" className="py-18 px-7 border-t border-lp-line bg-lp-bg2">
      <div className="max-w-[1120px] mx-auto grid grid-cols-2 gap-14 items-start">
        <div>
          <h2 className="text-4xl tracking-tight font-semibold text-lp-fg0 m-0 mb-3 leading-tight">
            Filters that read like <span className="text-lp-purple">grep</span>.
          </h2>
          <p className="text-base text-lp-fg1 leading-[1.55] m-0 max-w-[560px] tracking-tight">
            Same syntax as GitHub&rsquo;s own search. OnDeck adds three keys for the things GitHub
            doesn&rsquo;t have:{' '}
            <code className="font-mono text-[13px] py-[1px] px-[6px] bg-lp-bg1 border border-lp-line rounded text-lp-purple">
              priority:
            </code>
            ,{' '}
            <code className="font-mono text-[13px] py-[1px] px-[6px] bg-lp-bg1 border border-lp-line rounded text-lp-purple">
              age:
            </code>
            , and{' '}
            <code className="font-mono text-[13px] py-[1px] px-[6px] bg-lp-bg1 border border-lp-line rounded text-lp-purple">
              thread:
            </code>
            .
          </p>
          <p className="text-base text-lp-fg1 leading-[1.55] m-0 max-w-[560px] tracking-tight mt-4">
            Save any query as a preset. Pin presets to the chip rail. The command palette (
            <kbd className="font-mono text-[11.5px] py-[1px] px-[6px] bg-lp-bg1 border border-lp-lineStrong rounded-[3px] text-lp-fg0 shadow-[0_1px_0_theme(colors.lp.line)]">
              ⌘ k
            </kbd>
            ) autocompletes from your repos and orgs.
          </p>
        </div>

        <div className="bg-lp-bg1 border border-lp-line rounded-lg overflow-hidden font-mono text-[13.5px] leading-[1.75] shadow-[0_12px_32px_-16px_rgba(60,40,15,0.20)]">
          <div className="flex items-center gap-[6px] py-[9px] px-[13px] bg-lp-bg2 border-b border-lp-line text-[11.5px] text-lp-fg2 tracking-wide font-mono">
            <span className="w-[9px] h-[9px] rounded-[5px] bg-[#e5a8a3]" />
            <span className="w-[9px] h-[9px] rounded-[5px] bg-[#e5cba3]" />
            <span className="w-[9px] h-[9px] rounded-[5px] bg-[#a3cfae]" />
            <span className="ml-[10px]">~/ondeck/presets.conf</span>
          </div>
          <div className="py-4 px-[18px]">
            {lines.map((l, i) => {
              if (l.spans) {
                return (
                  <div key={i} className="min-h-6 whitespace-pre">
                    {l.spans.map((s, j) => (
                      <span key={j} style={{ color: s.c }}>
                        {s.t}
                      </span>
                    ))}
                  </div>
                );
              }
              return (
                <div key={i} className="min-h-6 whitespace-pre" style={{ color: l.c || '#7a7568' }}>
                  {l.t || ' '}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
