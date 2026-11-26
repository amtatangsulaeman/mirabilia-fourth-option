import Link from "next/link";
import type { Metadata } from "next";
import { Band, Button, PageHero, Panel, SectionHeading, type Crumb } from "@/components/ui";
import { Highlight } from "@/components/shapes";

export const metadata: Metadata = {
  title: "Careers in Early Childhood Education",
  description: "Inspire the next generation. Grow your career with Mirabilia, a supportive early learning team in Perth with ongoing training and room to grow.",
};

const CRUMBS: Crumb[] = [["Careers", "/careers"]];

/**
 * Recruitment platform embed (job portal, still to be confirmed).
 * Paste the embed URL here once known; until then the area shows a placeholder.
 */
const JOBS_EMBED = "";

export default function CareersPage() {
  return (
    <>
      <PageHero
        crumbs={CRUMBS}
        photo={["table-play.jpg", "An educator playing with children at a small table"]}
        tone="sky"
        eyebrow="Careers"
        title={
          <>
            Inspire the next generation. Grow your career with <Highlight tone="leaf">Mirabilia.</Highlight>
          </>
        }
        lead="At Mirabilia, our educators are at the heart of everything we do. We’re always looking for passionate, caring people who share our belief that every child deserves an extraordinary start in life. Join a team where your work is valued, your growth is supported and every day makes a difference."
        actions={<Button href="#roles">View open roles</Button>}
      />

      <Band>
        <SectionHeading eyebrow="Why work with us" title="A place to grow, with purpose" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <Panel tone="leaf" title="A culture that cares">
            <p>We believe great care starts with a great team. Our supportive, positive workplace culture is built on respect, collaboration and genuine care for one another, so you’ll feel welcomed, valued and part of something special from day one.</p>
          </Panel>
          <Panel tone="sky" title="Grow with us">
            <p>Your development matters to us. Through ongoing training, mentoring and professional learning opportunities, we help you build your skills, reach your goals and take your career further.</p>
          </Panel>
          <Panel tone="sun" title="Purpose in every day">
            <p>Few careers are as rewarding as shaping a child’s earliest years. At Mirabilia, you’ll help children discover, play, learn and thrive, and watch the difference you make unfold every day.</p>
          </Panel>
        </div>
      </Band>

      <Band tint="cream" id="roles">
        <SectionHeading eyebrow="Open roles" title="Current opportunities" />
        <div className="mt-12">
          {JOBS_EMBED ? (
            <iframe src={JOBS_EMBED} title="Mirabilia job listings" className="min-h-[640px] w-full rounded-[2rem] border-0 bg-white" loading="lazy" />
          ) : (
            <div className="flex min-h-64 flex-col items-center justify-center rounded-[2rem] border-2 border-dashed border-plum-100 bg-white text-center">
              <strong className="text-xl text-ink">Job listings</strong>
              <span className="mt-1">The recruitment platform will be embedded here.</span>
            </div>
          )}
        </div>
        <p className="mt-8 text-center">
          Can&apos;t see the right role?{" "}
          <Link href="/contact" className="font-bold text-plum underline">
            Contact us
          </Link>{" "}
          and tell us about yourself.
        </p>
      </Band>
    </>
  );
}
