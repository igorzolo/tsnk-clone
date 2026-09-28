import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import type { Product } from '../types';

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const { t } = useTranslation();

  return (
    <Link
      to={`/equipment/${product.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all hover:-translate-y-1 hover:border-brand-300 hover:shadow-lg"
    >
      <div className="aspect-[3/2] overflow-hidden bg-slate-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <span className="text-xs font-medium uppercase tracking-wider text-brand-600">
          {t(`categories.${product.category}`)}
        </span>
        <h3 className="mt-2 text-lg font-bold text-slate-900">{product.name}</h3>
        <p className="mt-2 flex-1 text-sm text-slate-600">
          {product.shortDescription}
        </p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-600 transition-all group-hover:gap-2">
          {t('common.learnMore')} <ArrowRight size={14} />
        </span>
      </div>
    </Link>
  );
}