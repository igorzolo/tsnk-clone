import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { SearchX } from 'lucide-react';
import Container from '../components/ui/Container';
import SectionTitle from '../components/ui/SectionTitle';
import FilterBar from '../components/FilterBar';
import ProductCard from '../components/ProductCard';
import FadeIn from '../components/ui/FadeIn';
import Seo from '../components/Seo';
import { useProducts } from '../hooks/useProducts';
import type { ProductCategory } from '../types';

type Filter = ProductCategory | 'all';

export default function Equipment() {
  const { t } = useTranslation();
  const products = useProducts();
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
  }, [products]);

  const filtered = useMemo(() => {
    if (active === 'all') return products;
    return products.filter((p) => p.category === active);
  }, [active, products]);

  const handleChange = (value: Filter) => {
    if (value === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category: value });
    }
  };

  return (
    <>
      <Seo
        title={t('equipment.title')}
        description={t('equipment.subtitle')}
      />
      <Container className="py-12 sm:py-16">
        <SectionTitle
          title={t('equipment.title')}
          subtitle={t('equipment.subtitle')}
        />

        <div className="mt-8">
          <FilterBar active={active} onChange={handleChange} counts={counts} />
        </div>

        <p className="mt-6 text-sm text-slate-500">
          {t('equipment.found')}:{' '}
          <span className="font-semibold text-slate-900">{filtered.length}</span>
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
            <h3 className="text-lg font-semibold text-slate-900">
              {t('equipment.notFound')}
            </h3>
            <p className="max-w-sm text-sm text-slate-500">
              {t('equipment.notFoundText')}
            </p>
          </div>
        )}
      </Container>
    </>
  );
}