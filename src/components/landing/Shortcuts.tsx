import { TONE_MAP, type ToneColor } from './constants';

interface ShortcutGroup {
  tone: ToneColor;
  head: string;
  rows: [string, string][];
}

const groups: ShortcutGroup[] = [
  {
    tone: 'blue',
    head: 'navigate',
    rows: [
      ['j', 'next notification'],
      ['k', 'previous notification'],
      ['o · enter', 'open in github'],
      ['g i', 'go to inbox'],
      ['g m', 'go to mentions'],
    ],
  },
  {
    tone: 'amber',
    head: 'triage',
    rows: [
      ['e', 'archive'],
      ['shift e', 'archive thread'],
      ['s', 'snooze (1h / tmrw / mon)'],
      ['m', 'mute thread'],
      ['shift u', 'mark as read'],
    ],
  },
  {
    tone: 'purple',
    head: 'filter',
    rows: [
      ['⌘ k', 'open command palette'],
      ['/', 'quick filter'],
      ['1 2 3 4', 'jump to priority bucket'],
      ['u', 'toggle unread only'],
      ['?', 'help'],
    ],
  },
];

export function Shortcuts() {
  return (
    <section id="shortcuts" className="py-18 px-7 border-t border-lp-line">
      <div className="max-w-[1120px] mx-auto">
        <h2 className="text-4xl tracking-tight font-semibold text-lp-fg0 m-0 mb-3 leading-tight">
          Every <span className="text-lp-amber">key</span>, mapped.
        </h2>
        <p className="text-base text-lp-fg1 leading-[1.55] m-0 max-w-[560px] tracking-tight">
          OnDeck is for people who&rsquo;d rather memorize fifteen keys than move a mouse.
          Press <kbd className="font-mono text-[11.5px] py-[1px] px-[6px] bg-lp-bg1 border border-lp-lineStrong rounded-[3px] text-lp-fg0 shadow-[0_1px_0_theme(colors.lp.line)]">?</kbd> anywhere to see this list inside the popup.
        </p>

        <div className="mt-10 grid grid-cols-3 gap-4">
          {groups.map((g) => {
            const T = TONE_MAP[g.tone];
            return (
              <div key={g.head} className="bg-lp-bg1 border border-lp-line rounded-[10px] overflow-hidden">
                <div
                  className="py-[10px] px-[18px] border-b border-lp-line text-[11px] font-mono font-semibold tracking-wider"
                  style={{ background: T.bg, color: T.c }}
                >
                  {g.head}
                </div>
                <table className="w-full border-collapse font-mono">
                  <tbody>
                    {g.rows.map(([k, d], i) => (
                      <tr
                        key={k}
                        style={{
                          borderBottom: i === g.rows.length - 1 ? 'none' : '1px solid #e7e0d2',
                        }}
                      >
                        <td className="py-[10px] pr-[14px] pl-[18px] text-[12.5px] text-lp-fg0 whitespace-nowrap align-top font-medium w-[40%]">
                          {k}
                        </td>
                        <td className="py-[10px] pr-[18px] pl-0 text-[13px] text-lp-fg2 font-sans">
                          {d}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
