import { motion } from 'framer-motion';
import { TONE_MAP, type ToneColor } from './constants';

interface ShortcutGroup {
  tone: ToneColor;
  head: string;
  rows: [string, string][];
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const groups: ShortcutGroup[] = [
  {
    tone: 'blue',
    head: 'navigate',
    rows: [
      ['⌘ ⇧ L', 'open popup'],
      ['j / k', 'next / previous'],
      ['↓ / ↑', 'next / previous'],
      ['esc', 'close search or panel'],
    ],
  },
  {
    tone: 'amber',
    head: 'triage',
    rows: [
      ['enter', 'open on GitHub'],
      ['o', 'open on GitHub'],
      ['e', 'mark as read'],
    ],
  },
  {
    tone: 'purple',
    head: 'search',
    rows: [
      ['/ or ⌘ K', 'open search'],
      ['repo:web', 'one repository'],
      ['type:pr', 'pull requests only'],
      ['reason:review', 'review requests'],
      ['is:unread', 'unread only'],
    ],
  },
];

export function Shortcuts() {
  return (
    <section id="shortcuts" className="py-24 px-7 border-t border-stone-300">
      <div className="max-w-[1120px] mx-auto">
        <h2 className="text-4xl tracking-tight font-semibold text-slate-900 m-0 mb-3 leading-tight">
          Keys, <span className="text-amber-600">mapped</span>.
        </h2>
        <p className="text-base text-slate-700 leading-[1.55] m-0 max-w-[560px] tracking-tight">
          Move through your inbox, open threads and clear them without touching the mouse. Search takes GitHub-style filters.
        </p>

        <motion.div
          className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.15 }}
        >
          {groups.map((g, idx) => {
            const T = TONE_MAP[g.tone];
            return (
              <motion.div
                key={g.head}
                className="bg-white border border-stone-300 rounded-[10px] overflow-hidden"
                variants={cardVariants}
                transition={{ delay: idx * 0.15 }}
              >
                <div
                  className="py-[10px] px-[18px] border-b border-stone-300 text-[11px] font-mono font-semibold tracking-wider"
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
                        <td className="py-[10px] pr-[14px] pl-[18px] text-[12.5px] text-slate-900 whitespace-nowrap align-top font-medium w-[40%]">
                          {k}
                        </td>
                        <td className="py-[10px] pr-[18px] pl-0 text-[13px] text-slate-600 font-sans">
                          {d}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
