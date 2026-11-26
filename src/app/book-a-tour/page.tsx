import type { Metadata } from "next";
import { Band, PageHero, SectionHeading, type Crumb } from "@/components/ui";
import { FeatureCards, TourSection } from "@/components/sections";
import CentreMap from "@/components/CentreMap";
import { Highlight } from "@/components/shapes";

export const metadata: Metadata = {
  title: "Book a Tour",
  description: "Book a tour at one of our Mirabilia childcare centres in Perth: Caversham, Byford, Citiplace or Champion Lakes.",
};

const CRUMBS: Crumb[] = [["Book a Tour", "/book-a-tour"]];

export default function BookTourPage() {
  return (
    <>
      <PageHero
        crumbs={CRUMBS}
        title={
          <>
            Book a <Highlight tone="sun">tour!</Highlight>
          </>
        }
        lead="Book a tour at one of our Mirabilia centres in Perth. Come and see the rooms, meet the educators and bring your little one along."
        photo={["outdoor-sandpit.jpg", "Educators and toddlers playing in the outdoor sandpit"]}
      />

      <Band>
        <SectionHeading title="What happens on a tour?" />
        <div className="mt-12">
          <FeatureCards
            items={[
              ["house", "orange", "Look around", "Walk through the rooms, outdoor spaces and kitchen at your own pace."],
              ["people", "pink", "Meet the team", "Say hello to the Centre Director and the educators in your child’s room."],
              ["pencil", "blue", "Ask anything", "Routines, meals, fees, CCS, settling in. No question is too small."],
              ["heart", "green", "No pressure", "Take your time to decide. We’re happy to answer follow-up questions."],
            ]}
          />
        </div>
      </Band>

      <TourSection heading="Pick a centre and a time" text="Send us your details and we’ll call you to find a time that suits. Prefer to talk now? Give us a ring." />

      <Band>
        <SectionHeading title="Not sure which centre?" body="Find the Mirabilia centre closest to you, then pick it in the form above." />
        <CentreMap />
      </Band>
    </>
  );
}
