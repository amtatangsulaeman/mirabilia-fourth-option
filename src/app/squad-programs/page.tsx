import type { Metadata } from "next";
import { SQUAD_TOPICS } from "@/lib/squad";
import { Band, CtaStrip, PageHero, Panel, SectionHeading, Split, type Crumb } from "@/components/ui";
import { ProgramCards } from "@/components/sections";
import { Highlight, toneBg, type Tone } from "@/components/shapes";

export const metadata: Metadata = {
  title: "Squad Programs: All-Inclusive Enrichment",
  description:
    "Happy Feet Fitness, Planet Soccer, Yoganastics, Performing Arts, language classes and cooking lessons, plus weekly Program Officers. 100% included in your daily fees.",
};

const CRUMBS: Crumb[] = [["Curriculum & Programs", "/our-curriculum"], ["Squad Programs", "/squad-programs"]];

const SESSIONS: [string, string][] = [
  ["Happy Feet Fitness", "Energetic, imaginative movement and dance sessions that build coordination, rhythm, balance, and a joyful love of active play."],
  ["Planet Soccer", "Fun, non-competitive ball skills and teamwork games designed to develop gross-motor confidence, spatial awareness, and sportsmanship."],
  ["Yoganastics", "Mindful movement, stretching, breathing techniques, and emotional regulation skills that help children find calm, focus, and body awareness."],
  ["Performing Arts (Music, Drama & Visual Art)", "Led by our dedicated Performing Arts Teacher, children explore expressive storytelling, rhythm, instruments, dramatic play, and creative visual arts."],
  ["Language Classes", "Playful, interactive introductions to new languages and songs that spark cognitive flexibility, cultural curiosity, and respect for our diverse world."],
  ["Internal Cooking Lessons", "Hands-on culinary adventures where children measure, mix, taste, and learn practical nutrition and garden-to-plate skills alongside our educators."],
];
const TONES: Tone[] = ["rose", "leaf", "sky", "sun", "plum", "sun"];
const PANEL_TONES = ["leaf", "sun", "sky", "rose"] as const;

export default function SquadPage() {
  return (
    <>
      <PageHero
        crumbs={CRUMBS}
        photo={["squad-dance.jpg", "Kindergarten children dancing with maracas"]}
        photo2={["squad-board.jpg", "A wall display of Squad program photos"]}
        tone="sky"
        eyebrow="Squad Programs"
        title={
          <>
            All-inclusive <Highlight tone="sky">enrichment</Highlight> every week
          </>
        }
        lead="Every child deserves access to rich, inspiring specialist experiences, which is why our signature SQUAD Enrichment Program is 100% included in your daily fees, with no hidden extras or add-on costs."
      />

      <Band>
        <Split photo={["happyfeet-3.jpg", "Children holding the edge of a colourful parachute"]} eyebrow="The Mirabilia SQUAD Program" title="Specialist partners & educator-led studios" tone="rose">
          <p>Working alongside our emergent curriculum and CIRCLE core values, our SQUAD sessions nurture physical confidence, creativity, cultural awareness, and lifelong curiosity through a weekly rotation of specialist partners and educator-led studios.</p>
        </Split>
        <ol className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SESSIONS.map(([t, d], i) => (
            <li key={t} className="rounded-[2rem] bg-white p-7 ring-1 ring-plum-100">
              <span className={`inline-flex h-11 w-11 items-center justify-center rounded-full font-extrabold ${toneBg[TONES[i]]}`}>{i + 1}</span>
              <h3 className="mt-4 text-xl">{t}</h3>
              <p className="mt-2 leading-relaxed">{d}</p>
            </li>
          ))}
        </ol>
      </Band>

      <Band tint="cream">
        <SectionHeading
          eyebrow="Our weekly Program Officers"
          title="Championing every area of growth"
          body="We go beyond a “one-size-fits-all” approach by empowering passionate educators to serve as dedicated Program Officers. Every week, our officers weave specialised, purposeful experiences into each room’s program."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {SQUAD_TOPICS.map((t, i) => (
            <Panel key={t.slug} href={`/squad-programs/${t.slug}`} tone={PANEL_TONES[i % 4]} meta={t.officer} title={t.name}>
              <p>{t.summary}</p>
            </Panel>
          ))}
        </div>
      </Band>

      <Band>
        <SectionHeading title="Moments from our Squad Programs" />
        <div className="mt-12">
          <ProgramCards />
        </div>
        <div className="mt-14">
          <CtaStrip text="Squad Programs are part of every day at all four Mirabilia centres, with no extra cost." cta={["/book-a-tour", "Book a Tour"]} />
        </div>
      </Band>
    </>
  );
}
