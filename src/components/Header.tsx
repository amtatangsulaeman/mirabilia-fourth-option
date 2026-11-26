"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { CTA_LINKS, NAV, PHONE, PHONE_HREF, navLinks } from "@/lib/data";

function Chevron({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 12 8" aria-hidden className={`h-2 w-3 ${className}`}>
      <path d="m1 1.5 5 5 5-5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [ctaOpen, setCtaOpen] = useState(false);
  const ctaRef = useRef<HTMLDivElement>(null);

  const currentGroup = NAV.find((g) => g.href === pathname || navLinks(g).some(([href]) => href === pathname))?.key ?? null;

  useEffect(() => {
    setMenuOpen(false);
    setExpanded(null);
    setCtaOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setCtaOpen(false);
      }
    };
    const onClick = (e: MouseEvent) => {
      if (ctaRef.current && !ctaRef.current.contains(e.target as Node)) setCtaOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-plum-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="shrink-0" aria-label="Mirabilia home">
          <Image src="/logo.png" alt="Mirabilia" width={187} height={44} className="h-9 w-auto md:h-10" priority />
        </Link>

        <nav aria-label="Main" className="hidden xl:block">
          <ul className="flex items-center gap-0.5">
            {NAV.map((g) => {
              const active = currentGroup === g.key;
              const linkCls = `flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[15px] font-semibold transition-colors hover:bg-plum-50 hover:text-plum ${active ? "text-plum" : "text-ink"}`;
              if (g.href)
                return (
                  <li key={g.key}>
                    <Link href={g.href} className={linkCls} aria-current={pathname === g.href ? "page" : undefined}>
                      {g.label}
                    </Link>
                  </li>
                );
              return (
                <li key={g.key} className="group relative">
                  <button type="button" className={linkCls} aria-haspopup="true">
                    {g.label}
                    <Chevron className="opacity-60" />
                  </button>
                  <div className="invisible absolute left-0 top-full pt-2 opacity-0 transition-all group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                    <ul className="w-72 rounded-3xl border border-plum-100 bg-white p-2 shadow-[0_20px_40px_-20px_rgba(61,26,74,0.35)]">
                      {navLinks(g).map(([href, label]) => (
                        <li key={href}>
                          <Link
                            href={href}
                            aria-current={pathname === href ? "page" : undefined}
                            className="block rounded-2xl px-4 py-2.5 text-[15px] font-medium text-ink hover:bg-plum-50 hover:text-plum aria-[current=page]:text-plum"
                          >
                            {label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <div ref={ctaRef} className="relative hidden sm:block">
            <button
              type="button"
              aria-expanded={ctaOpen}
              aria-controls="cta-menu"
              onClick={() => setCtaOpen((v) => !v)}
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-leaf px-6 text-[15px] font-bold text-plum-950 transition-colors hover:bg-[#9cc02c]"
            >
              Explore Now <Chevron className={`transition-transform ${ctaOpen ? "rotate-180" : ""}`} />
            </button>
            {ctaOpen && (
              <ul id="cta-menu" className="absolute right-0 top-full mt-2 w-56 rounded-3xl border border-plum-100 bg-white p-2 shadow-[0_20px_40px_-20px_rgba(61,26,74,0.35)]">
                {CTA_LINKS.map(([href, label]) => (
                  <li key={href}>
                    <Link href={href} className="block rounded-2xl px-4 py-2.5 font-semibold text-ink hover:bg-plum-50 hover:text-plum">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-plum-50 text-plum xl:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
              {menuOpen ? (
                <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav id="mobile-menu" aria-label="Main" className="fixed inset-x-0 bottom-0 top-20 overflow-y-auto bg-white px-4 pb-10 pt-4 xl:hidden">
          <ul>
            {NAV.map((g) => (
              <li key={g.key} className="border-b border-plum-100 py-1">
                {g.href ? (
                  <Link href={g.href} className="block py-3 text-lg font-bold text-ink">
                    {g.label}
                  </Link>
                ) : (
                  <>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between py-3 text-lg font-bold text-ink"
                      aria-expanded={expanded === g.key}
                      onClick={() => setExpanded((v) => (v === g.key ? null : g.key))}
                    >
                      {g.label}
                      <Chevron className={`transition-transform ${expanded === g.key ? "rotate-180" : ""}`} />
                    </button>
                    {expanded === g.key && (
                      <ul className="pb-3 pl-3">
                        {navLinks(g).map(([href, label]) => (
                          <li key={href}>
                            <Link href={href} className="block py-2 font-medium text-body">
                              {label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                )}
              </li>
            ))}
          </ul>
          <div className="mt-6 grid gap-3">
            {CTA_LINKS.map(([href, label], i) => (
              <Link key={href} href={href} className={`rounded-full py-3 text-center font-bold ${i ? "bg-plum text-white" : "bg-leaf text-plum-950"}`}>
                {label}
              </Link>
            ))}
            <a href={PHONE_HREF} className="py-2 text-center font-semibold text-plum">
              {PHONE}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
