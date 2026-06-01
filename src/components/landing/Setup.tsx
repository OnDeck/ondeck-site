import { motion } from 'framer-motion';

export function Setup() {
  return (
    <section
      id="setup"
      className="py-20 px-7 border-t border-stone-300 bg-white"
    >
      <motion.div
        className="max-w-[720px] mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-[44px] tracking-tight font-semibold text-slate-900 m-0 leading-[1.05] mb-3">
          Getting started
        </h2>
        <p className="text-base text-slate-700 leading-[1.55] tracking-tight mb-10 max-w-[560px]">
          OnDeck takes about two minutes to set up. Install the extension, add a GitHub token, and configure your keyboard shortcut.
        </p>

        <div className="space-y-6">
          <motion.div
            className="flex gap-5 items-start"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-mono text-sm font-semibold">
              1
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900 m-0 mb-2 tracking-tight">
                Install the extension
              </h3>
              <p className="text-[15px] text-slate-700 leading-[1.55] m-0 mb-3 tracking-tight">
                Head to the{' '}
                <a
                  href="#"
                  className="text-blue-700 underline underline-offset-2 hover:text-blue-800"
                >
                  Chrome Web Store
                </a>{' '}
                and click &ldquo;Add to Chrome&rdquo;. The OnDeck icon will appear in your toolbar.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex gap-5 items-start"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-mono text-sm font-semibold">
              2
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900 m-0 mb-2 tracking-tight">
                Generate a GitHub token
              </h3>
              <p className="text-[15px] text-slate-700 leading-[1.55] m-0 mb-3 tracking-tight">
                Go to{' '}
                <a
                  href="https://github.com/settings/tokens/new?description=OnDeck&scopes=notifications,repo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 underline underline-offset-2 hover:text-blue-800"
                >
                  GitHub&rsquo;s token page
                </a>{' '}
                and create a new token with{' '}
                <code className="font-mono text-[13px] py-[2px] px-[6px] bg-stone-100 border border-stone-300 rounded text-slate-900">
                  notifications
                </code>{' '}
                and{' '}
                <code className="font-mono text-[13px] py-[2px] px-[6px] bg-stone-100 border border-stone-300 rounded text-slate-900">
                  repo
                </code>{' '}
                scopes. Copy the token.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex gap-5 items-start"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-mono text-sm font-semibold">
              3
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900 m-0 mb-2 tracking-tight">
                Add your token to OnDeck
              </h3>
              <p className="text-[15px] text-slate-700 leading-[1.55] m-0 tracking-tight">
                Click the OnDeck icon in your toolbar, paste your token when prompted, and save. OnDeck will start syncing your notifications immediately.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex gap-5 items-start"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-mono text-sm font-semibold">
              4
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900 m-0 mb-2 tracking-tight">
                Set up the keyboard shortcut
              </h3>
              <p className="text-[15px] text-slate-700 leading-[1.55] m-0 mb-3 tracking-tight">
                Navigate to{' '}
                <code className="font-mono text-[13px] py-[2px] px-[6px] bg-stone-100 border border-stone-300 rounded text-slate-900">
                  chrome://extensions/shortcuts
                </code>
                , find OnDeck, and set the &ldquo;Open popup&rdquo; shortcut. We recommend:
              </p>
              <div className="flex gap-3 flex-wrap">
                <div className="py-2 px-3 bg-stone-50 border border-stone-300 rounded-md">
                  <div className="text-[11px] font-mono text-slate-600 mb-1 uppercase tracking-wider">
                    Mac
                  </div>
                  <kbd className="font-mono text-[13px] py-[2px] px-[7px] bg-white border border-stone-400 rounded-[3px] text-slate-900 shadow-[0_1px_0_#d6d3d1]">
                    ⌘ ⇧ L
                  </kbd>
                </div>
                <div className="py-2 px-3 bg-stone-50 border border-stone-300 rounded-md">
                  <div className="text-[11px] font-mono text-slate-600 mb-1 uppercase tracking-wider">
                    Windows/Linux
                  </div>
                  <kbd className="font-mono text-[13px] py-[2px] px-[7px] bg-white border border-stone-400 rounded-[3px] text-slate-900 shadow-[0_1px_0_#d6d3d1]">
                    Ctrl ⇧ L
                  </kbd>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-10 p-5 bg-blue-50 border border-blue-200 rounded-[10px]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="flex items-start gap-3">
            <span className="text-lg">🔒</span>
            <div>
              <h4 className="text-sm font-semibold text-slate-900 m-0 mb-1 tracking-tight">
                Your token stays local
              </h4>
              <p className="text-[13.5px] text-slate-700 leading-[1.5] m-0 tracking-tight">
                OnDeck stores your GitHub token locally in Chrome&rsquo;s secure storage. It never leaves your browser and is never sent to any server.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-4 p-5 bg-amber-50 border border-amber-200 rounded-[10px]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <span className="text-lg">💡</span>
            <div>
              <h4 className="text-sm font-semibold text-slate-900 m-0 mb-1 tracking-tight">
                GitHub Enterprise support
              </h4>
              <p className="text-[13.5px] text-slate-700 leading-[1.5] m-0 tracking-tight">
                Using GitHub Enterprise Server? OnDeck supports custom GitHub instances. Just enter your GHES URL in the settings after installing.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
