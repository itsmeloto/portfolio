import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';

type LinkButtonProps = {
  href: string;
  variant?: 'primary' | 'secondary' | 'ghost';
} & HTMLMotionProps<'a'>;

type ActionButtonProps = {
  href?: undefined;
  variant?: 'primary' | 'secondary' | 'ghost';
} & HTMLMotionProps<'button'>;

type ButtonProps = LinkButtonProps | ActionButtonProps;

const motionInteraction = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.98 },
};

export const Button: React.FC<ButtonProps> = ({ children, className = '', variant = 'primary', href, ...props }) => {
  const base =
    variant === 'primary'
      ? 'btn-primary'
      : variant === 'secondary'
        ? 'btn-secondary'
        : 'inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-foreground hover:bg-card border border-transparent';

  if (href) {
    return (
      <motion.a
        {...motionInteraction}
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noreferrer' : undefined}
        className={`${base} ${className}`}
        role="button"
        {...(props as HTMLMotionProps<'a'>)}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      {...motionInteraction}
      className={`${base} ${className}`}
      {...(props as HTMLMotionProps<'button'>)}
    >
      {children}
    </motion.button>
  );
};
