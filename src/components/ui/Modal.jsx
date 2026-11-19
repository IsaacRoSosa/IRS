"use client";
import { useEffect, useRef } from "react";
import { CloseIcon } from "./Icons";

// Accessible modal built on the native <dialog> element:
// Escape closes it, focus stays inside, and the page behind can't scroll.
export default function Modal({ open, onClose, labelledBy, children }) {
  const ref = useRef(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      dialog.showModal();
      document.documentElement.style.overflow = "hidden";
    } else if (!open && dialog.open) {
      dialog.close();
    }
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <dialog
      ref={ref}
      aria-labelledby={labelledBy}
      onClose={onClose}
      onClick={(e) => {
        // Clicking the dimmed backdrop (the dialog itself, not its content) closes it.
        if (e.target === ref.current) onClose();
      }}
      className="m-auto max-h-[92dvh] w-[calc(100%-1.5rem)] max-w-3xl overflow-hidden rounded-2xl border border-line bg-deep p-0 text-star shadow-[0_0_80px_-20px_var(--color-lavender)] backdrop:bg-space/80 backdrop:backdrop-blur-sm open:animate-modal-in"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute top-3 right-3 z-20 grid size-10 place-items-center rounded-full border border-white/15 bg-space/70 text-star backdrop-blur transition-colors hover:bg-space"
      >
        <CloseIcon />
      </button>
      <div className="max-h-[92dvh] overflow-y-auto overscroll-contain">{open && children}</div>
    </dialog>
  );
}
