import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { cn } from '../../lib/cn';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../LanguageSwitcher';

const navItems = [
  { to: '/', key: 'nav.home' },
  { to: '/about', key: 'nav.about' },
  { to: '/equipment', key: 'nav.equipment' },
  { to: '/news', key: 'nav.news' },
  { to: '/contacts', key: 'nav.contacts' },
];

export default function Header() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Логотип */}
          <Link to="/" className="flex shrink-0 items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-600 font-bold text-white">
              Т
            </div>
            <span className="text-lg font-bold tracking-tight text-slate-900">
              ТСНК
            </span>
          </Link>

          {/* Навигация — desktop */}
          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                    cn(
                        'whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                        isActive
                        ? 'text-brand-600'
                        : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900',
                    )
                    }
                >
                {t(item.key)}
              </NavLink>
            ))}
          </nav>

          {/* Телефон + CTA — desktop */}
          <div className="hidden items-center gap-4 md:flex">
            <a
              href="tel:+70000000000"
              className="flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-brand-600"
            >
              <Phone size={16} />
              +7 (000) 000-00-00
            </a>
            <LanguageSwitcher />
            <Button size="sm">{t('common.contact')}</Button>
          </div>

          {/* Бургер — mobile */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 md:hidden"
            aria-label="Меню"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Мобильное меню */}
        {open && (
          <nav className="flex flex-col gap-1 border-t border-slate-200 py-3 md:hidden">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    'rounded-lg px-3 py-2 text-sm font-medium',
                    isActive
                      ? 'bg-brand-50 text-brand-600'
                      : 'text-slate-700 hover:bg-slate-100',
                  )
                }
              >
                {t(item.key)}
              </NavLink>
            ))}
            <Button size="sm" className="mt-2 w-full">
              Связаться
            </Button>
          </nav>
        )}
      </Container>
    </header>
  );
}