import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'solid' | 'ghost';
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'solid' }) => {
  const base =
    variant === 'solid'
      ? 'bg-primary/10 text-primary border border-primary/20'
      : 'border border-border text-muted backdrop-blur';
  return <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${base}`}>{children}</span>;
};
