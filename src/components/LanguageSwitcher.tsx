import { useTranslation } from 'react-i18next';
import { cn } from '../lib/cn';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const current = i18n.resolvedLanguage?.startsWith('en') ? 'en' : 'ru';

  const change = (lang: 'ru' | 'en') => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="flex items-center gap-0.5 rounded-lg border border-slate-200 bg-slate-50 p-0.5">
      {(['ru', 'en'] as const).map((lang) => (
        <button
          key={lang}
          onClick={() => change(lang)}
          className={cn(
            'rounded-md px-2 py-1 text-xs font-medium transition-colors',
            current === lang
              ? 'bg-white text-slate-900 shadow-sm'
              : 'text-slate-500 hover:text-slate-900',
          )}
          aria-label={`Switch to ${lang.toUpperCase()}`}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
}