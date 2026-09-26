import { cn } from '../lib/cn';
import { CATEGORY_LABELS, type ProductCategory } from '../types';

type Filter = ProductCategory | 'all';

type Props = {
  active: Filter;
  onChange: (value: Filter) => void;
  counts: Record<Filter, number>;
};

const FILTERS: Filter[] = ['all', 'introscope', 'detector', 'mobile', 'radar'];

export default function FilterBar({ active, onChange, counts }: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      {FILTERS.map((f) => {
        const label = f === 'all' ? 'Все' : CATEGORY_LABELS[f];
        const isActive = active === f;
        return (
          <button
            key={f}
            onClick={() => onChange(f)}
            className={cn(
              'inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors',
              isActive
                ? 'border-brand-600 bg-brand-600 text-white'
                : 'border-slate-200 bg-white text-slate-700 hover:border-brand-300 hover:text-brand-600',
            )}
          >
            {label}
            <span
              className={cn(
                'rounded-full px-1.5 text-xs',
                isActive ? 'bg-white/20' : 'bg-slate-100 text-slate-500',
              )}
            >
              {counts[f]}
            </span>
          </button>
        );
      })}
    </div>
  );
}