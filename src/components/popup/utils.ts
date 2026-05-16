import type { Priority, ThemeTokens, Notification, NotificationGroup, GroupBy } from '../../types';

export function priorityColor(p: Priority, t: ThemeTokens): string {
  if (p === 'critical') return t.critical;
  if (p === 'important') return t.important;
  if (p === 'normal') return t.accent;
  return t.fg3;
}

export function groupNotifs(list: Notification[], by: GroupBy): NotificationGroup[] {
  if (by === 'none') return [{ key: 'all', label: null, items: list }];

  if (by === 'priority') {
    const order: Priority[] = ['critical', 'important', 'normal', 'muted'];
    const labels: Record<Priority, string> = {
      critical: 'Critical',
      important: 'Important',
      normal: 'Normal',
      muted: 'Muted',
    };
    return order
      .map((k) => ({ key: k, label: labels[k], items: list.filter((n) => n.priority === k) }))
      .filter((g) => g.items.length > 0);
  }

  if (by === 'repository') {
    const map = new Map<string, Notification[]>();
    list.forEach((n) => {
      if (!map.has(n.repo)) map.set(n.repo, []);
      map.get(n.repo)!.push(n);
    });
    return [...map.entries()].map(([k, items]) => ({ key: k, label: k, items }));
  }

  return [{ key: 'all', label: null, items: list }];
}
