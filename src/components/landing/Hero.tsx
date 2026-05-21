import { motion } from 'framer-motion';
import OnDeckPopup from '../../Popup';

export function Hero() {
  return (
    <motion.section
      className="py-22 px-7 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="absolute -top-[120px] -right-20 w-[460px] h-[460px] rounded-full bg-[radial-gradient(circle,rgba(42,95,217,0.10)_0%,transparent_70%)] pointer-events-none z-0" />
      <div className="absolute top-[120px] -left-[100px] w-[380px] h-[380px] rounded-full bg-[radial-gradient(circle,rgba(214,138,31,0.10)_0%,transparent_70%)] pointer-events-none z-0" />

      <div className="relative z-[1] max-w-[1120px] mx-auto grid grid-cols-[1fr_480px] gap-[72px] items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 py-[5px] pr-3 pl-2 bg-lp-bg1 border border-lp-line rounded-full text-[12.5px] text-lp-fg1 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <motion.span
              className="w-[7px] h-[7px] rounded bg-lp-green shadow-[0_0_0_3px_theme(colors.lp.greenSoft)]"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
            />
            <span className="font-mono text-[11.5px]">v1.0.0</span>
          </motion.div>

          <h1 className="text-[62px] leading-none tracking-[-2.4px] font-semibold text-lp-fg0 m-0 mb-6">
            Your GitHub
            <br />
            inbox, but{' '}
            <span className="bg-[linear-gradient(180deg,transparent_65%,theme(colors.lp.amberSoft)_65%)] px-1 -ml-1">
              quiet
            </span>
            .
          </h1>
          <p className="text-[17px] leading-[1.55] text-lp-fg1 m-0 max-w-[460px] tracking-tight">
            A Chrome extension that ranks the reviews you actually owe people and the CI breakages
            you&rsquo;re causing above the watcher noise. Press{' '}
            <kbd className="font-mono text-[11.5px] py-[2px] px-[7px] bg-lp-bg1 border border-lp-lineStrong rounded-[3px] text-lp-fg0 shadow-[0_1px_0_theme(colors.lp.line)]">
              ⌘ ⇧ G
            </kbd>{' '}
            and never leave the keyboard.
          </p>

          <div className="flex gap-[10px] items-center mt-8 mb-[18px]">
            <a
              href="#install"
              className="py-[11px] px-[18px] bg-lp-ink text-white rounded-[7px] text-sm font-medium no-underline tracking-tight whitespace-nowrap inline-flex items-center gap-2 shadow-[0_1px_0_rgba(0,0,0,0.04),0_4px_12px_-4px_rgba(0,0,0,0.2)] hover:bg-opacity-90 transition-all"
            >
              Install for Chrome
              <span className="font-mono text-[11px] opacity-60">↗</span>
            </a>
            <a
              href="https://github.com/OnDeck/ondeck-extension"
              className="py-[11px] px-4 bg-transparent text-lp-fg0 border border-lp-lineStrong rounded-[7px] text-sm font-medium no-underline tracking-tight whitespace-nowrap hover:border-lp-fg2 transition-colors"
            >
              View source
            </a>
          </div>

          <p className="text-[12.5px] text-lp-fg2 m-0 tracking-tight font-mono">
            free · local-only · personal &amp; GHES
          </p>
        </motion.div>

        <motion.div
          className="relative justify-self-end"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="absolute -inset-4 bg-lp-amberSoft rounded-2xl rotate-[2deg] z-0" />
          <div className="absolute -inset-2 bg-lp-bg1 rounded-xl -rotate-1 border border-lp-line z-[1]" />

          <div className="relative z-[2] w-[440px] h-[600px] rounded-[10px] overflow-hidden border border-lp-lineStrong shadow-[0_24px_60px_-20px_rgba(60,40,15,0.25),0_8px_20px_-8px_rgba(60,40,15,0.15)]">
            <OnDeckPopup
              density="cozy"
              filterMode="chips"
              groupBy="priority"
              priorityColors
              theme="dark"
              width={440}
              height={600}
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
