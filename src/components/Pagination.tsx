import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../lib/cn';

type Props = {
  current: number;
  total: number;
  onChange: (page: number) => void;
};

export default function Pagination({ current, total, onChange }: Props) {
  if (total <= 1) return null;

  const pages = Array.from({ length: total }, (_, i) => i + 1);

  return (
    <div className="mt-12 flex items-center justify-center gap-2">
      <button
        onClick={() => onChange(current - 1)}
        disabled={current === 1}
        className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition-colors hover:bg-slate-100 disabled:opacity-40 disabled:hover:bg-transparent"
        aria-label="Предыдущая страница"
      >
        <ChevronLeft size={18} />
      </button>

      {pages.map((p) => (
        <button
          key={p}
          onClick={() => onChange(p)}
          className={cn(
            'h-9 min-w-9 rounded-lg px-3 text-sm font-medium transition-colors',
            p === current
              ? 'bg-brand-600 text-white'
              : 'border border-slate-200 text-slate-700 hover:bg-slate-100',
          )}
        >
          {p}
        </button>
      ))}

      <button
        onClick={() => onChange(current + 1)}
        disabled={current === total}
        className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition-colors hover:bg-slate-100 disabled:opacity-40 disabled:hover:bg-transparent"
        aria-label="Следующая страница"
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
}