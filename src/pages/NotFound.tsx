import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4">
      <h1 className="text-6xl font-bold text-slate-900">404</h1>
      <p className="text-slate-600">Страница не найдена</p>
      <Link to="/" className="text-brand-600 hover:underline">
        Вернуться на главную
      </Link>
    </div>
  );
}