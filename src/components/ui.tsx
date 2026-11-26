import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import type { Photo as PhotoT } from "@/lib/data";
import { Cloud, Squiggle, Star, Wave, type Tone } from "./shapes";

export const photoSrc = (file: string) => (file.startsWith("/") ? file : `/photos/${file}`);

export type Crumb = [name: string, path: string];

type BtnProps = { href: string; children: ReactNode; variant?: "primary" | "leaf" | "outline" | "white"; className?: string; small?: boolean };

const variants = {
  primary: "bg-plum text-white hover:bg-plum-700",
  leaf: "bg-leaf text-plum-950 hover:bg-[#9cc02c]",
  outline: "border-2 border-plum text-plum hover:bg-plum hover:text-white",
  white: "bg-white text-plum hover:bg-plum-50",
};

export function Button({ href, children, variant = "primary", className = "", small }: BtnProps) {
  const plain = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:") || href.startsWith("#");
  const cls = `inline-flex items-center justify-center gap-2 rounded-full font-bold transition-colors ${
    small ? "min-h-10 px-5 py-2 text-sm" : "min-h-11 px-6 py-2.5 text-[15px]"
  } ${variants[variant]} ${className}`;
  if (plain) {
    const ext = href.startsWith("http");
    return (
      <a href={href} className={cls} {...(ext ? { target: "_blank", rel: "noopener" } : {})}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`mb-3 text-sm font-bold text-plum ${className}`}>{children}</p>;
}

export function SectionHeading({ eyebrow, title, body, className = "", align = "center" }: {
  eyebrow?: string; title: ReactNode; body?: ReactNode; className?: string; align?: "center" | "left";
}) {
  return (
    <div className={`${align === "center" ? "mx-auto text-center" : ""} max-w-3xl ${className}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="text-3xl md:text-[2.6rem]">{title}</h2>
      {body && <p className="mt-5 text-lg leading-relaxed">{body}</p>}
    </div>
  );
}

/** Wraps a page band; `tint` gives it a soft background. */
export function Band({ children, tint, id, className = "" }: { children: ReactNode; tint?: "plum" | "cream" | "leaf"; id?: string; className?: string }) {
  const bg = tint ? { plum: "bg-plum-50", cream: "bg-cream", leaf: "bg-leaf-100" }[tint] : "";
  return (
    <section id={id} className={`scroll-mt-28 py-16 md:py-24 ${bg} ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

const shadowBg: Record<Tone, string> = { leaf: "bg-leaf", sun: "bg-sun", sky: "bg-sky", rose: "bg-rose", plum: "bg-plum" };

/** Rounded photo with an offset colour shape behind it. */
export function FramedImage({ photo, tone = "leaf", className = "", priority = false, aspect = "aspect-[4/3]", sizes = "(min-width: 1024px) 50vw, 100vw" }: {
  photo: PhotoT; tone?: Tone; className?: string; priority?: boolean; aspect?: string; sizes?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      <div className={`absolute inset-0 translate-x-3 translate-y-3 rounded-[2rem] ${shadowBg[tone]}`} aria-hidden />
      <div className={`relative overflow-hidden rounded-[2rem] ${aspect}`}>
        <Image src={photoSrc(photo[0])} alt={photo[1]} fill sizes={sizes} className="object-cover" priority={priority} />
      </div>
    </div>
  );
}

/** Photo beside text. */
export function Split({ photo, eyebrow, title, children, flip, tone = "leaf", cta }: {
  photo: PhotoT; eyebrow?: string; title: ReactNode; children: ReactNode; flip?: boolean; tone?: Tone; cta?: [href: string, label: string];
}) {
  return (
    <div className="grid items-center gap-10 md:gap-16 lg:grid-cols-2">
      <FramedImage photo={photo} tone={tone} className={flip ? "lg:order-2" : ""} />
      <div className={`space-y-4 text-lg leading-relaxed ${flip ? "lg:order-1" : ""}`}>
        {eyebrow && <Eyebrow className="!mb-0">{eyebrow}</Eyebrow>}
        <h2 className="text-3xl md:text-4xl">{title}</h2>
        {children}
        {cta && (
          <div className="pt-4">
            <Button href={cta[0]} variant="leaf">
              {cta[1]}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export function Breadcrumbs({ trail }: { trail: Crumb[] }) {
  const items: Crumb[] = [["Home", "/"], ...trail];
  return (
    <nav aria-label="Breadcrumb" className="mb-5 text-sm">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map(([name, path], i) => (
          <li key={path + i} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden className="text-plum/40">/</span>}
            {i < items.length - 1 ? (
              <Link href={path} className="font-semibold text-body hover:text-plum">
                {name}
              </Link>
            ) : (
              <span aria-current="page" className="font-semibold text-plum">
                {name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/** Inner-page header on a soft band with a wave edge. */
export function PageHero({ title, eyebrow, lead, photo, photo2, crumbs, actions, tone = "leaf" }: {
  title: ReactNode; eyebrow?: string; lead?: ReactNode; photo?: PhotoT; photo2?: PhotoT; crumbs?: Crumb[]; actions?: ReactNode; tone?: Tone;
}) {
  return (
    <section className="relative overflow-hidden bg-plum-50">
      <Star className="animate-float absolute left-[5%] top-10 hidden w-8 md:block" tone="sun" />
      <Squiggle className="absolute right-[6%] top-10 hidden w-24 md:block" tone="sky" />
      <Container className={`relative grid items-center gap-12 py-12 md:py-16 ${photo ? "lg:grid-cols-[1.05fr_1fr]" : ""}`}>
        <div className={photo ? "" : "mx-auto max-w-3xl text-center [&_ol]:justify-center"}>
          {crumbs && <Breadcrumbs trail={crumbs} />}
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <h1 className="text-4xl md:text-5xl lg:text-[3.3rem]">{title}</h1>
          {lead && <div className="mt-6 text-lg leading-relaxed">{lead}</div>}
          {actions && <div className={`mt-8 flex flex-wrap items-center gap-3 ${photo ? "" : "justify-center"}`}>{actions}</div>}
        </div>
        {photo && (
          <div className="relative pb-10 pr-6 md:pb-14 md:pr-10">
            <FramedImage photo={photo} tone={tone} priority sizes="(min-width: 1024px) 45vw, 90vw" />
            {photo2 && (
              <div className="absolute bottom-0 right-0 w-[42%] overflow-hidden rounded-[1.5rem] border-[6px] border-white shadow-[0_20px_40px_-20px_rgba(42,18,51,0.5)]">
                <div className="relative aspect-square">
                  <Image src={photoSrc(photo2[0])} alt={photo2[1]} fill sizes="(min-width: 1024px) 20vw, 40vw" className="object-cover" />
                </div>
              </div>
            )}
          </div>
        )}
      </Container>
      <Wave fill="#ffffff" />
    </section>
  );
}

export function GradientBand({ children, className = "", id }: { children: ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={`relative scroll-mt-28 ${className}`}>
      <Wave fill="#2484c5" className="-mb-px" />
      <div className="relative overflow-hidden bg-gradient-to-b from-sky to-plum text-white">
        <Cloud className="absolute -left-6 top-10 w-40 opacity-20" />
        <Cloud className="absolute bottom-20 right-4 w-52 opacity-15" />
        <Container className="relative py-12 md:py-16">{children}</Container>
      </div>
      <Wave fill="#812990" flip className="-mt-px" />
    </section>
  );
}

export function Check({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={`mt-0.5 h-6 w-6 shrink-0 ${className}`}>
      <circle cx="12" cy="12" r="12" fill="currentColor" />
      <path d="m7 12.5 3.2 3L17 9" stroke="#fff" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function TickList({ items, cols = 2 }: { items: ReactNode[]; cols?: 1 | 2 }) {
  return (
    <ul className={`grid gap-3 ${cols === 2 ? "md:grid-cols-2" : ""}`}>
      {items.map((t, i) => (
        <li key={i} className="flex gap-3 rounded-2xl bg-white p-5 text-ink ring-1 ring-plum-100">
          <Check className="text-plum" />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}

/** Soft card for short text blocks. */
export function Panel({ children, meta, title, href, tone, className = "" }: {
  children?: ReactNode; meta?: string; title: ReactNode; href?: string; tone?: "white" | "leaf" | "sky" | "sun" | "rose" | "plum"; className?: string;
}) {
  const bg = { white: "bg-white ring-1 ring-plum-100", leaf: "bg-leaf-100", sky: "bg-sky-100", sun: "bg-sun-100", rose: "bg-rose-100", plum: "bg-plum-50" }[tone ?? "white"];
  const inner = (
    <>
      {meta && <p className="mb-2 text-sm font-bold text-plum">{meta}</p>}
      <h3 className="text-xl md:text-2xl">{title}</h3>
      {children && <div className="mt-3 space-y-3 leading-relaxed text-body [&_li]:ml-5 [&_li]:list-disc [&_li]:pl-1 [&_ul]:space-y-2">{children}</div>}
    </>
  );
  const cls = `block rounded-[2rem] p-7 md:p-8 ${bg} ${className}`;
  return href ? (
    <Link href={href} className={`${cls} transition-shadow hover:shadow-[0_24px_48px_-28px_rgba(61,26,74,0.5)]`}>
      {inner}
      <span className="mt-4 inline-block font-bold text-plum">Learn more →</span>
    </Link>
  ) : (
    <article className={cls}>{inner}</article>
  );
}

/** Wide call-to-action card used at the end of most pages. */
export function CtaStrip({ text, cta = ["/enquire-now", "Make an Enquiry"] }: { text: ReactNode; cta?: [string, string] }) {
  return (
    <div className="relative flex flex-col items-start justify-between gap-6 overflow-hidden rounded-[2.5rem] bg-plum px-7 py-10 text-white md:flex-row md:items-center md:px-12">
      <Star tone="leaf" className="animate-float absolute right-6 top-4 w-8 opacity-90" />
      <p className="max-w-2xl text-xl font-semibold leading-relaxed">{text}</p>
      <Button href={cta[0]} variant="leaf" className="shrink-0">
        {cta[1]}
      </Button>
    </div>
  );
}

/** Video embed, or a labelled placeholder until the client sends the file. */
export function VideoSlot({ src, title }: { src?: string; title: string }) {
  return (
    <div className="overflow-hidden rounded-[2rem] border-8 border-white bg-plum-900 shadow-[0_30px_60px_-30px_rgba(42,18,51,0.6)]">
      {src ? (
        src.endsWith(".mp4") ? (
          <video src={src} controls playsInline preload="metadata" aria-label={title} className="aspect-video w-full" />
        ) : (
          <iframe src={src} title={title} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen loading="lazy" className="aspect-video w-full" />
        )
      ) : (
        <div role="img" aria-label={`${title} (coming soon)`} className="flex aspect-video w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-plum-700 to-sky text-center text-white">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
            <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7" aria-hidden>
              <path d="M7 4v16l13-8z" fill="currentColor" />
            </svg>
          </span>
          <strong className="text-lg">{title}</strong>
          <span className="text-sm text-white/80">Video coming soon</span>
        </div>
      )}
    </div>
  );
}
