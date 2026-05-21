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
        className="inline-flex items-center py-[2px] px-[9px] text-[10.5px] font-mono font-semibold tracking-wide rounded mb-[10px]"
        style={{ color: T.c, background: T.bg }}
      >
        {num}
      </div>
      <h3 className="text-[17px] font-semibold tracking-tight text-slate-900 m-0 mb-2">
        {title}
      </h3>
      <p className="text-[13.5px] text-slate-600 m-0 leading-[1.6] tracking-tight">
        {body}
      </p>
    </div>
  );
}
