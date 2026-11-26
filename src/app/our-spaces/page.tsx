import Image from "next/image";
import type { Metadata } from "next";
import { Band, CtaStrip, PageHero, SectionHeading, Split, photoSrc, type Crumb } from "@/components/ui";
import { Highlight, toneBg, type Tone } from "@/components/shapes";

export const metadata: Metadata = {
  title: "Learning Spaces & Child Safety",
  description:
    "Indoor and outdoor spaces designed as the “third teacher”, and Mirabilia’s commitment to health and child safety under the NQS and the National Principles for Child Safe Organisations.",
};

const CRUMBS: Crumb[] = [["Curriculum & Programs", "/our-curriculum"], ["Learning Spaces & Child Safety", "/our-spaces"]];

// TODO: swap for photos of the Nursery, Toddler and Kindergarten rooms once the client sends them.
const SPACES: [string, string, string][] = [
  ["champion-3.jpg", "Room with natural timber furniture", "Nursery"],
  ["byford-room.jpg", "Playroom with rugs and open shelves", "Toddlers"],
  ["caversham-room-2.jpg", "Long sunny room with activity tables", "Kindergarten"],
  ["yard-sandpit.jpg", "Big sandpit with a red slide and timber fence", "Outdoor areas"],
];

const HEALTH: [string, string][] = [
  ["Active supervision & safe design", "Open, unobstructed room layouts, rigorous daily safety checks, and attentive educator ratios ensure children are actively supervised across all play, rest, meal, and transition routines."],
  ["Vetted, child-safe educators", "Every team member undergoes comprehensive background screening (including current Working with Children Checks) and completes mandatory, ongoing child protection and child-safe training."],
  ["Strict digital & image privacy", "In line with national digital-safety reforms, personal mobile devices are strictly banned from all children’s learning spaces, and family consent controls govern every photo shared on secure platforms."],
  ["Empowering children’s voices & bodily autonomy", "From respectful nappy-change and toileting routines that protect dignity to teaching age-appropriate consent, boundaries, and protective behaviours, we empower children to know their voices matter and their bodies belong to them."],
  ["Transparent family partnership", "We maintain an open-door culture with clear, accessible feedback and complaints pathways so families always know how we keep children safe and how to raise any concern."],
];

const COMMITMENT: [string, string][] = [
  ["Leadership & culture of integrity", "Child safety guides every decision made by our Approved Provider, Centre Directors, and Educational Leaders. We maintain an open, accountable culture where safeguarding always comes first."],
  ["Empowering children’s voices & bodily autonomy", "We listen deeply to children and respect their right to say “yes” or “no.” Through gentle, narrated care routines and age-appropriate protective behaviours, we help children recognise their feelings, understand personal boundaries, and know how to seek help from trusted adults."],
  ["Partnering with families & communities", "You know your child best. We welcome your voice, share clear information about our safety practices, and actively involve families in shaping a safe, transparent centre community."],
  ["Cultural safety & inclusion for every child", "We celebrate diversity and create culturally safe environments where Aboriginal and Torres Strait Islander children, children from culturally and linguistically diverse (CALD) backgrounds, and children of all abilities feel proud of who they are and genuinely belong."],
  ["Vetted, supported & continuously trained educators", "Every member of the Mirabilia team undergoes thorough recruitment screening (including verified Working with Children Checks and reference checks) and participates in ongoing child-protection, mandatory-reporting, and trauma-informed training."],
  ["Safe physical & online spaces", "Clear sightlines, active supervision, and daily safety checks. Personal mobile phones and personal smart devices are strictly banned in all children’s learning spaces. Only secure, centre-owned devices are used for documentation, and your explicit consent governs how and where your child’s image is shared."],
  ["Clear, child-focused feedback & reporting pathways", "We take every concern seriously. Families, children, and educators have clear, accessible, and confidential ways to raise questions or report concerns, with prompt action and full compliance with Western Australian reporting obligations."],
];
const TONES: Tone[] = ["leaf", "sun", "sky", "rose", "plum"];

export default function SpacesPage() {
  return (
    <>
      <PageHero
        crumbs={CRUMBS}
        photo={["caversham-yard.jpg", "Outdoor play area with a shade sail and red slide"]}
        photo2={["champion-4.jpg", "Reading nook and soft play corner"]}
        eyebrow="Physical Learning Spaces"
        title={
          <>
            Designed as the <Highlight tone="leaf">“third teacher”</Highlight>
          </>
        }
        lead="Our indoor and outdoor environments are thoughtfully designed to spark wonder, support independence, and invite safe exploration."
      />

      <Band>
        <Split photo={["centre-playground.jpg", "Grassy yard with a climbing tower and garden paths"]} eyebrow="Indoor & outdoor" title="Warm, homelike spaces that invite discovery" tone="sky">
          <p>Viewing the environment as the “third teacher,” we create warm, homelike spaces filled with natural materials, open-ended resources, and inviting nature-play areas that adapt to children’s evolving interests.</p>
          <p>Every room is intentionally laid out with clear sightlines and accessible learning zones, empowering children to take healthy, age-appropriate risks, build physical confidence, and connect deeply with the natural world.</p>
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
      </Band>

      <Band tint="cream" id="health-safety">
        <SectionHeading
          eyebrow="Commitment to Health & Safety"
          title="Our unwavering commitment to health & child safety"
          body="Your child’s physical, emotional, and digital safety is the foundation of everything we do. Aligned with the National Quality Standard (Quality Area 2) and Australia’s strengthened National Principles for Child Safe Organisations, child safety at Mirabilia is never a tick-box exercise. It is embedded into our daily culture and CIRCLE values."
        />
        <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {HEALTH.map(([t, d], i) => (
            <li key={t} className="rounded-[2rem] bg-white p-7 ring-1 ring-plum-100">
              <span className={`inline-flex h-11 w-11 items-center justify-center rounded-full font-extrabold ${toneBg[TONES[i]]}`}>{i + 1}</span>
              <h3 className="mt-4 text-xl">{t}</h3>
              <p className="mt-2 leading-relaxed">{d}</p>
            </li>
          ))}
        </ol>
      </Band>

      <Band id="child-safe">
        <SectionHeading
          eyebrow="Our Child Safe Commitment"
          title="A living promise we keep together"
          body="At Mirabilia, every child has the right to feel safe, respected, heard, and valued, every single day. We uphold a zero-tolerance stance toward child abuse, harm, or neglect, and we actively embed the 10 National Principles for Child Safe Organisations and the National Quality Framework (NQF) into our daily culture, leadership, and CIRCLE values."
        />
        <div className="mx-auto mt-12 max-w-4xl divide-y divide-plum-100 rounded-[2rem] bg-plum-50 px-6 md:px-10">
          {COMMITMENT.map(([t, d]) => (
            <div key={t} className="grid gap-2 py-6 md:grid-cols-[1fr_1.6fr] md:gap-8">
              <h3 className="text-lg">{t}</h3>
              <p className="leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <CtaStrip
            text={
              <>
                <strong>Have a question or want to speak with us?</strong> Your Centre Director and Nominated Supervisor are always available for a confidential chat, or
                you can reach out directly to our Approved Provider and leadership team at any time.
              </>
            }
            cta={["/contact", "Contact Us"]}
          />
        </div>
      </Band>
    </>
  );
}
