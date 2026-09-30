import Container from '../ui/Container';
import { useTranslation } from 'react-i18next';
import Logo from '../ui/Logo';
import { Link } from 'react-router-dom';

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <Container>
        <div className="grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />
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
              <li>
                <Link to="/equipment?category=introscope" className="transition-colors hover:text-brand-600">
                  {t('footer.productsIntroscopes')}
                </Link>
              </li>
              <li>
                <Link to="/equipment?category=detector" className="transition-colors hover:text-brand-600">
                  {t('footer.productsDetectors')}
                </Link>
              </li>
              <li>
                <Link to="/equipment?category=mobile" className="transition-colors hover:text-brand-600">
                  {t('footer.productsMobile')}
                </Link>
              </li>
              <li>
                <Link to="/equipment?category=radar" className="transition-colors hover:text-brand-600">
                  {t('footer.productsRadar')}
                </Link>
              </li>
              <li>
                <Link to="/equipment?category=xray" className="transition-colors hover:text-brand-600">
                  {t('footer.productsXray')}
                </Link>
              </li>
              <li>
                <Link to="/equipment?category=medicine" className="transition-colors hover:text-brand-600">
                  {t('footer.productsMedicine')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-slate-900">
              {t('footer.contacts')}
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>+7 (000) 000-00-00</li>
              <li>info@tsnk.ru</li>
              <li>{t('footer.address')}</li>
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