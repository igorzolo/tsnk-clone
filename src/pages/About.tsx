import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Factory, Users, Award, Target, ShieldCheck, TrendingUp } from 'lucide-react';
import Container from '../components/ui/Container';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import Seo from '../components/Seo';

export default function About() {
  const { t } = useTranslation();

  const stats = [
    { value: '15+', label: t('about.stats.years') },
    { value: '500+', label: t('about.stats.systems') },
    { value: '40+', label: t('about.stats.regions') },
    { value: '120', label: t('about.stats.employees') },
  ];

  const values = [
    {
      icon: Target,
      title: t('about.values.accuracyTitle'),
      text: t('about.values.accuracyText'),
    },
    {
      icon: ShieldCheck,
      title: t('about.values.reliabilityTitle'),
      text: t('about.values.reliabilityText'),
    },
    {
      icon: TrendingUp,
      title: t('about.values.innovationTitle'),
      text: t('about.values.innovationText'),
    },
    {
      icon: Users,
      title: t('about.values.partnershipTitle'),
      text: t('about.values.partnershipText'),
    },
  ];

  const productionItems = [
    t('about.production.item1'),
    t('about.production.item2'),
    t('about.production.item3'),
    t('about.production.item4'),
  ];

  return (
    <>
      <Seo title={t('about.badge')} description={t('about.subtitle')} />

      <section className="border-b border-slate-100 bg-gradient-to-b from-brand-50 to-white">
        <Container className="py-16 sm:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-3 py-1 text-xs font-medium text-brand-700">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
              {t('about.badge')}
            </span>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              {t('about.title')}
            </h1>
            <p className="mt-6 text-lg text-slate-600">{t('about.subtitle')}</p>
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-12">
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
        </Container>
      </section>

      <section className="bg-slate-50">
        <Container className="py-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <SectionTitle title={t('about.history.title')} />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-700">
                <p>{t('about.history.p1')}</p>
                <p>{t('about.history.p2')}</p>
                <p>{t('about.history.p3')}</p>
              </div>
            </div>

            <div>
              <SectionTitle title={t('about.mission.title')} />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-700">
                <p>{t('about.mission.p1')}</p>
                <p>{t('about.mission.p2')}</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-16">
          <SectionTitle
            title={t('about.values.title')}
            subtitle={t('about.values.subtitle')}
            align="center"
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:border-brand-300 hover:shadow-md"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100 text-brand-600">
                  <Icon size={22} />
                </div>
                <h3 className="mt-4 text-base font-bold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-slate-900 text-white">
        <Container className="py-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl">
                {t('about.production.title')}
              </h2>
              <p className="mt-6 text-base leading-relaxed text-slate-300">
                {t('about.production.subtitle')}
              </p>
              <ul className="mt-8 space-y-3">
                {productionItems.map((item) => (
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

      <section>
        <Container className="py-16">
          <div className="rounded-3xl border border-brand-100 bg-gradient-to-br from-brand-50 to-white px-8 py-14 text-center sm:px-16">
            <Award className="mx-auto text-brand-600" size={40} />
            <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
              {t('about.cta.title')}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-600">
              {t('about.cta.subtitle')}
            </p>
            <div className="mt-8 flex justify-center">
              <Link to="/contacts">
                <Button size="lg">{t('about.cta.button')}</Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}