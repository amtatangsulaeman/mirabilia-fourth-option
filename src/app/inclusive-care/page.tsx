import type { Metadata } from "next";
import { Band, CtaStrip, PageHero, SectionHeading, Split, TickList, type Crumb } from "@/components/ui";
import { Highlight } from "@/components/shapes";

export const metadata: Metadata = {
  title: "Inclusive Care: One Fee, Everything Included",
  description: "Mirabilia’s all-inclusive daily fee covers meals, nappies, sunscreen, incursions, excursions and every learning experience. No hidden extras.",
};

const CRUMBS: Crumb[] = [["Families", "/childcare-subsidy"], ["Inclusive Care", "/inclusive-care"]];

const INCLUDES = [
  "Freshly prepared, nutritious meals and snacks",
  "Nappies",
  "Sunscreen",
  "Engaging incursions that bring new experiences into the centre",
  "Excursions that extend learning into the wider community",
  "Every learning resource and experience in our program",
];

export default function InclusiveCarePage() {
  return (
    <>
      <PageHero
        crumbs={CRUMBS}
        photo={["outdoor-sandpit.jpg", "Educators and toddlers playing in the outdoor sandpit"]}
        tone="sky"
        eyebrow="Inclusive Care"
        title={
          <>
            One fee. <Highlight tone="leaf">Everything</Highlight> included.
          </>
        }
        lead="We believe exceptional care should come without hidden extras. Our all-inclusive fee covers everything your child needs for a full, enriching day, so there are no surprise costs and no lists to pack."
      />

      <Band>
        <SectionHeading eyebrow="Your fee includes" title="Nothing extra to pay, nothing extra to pack" />
        <div className="mx-auto mt-12 max-w-4xl">
          <TickList items={INCLUDES} />
        </div>
      </Band>

      <Band tint="cream">
        <Split photo={["outdoor-discover.jpg", "Three children in sun hats exploring a discovery tray on the grass"]} eyebrow="Care that fits your life" title="Flexible care options" tone="sun">
          <p>Family life doesn’t always run to a set timetable. That’s why we offer flexible care options designed around your family’s needs, giving you confidence and peace of mind as your routine changes.</p>
        </Split>
      </Band>

      <Band>
        <SectionHeading
          eyebrow="Storypark"
          title="Stay connected with Storypark"
          body="Your child’s day doesn’t have to be a mystery. Through Storypark, our secure family communication platform, you’ll receive updates, photos and learning stories that capture their discoveries and milestones. It’s a window into their world, and a simple way to share in their learning journey wherever you are."
        />
        <div className="mt-12">
          <CtaStrip text={<em>Speak with our team to find out how our family benefits can support you.</em>} />
        </div>
      </Band>
    </>
  );
}
