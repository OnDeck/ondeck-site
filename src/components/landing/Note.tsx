import { motion } from 'framer-motion';

export function Note() {
  return (
    <section className="px-7 pb-16">
      <motion.div
        className="max-w-[760px] mx-auto py-6 px-[26px] bg-stone-100 border border-stone-300 rounded-[10px] relative"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute -top-[10px] left-[22px] py-[2px] px-[10px] bg-stone-50 border border-stone-300 rounded-xl text-[11px] font-mono text-slate-600 tracking-wide">
          README.md
        </div>
        <p className="m-0 text-[15px] leading-[1.65] text-slate-700 tracking-tight">
          I built this because the GitHub notifications page kept being the reason I forgot to ship
          things. Reviews I owed, CI I&rsquo;d broken, the @mention from two days ago I never saw
          &mdash; all of it buried under release watchers and bot activity. Other people had the
          same complaint, so I cleaned it up. No team behind it, no investors, just a thing that
          runs in your browser and bothers you correctly.
        </p>
        <div className="mt-[14px] flex items-center gap-2 text-[13px] text-slate-600">
          <span className="w-[22px] h-[22px] rounded-full bg-purple-600 text-white font-mono text-[10px] font-semibold inline-flex items-center justify-center">
            DK
          </span>
          <span className="text-slate-700">Dillan Kerai.</span>
          <span className="text-slate-400">· mobile eng</span>
        </div>
      </motion.div>
    </section>
  );
}
