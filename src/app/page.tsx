import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { CENTRES } from "@/lib/data";
import { Button, Container, SectionHeading, Split, photoSrc } from "@/components/ui";
import { ReviewsSection } from "@/components/sections";
import { Heart, Highlight, Leaf, Squiggle, Star, Sun, toneBg, type Tone } from "@/components/shapes";

export const metadata: Metadata = {
  title: { absolute: "Mirabilia | Early Learning Centre & Kindergarten in Perth" },
  description:
    "Explore Mirabilia, Perth’s trusted early learning centre and kindergarten, where innovative education meets a caring, homelike environment. Book a tour!",
};

/**
 * Hero video loop. The client's team is still filming it: drop the file in /public
 * (e.g. /video/hero.mp4) and set it here. Until then the poster photo shows with a label.
 */
const HERO_VIDEO = "";
const HERO_POSTER = "/photos/outdoor-discover.jpg";

const PILLARS: [word: string, prefix: string, tone: Tone, text: string][] = [
  ["Explore", "A Place to", "sun", "Opening up to new thoughts, knowledge and skills, as children learn alongside their peers and through intentional teaching. As they discover, investigate, imagine and create, children build a deeper understanding of the world around them."],
  ["Nurture", "A Place of", "leaf", "We help children grow into caring, responsible citizens by building trust, patience, responsibility, empathy and resilience from an early age. When their needs are met and their positive behaviours and talents are recognised, children flourish into confident, nurturing individuals."],
  ["Play", "A Place to", "sky", "We believe play is one of the most powerful ways children learn, and their right to play and to have a voice in their own lives is recognised by the United Nations Convention on the Rights of the Child. Through play, children bring their creativity to life, share their thoughts and build on what they know as they grow in every area of their development."],
  ["Learn and Share Learning", "A Place to", "rose", "Every day brings something new to discover, and at Mirabilia we encourage children to seek out fresh challenges as they gain new knowledge and skills. Each child also brings their own learning with them, which they share with their peers and educators as part of our centre community."],
];

const SPACES: [string, string, string][] = [
  ["caversham-room.jpg", "Light-filled playroom with low timber shelves", "Classrooms"],
  ["home-corner-story.jpg", "An educator reading to children in the home corner", "Homelike environments"],
  ["centre-playground.jpg", "Grassy yard with a climbing tower and garden paths", "Outdoor & playground"],
  ["educator-puzzle.jpg", "An educator doing a puzzle with a toddler", "Child safety"],
];

const JOURNEYS: [age: string, name: string, photo: string, alt: string, text: string, tone: Tone][] = [
  ["0–2 years", "Nursery", "music-shaker.jpg", "A baby playing with a shaker", "A calm, homelike sanctuary where babies feel safe, cherished and unhurried, with warm bonds that form the foundation for early brain development.", "sun"],
  ["2–3 years", "Toddlers", "water-pouring.jpg", "Toddlers pouring water at the outdoor kitchen", "Channelling a growing sense of “I can do it myself!” into purposeful, hands-on play, language and friendship.", "leaf"],
  ["3–5 years", "Kindergarten", "table-play.jpg", "An educator and children at a small table", "Led by degree-qualified teachers: child-led inquiry, early literacy, numeracy and STEM, and a confident transition to school.", "sky"],
];

const WHY: [string, string][] = [
  ["One fee, everything included", "Meals, nappies, sunscreen, incursions and excursions are all part of your daily fee."],
  ["Degree-qualified kindy teachers", "Our Kindergarten program is led by Early Childhood Teachers."],
  ["SQUAD enrichment every week", "Specialist sessions like Happy Feet, Planet Soccer and Yoganastics, at no extra cost."],
  ["Child safety, every day", "Vetted educators, active supervision and no personal phones in learning spaces."],
  ["Stay connected with Storypark", "Updates, photos and learning stories from your child’s day, wherever you are."],
  ["Four centres across Perth", "Caversham, Byford, Citiplace and Champion Lakes, each with its own warm community."],
];
const WHY_TONES: Tone[] = ["plum", "sky", "leaf", "sun", "rose", "sky"];

export default function Home() {
  return (
    <>
      {/* Hero: headline above, footage below (text never sits on the video) */}
      <section className="relative overflow-hidden">
        <Star className="animate-float absolute left-[7%] top-14 hidden w-10 md:block" tone="sun" />
        <Squiggle className="absolute right-[6%] top-20 hidden w-28 md:block" tone="sky" />
        <Heart className="absolute left-[12%] top-[40%] hidden w-8 lg:block" />
        <Leaf className="absolute right-[10%] top-[38%] hidden w-12 lg:block" />
        <Container className="relative pb-12 pt-14 text-center md:pt-20">
          <h1 className="mx-auto max-w-4xl text-4xl leading-[1.12] sm:text-5xl lg:text-[4rem]">
            Growing tomorrow&apos;s <Highlight tone="leaf">leaders</Highlight> together
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed md:text-xl">
            A wonderful journey of discovery, friendship and growing confidence, from their very first day to their first day of school.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Button href="/book-a-tour">Book a Tour</Button>
            <Button href="/centres" variant="outline">
              Find Your Centre
            </Button>
          </div>
        </Container>

        <Container className="relative pb-6">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] rounded-t-[4rem] sm:aspect-[21/9] md:rounded-t-[7rem]">
            {HERO_VIDEO ? (
              <video src={HERO_VIDEO} poster={HERO_POSTER} autoPlay muted loop playsInline aria-hidden className="h-full w-full object-cover" />
            ) : (
              <Image src={HERO_POSTER} alt="" fill priority sizes="100vw" className="object-cover" />
            )}
            {!HERO_VIDEO && (
              <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-4 py-1.5 text-xs font-bold text-plum">
                Placeholder: hero video loop coming from the Mirabilia team
              </span>
            )}
          </div>
        </Container>

        <Container className="relative pb-16">
          <div className="mx-auto -mt-2 max-w-5xl rounded-[2rem] bg-white px-6 py-8 text-center shadow-[0_24px_60px_-30px_rgba(61,26,74,0.45)]">
            <h2 className="text-2xl">Find a Centre</h2>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              {CENTRES.map((c) => (
                <Link key={c.slug} href={`/${c.slug}`} className="min-h-11 rounded-full bg-plum-900 px-6 py-2.5 text-sm font-bold text-white transition-colors hover:bg-plum">
                  {c.name}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Why we are different */}
      <section className="py-16 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="Why We Are Different"
            title={
              <>
                A place of <Highlight tone="sun">wonder</Highlight>, discovery and limitless potential
              </>
            }
            body="At Mirabilia, we believe early childhood is a time of wonder, discovery and limitless potential. Our approach brings together exceptional educators, thoughtfully designed spaces and a genuine partnership with families, so every child feels known, valued and inspired to thrive."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map(([word, prefix, tone, text]) => (
              <article key={word} className="flex flex-col rounded-[2rem] bg-white p-7 ring-1 ring-plum-100">
                {/* Pillar logos come from the parent handbook (still to be sent). */}
                <span className={`flex h-16 w-16 items-center justify-center rounded-[1.25rem] text-2xl font-extrabold ${toneBg[tone]}`} aria-hidden>
                  {word[0]}
                </span>
                <h3 className="mt-6 text-xl">
                  <span className="block text-base font-semibold text-body">{prefix}</span>
                  {word}
                </h3>
                <p className="mt-3 leading-relaxed">{text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Physical learning spaces */}
      <section className="bg-cream py-16 md:py-24">
        <Container>
          <Split
            photo={["citiplace-room.jpg", "Citiplace room with teal shelves and small wooden tables"]}
            eyebrow="Physical Learning Spaces"
            title="Spaces designed to spark curiosity"
            cta={["/our-spaces", "Explore Our Spaces"]}
            tone="sky"
          >
            <p>
              Our learning environments are carefully created to inspire exploration, creativity and connection. From light-filled indoor rooms to natural outdoor
              play spaces, every area invites children to discover, imagine and learn through play, all within a safe, secure and nurturing setting.
            </p>
          </Split>
          <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
            {SPACES.map(([src, alt, label]) => (
              <figure key={src}>
                <div className="relative aspect-square overflow-hidden rounded-[1.5rem]">
                  <Image src={photoSrc(src)} alt={alt} fill sizes="(min-width: 768px) 25vw, 50vw" className="object-cover" />
                </div>
                <figcaption className="mt-3 text-center font-bold text-ink">{label}</figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>

      {/* Learning journeys */}
      <section className="py-16 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="Learning Programs & Experiences"
            title={
              <>
                Growing with your child, every <Highlight tone="sky">step</Highlight> of the way
              </>
            }
            body="From their very first days with us to the exciting transition to school, every child’s learning journey at Mirabilia is unique. Our educators nurture each stage of development with programs tailored to every age group, building confidence, independence and a lifelong love of learning along the way."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {JOURNEYS.map(([age, name, src, alt, text, tone]) => (
              <Link key={name} href={`/our-curriculum#${name.toLowerCase()}`} className="group flex flex-col overflow-hidden rounded-[2rem] bg-white ring-1 ring-plum-100 transition-shadow hover:shadow-[0_24px_48px_-24px_rgba(61,26,74,0.4)]">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={photoSrc(src)} alt={alt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <span className={`self-start rounded-full px-3 py-1 text-xs font-bold ${toneBg[tone]}`}>{age}</span>
                  <h3 className="mt-4 text-2xl">{name}</h3>
                  <p className="mt-2 leading-relaxed">{text}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <Link href="/squad-programs" className="rounded-[2rem] bg-sky-100 p-8 transition-shadow hover:shadow-[0_24px_48px_-28px_rgba(61,26,74,0.5)]">
              <p className="text-sm font-bold text-plum">Squad Programs</p>
              <h3 className="mt-2 text-2xl">All-inclusive enrichment every week</h3>
              <p className="mt-3 leading-relaxed text-ink">Happy Feet Fitness, Planet Soccer, Yoganastics, Performing Arts, language classes and cooking lessons, 100% included in your daily fees.</p>
            </Link>
            <Link href="/a-day-at-mirabilia" className="rounded-[2rem] bg-sun-100 p-8 transition-shadow hover:shadow-[0_24px_48px_-28px_rgba(61,26,74,0.5)]">
              <p className="text-sm font-bold text-plum">A Day at Mirabilia</p>
              <h3 className="mt-2 text-2xl">A gentle, responsive rhythm</h3>
              <p className="mt-3 leading-relaxed text-ink">A predictable yet flexible day, from warm welcomes and morning gatherings to family-style lunches, rest and calm farewells.</p>
            </Link>
          </div>
          <div className="mt-10 text-center">
            <Button href="/our-curriculum">View Our Curriculum &amp; Programs</Button>
          </div>
        </Container>
      </section>

      <ReviewsSection heading="Loved by our families" lead="Hear from the parents and carers who have made Mirabilia part of their child’s story." />

      {/* Why families choose Mirabilia, on the gradient wave band */}
      <section className="relative">
        <svg aria-hidden viewBox="0 0 1440 120" preserveAspectRatio="none" className="-mb-px block h-14 w-full bg-plum-50 md:h-24">
          <path d="M0 64c180-48 360-64 560-36s380 72 560 60 240-44 320-60v92H0Z" fill="#2484c5" />
        </svg>
        <div className="relative overflow-hidden bg-gradient-to-b from-sky to-plum text-white">
          <Sun className="absolute right-[6%] top-10 w-20 opacity-60" />
          <Container className="relative grid gap-12 py-12 md:py-16 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            <div>
              <h2 className="text-3xl text-white md:text-[2.6rem]">Why families choose Mirabilia</h2>
              <p className="mt-5 text-lg leading-relaxed text-white/90">Exceptional care, without the extras. Here is what every family gets, at every one of our centres.</p>
              <div className="relative mt-8 aspect-[4/3] overflow-hidden rounded-[2rem] border-8 border-white/20">
                <Image src={photoSrc("home-corner-story.jpg")} alt="An educator reading a picture book to children in the home corner" fill sizes="(min-width: 1024px) 40vw, 90vw" className="object-cover" />
              </div>
              <div className="mt-8">
                <Button href="/book-a-tour" variant="leaf">
                  Book a Tour
                </Button>
              </div>
            </div>
            <ol className="grid gap-4 sm:grid-cols-2">
              {WHY.map(([t, d], i) => (
                <li key={t} className="rounded-[2rem] bg-white p-6 text-body">
                  <span className={`inline-flex h-11 w-11 items-center justify-center rounded-full text-sm font-extrabold ${toneBg[WHY_TONES[i]]}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-lg">{t}</h3>
                  <p className="mt-1.5 leading-relaxed">{d}</p>
                </li>
              ))}
            </ol>
          </Container>
        </div>
        <svg aria-hidden viewBox="0 0 1440 120" preserveAspectRatio="none" className="-mt-px block h-14 w-full rotate-180 md:h-24">
          <path d="M0 64c180-48 360-64 560-36s380 72 560 60 240-44 320-60v92H0Z" fill="#812990" />
        </svg>
      </section>

      {/* Social feed: not confirmed yet, so this is a reserved slot. */}
      <section id="social" className="py-16 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="Instagram & Facebook"
            title="Follow along with us"
            body="Take a peek into daily life at Mirabilia, from creative projects and outdoor adventures to special celebrations. Follow us for moments of joy, learning and community."
          />
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-6" aria-label="Social media feed (coming soon)">
            {Array.from({ length: 6 }, (_, i) => (
              <span key={i} className="flex aspect-square items-center justify-center rounded-[1.5rem] border-2 border-dashed border-plum-100 bg-plum-50 text-sm font-semibold text-plum/60">
                Social post
              </span>
            ))}
          </div>
          <div className="mt-10 text-center">
            {/* TODO: real social URLs */}
            <Button href="#" variant="outline">
              Follow Us
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
