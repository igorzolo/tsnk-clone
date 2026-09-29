import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Check, Phone } from 'lucide-react';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import Breadcrumbs from '../components/Breadcrumbs';
import ProductCard from '../components/ProductCard';
import SectionTitle from '../components/ui/SectionTitle';
import Seo from '../components/Seo';
import { useProducts } from '../hooks/useProducts';

export default function ProductDetail() {
  const { t } = useTranslation();
  const products = useProducts();
  const { slug } = useParams<{ slug: string }>();
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <>
        <Seo title={t('product.notFound')} />
        <Container className="py-20">
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <h1 className="text-3xl font-bold text-slate-900">
              {t('product.notFound')}
            </h1>
            <p className="text-slate-500">{t('product.notFoundText')}</p>
            <Link to="/equipment">
              <Button variant="outline">
                <ArrowLeft size={16} /> {t('product.backToCatalog')}
              </Button>
            </Link>
          </div>
        </Container>
      </>
    );
  }

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <>
      <Seo title={product.name} description={product.shortDescription} />
      <Container className="py-8 sm:py-12">
        <Breadcrumbs
          items={[
            { label: t('product.breadcrumbHome'), to: '/' },
            { label: t('product.breadcrumbEquipment'), to: '/equipment' },
            { label: product.name },
          ]}
        />

        <div className="mt-8 grid gap-10 lg:grid-cols-2">
          <div className="self-start overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
            <img
              src={product.image}
              alt={product.name}
              className="aspect-[3/2] w-full object-cover"
            />
          </div>

          <div className="flex flex-col">
            <span className="text-xs font-medium uppercase tracking-wider text-brand-600">
              {t(`categories.${product.category}`)}
            </span>
            <h1 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              {product.name}
            </h1>
            <p className="mt-4 text-base text-slate-600">
              {product.fullDescription}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contacts">
                <Button size="lg">
                  <Phone size={18} /> {t('product.request')}
                </Button>
              </Link>
              <Link to="/equipment">
                <Button size="lg" variant="outline">
                  <ArrowLeft size={18} /> {t('product.backToCatalog')}
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              {t('product.keyFeatures')}
            </h2>
            <ul className="mt-5 space-y-3">
              {product.features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  <span className="text-sm text-slate-700">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900">
              {t('product.specs')}
            </h2>
            <dl className="mt-5 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
                {product.specs.map((s) => (
                <div
                    key={s.label}
                    className="flex flex-col gap-2 px-5 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
                >
                    <dt className="text-sm text-slate-500 sm:shrink-0">{s.label}</dt>
                    <dd className="text-sm font-medium text-slate-900 sm:text-right">
                    {Array.isArray(s.value) ? (
                        <div className="flex flex-col gap-1">
                        {s.value.map((line) => (
                            <span key={line}>{line}</span>
                        ))}
                        </div>
                    ) : (
                        s.value
                    )}
                    </dd>
                </div>
                ))}
            </dl>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-20">
            <SectionTitle title={t('product.related')} />
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </Container>
    </>
  );
}