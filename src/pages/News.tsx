import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Calendar } from 'lucide-react';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import Breadcrumbs from '../components/Breadcrumbs';
import Seo from '../components/Seo';
import { useNews } from '../hooks/useNews';

export default function NewsDetail() {
  const { t, i18n } = useTranslation();
  const news = useNews();
  const { slug } = useParams<{ slug: string }>();
  const item = news.find((n) => n.slug === slug);

  const locale = i18n.resolvedLanguage?.startsWith('en') ? 'en-US' : 'ru-RU';

  if (!item) {
    return (
      <>
        <Seo title={t('news.notFound')} />
        <Container className="py-20">
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <h1 className="text-3xl font-bold text-slate-900">
              {t('news.notFound')}
            </h1>
            <p className="text-slate-500">{t('news.notFoundText')}</p>
            <Link to="/news">
              <Button variant="outline">
                <ArrowLeft size={16} /> {t('news.backToNews')}
              </Button>
            </Link>
          </div>
        </Container>
      </>
    );
  }

  const formatted = new Date(item.date).toLocaleDateString(locale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <>
      <Seo title={item.title} description={item.excerpt} />
      <Container className="py-8 sm:py-12">
        <Breadcrumbs
          items={[
            { label: t('news.breadcrumbHome'), to: '/' },
            { label: t('news.breadcrumbNews'), to: '/news' },
            { label: item.title },
          ]}
        />

        <article className="mx-auto mt-8 max-w-3xl">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Calendar size={14} />
            <time>{formatted}</time>
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

          <div className="mt-8">
            {item.content.split('\n\n').map((paragraph, i) => (
              <p key={i} className="mb-4 text-base leading-relaxed text-slate-700">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            <Link to="/news">
              <Button variant="outline">
                <ArrowLeft size={16} /> {t('news.backToNews')}
              </Button>
            </Link>
            <Link to="/contacts">
              <Button>{t('news.contactUs')}</Button>
            </Link>
          </div>
        </article>
      </Container>
    </>
  );
}