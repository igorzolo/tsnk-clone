import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Calendar } from 'lucide-react';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import Breadcrumbs from '../components/Breadcrumbs';
import { news } from '../mocks/data/news';

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export default function NewsDetail() {
  const { slug } = useParams<{ slug: string }>();
  const item = news.find((n) => n.slug === slug);

  if (!item) {
    return (
      <Container className="py-20">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <h1 className="text-3xl font-bold text-slate-900">Новость не найдена</h1>
          <p className="text-slate-500">
            Возможно, ссылка устарела или новость была удалена.
          </p>
          <Link to="/news">
            <Button variant="outline">
              <ArrowLeft size={16} /> Ко всем новостям
            </Button>
          </Link>
        </div>
      </Container>
    );
  }

  return (
    <Container className="py-8 sm:py-12">
      <Breadcrumbs
        items={[
          { label: 'Главная', to: '/' },
          { label: 'Новости', to: '/news' },
          { label: item.title },
        ]}
      />

      <article className="mx-auto mt-8 max-w-3xl">
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <Calendar size={14} />
          <time>{formatDate(item.date)}</time>
        </div>

        <h1 className="mt-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
          {item.title}
        </h1>

        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
          <img
            src={item.image}
            alt={item.title}
            className="aspect-[16/9] w-full object-cover"
          />
        </div>

        <div className="prose prose-slate mt-8 max-w-none">
          {item.content.split('\n\n').map((paragraph, i) => (
            <p key={i} className="mb-4 text-base leading-relaxed text-slate-700">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          <Link to="/news">
            <Button variant="outline">
              <ArrowLeft size={16} /> Все новости
            </Button>
          </Link>
          <Link to="/contacts">
            <Button>Связаться с нами</Button>
          </Link>
        </div>
      </article>
    </Container>
  );
}