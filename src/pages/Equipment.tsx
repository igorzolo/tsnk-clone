import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchX } from 'lucide-react';
import Container from '../components/ui/Container';
import SectionTitle from '../components/ui/SectionTitle';
import FilterBar from '../components/FilterBar';
import ProductCard from '../components/ProductCard';
import { products } from '../mocks/data/products';
import type { ProductCategory } from '../types';
import FadeIn from '../components/ui/FadeIn';

type Filter = ProductCategory | 'all';

export default function Equipment() {
  const [searchParams, setSearchParams] = useSearchParams();
  const rawCategory = searchParams.get('category');
  const active: Filter =
    rawCategory && ['introscope', 'detector', 'mobile', 'radar'].includes(rawCategory)
      ? (rawCategory as ProductCategory)
      : 'all';

  const counts = useMemo(() => {
    const base: Record<Filter, number> = {
      all: products.length,
      introscope: 0,
      detector: 0,
      mobile: 0,
      radar: 0,
    };
    products.forEach((p) => {
      base[p.category] += 1;
    });
    return base;
  }, []);

  const filtered = useMemo(() => {
    if (active === 'all') return products;
    return products.filter((p) => p.category === active);
  }, [active]);

  const handleChange = (value: Filter) => {
    if (value === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category: value });
    }
  };

  return (
    <Container className="py-12 sm:py-16">
      <SectionTitle
        title="Оборудование"
        subtitle="Полная линейка досмотровых систем для транспорта, промышленности и государственных объектов."
      />

      <div className="mt-8">
        <FilterBar active={active} onChange={handleChange} counts={counts} />
      </div>

      <p className="mt-6 text-sm text-slate-500">
        Найдено: <span className="font-semibold text-slate-900">{filtered.length}</span>
      </p>

      {filtered.length > 0 ? (
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((p, index) => (
            <FadeIn key={p.id} delay={index * 0.06}>
              <ProductCard product={p} />
            </FadeIn>
          ))}
        </div>
      ) : (
        <div className="mt-16 flex flex-col items-center justify-center gap-3 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-slate-400">
            <SearchX size={26} />
          </div>
          <h3 className="text-lg font-semibold text-slate-900">Ничего не найдено</h3>
          <p className="max-w-sm text-sm text-slate-500">
            Попробуйте выбрать другую категорию или сбросить фильтр.
          </p>
        </div>
      )}
    </Container>
  );
}