type QuickFilter = {
  id: string;
  name: string;
};

export const quickFilters: QuickFilter[] = [
  { id: crypto.randomUUID(), name: 'Newest' },
  { id: crypto.randomUUID(), name: 'Recommended' },
  { id: crypto.randomUUID(), name: 'Frequent' },
  { id: crypto.randomUUID(), name: 'Unanswered' }
];
