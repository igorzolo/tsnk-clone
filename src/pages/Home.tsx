import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Zap, Award } from 'lucide-react';
import Container from '../components/ui/Container';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import ProductCard from '../components/ProductCard';
import NewsCard from '../components/NewsCard';
import { products } from '../mocks/data/products';
import { news } from '../mocks/data/news';
import FadeIn from '../components/ui/FadeIn';
import Seo from '../components/Seo';

export default function Home() {
  return (
    <>
      <Seo
        title="Досмотровое оборудование нового поколения"
        description="Российский производитель досмотрового оборудования: интроскопы, детекторы, мобильные комплексы, радиолокационные системы. Полный цикл производства."
      />
      
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white">
        <Container className="py-20 sm:py-28">
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-3 py-1 text-xs font-medium text-brand-700">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                Российское производство
              </span>
              <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Досмотровое оборудование{' '}
                <span className="text-brand-600">нового поколения</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
                Системы безопасности для транспорта, промышленности и государственных
                объектов. Собственные разработки, полный цикл производства, сервис по всей
                России.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Link to="/equipment">
                  <Button size="lg">
                    Каталог оборудования <ArrowRight size={18} />
                  </Button>
                </Link>
                <Link to="/contacts">
                  <Button size="lg" variant="outline">
                    Связаться с нами
                  </Button>
                </Link>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ПРЕИМУЩЕСТВА */}
      <section className="border-y border-slate-100 bg-slate-50">
        <Container className="py-12">
          <FadeIn>
            <div className="grid gap-8 sm:grid-cols-3">
              {[
                {
                  icon: ShieldCheck,
                  title: 'Собственное производство',
                  text: 'Полный цикл разработки и сборки в России.',
                },
                {
                  icon: Zap,
                  title: 'Современные технологии',
                  text: 'ИИ, машинное обучение, цифровая обработка сигналов.',
                },
                {
                  icon: Award,
                  title: 'Сертификация',
                  text: 'Соответствие международным стандартам безопасности.',
                },
              ].map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-brand-600">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">{title}</h3>
                    <p className="mt-1 text-sm text-slate-600">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ОБОРУДОВАНИЕ */}
      <section>
        <Container className="py-20">
          <FadeIn>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <SectionTitle
                title="Оборудование"
                subtitle="Полная линейка досмотровых систем для любых задач."
              />
              <Link
                to="/equipment"
                className="inline-flex items-center gap-1 text-sm font-medium text-brand-600 hover:gap-2 transition-all"
              >
                Весь каталог <ArrowRight size={14} />
              </Link>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {products.map((p, i) => (
                <FadeIn key={p.id} delay={i * 0.08}>
                  <ProductCard product={p} />
                </FadeIn>
              ))}
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* НОВОСТИ */}
      <section className="bg-slate-50">
        <Container className="py-20">
          <FadeIn>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <SectionTitle
                title="Новости"
                subtitle="Что нового происходит в компании и отрасли."
              />
              <Link
                to="/news"
                className="inline-flex items-center gap-1 text-sm font-medium text-brand-600 hover:gap-2 transition-all"
              >
                Все новости <ArrowRight size={14} />
              </Link>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {news.map((n, i) => (
                <FadeIn key={n.id} delay={i * 0.08}>
                  <NewsCard item={n} />
                </FadeIn>
              ))}
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* CTA */}
      <section>
        <Container className="py-20">
          <FadeIn>
            <div className="rounded-3xl bg-slate-900 px-8 py-16 text-center sm:px-16">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Нужна консультация?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-slate-300">
                Подберём оборудование под ваши задачи и рассчитаем стоимость поставки.
              </p>
              <div className="mt-8 flex justify-center">
                <Link to="/contacts">
                  <Button size="lg">Оставить заявку</Button>
                </Link>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}

