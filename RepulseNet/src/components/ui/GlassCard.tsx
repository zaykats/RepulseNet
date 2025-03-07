
import React from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  onClick?: () => void;  // Added onClick prop
}

const GlassCard = ({ children, className, hoverEffect = false, onClick }: GlassCardProps) => {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 shadow-lg',
        hoverEffect && 'transition-all duration-300 hover:shadow-xl hover:border-white/30 hover:bg-white/15',
        className
      )}
      onClick={onClick}  // Added onClick handler
    >
      {/* Subtle glass reflection effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-white/10 to-transparent pointer-events-none" />
      {children}
    </div>
  );
};

export default GlassCard;
