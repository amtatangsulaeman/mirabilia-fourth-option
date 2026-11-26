import { PROGRAM_DETAIL, type Program } from "@/lib/data";
import { Band, GradientBand, PageHero, SectionHeading, type Crumb } from "@/components/ui";
import { CtaBand, FeatureCards, Gallery, ProgramCards } from "@/components/sections";
import { Icon } from "@/components/icons";
import { Highlight, toTone, toneBg } from "@/components/shapes";

const BLOCK_ICONS = ["sun", "sprout", "heart"];
const BLOCK_BG = ["bg-leaf-100", "bg-sky-100", "bg-sun-100"];

export default function ProgramPage({ program: p }: { program: Program }) {
  const d = PROGRAM_DETAIL[p.slug];
  const [before, mark, after = ""] = d.tagline;
  const tone = toTone(p.color);
  const crumbs: Crumb[] = [["Squad Programs", "/squad-programs"], [p.name, `/${p.slug}`]];

  return (
    <>
      <PageHero
        crumbs={crumbs}
        title={
          <>
            {before}
            <Highlight tone={tone === "plum" ? "leaf" : tone}>{mark}</Highlight>
            {after}
          </>
        }
        lead={
          <span className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-base font-bold ${toneBg[tone]}`}>
            <Icon name={p.icon} className="h-5 w-5" />
            {p.name}
          </span>
        }
        tone={tone}
        photo={d.photos[0]}
        photo2={d.photos[1]}
      />

      <Band>
        <div className="mx-auto max-w-3xl space-y-5 text-center text-xl leading-relaxed text-ink">
          {d.intro.map((x, i) => (
            <p key={i}>{x}</p>
          ))}
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {d.blocks.map(([h, txt], i) => (
            <article key={h} className={`rounded-[2rem] p-8 ${BLOCK_BG[i % 3]}`}>
              <span className={`flex h-12 w-12 items-center justify-center rounded-full ${toneBg[tone]}`} aria-hidden>
                <Icon name={BLOCK_ICONS[i]} className="h-6 w-6" />
              </span>
              <h2 className="mt-5 text-2xl">{h}</h2>
              <p className="mt-3 leading-relaxed text-ink">{txt}</p>
            </article>
          ))}
        </div>
      </Band>

      <GradientBand>
        <h2 className="text-center text-3xl text-white md:text-[2.6rem]">Why families love {p.name}</h2>
        <div className="mt-12">
          <FeatureCards items={d.why} onDark />
        </div>
      </GradientBand>

      <Band>
        <SectionHeading title={`Moments from ${p.name}`} />
        <div className="mt-12 pb-6">
          <Gallery photos={d.gallery} />
        </div>
      </Band>

      <CtaBand heading="Join us!" text={d.join} primary={["/enquire-now", "Enquire now"]} secondary={["/book-a-tour", "Book a tour"]} />

      <Band tint="plum">
        <SectionHeading title="More Squad Programs" />
        <div className="mt-12">
          <ProgramCards exclude={p.slug} />
        </div>
      </Band>
    </>
  );
}
