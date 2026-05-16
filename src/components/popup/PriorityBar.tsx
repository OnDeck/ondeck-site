import type { Priority, ThemeTokens } from '../../types';
import { priorityColor } from './utils';

interface PriorityBarProps {
  priority: Priority;
  priorityColors: boolean;
  t: ThemeTokens;
}

export function PriorityBar({ priority, priorityColors, t }: PriorityBarProps) {
  const color = priorityColors ? priorityColor(priority, t) : t.fg3;
  const opacity = priority === 'muted' ? 0.35 : 1;

  return (
    <div
      style={{
        width: 2,
        alignSelf: 'stretch',
        marginRight: 10,
        marginTop: 4,
        marginBottom: 4,
        background: color,
        opacity,
        borderRadius: 1,
      }}
    />
  );
}
