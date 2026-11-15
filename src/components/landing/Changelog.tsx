import { TONE_MAP, type ToneColor } from './constants';
import changelog from './changelog.json';

interface ChangelogEntry {
  v: string;
  d: string;
  tag: string;
  tone: ToneColor;
  items: string[];
}

// JSON imports widen tone to string; scripts/updateChangelog.js validates it against TONE_MAP
const entries = changelog as ChangelogEntry[];

export function Changelog() {
  return (
    <section className="py-24 px-7 border-t border-stone-300">
      <div className="max-w-[1120px] mx-auto">
        <div className="flex items-baseline gap-4 mb-8 flex-wrap">
          <h2 className="text-4xl tracking-tight font-semibold text-slate-900 m-0 leading-tight">
            What changed <span className="text-green-600">recently</span>.
          </h2>
          <a href="#" className="text-[13px] text-blue-600 no-underline tracking-tight hover:underline">
            full changelog →
          </a>
        </div>

        <div className="bg-white border border-stone-300 rounded-[10px] overflow-hidden">
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
                  <div className="text-base font-mono text-slate-900 font-semibold tracking-tight mb-1">
                    v{e.v}
                  </div>
                  <div className="flex items-center gap-[6px] text-xs text-slate-600 font-mono">
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
                    <li key={j} className="text-sm text-slate-700 leading-[1.55] pl-[18px] relative tracking-tight">
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
