"use client";

import { useBarStore } from "@/stores/bar.store";
import { X } from "lucide-react";

export default function AnnouncementBar() {
  const isVisible = useBarStore((state) => state.isVisible);
  const isHydrated = useBarStore((state) => state.isHydrated);
  const dismiss = useBarStore((state) => state.dismiss);

  if (!isVisible || !isHydrated) return null;

  return (
    <div className="announcement-bar" role="banner" aria-live="polite">
      <p>We&apos;ve officially launched!</p>

      <button
        onClick={dismiss} 
        className="dismiss-btn" 
        aria-label="Close announcement bar">
          <X />
      </button>
    </div>
  )
}