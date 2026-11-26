import type { Metadata } from "next";
import { Band, CtaStrip, PageHero, Split, type Crumb } from "@/components/ui";
import { Highlight } from "@/components/shapes";

export const metadata: Metadata = {
  title: "Family Benefits: Sibling Discount & Flexible Care",
  description: "Sibling discounts and flexible care options that fit your family’s routine. Speak with the Mirabilia team to find out how our family benefits can support you.",
};

const CRUMBS: Crumb[] = [["Families", "/childcare-subsidy"], ["Family Benefits", "/family-benefits"]];

// Kept deliberately light on detail so families contact their centre.
export default function FamilyBenefitsPage() {
  return (
    <>
      <PageHero
        crumbs={CRUMBS}
        photo={["smiling-boy.jpg", "A smiling boy at the lunch table"]}
        tone="sun"
        eyebrow="Family Benefits"
        title={
          <>
            Because family <Highlight tone="rose">matters</Highlight> to us
          </>
        }
        lead="We’re here to help make early learning work for your whole family."
      />
      <Band>
        <Split photo={["educator-puzzle.jpg", "An educator doing a peg puzzle with a toddler"]} eyebrow="Sibling discount" title="Supporting you as your family grows">
          <p>Families with more than one child enrolled at Mirabilia enjoy our sibling discount, our way of supporting you as your family grows and making quality care more achievable.</p>
        </Split>
      </Band>
      <Band tint="cream">
        <Split flip photo={["table-play.jpg", "An educator playing with children at a small table"]} eyebrow="Flexi care" title="Flexible care that fits your life" tone="sky">
          <p>Family life doesn’t always follow a set timetable. That’s why we offer flexible care options designed around your family’s needs and routine. As your work, schedule or circumstances change, we’ll work with you to find care that suits, giving you confidence and peace of mind.</p>
        </Split>
      </Band>
      <Band>
        <CtaStrip text={<em>Speak with our team to find out how our family benefits can support you.</em>} />
      </Band>
    </>
  );
}
