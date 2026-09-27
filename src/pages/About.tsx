import { Link } from 'react-router-dom';
import { Factory, Users, Award, Target, ShieldCheck, TrendingUp } from 'lucide-react';
import Container from '../components/ui/Container';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import FadeIn from '../components/ui/FadeIn';
import Seo from '../components/Seo';

const stats = [
  { value: '15+', label: 'лет на рынке' },
  { value: '500+', label: 'установленных систем' },
  { value: '40+', label: 'регионов поставки' },
  { value: '120', label: 'сотрудников' },
];

const values = [
  {
    icon: Target,
    title: 'Точность',
    text: 'Инженерный подход и контроль качества на каждом этапе производства.',
  },
  {
    icon: ShieldCheck,
    title: 'Надёжность',
    text: 'Оборудование работает в самых сложных условиях эксплуатации.',
  },
  {
    icon: TrendingUp,
    title: 'Инновации',
    text: 'Собственные разработки в области радиолокации и обработки сигналов.',
  },
  {
    icon: Users,
    title: 'Партнёрство',
    text: 'Долгосрочные отношения с клиентами и полный сервис после поставки.',
  },
];

export default function About() {
  return (
    <>
      <Seo
        title="О компании"
        description="ТСНК — российский производитель систем безопасности. 15 лет на рынке, 500+ установленных комплексов, полный цикл производства."
      />
      {/* Hero */}
      <section className="border-b border-slate-100 bg-gradient-to-b from-brand-50 to-white">
        <Container className="py-16 sm:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-3 py-1 text-xs font-medium text-brand-700">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
              О компании
            </span>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Российский производитель систем безопасности
            </h1>
            <p className="mt-6 text-lg text-slate-600">
              Полный цикл разработки, производства и сервиса досмотрового
              оборудования. Работаем с 2010 года.
            </p>
          </div>
        </Container>
      </section>

      {/* Цифры */}
      <section>
        <Container className="py-12">
          <FadeIn>
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-4xl font-extrabold text-brand-600 sm:text-5xl">
                    {s.value}
                  </div>
                  <div className="mt-2 text-sm text-slate-600">{s.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* История и миссия */}
      <section className="bg-slate-50">
        <Container className="py-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <SectionTitle title="Наша история" />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-700">
                <p>
                  Компания основана в 2010 году группой инженеров, объединённых
                  идеей создания отечественного досмотрового оборудования, не
                  уступающего мировым аналогам по точности и надёжности.
                </p>
                <p>
                  За 15 лет мы прошли путь от небольшой лаборатории до полноценного
                  производственного предприятия с собственным конструкторским бюро,
                  испытательным центром и сервисной службой по всей России.
                </p>
                <p>
                  Сегодня наше оборудование работает в аэропортах, на вокзалах, в
                  промышленных комплексах и на государственных объектах по всей
                  стране.
                </p>
              </div>
            </div>

            <div>
              <SectionTitle title="Наша миссия" />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-700">
                <p>
                  Мы делаем сложные технологии доступными для обеспечения
                  безопасности людей и инфраструктуры. Наша цель — чтобы каждый
                  объект, где это необходимо, был оснащён современными досмотровыми
                  системами.
                </p>
                <p>
                  Мы верим, что безопасность не должна быть компромиссом между
                  качеством, ценой и удобством. Поэтому разрабатываем оборудование,
                  которое решает все три задачи одновременно.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Ценности */}
      <section>
        <Container className="py-16">
          <SectionTitle
            title="Наши ценности"
            subtitle="Принципы, по которым мы работаем каждый день."
            align="center"
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, text }, index) => (
              <FadeIn key={title} delay={index * 0.08}>
                <div className="rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:border-brand-300 hover:shadow-md">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100 text-brand-600">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-4 text-base font-bold text-slate-900">{title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Производство */}
      <section className="bg-slate-900 text-white">
        <Container className="py-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl">
                Собственное производство полного цикла
              </h2>
              <p className="mt-6 text-base leading-relaxed text-slate-300">
                Все ключевые компоненты — генераторы излучения, детекторы, системы
                обработки сигналов и программное обеспечение — разрабатываются и
                производятся на нашей площадке.
              </p>
              <ul className="mt-8 space-y-3">
                {[
                  'Конструкторское бюро и R&D-лаборатория',
                  'Собственный испытательный центр',
                  'Сервисная служба по всей России',
                  'Сертификация по международным стандартам',
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-slate-200"
                  >
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-center">
              <div className="flex h-48 w-48 items-center justify-center rounded-3xl border border-white/10 bg-white/5">
                <Factory size={80} className="text-brand-400" strokeWidth={1.2} />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section>
        <Container className="py-16">
          <FadeIn>
            <div className="rounded-3xl border border-brand-100 bg-gradient-to-br from-brand-50 to-white px-8 py-14 text-center sm:px-16">
              <Award className="mx-auto text-brand-600" size={40} />
              <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
                Обсудим ваш проект?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-slate-600">
                Расскажите о задаче — подберём оборудование и рассчитаем стоимость.
              </p>
              <div className="mt-8 flex justify-center">
                <Link to="/contacts">
                  <Button size="lg">Связаться с нами</Button>
                </Link>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}