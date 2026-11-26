"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { PHONE, PHONE_HREF } from "@/lib/data";

const TYPING = 'input:not([type="checkbox"]):not([type="radio"]):not([type="file"]), textarea, select';

/**
 * Phone-only bar pinned to the bottom: one tap to call, one tap to book. Pages with a
 * tour form (#tour) jump straight to it. Slides away while scrolling down or typing.
 */
export default function MobileBar() {
  const pathname = usePathname();
  const [tourHref, setTourHref] = useState("/book-a-tour");
  const [hidden, setHidden] = useState(false);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    setTourHref(document.getElementById("tour") ? "#tour" : "/book-a-tour");
  }, [pathname]);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (Math.abs(y - last) < 12) return;
      setHidden(y > last && y > 120);
      last = y;
    };
    const onIn = (e: FocusEvent) => setTyping((e.target as Element).matches?.(TYPING) ?? false);
    const onOut = () => setTyping(false);
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("focusin", onIn);
    document.addEventListener("focusout", onOut);
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("focusin", onIn);
      document.removeEventListener("focusout", onOut);
    };
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-3 border-t border-plum-100 bg-white/95 p-3 backdrop-blur transition-transform sm:hidden ${
        hidden || typing ? "translate-y-full" : ""
      }`}
    >
      <a href={PHONE_HREF} aria-label={`Call us on ${PHONE}`} className="rounded-full border-2 border-plum py-2.5 text-center font-bold text-plum">
        Call us
      </a>
      <Link href={tourHref} className="rounded-full bg-plum py-2.5 text-center font-bold text-white">
        Book a Tour
      </Link>
    </div>
  );
}
