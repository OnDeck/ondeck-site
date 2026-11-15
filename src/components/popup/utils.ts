import type { Notification, NotificationGroup, GroupBy } from '../../types';

export function groupNotifs(list: Notification[], by: GroupBy): NotificationGroup[] {
  if (by === 'none') return [{ key: 'all', label: null, items: list }];

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
