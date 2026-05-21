import { motion } from 'framer-motion';

export function Nav() {
  return (
    <motion.nav
      className="h-14 flex items-center px-7 border-b border-stone-300 bg-stone-50 sticky top-0 z-50"
      initial={{ y: -56, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <motion.a
        href="#"
        className="flex items-center gap-2 no-underline text-slate-900"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        <img
          src="/icons/icon.svg"
          alt="OnDeck"
          className="w-[22px] h-[22px] -rotate-[4deg]"
        />
        <span className="text-[15px] font-semibold tracking-tight">ondeck</span>
      </motion.a>

      <div className="flex-1" />

      <motion.div
        className="flex items-center gap-[22px] text-[13px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <a href="#tour" className="text-slate-700 no-underline tracking-tight hover:text-slate-900 transition-colors">
          Tour
        </a>
        <a href="#shortcuts" className="text-slate-700 no-underline tracking-tight hover:text-slate-900 transition-colors">
          Shortcuts
        </a>
        <a href="#filters" className="text-slate-700 no-underline tracking-tight hover:text-slate-900 transition-colors">
          Filters
        </a>
        <a href="https://github.com/OnDeck/ondeck-extension" className="text-slate-700 no-underline tracking-tight hover:text-slate-900 transition-colors">
          Source
        </a>
        <a
          href="#install"
          className="py-[7px] px-3 bg-blue-600 text-white rounded-[5px] text-[13px] font-medium no-underline tracking-tight whitespace-nowrap hover:bg-opacity-90 transition-all"
        >
          Install
        </a>
      </motion.div>
    </motion.nav>
  );
}
