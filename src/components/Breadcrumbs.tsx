import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

type Crumb = {
  label: string;
  to?: string;
};

type Props = {
  items: Crumb[];
};

export default function Breadcrumbs({ items }: Props) {
  return (
    <nav className="flex items-center gap-1 text-sm text-slate-500">
      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;
        return (
          <span key={idx} className="flex items-center gap-1">
            {item.to && !isLast ? (
              <Link to={item.to} className="hover:text-brand-600 transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className={isLast ? 'text-slate-900 font-medium' : ''}>
                {item.label}
              </span>
            )}
            {!isLast && <ChevronRight size={14} className="text-slate-400" />}
          </span>
        );
      })}
    </nav>
  );
}