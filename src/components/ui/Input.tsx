import { forwardRef, type InputHTMLAttributes, type TextareaHTMLAttributes } from 'react';
import { cn } from '../../lib/cn';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, id, ...rest }, ref) => {
    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label htmlFor={id} className="text-sm font-medium text-slate-700">
            {label}
          </label>
        )}
        <input
          id={id}
          ref={ref}
          className={cn(
            'rounded-lg border bg-white px-4 py-2.5 text-sm text-slate-900 transition-colors',
            'placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500',
            error
              ? 'border-red-400 focus:ring-red-400'
              : 'border-slate-300 focus:border-brand-500',
            className,
          )}
          {...rest}
        />
        {error && <span className="text-xs text-red-500">{error}</span>}
      </div>
    );
  },
);
Input.displayName = 'Input';

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
  error?: string;
};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className, id, ...rest }, ref) => {
    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label htmlFor={id} className="text-sm font-medium text-slate-700">
            {label}
          </label>
        )}
        <textarea
          id={id}
          ref={ref}
          rows={5}
          className={cn(
            'resize-none rounded-lg border bg-white px-4 py-2.5 text-sm text-slate-900 transition-colors',
            'placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500',
            error
              ? 'border-red-400 focus:ring-red-400'
              : 'border-slate-300 focus:border-brand-500',
            className,
          )}
          {...rest}
        />
        {error && <span className="text-xs text-red-500">{error}</span>}
      </div>
    );
  },
);
Textarea.displayName = 'Textarea';