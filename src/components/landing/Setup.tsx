import { motion } from 'framer-motion';
import { CHROME_WEB_STORE_URL, GITHUB_TOKEN_URL } from './constants';

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
          OnDeck takes about two minutes to set up. Install the extension, sign in with GitHub, and the keyboard shortcut works straight away.
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
                  href={CHROME_WEB_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
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
                Sign in with GitHub
              </h3>
              <p className="text-[15px] text-slate-700 leading-[1.55] m-0 mb-3 tracking-tight">
                Click the OnDeck icon, then <strong className="font-semibold text-slate-900">Sign in with GitHub</strong>.
                Copy the one-time code, approve OnDeck on github.com, and the popup signs you in. You can close the
                popup while you approve; OnDeck finishes in the background and starts syncing straight away.
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
                Or use a personal access token
              </h3>
              <p className="text-[15px] text-slate-700 leading-[1.55] m-0 tracking-tight">
                Rather not authorise an app? Create a classic token on{' '}
                <a
                  href={GITHUB_TOKEN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 underline underline-offset-2 hover:text-blue-800"
                >
                  GitHub&rsquo;s token page
                </a>{' '}
                with the{' '}
                <code className="font-mono text-[13px] py-[2px] px-[6px] bg-stone-100 border border-stone-300 rounded text-slate-900">
                  notifications
                </code>{' '}
                and{' '}
                <code className="font-mono text-[13px] py-[2px] px-[6px] bg-stone-100 border border-stone-300 rounded text-slate-900">
                  repo
                </code>{' '}
                scopes, then paste it into the popup. Fine-grained tokens can&rsquo;t read notifications yet.
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
                OnDeck ships with a shortcut already mapped to the keys below. To
                change it, head to{' '}
                <code className="font-mono text-[13px] py-[2px] px-[6px] bg-stone-100 border border-stone-300 rounded text-slate-900">
                  chrome://extensions/shortcuts
                </code>
                , find OnDeck, and edit the &ldquo;Open popup&rdquo; binding.
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
                Whichever way you sign in, OnDeck encrypts the token and keeps it in this browser&rsquo;s extension storage. It&rsquo;s only ever sent to GitHub, never to a server of ours.
              </p>
            </div>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}
