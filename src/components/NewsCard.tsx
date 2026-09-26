import { Link } from 'react-router-dom';
import type { NewsItem } from '../types';

type Props = {
  item: NewsItem;
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export default function NewsCard({ item }: Props) {
  return (
    <Link
      to={`/news/${item.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all hover:border-brand-300 hover:shadow-md"
    >
      <div className="aspect-[16/10] overflow-hidden bg-slate-100">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <time className="text-xs text-slate-500">{formatDate(item.date)}</time>
        <h3 className="mt-2 text-base font-bold leading-snug text-slate-900 group-hover:text-brand-600 transition-colors">
          {item.title}
        </h3>
        <p className="mt-2 flex-1 text-sm text-slate-600 line-clamp-3">
          {item.excerpt}
        </p>
      </div>
    </Link>
  );
}