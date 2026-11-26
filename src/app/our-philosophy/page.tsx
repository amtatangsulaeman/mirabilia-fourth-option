import type { Metadata } from "next";
import { Band, GradientBand, PageHero, Panel, SectionHeading, Split, type Crumb } from "@/components/ui";
import { Highlight, toneBg, type Tone } from "@/components/shapes";

export const metadata: Metadata = {
  title: "Our Philosophy",
  description:
    "Grounded in developmental research and the EYLF V2.0, Mirabilia blends an emergent curriculum with a 12-month character building program and our CIRCLE values.",
};

const CRUMBS: Crumb[] = [["Curriculum & Programs", "/our-curriculum"], ["Philosophy", "/our-philosophy"]];

const CIRCLE: [string, string, Tone][] = [
  ["C", "Caring", "leaf"],
  ["I", "Integrity", "sun"],
  ["R", "Respect", "sky"],
  ["C", "Collaboration", "rose"],
  ["L", "Learn", "leaf"],
  ["E", "Empower", "sun"],
];

export default function PhilosophyPage() {
  return (
    <>
      <PageHero
        crumbs={CRUMBS}
        photo={["philosophy-garden.jpg", "Children holding hands in a circle outdoors"]}
        tone="sun"
        eyebrow="Philosophy"
        title={
          <>
            Building the foundation for a <Highlight tone="sun">lifetime</Highlight>
          </>
        }
        lead="90% of a child’s brain growth happens before age five. At Mirabilia, we don’t just care for your child. We nurture the foundational brain architecture they will rely on for the rest of their lives."
      />

      <Band>
        <Split photo={["home-corner-story.jpg", "An educator reading a picture book to children in the home corner"]} eyebrow="The science behind our approach" title="Warm relationships, purposeful play">
          <p>
            Grounded in the research of pioneering developmental theorists like <strong>Erik Erikson</strong> and <strong>John Bowlby</strong>, we know that warm,
            responsive relationships and purposeful play during these crucial years wire the brain for emotional security, language, and critical thinking.
          </p>
          <p>
            We bring this science to life by cultivating not only bright minds, but also kind, resilient, and capable hearts. Guided by the{" "}
            <strong>Early Years Learning Framework (EYLF V2.0)</strong>, our program blends a responsive <strong>Emergent Curriculum</strong> with our intentional{" "}
            <strong>12-Month Character Building Program</strong>.
          </p>
          <p>Rather than teaching skills or values in isolation, we weave early literacy, STEM, culture, and our core CIRCLE values naturally into your child’s daily play and discovery.</p>
        </Split>
      </Band>

      <GradientBand>
        <p className="mb-3 text-center text-sm font-bold text-white/80">Our CIRCLE values</p>
        <h2 className="text-center text-3xl text-white md:text-[2.6rem]">The values woven through every day</h2>
        <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {CIRCLE.map(([l, w, tone]) => (
            <li key={w} className="rounded-[2rem] bg-white p-6 text-center">
              <span className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full text-3xl font-extrabold ${toneBg[tone]}`}>{l}</span>
              <h3 className="mt-4 text-lg">{w}</h3>
            </li>
          ))}
        </ul>
      </GradientBand>

      <Band>
        <SectionHeading
          eyebrow="The heart of our program"
          title="An emergent curriculum"
          body="An emergent curriculum moves beyond rigid, pre-planned lesson charts. Instead, our educators observe, listen, and co-construct learning alongside your child so every experience feels meaningful and alive."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <Panel tone="leaf" title="Led by children’s curiosity">
            <p>Whether a group becomes fascinated by native wildlife, construction, or storytelling, we use their real-time interests as a launchpad for literacy, STEM, and social connection.</p>
          </Panel>
          <Panel tone="sky" title="Partnering with families">
            <p>You are your child’s first and most important teacher. We work closely with you to understand your child’s home life, cultural background, and developing strengths, creating genuine continuity between home and Mirabilia.</p>
          </Panel>
          <Panel tone="sun" title="Extended with intent">
            <p>We take what children already know and love, thoughtfully scaffolding their play to achieve EYLF learning outcomes and bring our monthly character traits to life.</p>
          </Panel>
        </div>
      </Band>
    </>
  );
}
