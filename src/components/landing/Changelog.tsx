import { TONE_MAP, type ToneColor } from './constants';

interface ChangelogEntry {
  v: string;
  d: string;
  tag: string;
  tone: ToneColor;
  items: string[];
}

const entries: ChangelogEntry[] = [
  {
    v: '1.0.0',
    d: 'today',
    tag: 'launch',
    tone: 'green',
    items: ['Local telemetry dashboard. None of it leaves your laptop.'],
  },
];

export function Changelog() {
  return (
    <section className="py-18 px-7 border-t border-lp-line">
      <div className="max-w-[1120px] mx-auto">
        <div className="flex items-baseline gap-4 mb-8 flex-wrap">
          <h2 className="text-4xl tracking-tight font-semibold text-lp-fg0 m-0 leading-tight">
            What changed <span className="text-lp-green">recently</span>.
          </h2>
          <a href="#" className="text-[13px] text-lp-blue no-underline tracking-tight hover:underline">
            full changelog →
          </a>
        </div>

        <div className="bg-lp-bg1 border border-lp-line rounded-[10px] overflow-hidden">
          {entries.map((e, i) => {
            const T = TONE_MAP[e.tone];
            return (
              <div
                key={e.v}
                className="grid grid-cols-[180px_1fr] gap-8 py-6 px-7"
                style={{
                  borderBottom: i === entries.length - 1 ? 'none' : '1px solid #e7e0d2',
                }}
              >
                <div>
                  <div className="text-base font-mono text-lp-fg0 font-semibold tracking-tight mb-1">
                    v{e.v}
                  </div>
                  <div className="flex items-center gap-[6px] text-xs text-lp-fg2 font-mono">
                    <span
                      className="py-[1px] px-[7px] rounded-[3px] font-semibold text-[10.5px] tracking-wide"
                      style={{ background: T.bg, color: T.c }}
                    >
                      {e.tag}
                    </span>
                    <span>{e.d}</span>
                  </div>
                </div>
                <ul className="m-0 p-0 list-none flex flex-col gap-[9px]">
                  {e.items.map((it, j) => (
                    <li key={j} className="text-sm text-lp-fg1 leading-[1.55] pl-[18px] relative tracking-tight">
                      <span
                        className="absolute left-0 top-2 w-2 h-[1.5px] rounded-[1px]"
                        style={{ background: T.c }}
                      />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
