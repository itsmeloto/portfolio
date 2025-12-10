import React, { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ open, onClose, title, children }) => {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable?.[0];
    first?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'Tab' && focusable && focusable.length > 0) {
        const focusArray = Array.from(focusable);
        const index = focusArray.indexOf(document.activeElement as HTMLElement);
        if (e.shiftKey && index === 0) {
          focusArray[focusArray.length - 1].focus();
          e.preventDefault();
        } else if (!e.shiftKey && index === focusArray.length - 1) {
          focusArray[0].focus();
          e.preventDefault();
        }
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-40 flex items-center justify-center bg-black/50 px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          aria-modal
          role="dialog"
          aria-labelledby="modal-title"
          onClick={onClose}
        >
          <motion.div
            ref={dialogRef}
            className="card-surface relative max-w-3xl overflow-hidden bg-surface p-8 text-left shadow-glass"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.97, opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex items-start justify-between gap-4">
              <div>
                <h3 id="modal-title" className="text-2xl font-semibold text-foreground">
                  {title}
                </h3>
              </div>
              <button
                aria-label="Close"
                onClick={onClose}
                className="rounded-full border border-border p-2 text-muted transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
              >
                ×
              </button>
            </div>
            <div className="space-y-4 text-muted">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
