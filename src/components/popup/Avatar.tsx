import type { Notification } from '../../types';

interface AvatarProps {
  n: Notification;
  size: number;
}

export function Avatar({ n, size }: AvatarProps) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        background: n.actorColor,
        color: '#fff',
        fontSize: size <= 18 ? 8 : size <= 22 ? 9 : 10,
        fontWeight: 600,
        letterSpacing: 0.3,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        boxShadow: 'inset 0 0 0 0.5px rgba(255,255,255,0.15), 0 1px 2px rgba(0,0,0,0.25)',
        fontFamily: 'var(--ondeck-mono)',
      }}
    >
      {n.actorInit}
    </div>
  );
}
