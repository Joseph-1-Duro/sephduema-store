"use client";

import { useBarStore } from "@/stores/bar.store";
import { ArrowRight, X } from "lucide-react";
import Link from "next/link";

export default function AnnouncementBar() {
  const isVisible = useBarStore((state) => state.isVisible);
  const isHydrated = useBarStore((state) => state.isHydrated);
  const dismiss = useBarStore((state) => state.dismiss);

  if (!isVisible || !isHydrated) return null;

  return (
    <div className="announcement-bar" role="banner" aria-live="polite">
      <p>
        We&apos;ve officially launched! 
        <Link href={"/shop"}>Shop Now! <ArrowRight size={16} /></Link>
      </p>

      <button
        onClick={dismiss}
        className="dismiss-btn"
        aria-label="Close announcement bar">
        <X strokeWidth={5} size={18} />
      </button>
    </div>
  )
}