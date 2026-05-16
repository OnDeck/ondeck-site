import { TONE_MAP, type ToneColor } from './constants';

interface AnnotationProps {
  num: string;
  title: string;
  body: string;
  tone?: ToneColor;
}

export function Annotation({ num, title, body, tone = 'blue' }: AnnotationProps) {
  const T = TONE_MAP[tone];

  return (
    <div>
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          padding: '2px 9px',
          fontSize: 10.5,
          fontFamily: 'var(--ondeck-mono)',
          color: T.c,
          fontWeight: 600,
          letterSpacing: 0.4,
          background: T.bg,
          borderRadius: 4,
          marginBottom: 10,
        }}
      >
        {num}
      </div>
      <h3
        style={{
          fontSize: 17,
          fontWeight: 600,
          letterSpacing: -0.3,
          color: '#1a1814',
          margin: 0,
          marginBottom: 8,
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontSize: 13.5,
          color: '#7a7568',
          margin: 0,
          lineHeight: 1.6,
          letterSpacing: -0.05,
        }}
      >
        {body}
      </p>
    </div>
  );
}
