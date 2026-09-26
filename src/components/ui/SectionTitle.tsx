import { cn } from '../../lib/cn';

type SectionTitleProps = {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
};

export default function SectionTitle({
  title,
  subtitle,
  align = 'left',
  className,
}: SectionTitleProps) {
  return (
    <div className={cn(align === 'center' && 'text-center', className)}>
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 max-w-2xl text-base text-slate-600 sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}