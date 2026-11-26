import Link from "next/link";
import type { Metadata } from "next";
import type { Photo } from "@/lib/data";
import { Band, Button, CtaStrip, PageHero, Panel, SectionHeading, Split, type Crumb } from "@/components/ui";
import { Highlight, type Tone } from "@/components/shapes";

export const metadata: Metadata = {
  title: "Learning Journeys: Nursery, Toddlers & Kindergarten",
  description:
    "Growing heart, mind and character. Mirabilia’s EYLF V2.0 program for Nursery (0–2), Toddlers (2–3) and Kindergarten (3–5), with incursions, excursions and character building.",
};

const CRUMBS: Crumb[] = [["Curriculum & Programs", "/our-curriculum"], ["Learning Journeys", "/our-curriculum"]];

const STAGES: { id: string; age: string; title: string; photo: Photo; text: string; focus: string; tone: Tone }[] = [
  {
    id: "nursery", age: "Nursery · 0–2 years", title: "Nurturing trust, wonder & secure beginnings", tone: "sun",
    photo: ["music-shaker.jpg", "A baby playing with a shaker"],
    text: "Our Nursery is a calm, homelike sanctuary where babies and young toddlers feel deeply safe, cherished, and unhurried. Guided by primary caregiving principles and individual home sleep and feeding routines, our educators build warm, trusting bonds that form the foundation for early brain development. Through gentle, respectful care routines, sensory exploration, music, tummy time, and responsive “serve-and-return” interactions, we nurture your baby’s curiosity, early communication, and physical confidence at their own pace.",
    focus: "Secure attachment, sensory play, early language, gross-motor milestones, and gentle, consent-led care routines.",
  },
  {
    id: "toddlers", age: "Toddlers · 2–3 years", title: "Growing independence, language & big emotions", tone: "leaf",
    photo: ["water-pouring.jpg", "Toddlers pouring water at the outdoor kitchen"],
    text: "Bursting with energy and discovery, our Toddler program channels your child’s growing sense of “I can do it myself!” into purposeful, hands-on play. As toddlers test boundaries, build friendships, and find their voice, our educators scaffold emerging language, turn-taking, and emotional regulation through stories, creative arts, outdoor nature play, and collaborative projects. Anchored in our CIRCLE values, children learn to make meaningful choices, care for one another, and build confidence in a safe, supportive space.",
    focus: "Growing independence, social connection, expressive language, emotional coaching, and active physical play.",
  },
  {
    id: "kindergarten", age: "Kindergarten · 3–5 years", title: "Curious thinkers, kind hearts & school readiness", tone: "sky",
    photo: ["table-play.jpg", "An educator and children at a small table"],
    text: "Led by degree-qualified Early Childhood Teachers, our Kindergarten program prepares children not just for the first day of school, but for a lifelong love of learning. Through deep, child-led inquiry projects, hands-on STEM, early literacy and numeracy, physical literacy, and our 12-Month Character Building Program, children develop critical thinking, resilience, and leadership. We foster a strong sense of active citizenship and cultural pride, empowering confident, empathetic learners ready to take on primary school and the wider world.",
    focus: "Child-led inquiry, literacy and numeracy foundations, STEM, character leadership, protective behaviours, and holistic transition to school.",
  },
];

export default function CurriculumPage() {
  return (
    <>
      <PageHero
        crumbs={CRUMBS}
        photo={["curriculum-outdoor.jpg", "Children sitting together outdoors with an educator"]}
        photo2={["curriculum-drawing.jpg", "Children drawing at a table"]}
        tone="sky"
        eyebrow="Learning Journeys"
        title={
          <>
            Growing heart, mind &amp; <Highlight tone="sky">character</Highlight>
          </>
        }
        lead="At Mirabilia Early Learning, we believe early childhood is the foundation for nurturing not just bright minds, but also kind, resilient, and capable hearts."
        actions={STAGES.map((s) => (
          <Button key={s.id} href={`#${s.id}`} variant="white" small className="ring-1 ring-plum-100">
            {s.age.split(" · ")[0]}
          </Button>
        ))}
      />

      <Band>
        <div className="mx-auto max-w-3xl space-y-5 text-center text-lg leading-relaxed">
          <p>
            Guided by the <strong>Early Years Learning Framework (EYLF V2.0)</strong> and anchored in our <strong>CIRCLE</strong> core values (
            <em>Caring, Integrity, Respect, Collaboration, Learn, Empower</em>), our program is a dynamic blend of a responsive <strong>Emergent Curriculum</strong> and
            our intentional <strong>12-Month Character Building Program</strong>. Rather than teaching skills or values in isolation, we weave literacy, STEM, culture,
            and active citizenship naturally into your child’s daily play and discovery.
          </p>
          <p>
            Read more about the thinking behind it in{" "}
            <Link href="/our-philosophy" className="font-bold text-plum underline">
              our philosophy
            </Link>
            .
          </p>
        </div>
      </Band>

      <Band tint="cream">
        <SectionHeading eyebrow="Our learning environments" title="Tailored for every stage" />
        <div className="mt-14 space-y-20 md:space-y-28">
          {STAGES.map((s, i) => (
            <div id={s.id} key={s.id} className="scroll-mt-28">
              <Split photo={s.photo} eyebrow={s.age} title={s.title} flip={i % 2 === 1} tone={s.tone}>
                <p>{s.text}</p>
                <p>
                  <strong className="text-ink">Program focus:</strong> {s.focus}
                </p>
              </Split>
            </div>
          ))}
        </div>
      </Band>

      <Band>
        <div className="grid gap-6 md:grid-cols-2">
          <Panel tone="leaf" meta="Calendar of Events" title="Active citizenship & living in Australia">
            <p>Our Calendar of Events is far more than a list of special days. It is how we nurture active citizenship and help children understand what it means to belong to a caring, connected Australian community.</p>
            <ul>
              <li><strong>Honouring First Nations heritage:</strong> daily Acknowledgement of Country, Dreaming stories, NAIDOC Week, and National Reconciliation Week.</li>
              <li><strong>Embracing Australian life &amp; traditions:</strong> ANZAC Day, Book Week, Harmony Week, and local community initiatives.</li>
              <li><strong>Celebrating multicultural diversity:</strong> family traditions, festivals, and languages from around the world.</li>
            </ul>
          </Panel>
          <Panel tone="sky" meta="Character building" title="How we interweave character across the year">
            <p>
              As children follow their curiosity and take part in community life, our educators intentionally weave our CIRCLE values and EYLF learning outcomes through{" "}
              <strong>12 monthly character focuses</strong>, helping children practise kindness, courage, honesty, and responsibility every single day.
            </p>
            {/* TODO: character-building diagram from the client deck */}
            <div className="flex min-h-40 flex-col items-center justify-center rounded-[1.5rem] border-2 border-dashed border-sky/40 bg-white/60 text-center text-sm">
              <strong className="text-ink">Diagram</strong>
              12-month character building wheel (from client deck)
            </div>
          </Panel>
        </div>
      </Band>

      <Band tint="cream">
        <SectionHeading
          eyebrow="Incursions & Excursions"
          title="Bringing the community in & exploring beyond our doors"
          body="Learning comes alive when children connect what they discover in our rooms with the wider world around them."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Panel title="Monthly incursions, with families warmly invited">
            <p>Every month, we welcome inspiring educators, artists, wildlife handlers, storytellers, and community helpers into our centres for hands-on learning experiences. Best of all, we warmly invite all Mirabilia families to come along and join in, turning each monthly incursion into a shared celebration of curiosity, connection, and learning side by side with your child.</p>
          </Panel>
          <Panel title="Local excursions & community exploration">
            <p>When children’s interests lead beyond our gates, we venture out on carefully planned, risk-assessed excursions across our local Western Australian neighbourhoods and cultural landmarks. Whether exploring nearby parks, libraries, museums, or community spaces, children practise road safety, active citizenship, and genuine belonging in their community.</p>
          </Panel>
        </div>
      </Band>

      <Band>
        <div className="grid gap-6 md:grid-cols-3">
          <Panel href="/squad-programs" tone="sun" meta="Squad Programs" title="All-inclusive enrichment every week" />
          <Panel href="/a-day-at-mirabilia" tone="leaf" meta="A Day at Mirabilia" title="Daily rhythm & mealtimes" />
          <Panel href="/our-spaces" tone="rose" meta="Learning Spaces" title="Designed as the “third teacher”" />
        </div>
        <div className="mt-12">
          <CtaStrip text="See our learning journeys in action. Come and visit one of our centres." cta={["/book-a-tour", "Book a Tour"]} />
        </div>
      </Band>
    </>
  );
}
