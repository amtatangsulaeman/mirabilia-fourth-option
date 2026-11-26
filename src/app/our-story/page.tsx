import type { Metadata } from "next";
import Image from "next/image";
import { LEADERSHIP } from "@/lib/data";
import { Band, CtaStrip, PageHero, photoSrc, type Crumb } from "@/components/ui";
import { Highlight, toneBg, type Tone } from "@/components/shapes";

export const metadata: Metadata = {
  title: "Our Story: Leadership Team",
  description: "Meet the people behind Mirabilia: our Senior Management Team, Centre Managers and Shared Services Team.",
};

const CRUMBS: Crumb[] = [["Our Story", "/our-story"]];
const TONES: Tone[] = ["leaf", "sun", "sky"];

export default function OurStoryPage() {
  return (
    <>
      <PageHero
        crumbs={CRUMBS}
        eyebrow="Our Story · Leadership Team"
        title={
          <>
            The people behind our <Highlight tone="leaf">purpose</Highlight>
          </>
        }
        lead="Behind every Mirabilia centre is a dedicated leadership team who bring experience, vision and heart to everything we do. Together, they guide our philosophy, support our educators and make sure every family receives the exceptional care and education we’re known for."
      />

      <Band>
        <div className="space-y-20">
          {LEADERSHIP.map((g, gi) => (
            <div key={g.key} className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
              <div>
                <span className={`mb-4 block h-1.5 w-12 rounded-full ${toneBg[TONES[gi % 3]].split(" ")[0]}`} aria-hidden />
                <h2 className="text-3xl md:text-4xl">{g.title}</h2>
                <p className="mt-5 text-lg leading-relaxed">{g.text}</p>
              </div>
              <div className="grid grid-cols-2 gap-5 sm:grid-cols-3">
                {g.people.map((p) => (
                  <article key={p.name} className="text-center">
                    {p.photo ? (
                      <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
                        <Image src={photoSrc(p.photo)} alt={p.name} fill sizes="(min-width: 768px) 20vw, 45vw" className="object-cover" />
                      </div>
                    ) : (
                      // New staff photos are being taken; placeholder until then.
                      <div className="flex aspect-[4/5] items-center justify-center rounded-[2rem] border-2 border-dashed border-plum-100 bg-plum-50 px-3 text-sm font-semibold text-plum/60" aria-hidden>
                        Photo coming soon
                      </div>
                    )}
                    <h3 className="mt-4 text-lg">{p.name}</h3>
                    <p className="text-sm text-plum">{p.role}</p>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Band>

      <Band tint="cream">
        <CtaStrip text="Want to be part of the team behind Mirabilia?" cta={["/careers", "View Careers"]} />
      </Band>
    </>
  );
}
