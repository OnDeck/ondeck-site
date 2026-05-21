import OnDeckPopup from '../../Popup';
import { Annotation } from './Annotation';

export function Tour() {
  return (
    <section id="tour" className="py-18 px-7 border-t border-lp-line bg-lp-bg1">
      <div className="max-w-[1120px] mx-auto">
        <h2 className="text-4xl tracking-tight font-semibold text-lp-fg0 m-0 mb-3 leading-tight">
          What&rsquo;s <span className="text-lp-blue">in</span> the popup.
        </h2>
        <p className="text-base text-lp-fg1 leading-[1.55] m-0 max-w-[560px] tracking-tight">
          Open it with the keyboard shortcut or the toolbar icon. Everything you can do, you can do
          without the mouse.
        </p>

        <div className="mt-12 grid grid-cols-[1fr_440px_1fr] gap-14 items-center">
          <div className="flex flex-col gap-14 text-right">
            <Annotation
              tone="red"
              num="01"
              title="Priority groups"
              body="Critical means CI is broken or a security alert dropped. Important means you're blocking someone or someone's blocking you. Everything else falls down."
            />
            <Annotation
              tone="blue"
              num="02"
              title="Filter chips"
              body="One tap to scope to mentions, reviews, or your assigned issues. Counts update live."
            />
            <Annotation
              tone="purple"
              num="03"
              title="Type codes"
              body="PR · RV · @ · CI · SEC — same three letters every time, in the same colors. Skim once, you've read it."
            />
          </div>

          <div className="w-[440px] h-[600px] rounded-[10px] overflow-hidden border border-lp-lineStrong shadow-[0_20px_50px_-16px_rgba(60,40,15,0.22)] justify-self-center">
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

          <div className="flex flex-col gap-14">
            <Annotation
              tone="amber"
              num="04"
              title="Density toggle"
              body="Three settings. Compact fits 16 rows per popup. Spacious is for when you actually want to read."
            />
            <Annotation
              tone="green"
              num="05"
              title="Inline triage"
              body="Archive, snooze, mute thread, mark read — all from the keyboard. The footer always shows what's available."
            />
            <Annotation
              tone="blue"
              num="06"
              title="Group however"
              body="By priority, repository, or time bucket. Group headers collapse. State sticks per session."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
