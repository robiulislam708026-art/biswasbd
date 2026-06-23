import React from 'react';
import { cn } from '@utils/helpers';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, label, error, helperText, ...props }, ref) => (
  <div className="w-full">
    {label && <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>}
    <input
      ref={ref}
      className={cn(
        'flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500',
        error && 'border-red-500 focus:ring-red-500',
        className
      )}
      {...props}
    />
    {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    {helperText && <p className="text-gray-500 text-xs mt-1">{helperText}</p>}
  </div>
));
Input.displayName = 'Input';

export { Input };
