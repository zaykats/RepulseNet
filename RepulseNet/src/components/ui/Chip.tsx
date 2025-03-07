
import React from 'react';
import { cn } from '@/lib/utils';

interface ChipProps {
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'success' | 'secondary';
  className?: string;
}

const Chip = ({ children, variant = 'default', className }: ChipProps) => {
  return (
    <span 
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-all',
        variant === 'default' && 'bg-repulse-100 text-repulse-800',
        variant === 'outline' && 'border border-repulse-200 text-repulse-700',
        variant === 'success' && 'bg-repulse-500 text-white',
        variant === 'secondary' && 'bg-gray-100 text-gray-800',
        className
      )}
    >
      {children}
    </span>
  );
};

export default Chip;
