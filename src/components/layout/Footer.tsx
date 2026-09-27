import Container from '../ui/Container';

export default function Footer() {
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
            <p className="mt-3 text-sm text-slate-600">
              Российский производитель досмотрового оборудования.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-slate-900">Компания</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><a href="/about" className="hover:text-brand-600">О нас</a></li>
              <li><a href="/news" className="hover:text-brand-600">Новости</a></li>
              <li><a href="/contacts" className="hover:text-brand-600">Контакты</a></li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-slate-900">Продукция</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><a href="/equipment" className="hover:text-brand-600">Интроскопы</a></li>
              <li><a href="/equipment" className="hover:text-brand-600">Детекторы</a></li>
              <li><a href="/equipment" className="hover:text-brand-600">Мобильные комплексы</a></li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-slate-900">Контакты</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>+7 (000) 000-00-00</li>
              <li>info@tsnk.ru</li>
              <li>Москва, ул. Примерная, 1</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 py-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} ТСНК. Учебный клон. Все права на оригинал принадлежат ООО «Диагностика-М».
        </div>
      </Container>
    </footer>
  );
}