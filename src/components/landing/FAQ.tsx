import { motion } from 'framer-motion';

interface FAQItem {
  q: string;
  a: string;
}

const qs: FAQItem[] = [
  {
    q: 'Does it send my notifications to a server?',
    a: 'No. The extension talks to GitHub directly from your browser using your personal access token. The token never leaves your machine. There is no server.',
  },
  {
    q: 'Does it work with GitHub Enterprise?',
    a: 'Not yet. OnDeck currently talks to github.com (api.github.com) only. GitHub Enterprise Server support — a custom API hostname in settings — is on the roadmap, not shipped.',
  },
  {
    q: "Why not just use GitHub's own notifications page?",
    a: "Because that page treats a CI failure on main the same as a thumbs-up on a closed issue, and you can't scope it by repo + type + recency in one filter. OnDeck exists because nobody at GitHub seems to care to fix this.",
  },
  {
    q: 'Is it really free?',
    a: "Yes. Open source, MIT. If at some point this becomes a thing people pay teams for, that'll be a separate product. The single-user version stays free forever.",
  },
];

export function FAQ() {
  return (
    <section className="py-24 px-7 border-t border-stone-300 bg-white">
      <div className="max-w-[800px] mx-auto">
        <h2 className="text-4xl tracking-tight font-semibold text-slate-900 m-0 mb-7 leading-tight">
          <span className="text-red-600">Honest</span> questions.
        </h2>
        <div>
          {qs.map((it, i) => (
            <motion.div
              key={i}
              className="py-[22px] border-t border-stone-300 grid grid-cols-[32px_1fr] gap-[14px]"
              style={{
                borderBottom: i === qs.length - 1 ? '1px solid #e7e0d2' : 'none',
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="font-mono text-sm text-slate-400 font-medium pt-[1px]">
                Q{String(i + 1).padStart(2, '0')}
              </div>
              <div>
                <div className="text-[15.5px] font-semibold text-slate-900 mb-2 tracking-tight">
                  {it.q}
                </div>
                <div className="text-[14.5px] text-slate-700 leading-[1.6] tracking-tight">
                  {it.a}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
