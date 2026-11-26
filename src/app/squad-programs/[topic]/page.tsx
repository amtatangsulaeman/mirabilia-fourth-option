import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SQUAD_TOPICS, squadTopicBySlug } from "@/lib/squad";
import { Band, CtaStrip, PageHero } from "@/components/ui";

// SEO-only pages: reachable from /squad-programs and the sitemap, not from the main menu.
export const dynamicParams = false;
export const generateStaticParams = () => SQUAD_TOPICS.map(({ slug }) => ({ topic: slug }));

type Props = { params: Promise<{ topic: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const t = squadTopicBySlug((await params).topic);
  if (!t) return {};
  return { title: `${t.name} | Squad Programs`, description: `${t.name} at Mirabilia Early Learning: ${t.summary}`.slice(0, 158) };
}

export default async function SquadTopicPage({ params }: Props) {
  const t = squadTopicBySlug((await params).topic);
  if (!t) notFound();
  return (
    <>
      <PageHero
        crumbs={[["Curriculum & Programs", "/our-curriculum"], ["Squad Programs", "/squad-programs"], [t.name, `/squad-programs/${t.slug}`]]}
        eyebrow="Squad Programs"
        title={t.name}
        lead={t.summary}
        photo={t.photo}
        tone="sky"
      />
      <Band>
        <div className="mx-auto max-w-3xl space-y-5 text-lg leading-relaxed">
          <h2 className="text-3xl">{t.officer}</h2>
          {t.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <p>
            <Link href="/squad-programs" className="font-bold text-plum hover:underline">
              See all Squad Programs →
            </Link>
          </p>
        </div>
        <div className="mt-14">
          <CtaStrip text="Included in your daily fees at every Mirabilia centre." cta={["/book-a-tour", "Book a Tour"]} />
        </div>
      </Band>
    </>
  );
}
