import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Seo from '../components/Seo';

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <>
      <Seo title={t('notFound.title')} />
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4">
        <h1 className="text-6xl font-bold text-slate-900">
          {t('notFound.title')}
        </h1>
        <p className="text-slate-600">{t('notFound.text')}</p>
        <Link to="/" className="text-brand-600 hover:underline">
          {t('notFound.backHome')}
        </Link>
      </div>
    </>
  );
}