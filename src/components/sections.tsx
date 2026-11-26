import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  CENTRES, CHILD_SAFETY, EMAIL, PHONE, PHONE_HREF, PROGRAMS, REVIEWS, SETTINGS, TEAM, centreBySlug, mapUrl, reviewsFor,
  type Centre, type Color, type Photo, type ReviewKey, type TeamKey,
} from "@/lib/data";
import { Button, Container, SectionHeading, photoSrc } from "./ui";
import { Blob, Heart, Highlight, Leaf, Star, Sun, toTone, toneBg, toneSoft, toneText, type Tone } from "./shapes";
import { Icon } from "./icons";
import { TourForm } from "./forms";

/* ------------------------------------------------------------ centres */

export function CentreCards() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {CENTRES.map((c) => (
        <article
          key={c.slug}
          className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-plum-100 bg-white transition-shadow hover:shadow-[0_24px_48px_-24px_rgba(61,26,74,0.4)]"
        >
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={photoSrc(c.card[0])}
              alt={c.card[1]}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {c.isNew && <span className="absolute left-4 top-4 rounded-full bg-sun px-3 py-1 text-xs font-bold text-white">New!</span>}
          </div>
          <div className="flex flex-1 flex-col p-6">
            <span className={`mb-3 h-1.5 w-10 rounded-full ${toneBg[toTone(c.color)].split(" ")[0]}`} aria-hidden />
            <h3 className="text-xl">
              <Link href={`/${c.slug}`} className="after:absolute after:inset-0">
                {c.name}
              </Link>
            </h3>
            <address className="mt-2 flex-1 text-[15px] not-italic">
              {c.street},<br />
              {c.suburb}
            </address>
            <div className="relative z-10 mt-5 flex items-center gap-5 text-[15px] font-bold">
              <span className="text-plum group-hover:underline">Visit centre →</span>
              <a href={mapUrl(c)} target="_blank" rel="noopener" className="text-body hover:text-plum">
                Directions
              </a>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------ programs */

export function ProgramCards({ exclude }: { exclude?: string }) {
  const list = PROGRAMS.filter((p) => p.slug !== exclude);
  return (
    <div className={`grid gap-5 sm:grid-cols-2 ${list.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-5"}`}>
      {list.map((p) => {
        const tone = toTone(p.color);
        return (
          <article key={p.slug} className="group relative flex flex-col overflow-hidden rounded-[2rem] bg-white text-left shadow-[0_20px_40px_-28px_rgba(42,18,51,0.6)]">
            <div className="relative aspect-square overflow-hidden">
              <Image src={photoSrc(p.photo[0])} alt={p.photo[1]} fill sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <span className={`absolute bottom-3 left-3 flex h-11 w-11 items-center justify-center rounded-full ${toneBg[tone]}`} aria-hidden>
                <Icon name={p.icon} className="h-6 w-6" />
              </span>
            </div>
            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-lg">
                <Link href={`/${p.slug}`} className="after:absolute after:inset-0">
                  {p.name}
                </Link>
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-body">{p.short}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}

/* ------------------------------------------------------------ features */

export type Feature = [icon: string, color: Color, title: string, text: ReactNode];

export function FeatureCards({ items, cols = 4, onDark }: { items: Feature[]; cols?: 3 | 4; onDark?: boolean }) {
  return (
    <div className={`grid gap-5 sm:grid-cols-2 ${cols === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
      {items.map(([ic, color, title, text]) => {
        const tone = toTone(color);
        return (
          <article key={title} className={`rounded-[2rem] p-7 ${onDark ? "bg-white text-body" : "bg-white ring-1 ring-plum-100"}`}>
            <span className={`flex h-12 w-12 items-center justify-center rounded-full ${toneBg[tone]}`} aria-hidden>
              <Icon name={ic} className="h-6 w-6" />
            </span>
            <h3 className="mt-5 text-xl">{title}</h3>
            <p className="mt-2 leading-relaxed">{text}</p>
          </article>
        );
      })}
    </div>
  );
}

/* ------------------------------------------------------------ gallery */

export function Gallery({ photos }: { photos: Photo[] }) {
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
      {photos.map((p, i) => (
        <figure key={p[0] + i} className={`relative aspect-square overflow-hidden rounded-[1.5rem] ${i % 2 ? "md:translate-y-6" : ""}`}>
          <Image src={photoSrc(p[0])} alt={p[1]} fill sizes="(min-width: 768px) 25vw, 50vw" className="object-cover" />
        </figure>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------ reviews */

const AVATAR: Tone[] = ["leaf", "sky", "rose", "sun", "plum"];

export function ReviewCards({ keys }: { keys: ReviewKey[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {keys.map((k, i) => {
        const r = REVIEWS[k];
        const where = r.centre && centreBySlug(r.centre)?.name;
        return (
          <figure key={k} className="flex flex-col rounded-[2rem] bg-white p-7 shadow-[0_24px_48px_-32px_rgba(42,18,51,0.5)] ring-1 ring-plum-100">
            <div className="text-lg tracking-widest text-sun" role="img" aria-label="5 out of 5 stars">
              ★★★★★
            </div>
            <blockquote className="mt-4 flex-1 text-lg leading-relaxed text-ink">&ldquo;{r.text}&rdquo;</blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              {r.photo ? (
                <span className="relative h-12 w-12 overflow-hidden rounded-full">
                  <Image src={photoSrc(r.photo)} alt="" fill sizes="48px" className="object-cover" />
                </span>
              ) : (
                <span className={`flex h-12 w-12 items-center justify-center rounded-full text-lg font-extrabold ${toneBg[AVATAR[i % AVATAR.length]]}`} aria-hidden>
                  {r.name[0]}
                </span>
              )}
              <span>
                <strong className="block text-ink">{r.name}</strong>
                <span className="text-sm">Parent{where ? `, Mirabilia ${where}` : ""}</span>
              </span>
            </figcaption>
          </figure>
        );
      })}
    </div>
  );
}

export function ReviewsSection({ keys, centre, exclude, heading, lead = "A few words from happy parents about their experiences with us." }: {
  keys?: ReviewKey[]; centre?: Centre; exclude?: ReviewKey; heading?: string; lead?: string;
}) {
  const list = (keys ?? reviewsFor(centre?.slug, 4)).filter((k) => k !== exclude).slice(0, 3);
  const perCentre = centre && SETTINGS.reviews === "per-centre" && list.some((k) => REVIEWS[k].centre === centre.slug);
  const title = heading ?? (perCentre ? `What ${centre.name} families say` : "What our families say");
  return (
    <section id="reviews" className="relative scroll-mt-28 overflow-hidden bg-plum-50 py-16 md:py-24">
      <Heart className="absolute left-[6%] top-12 hidden w-10 md:block" />
      <Container>
        <SectionHeading title={title} body={lead} />
        {centre?.rating && (
          <p className="mt-4 text-center">
            <a href={centre.rating.url} target="_blank" rel="noopener" className="font-semibold text-plum">
              ★ {centre.rating.score.toFixed(1)} on Google from {centre.rating.count} reviews
            </a>
          </p>
        )}
        <div className="mt-12">
          <ReviewCards keys={list} />
        </div>
      </Container>
    </section>
  );
}

/** A parent's one-line quote placed beside the point it backs up. */
export function PullQuote({ review }: { review?: ReviewKey }) {
  if (!review) return null;
  const r = REVIEWS[review];
  const where = r.centre && centreBySlug(r.centre)?.name;
  return (
    <figure className="rounded-[1.5rem] border-l-[6px] border-leaf bg-leaf-100 px-6 py-5">
      <blockquote className="text-lg font-semibold text-ink">&ldquo;{r.pull}&rdquo;</blockquote>
      <figcaption className="mt-2 text-sm">
        <strong>{r.name}</strong>, parent{where ? ` at Mirabilia ${where}` : ""}
      </figcaption>
    </figure>
  );
}

/* ------------------------------------------------------------ child safety */

export function ChildSafety({ centre }: { centre?: string }) {
  return (
    <section id="child-safety" className="scroll-mt-28 py-16 md:py-24">
      <Container>
        <SectionHeading
          title={
            <>
              How we keep children <Highlight tone="leaf">safe</Highlight>
            </>
          }
          body={`What happens every day${centre ? ` at Mirabilia ${centre}` : " at every Mirabilia centre"}. Ask us about any of it on your tour, and we’ll show you our child safe policies.`}
        />
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CHILD_SAFETY.map(([ic, color, title, text]) => {
            const tone = toTone(color);
            return (
              <li key={title} className={`flex gap-4 rounded-[2rem] p-6 ${toneSoft[tone]}`}>
                <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${toneBg[tone]}`} aria-hidden>
                  <Icon name={ic} className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-lg">{title}</h3>
                  <p className="mt-1 leading-relaxed text-ink">{text}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------ FAQ */

export function FaqSection({ items, heading = "Questions families ask us" }: { items: [q: string, a: ReactNode][]; heading?: string }) {
  return (
    <section id="faq" className="relative scroll-mt-28 overflow-hidden bg-cream py-16 md:py-24">
      <Container className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
        <div>
          <h2 className="text-3xl md:text-4xl">{heading}</h2>
          <p className="mt-5 text-lg leading-relaxed">
            Can&apos;t see yours here? Give us a call on{" "}
            <a href={PHONE_HREF} className="font-bold text-plum">
              {PHONE}
            </a>{" "}
            and we&apos;ll talk it through.
          </p>
          <Sun className="animate-float mt-8 hidden w-20 lg:block" />
        </div>
        <div className="space-y-3">
          {items.map(([q, a], i) => (
            <details key={q} open={i === 0} className="group rounded-[1.5rem] bg-white px-6 py-1 ring-1 ring-plum-100 open:ring-plum/30">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-lg font-bold text-ink [&::-webkit-details-marker]:hidden">
                {q}
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-plum-50 text-plum transition-transform group-open:rotate-45" aria-hidden>
                  +
                </span>
              </summary>
              <p className="pb-5 leading-relaxed">{a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------ in-page nav */

export function PageNav({ items }: { items: [id: string, label: string][] }) {
  return (
    <nav aria-label="On this page" className="sticky top-20 z-30 border-b border-plum-100 bg-white/95 backdrop-blur">
      <Container>
        <ul className="flex gap-2 overflow-x-auto py-3 [scrollbar-width:none]">
          {items.map(([id, label]) => (
            <li key={id} className="shrink-0">
              <a href={`#${id}`} className="block rounded-full bg-plum-50 px-4 py-2 text-sm font-bold text-plum hover:bg-plum hover:text-white">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  );
}

/* ------------------------------------------------------------ people */

export function DirectorQuote({ person }: { person: TeamKey }) {
  const p = TEAM[person];
  return (
    <figure className="grid items-center gap-10 lg:grid-cols-[320px_1fr] lg:gap-16">
      <div className="relative mx-auto aspect-square w-full max-w-xs">
        <Blob tone="leaf" className="absolute inset-0 h-full w-full" />
        <div className="absolute inset-[9%] overflow-hidden rounded-full border-[6px] border-white">
          <Image src={photoSrc(p.photo)} alt={`Portrait of ${p.name}`} fill sizes="300px" className="object-cover object-top" />
        </div>
      </div>
      <div>
        <blockquote className="space-y-4 text-lg leading-relaxed text-ink md:text-xl">
          {p.quote.map((q, i) => (
            <p key={i}>{q}</p>
          ))}
        </blockquote>
        <figcaption className="mt-6">
          <strong className="block text-xl text-ink">{p.name}</strong>
          <span className="font-semibold text-plum">{p.role}</span>
        </figcaption>
      </div>
    </figure>
  );
}

/* ------------------------------------------------------------ CTAs */

export function TourSection({
  heading = "Come and say hello!",
  text = "Book a tour with one of Perth’s most trusted childcare centres. We’ll show you around, answer your questions and help you find the right fit.",
  centre,
}: { heading?: string; text?: string; centre?: string }) {
  return (
    <section id="tour" className="scroll-mt-28 py-16 md:py-20">
      <Container>
        <div className="relative grid gap-10 overflow-hidden rounded-[2.5rem] bg-plum p-6 text-white md:p-12 lg:grid-cols-[1fr_1.2fr] lg:gap-14">
          <Star tone="leaf" className="animate-float absolute left-8 top-8 w-10" />
          <Leaf className="absolute -bottom-3 left-10 w-20 opacity-40" />
          <div className="relative pt-10 lg:pt-14">
            <h2 className="text-3xl text-white md:text-4xl">{heading}</h2>
            <p className="mt-5 text-lg leading-relaxed text-plum-100">{text}</p>
            <div className="mt-8 space-y-2">
              <a href={PHONE_HREF} className="block text-2xl font-bold hover:text-leaf">
                {PHONE}
              </a>
              <a href={`mailto:${EMAIL}`} className="block font-semibold text-plum-100 hover:text-leaf">
                {EMAIL}
              </a>
            </div>
          </div>
          <div className="relative">
            <TourForm centre={centre} />
          </div>
        </div>
      </Container>
    </section>
  );
}

export function CtaBand({ heading, text, primary, secondary }: { heading: string; text?: string; primary?: [string, string]; secondary?: [string, string] }) {
  return (
    <Container className="py-16">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-leaf-100 px-6 py-14 text-center md:px-16">
        <Sun className="animate-float absolute -right-4 -top-4 w-28" />
        <Heart className="absolute bottom-6 left-6 hidden w-10 md:block" />
        <h2 className="mx-auto max-w-2xl text-3xl md:text-4xl">{heading}</h2>
        {text && <p className="mx-auto mt-4 max-w-2xl text-lg text-ink">{text}</p>}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {primary && <Button href={primary[0]}>{primary[1]}</Button>}
          {secondary && (
            <Button href={secondary[0]} variant="outline">
              {secondary[1]}
            </Button>
          )}
        </div>
      </div>
    </Container>
  );
}

export { toneText };
