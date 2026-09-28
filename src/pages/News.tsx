import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Container from '../components/ui/Container';
import SectionTitle from '../components/ui/SectionTitle';
import NewsCard from '../components/NewsCard';
import Pagination from '../components/Pagination';
import FadeIn from '../components/ui/FadeIn';
import Seo from '../components/Seo';
import { useNews } from '../hooks/useNews';

const PAGE_SIZE = 3;

export default function News() {
  const { t } = useTranslation();
  const news = useNews();
  const [searchParams, setSearchParams] = useSearchParams();
  const pageParam = Number(searchParams.get('page') ?? '1');
  const totalPages = Math.ceil(news.length / PAGE_SIZE);
  const currentPage = pageParam >= 1 && pageParam <= totalPages ? pageParam : 1;

  const pageItems = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return news.slice(start, start + PAGE_SIZE);
  }, [currentPage, news]);

  const handlePageChange = (page: number) => {
    if (page === 1) {
      setSearchParams({});
    } else {
      setSearchParams({ page: String(page) });
    }
  };

  return (
    <>
      <Seo title={t('news.title')} description={t('news.subtitle')} />
      <Container className="py-12 sm:py-16">
        <SectionTitle title={t('news.title')} subtitle={t('news.subtitle')} />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pageItems.map((n, index) => (
            <FadeIn key={n.id} delay={index * 0.08}>
              <NewsCard item={n} />
            </FadeIn>
          ))}
        </div>

        <Pagination
          current={currentPage}
          total={totalPages}
          onChange={handlePageChange}
        />
      </Container>
    </>
  );
}