import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Check, Phone } from 'lucide-react';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import Breadcrumbs from '../components/Breadcrumbs';
import ProductCard from '../components/ProductCard';
import SectionTitle from '../components/ui/SectionTitle';
import { products } from '../mocks/data/products';
import { CATEGORY_LABELS } from '../types';

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <Container className="py-20">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <h1 className="text-3xl font-bold text-slate-900">Продукт не найден</h1>
          <p className="text-slate-500">
            Возможно, ссылка устарела или продукт был удалён из каталога.
          </p>
          <Link to="/equipment">
            <Button variant="outline">
              <ArrowLeft size={16} /> Вернуться в каталог
            </Button>
          </Link>
        </div>
      </Container>
    );
  }

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <Container className="py-8 sm:py-12">
      <Breadcrumbs
        items={[
          { label: 'Главная', to: '/' },
          { label: 'Оборудование', to: '/equipment' },
          { label: product.name },
        ]}
      />

      {/* Основной блок */}
      <div className="mt-8 grid gap-10 lg:grid-cols-2">
        {/* Изображение */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
          <img
            src={product.image}
            alt={product.name}
            className="aspect-[3/2] w-full object-cover"
          />
        </div>

        {/* Информация */}
        <div className="flex flex-col">
          <span className="text-xs font-medium uppercase tracking-wider text-brand-600">
            {CATEGORY_LABELS[product.category]}
          </span>
          <h1 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            {product.name}
          </h1>
          <p className="mt-4 text-base text-slate-600">{product.fullDescription}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contacts">
              <Button size="lg">
                <Phone size={18} /> Запросить
              </Button>
            </Link>
            <Link to="/equipment">
              <Button size="lg" variant="outline">
                <ArrowLeft size={18} /> В каталог
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Характеристики и фичи */}
      <div className="mt-16 grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Ключевые особенности</h2>
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
          <h2 className="text-xl font-bold text-slate-900">Технические характеристики</h2>
          <dl className="mt-5 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
            {product.specs.map((s) => (
              <div key={s.label} className="flex justify-between gap-6 px-5 py-3">
                <dt className="text-sm text-slate-500">{s.label}</dt>
                <dd className="text-sm font-medium text-slate-900 text-right">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Похожие */}
      {related.length > 0 && (
        <div className="mt-20">
          <SectionTitle title="Похожие продукты" />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </Container>
  );
}