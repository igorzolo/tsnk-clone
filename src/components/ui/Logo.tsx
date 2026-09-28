import { Link } from 'react-router-dom';
import { cn } from '../../lib/cn';

type Props = {
  withText?: boolean;
  className?: string;
};

export default function Logo({ withText = true, className }: Props) {
  return (
    <Link
      to="/"
      className={cn('flex shrink-0 items-center gap-2', className)}
      aria-label="ТСНК — на главную"
    >
      <img
        src="/logo.png"
        alt="ТСНК"
        className="h-9 w-9 rounded-lg object-contain"
      />
      {withText && (
        <span className="text-lg font-bold tracking-tight text-slate-900">
          ТСНК
        </span>
      )}
    </Link>
  );
}