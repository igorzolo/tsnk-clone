import Container from '../ui/Container';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <Container>
        <div className="grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-sm font-bold text-white">
                Т
              </div>
              <span className="font-bold text-slate-900">ТСНК</span>
            </div>
            <p className="mt-3 text-sm text-slate-600">{t('footer.tagline')}</p>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-slate-900">
              {t('footer.company')}
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><a href="/about" className="hover:text-brand-600">{t('footer.companyAbout')}</a></li>
              <li><a href="/news" className="hover:text-brand-600">{t('footer.companyNews')}</a></li>
              <li><a href="/contacts" className="hover:text-brand-600">{t('footer.companyContacts')}</a></li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-slate-900">
              {t('footer.products')}
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><a href="/equipment" className="hover:text-brand-600">{t('footer.productsIntroscopes')}</a></li>
              <li><a href="/equipment" className="hover:text-brand-600">{t('footer.productsDetectors')}</a></li>
              <li><a href="/equipment" className="hover:text-brand-600">{t('footer.productsMobile')}</a></li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-slate-900">
              {t('footer.contacts')}
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>+7 (000) 000-00-00</li>
              <li>info@tsnk.ru</li>
              <li>Москва, ул. Примерная, 1</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 py-6 text-center text-xs text-slate-500">
          {t('footer.copyright', { year })}
        </div>
      </Container>
    </footer>
  );
}