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
    a: 'Yes. Set a custom API hostname in settings. SSO works because Chrome handles the cookies.',
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
    <section className="py-18 px-7 border-t border-lp-line bg-lp-bg1">
      <div className="max-w-[800px] mx-auto">
        <h2 className="text-4xl tracking-tight font-semibold text-lp-fg0 m-0 mb-7 leading-tight">
          <span className="text-lp-red">Honest</span> questions.
        </h2>
        <div>
          {qs.map((it, i) => (
            <motion.div
              key={i}
              className="py-[22px] border-t border-lp-line grid grid-cols-[32px_1fr] gap-[14px]"
              style={{
                borderBottom: i === qs.length - 1 ? '1px solid #e7e0d2' : 'none',
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="font-mono text-sm text-lp-fg3 font-medium pt-[1px]">
                Q{String(i + 1).padStart(2, '0')}
              </div>
              <div>
                <div className="text-[15.5px] font-semibold text-lp-fg0 mb-2 tracking-tight">
                  {it.q}
                </div>
                <div className="text-[14.5px] text-lp-fg1 leading-[1.6] tracking-tight">
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
