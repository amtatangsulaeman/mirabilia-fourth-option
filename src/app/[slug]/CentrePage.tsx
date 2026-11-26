import Link from "next/link";
import { AGES, EMAIL, HOURS, PHONE, PHONE_HREF, centreFaq, directionsUrl, pullQuoteFor, type Centre } from "@/lib/data";
import { Band, Button, Container, CtaStrip, PageHero, SectionHeading, Split, VideoSlot, type Crumb } from "@/components/ui";
import { ChildSafety, FaqSection, Gallery, PageNav, PullQuote, ReviewsSection, TourSection } from "@/components/sections";
import CentreMap from "@/components/CentreMap";
import { Icon } from "@/components/icons";
import { Highlight, toTone } from "@/components/shapes";

const BRING: [string, string][] = [
  ["bottle", "Breast milk or formula"],
  ["bottle", "A sterilised bottle from home"],
  ["hat", "A bucket hat"],
  ["shirt", "A bag of spare clothes"],
];

export default function CentrePage({ centre: c }: { centre: Centre }) {
  const faq = centreFaq(c);
  const pull = pullQuoteFor("educators", c.slug);
  const [g1, ...rest] = c.gallery;
  const crumbs: Crumb[] = [["Centres", "/centres"], [`Mirabilia ${c.name}`, `/${c.slug}`]];
  const tone = toTone(c.color);
  const [welcome, ...nameWords] = c.welcome.split(" Mirabilia ");

  return (
    <>
      <PageHero
        crumbs={crumbs}
        title={
          <>
            {welcome} Mirabilia <Highlight tone={tone === "plum" ? "leaf" : tone}>{nameWords.join(" ") || c.name}</Highlight>
          </>
        }
        lead={c.intro}
        tone={tone}
        photo={c.hero}
        photo2={g1}
        actions={
          <>
            {c.isNew && <span className="rounded-full bg-sun px-4 py-1.5 text-sm font-bold text-white">New centre</span>}
            <Button href="#tour">Book a Tour</Button>
            <Button href="#video-tour" variant="outline">
              Video Tour
            </Button>
            <a href={directionsUrl(c)} target="_blank" rel="noopener" className="font-bold text-plum hover:underline">
              Get directions →
            </a>
          </>
        }
      />

      <PageNav items={[["video-tour", "Video Tour"], ["overview", "Overview"], ["child-safety", "Safety"], ["location", "Location"], ["reviews", "Reviews"], ["faq", "FAQ"]]} />

      <section id="video-tour" className="scroll-mt-36 pt-12">
        <Container className="max-w-5xl">
          <VideoSlot src={c.videoTour} title={`Video tour of Mirabilia ${c.name}`} />
        </Container>
      </section>

      <section id="overview" className="scroll-mt-36 py-12">
        <Container>
          <ul className="grid gap-4 rounded-[2rem] bg-plum-50 p-6 sm:grid-cols-2 lg:grid-cols-4">
            <li className="flex gap-3">
              <Icon name="pin" className="h-7 w-7 shrink-0 text-plum" />
              <span><strong className="block text-ink">{c.street}</strong>{c.suburb}</span>
            </li>
            <li className="flex gap-3">
              <Icon name="clock" className="h-7 w-7 shrink-0 text-sun" />
              <span><strong className="block text-ink">{HOURS}</strong>Monday to Friday</span>
            </li>
            <li className="flex gap-3">
              <Icon name="sprout" className="h-7 w-7 shrink-0 text-leaf-700" />
              <span>
                <strong className="block text-ink">{AGES}</strong>
                {c.rating ? (
                  <a href={c.rating.url} target="_blank" rel="noopener">{c.rating.score.toFixed(1)} stars on Google ({c.rating.count})</a>
                ) : (
                  "Long Day Care & kindy"
                )}
              </span>
            </li>
            <li className="flex gap-3">
              <Icon name="people" className="h-7 w-7 shrink-0 text-rose" />
              <span>
                <a href={PHONE_HREF} className="block font-bold text-ink hover:text-plum">{PHONE}</a>
                <a href={`mailto:${EMAIL}`} className="break-all hover:text-plum">{EMAIL}</a>
              </span>
            </li>
          </ul>
        </Container>
      </section>

      <Band>
        <Split photo={rest[0] ?? c.hero} title={`Our ${c.name} educators`} tone={tone}>
          <p>Our team of educators are committed and passionate about making sure your child is safe, nurtured and cared for every day.</p>
          <p>
            Children are encouraged to engage in interest-led play that creates learning and meaningful experiences. Our educators seek out diverse learning
            opportunities and implement the curriculum as framed by the Early Years Learning Framework.
          </p>
          <PullQuote review={pull} />
          <p>
            <Link href="/our-curriculum" className="font-bold text-plum hover:underline">
              How our curriculum works →
            </Link>
          </p>
        </Split>
      </Band>

      <Band tint="cream">
        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-[2rem] bg-white p-8 md:p-10">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-sky text-white" aria-hidden>
              <Icon name="camera" className="h-7 w-7" />
            </span>
            <h2 className="mt-5 text-2xl md:text-3xl">You and your child</h2>
            <p className="mt-4 text-lg leading-relaxed">
              We use <strong>Storypark</strong>, a centre-to-family platform where you can follow your child’s day through photos, stories and learning outcomes.
            </p>
            <p className="mt-3 text-lg leading-relaxed">Every family gets a secure login to use on a computer, mobile or the app.</p>
          </article>
          <article className="rounded-[2rem] bg-white p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl">What to bring</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {BRING.map(([ic, label], i) => (
                <li key={label} className={`flex items-center gap-3 rounded-2xl p-4 font-semibold text-ink ${["bg-rose-100", "bg-sky-100", "bg-sun-100", "bg-leaf-100"][i]}`}>
                  <Icon name={ic} className="h-7 w-7 shrink-0" />
                  {label}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </Band>

      {rest.length > 2 && (
        <Band>
          <SectionHeading title="A peek inside" />
          <div className="mt-12 pb-6">
            <Gallery photos={c.gallery} />
          </div>
        </Band>
      )}

      <Container className={rest.length > 2 ? "pb-4" : "py-12"}>
        <CtaStrip
          text={`Squad Programs, meals, nappies and sunscreen are all included in your daily fee at Mirabilia ${c.name}.`}
          cta={["/inclusive-care", "One fee, everything included"]}
        />
      </Container>

      <ChildSafety centre={c.name} />

      <Band id="location" tint="cream">
        <SectionHeading title={`Finding Mirabilia ${c.name}`} body={`${c.street}, ${c.suburb}. Not the closest centre to you? Find your nearest one on the map.`} />
        <CentreMap focus={c.slug} />
      </Band>

      <ReviewsSection centre={c} exclude={pull} />
      <FaqSection items={faq} heading={`${c.name} questions`} />
      <TourSection
        heading={`Book a tour at Mirabilia ${c.name}`}
        text={`Discover the nurturing environment at Mirabilia ${c.name}. Explore our facilities, meet our educators, and see how we inspire your child’s growth and development.`}
        centre={c.name}
      />
    </>
  );
}
