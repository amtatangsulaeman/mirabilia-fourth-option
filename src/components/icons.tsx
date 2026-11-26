import type { ReactNode } from "react";

/* Simple rounded line icons (24px grid, currentColor) used inside the coloured badges. */
const P: Record<string, ReactNode> = {
  chef: (
    <>
      <path d="M7 14a4 4 0 1 1 1.5-7.7A4 4 0 0 1 16 5.5 3.5 3.5 0 1 1 17 14" />
      <path d="M7 14v6h10v-6" />
      <path d="M7 17h10" />
    </>
  ),
  music: (
    <>
      <path d="M9 18V5l11-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="17" cy="16" r="3" />
    </>
  ),
  ball: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3c-3 3-3 15 0 18M12 3c3 3 3 15 0 18M3.5 9h17M3.5 15h17" />
    </>
  ),
  feet: (
    <>
      <path d="M7 14c-2 0-3-2-3-5s1-5 3-5 3 2 3 5-1 5-3 5Z" />
      <path d="M5 17.5a2 2 0 1 0 4 0v-1H5z" />
      <path d="M17 10c2 0 3 2 3 5s-1 5-3 5-3-2-3-5 1-5 3-5Z" />
      <path d="M15 6.5a2 2 0 1 1 4 0v1h-4z" />
    </>
  ),
  teacup: (
    <>
      <path d="M4 9h12v4a6 6 0 0 1-12 0z" />
      <path d="M16 10h1.5a2.5 2.5 0 0 1 0 5H16" />
      <path d="M3 21h14M8 3c0 1.5 1 1.5 1 3M12 3c0 1.5 1 1.5 1 3" />
    </>
  ),
  tick: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  heart: <path d="M12 20s-7.5-4.6-7.5-10A4.3 4.3 0 0 1 12 7.4 4.3 4.3 0 0 1 19.5 10c0 5.4-7.5 10-7.5 10Z" />,
  star: <path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z" />,
  people: (
    <>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M16 14.2c3 .2 5 2.6 5 5.8" />
    </>
  ),
  book: (
    <>
      <path d="M3 5.5C5.5 4 9 4 12 6c3-2 6.5-2 9-.5V19c-2.5-1.5-6-1.5-9 .5-3-2-6.5-2-9-.5z" />
      <path d="M12 6v13.5" />
    </>
  ),
  flag: (
    <>
      <path d="M5 21V4" />
      <path d="M5 4h11l-2 4 2 4H5" />
    </>
  ),
  sprout: (
    <>
      <path d="M12 21v-9" />
      <path d="M12 12C12 7 8.5 5 4 5c0 4.5 3 7 8 7Z" />
      <path d="M12 14c0-4 3-6 7.5-6 0 4-3 6-7.5 6Z" />
    </>
  ),
  house: (
    <>
      <path d="M3.5 11 12 4l8.5 7" />
      <path d="M6 9.5V20h12V9.5" />
      <path d="M10 20v-5h4v5" />
    </>
  ),
  camera: (
    <>
      <path d="M4 8h3l1.5-2.5h7L17 8h3v11H4z" />
      <circle cx="12" cy="13" r="3.5" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </>
  ),
  bottle: (
    <>
      <path d="M10 2h4v3h-4zM9 5h6l1 4v11a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V9z" />
      <path d="M8 12h8M8 16h8" />
    </>
  ),
  hat: (
    <>
      <path d="M7 14c0-5 2-8 5-8s5 3 5 8" />
      <path d="M2.5 15c3-1.5 16-1.5 19 0-2 2.5-17 2.5-19 0Z" />
    </>
  ),
  shirt: <path d="M8 3 3 6l2 4 2.5-1V21h9V9l2.5 1 2-4-5-3c-.5 2-2 3-4 3s-3.5-1-4-3Z" />,
  pencil: (
    <>
      <path d="m4 20 1-5L16 4l4 4L9 19z" />
      <path d="m13.5 6.5 4 4" />
    </>
  ),
  magnifier: (
    <>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m15.5 15.5 5 5" />
    </>
  ),
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="15" rx="2" />
      <path d="M3.5 10h17M8 3v4M16 3v4" />
    </>
  ),
  piggy: (
    <>
      <path d="M5 11c0-3.5 3.5-6 7.5-6S20 7.5 20 11c0 2-1 3.5-2.5 4.5V19h-3v-2h-4v2h-3v-3.5C6 14.5 5 13 5 11Z" />
      <path d="M2.5 10.5c1 0 2.5.5 2.5 2M10 5.5l1-2.5h3" />
      <circle cx="15.5" cy="10" r=".6" fill="currentColor" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.5v2.5M12 19v2.5M2.5 12H5M19 12h2.5M5.3 5.3 7 7M17 17l1.7 1.7M5.3 18.7 7 17M17 7l1.7-1.7" />
    </>
  ),
};

export function Icon({ name, className = "h-6 w-6" }: { name: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round" aria-hidden className={className}>
      {P[name] ?? P.star}
    </svg>
  );
}
