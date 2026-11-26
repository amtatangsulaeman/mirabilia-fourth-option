import type { ReactNode, SVGProps } from "react";
import type { Color } from "@/lib/data";

export type Tone = "leaf" | "sun" | "sky" | "rose" | "plum";

/** The content data uses a wider colour vocabulary; fold it onto the Mirabilia logo palette. */
export const toTone = (c: Color | Tone): Tone =>
  (({ purple: "plum", blue: "sky", teal: "sky", green: "leaf", lime: "leaf", yellow: "sun", orange: "sun", pink: "rose" }) as Record<string, Tone>)[c] ??
  (c as Tone);

export const toneBg: Record<Tone, string> = {
  leaf: "bg-leaf text-plum-950",
  sun: "bg-sun text-white",
  sky: "bg-sky text-white",
  rose: "bg-rose text-white",
  plum: "bg-plum text-white",
};

export const toneSoft: Record<Tone, string> = {
  leaf: "bg-leaf-100",
  sun: "bg-sun-100",
  sky: "bg-sky-100",
  rose: "bg-rose-100",
  plum: "bg-plum-100",
};

export const toneText: Record<Tone, string> = {
  leaf: "text-leaf-700",
  sun: "text-sun",
  sky: "text-sky",
  rose: "text-rose",
  plum: "text-plum",
};

const toneFill: Record<Tone, string> = {
  leaf: "#acd03b",
  sun: "#ed5e26",
  sky: "#2484c5",
  rose: "#c8225c",
  plum: "#812990",
};

/** A word set on a hand-drawn blob, like a marker swipe behind the text. */
export function Highlight({ children, tone = "leaf" }: { children: ReactNode; tone?: Tone }) {
  const light = tone === "leaf";
  return (
    <span className="relative inline-block whitespace-nowrap px-[0.35em]">
      <svg
        aria-hidden
        viewBox="0 0 200 60"
        preserveAspectRatio="none"
        className="absolute inset-x-0 -inset-y-[0.08em] -z-0 h-[calc(100%+0.16em)] w-full"
      >
        <path
          d="M8 14C40 4 120 2 186 6c10 1 14 10 12 22-2 14-4 22-14 26-50 6-120 6-168 2C4 54 0 44 2 32 3 22 2 16 8 14Z"
          fill={toneFill[tone]}
        />
      </svg>
      <span className={`relative ${light ? "text-plum-950" : "text-white"}`}>{children}</span>
    </span>
  );
}

/** Soft wave used to open and close coloured bands. */
export function Wave({ className = "", flip = false, fill = "currentColor" }: { className?: string; flip?: boolean; fill?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      className={`block h-14 w-full md:h-24 ${flip ? "rotate-180" : ""} ${className}`}
    >
      <path d="M0 64c180-48 360-64 560-36s380 72 560 60 240-44 320-60v92H0Z" fill={fill} />
    </svg>
  );
}

type Doodle = SVGProps<SVGSVGElement> & { tone?: Tone };

export function Star({ tone = "sun", ...p }: Doodle) {
  return (
    <svg aria-hidden viewBox="0 0 48 48" {...p}>
      <path
        d="M24 4c2 9 5 14 9 16 4 2 8 3 11 4-4 1-8 2-11 4-4 2-7 7-9 16-2-9-5-14-9-16-3-2-7-3-11-4 4-1 8-2 11-4 4-2 7-7 9-16Z"
        fill={toneFill[tone]}
      />
    </svg>
  );
}

export function Squiggle({ tone = "sky", ...p }: Doodle) {
  return (
    <svg aria-hidden viewBox="0 0 120 30" fill="none" {...p}>
      <path
        d="M4 18c10-12 18-12 26 0s16 12 26 0 18-12 26 0 16 12 26 0 8-8 8-8"
        stroke={toneFill[tone]}
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Sun({ tone = "sun", ...p }: Doodle) {
  return (
    <svg aria-hidden viewBox="0 0 80 80" fill="none" {...p}>
      <circle cx="40" cy="40" r="16" fill={toneFill[tone]} />
      {Array.from({ length: 8 }).map((_, i) => (
        <line
          key={i}
          x1="40"
          y1="8"
          x2="40"
          y2="16"
          stroke={toneFill[tone]}
          strokeWidth="5"
          strokeLinecap="round"
          transform={`rotate(${i * 45} 40 40)`}
        />
      ))}
    </svg>
  );
}

export function Cloud(p: SVGProps<SVGSVGElement>) {
  return (
    <svg aria-hidden viewBox="0 0 120 64" {...p}>
      <path
        d="M30 60C14 60 4 52 4 41c0-10 8-18 19-18 3-12 14-19 27-19 14 0 25 9 28 21 2-1 5-1 8-1 15 0 30 10 30 22s-11 14-26 14H30Z"
        fill="#fff"
      />
    </svg>
  );
}

export function Heart({ tone = "rose", ...p }: Doodle) {
  return (
    <svg aria-hidden viewBox="0 0 48 44" {...p}>
      <path d="M24 42S2 29 2 14C2 7 7 2 14 2c4 0 8 2 10 6 2-4 6-6 10-6 7 0 12 5 12 12 0 15-22 28-22 28Z" fill={toneFill[tone]} />
    </svg>
  );
}

export function Leaf({ tone = "leaf", ...p }: Doodle) {
  return (
    <svg aria-hidden viewBox="0 0 60 60" fill="none" {...p}>
      <path d="M8 52C8 24 26 8 54 6c0 30-16 46-46 46Z" fill={toneFill[tone]} />
      <path d="M10 50 40 20" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

/** Organic blob used as a backdrop behind photos. */
export function Blob({ tone = "leaf", className = "" }: { tone?: Tone; className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 400 400" className={className}>
      <path
        d="M318 72c46 40 70 106 52 166s-74 118-140 130S92 344 56 288 14 160 48 108 128 22 196 20s76 12 122 52Z"
        fill={toneFill[tone]}
      />
    </svg>
  );
}
