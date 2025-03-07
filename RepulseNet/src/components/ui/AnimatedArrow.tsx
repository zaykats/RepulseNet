
import React from 'react';
import { cn } from '@/lib/utils';

interface AnimatedArrowProps {
  direction?: 'right' | 'down' | 'left' | 'up';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const AnimatedArrow = ({ 
  direction = 'right', 
  size = 'md',
  className 
}: AnimatedArrowProps) => {
  
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };
  
  const directionClasses = {
    right: 'rotate-0',
    down: 'rotate-90',
    left: 'rotate-180',
    up: '-rotate-90'
  };
  
  return (
    <div className={cn(
      'relative transition-all duration-300 group-hover:translate-x-1',
      sizeClasses[size],
      directionClasses[direction],
      className
    )}>
      <svg 
        width="100%" 
        height="100%" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="transition-all"
      >
        <path 
          d="M14 5L21 12M21 12L14 19M21 12H3" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="transition-all duration-300"
        />
      </svg>
    </div>
  );
};

export default AnimatedArrow;
