import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import Container from '../components/ui/Container';
import SectionTitle from '../components/ui/SectionTitle';
import NewsCard from '../components/NewsCard';
import Pagination from '../components/Pagination';
import { news } from '../mocks/data/news';
import FadeIn from '../components/ui/FadeIn';
import Seo from '../components/Seo';

const PAGE_SIZE = 3;

export default function News() {
  const [searchParams, setSearchParams] = useSearchParams();
  const pageParam = Number(searchParams.get('page') ?? '1');
  const totalPages = Math.ceil(news.length / PAGE_SIZE);
  const currentPage = pageParam >= 1 && pageParam <= totalPages ? pageParam : 1;

  const pageItems = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return news.slice(start, start + PAGE_SIZE);
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    if (page === 1) {
      setSearchParams({});
    } else {
      setSearchParams({ page: String(page) });
    }
  };

  return (
    <>
      <Seo
        title="Новости компании"
        description="Что нового происходит в ТСНК и отрасли досмотрового оборудования: обновления продуктов, выставки, партнёрства."
      />
      <Container className="py-12 sm:py-16">
        <SectionTitle
          title="Новости"
          subtitle="Что нового происходит в компании и отрасли."
        />

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