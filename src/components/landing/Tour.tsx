import OnDeckPopup from '../../Popup';
import { LP } from './constants';
import { sectionH2, sectionLead } from './styles';
import { Annotation } from './Annotation';

export function Tour() {
  return (
    <section
      id="tour"
      style={{
        padding: '72px 28px',
        borderTop: `1px solid ${LP.line}`,
        background: LP.bg1,
      }}
    >
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        <h2 style={sectionH2()}>
          What&rsquo;s <span style={{ color: LP.blue }}>in</span> the popup.
        </h2>
        <p style={sectionLead()}>
          Open it with the keyboard shortcut or the toolbar icon. Everything you can do, you can do
          without the mouse.
        </p>

        <div
          style={{
            marginTop: 48,
            display: 'grid',
            gridTemplateColumns: '1fr 440px 1fr',
            gap: 56,
            alignItems: 'center',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 56, textAlign: 'right' }}>
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

          <div
            style={{
              width: 440,
              height: 600,
              borderRadius: 10,
              overflow: 'hidden',
              border: `1px solid ${LP.lineStrong}`,
              boxShadow: '0 20px 50px -16px rgba(60,40,15,0.22)',
              justifySelf: 'center',
            }}
          >
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

          <div style={{ display: 'flex', flexDirection: 'column', gap: 56 }}>
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
