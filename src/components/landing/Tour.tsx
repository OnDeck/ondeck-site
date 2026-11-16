import { motion } from 'framer-motion';
import OnDeckPopup from '../../Popup';
import { Annotation } from './Annotation';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function Tour() {
  return (
    <section id="tour" className="py-24 px-7 border-t border-stone-300 bg-white">
      <div className="max-w-[1120px] mx-auto">
        <h2 className="text-4xl tracking-tight font-semibold text-slate-900 m-0 mb-3 leading-tight">
          What&rsquo;s <span className="text-blue-600">in</span> the popup.
        </h2>
        <p className="text-base text-slate-700 leading-[1.55] m-0 max-w-[560px] tracking-tight">
          Press{' '}
          <kbd className="font-mono text-[11.5px] py-[1px] px-[6px] bg-white border border-stone-400 rounded-[3px] text-slate-900 shadow-[0_1px_0_#d6d3d1]">
            ⌘ ⇧ L
          </kbd>{' '}
          to open (or click the toolbar icon).
        </p>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-[1fr_440px_1fr] gap-10 lg:gap-14 items-center">
          <motion.div
            className="flex flex-col gap-10 lg:gap-14 lg:text-right"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={itemVariants}>
              <Annotation
                tone="red"
                num="01"
                title="Needs-you marker"
                body="Review requests, mentions, assignments and security alerts get an accent bar. Threads you only watch don't, so the ones waiting on you stand out."
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <Annotation
                tone="blue"
                num="02"
                title="Quick filters"
                body="One tap to scope to Unread, Participating, Mentions, Reviews or Assigned. Click the filter icon to narrow by repository and date range."
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <Annotation
                tone="purple"
                num="03"
                title="Type codes"
                body="PR · RV · @ · IS · CI · SEC: one short code per kind of thread, in the same colour every time. Skim once, you've read it."
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="w-[440px] h-[600px] max-sm:[zoom:0.65] rounded-[10px] overflow-hidden border border-stone-400 shadow-[0_20px_50px_-16px_rgba(60,40,15,0.22)] justify-self-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <OnDeckPopup
              density="cozy"
              filterMode="chips"
              groupBy="none"
              theme="dark"
              width={440}
              height={600}
            />
          </motion.div>

          <motion.div
            className="flex flex-col gap-10 lg:gap-14"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={itemVariants}>
              <Annotation
                tone="amber"
                num="04"
                title="Instant search"
                body="Hit / or ⌘K and type, or narrow with repo:, type:, reason: and is:. No round-trip — it searches what's already loaded."
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <Annotation
                tone="green"
                num="05"
                title="Real-time sync"
                body="Background sync on your schedule (configurable in settings). When new notifications arrive, the popup auto-refreshes and optionally plays a sound—no manual refresh needed."
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <Annotation
                tone="blue"
                num="06"
                title="Runs on your account"
                body="Sign in with GitHub or paste a personal access token. Either way OnDeck talks to GitHub directly — nothing routes through a server, and the token stays encrypted in Chrome's storage on your machine."
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
