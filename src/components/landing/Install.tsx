import { motion } from 'framer-motion';
import { CHROME_WEB_STORE_URL } from './constants';

export function Install() {
  return (
    <section
      id="install"
      className="py-16 px-7 border-t border-stone-300 relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #fdfbf7 0%, #fbf0d8 100%)',
      }}
    >
      <div className="absolute -bottom-[100px] -left-20 w-80 h-80 rounded-full bg-[radial-gradient(circle,rgba(42,95,217,0.18)_0%,transparent_70%)] pointer-events-none z-0" />
      <div className="absolute -top-[60px] -right-[60px] w-[280px] h-[280px] rounded-full bg-[radial-gradient(circle,rgba(117,73,184,0.18)_0%,transparent_70%)] pointer-events-none z-0" />

      <motion.div
        className="relative z-[1] max-w-[720px] mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-[44px] tracking-tight font-semibold text-slate-900 m-0 leading-[1.05] mb-4">
          Try it. Worst case, you uninstall.
        </h2>
        <p className="text-base text-slate-700 mx-auto max-w-[520px] leading-[1.55] tracking-tight mb-7">
          Two clicks to install. About a minute to paste in a token. After that it just sits in
          your toolbar and notices things.
        </p>
        <div className="flex gap-[10px] justify-center flex-wrap">
          <a
            href={CHROME_WEB_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="py-[13px] px-[22px] bg-slate-900 text-white rounded-[7px] text-[15px] font-medium no-underline tracking-tight whitespace-nowrap inline-flex items-center gap-[9px] shadow-[0_4px_14px_-4px_rgba(0,0,0,0.3)] hover:bg-opacity-90 transition-all"
          >
            Install for Chrome
            <span className="font-mono text-xs opacity-55">↗</span>
          </a>
          <a
            href="#setup"
            className="py-[13px] px-[18px] bg-white/60 text-slate-900 border border-stone-400 rounded-[7px] text-[15px] font-medium no-underline tracking-tight whitespace-nowrap backdrop-blur-[6px] hover:bg-white/80 transition-all"
          >
            Setup notes
          </a>
        </div>
      </motion.div>
    </section>
  );
}
