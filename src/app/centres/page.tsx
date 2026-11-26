import Link from "next/link";
import type { Metadata } from "next";
import { HOURS, PHONE, PHONE_HREF } from "@/lib/data";
import { Band, Container, PageHero, SectionHeading, type Crumb } from "@/components/ui";
import { CentreCards, Gallery, ReviewsSection, TourSection } from "@/components/sections";
import CentreMap from "@/components/CentreMap";
import { Icon } from "@/components/icons";
import { Highlight } from "@/components/shapes";

export const metadata: Metadata = {
  title: "Our Childcare Centres in Perth",
  description: "Explore Mirabilia childcare centres in Caversham, Byford, Citiplace (Perth CBD) and Champion Lakes. Open 6:30am to 6:30pm. Book a tour.",
};

const CRUMBS: Crumb[] = [["Centres", "/centres"]];

export default function CentresPage() {
  return (
    <>
      <PageHero
        crumbs={CRUMBS}
        title={
          <>
            Four homes <Highlight tone="sun">across Perth</Highlight>
          </>
        }
        lead="Each Mirabilia centre offers a safe, nurturing environment for your child’s growth. With unique programs and dedicated staff, every location provides exceptional care and learning opportunities."
        tone="sky"
        photo={["yard-slide.jpg", "Outdoor play yard with a curly orange slide and timber decking"]}
        photo2={["kitchen.jpg", "Bright centre kitchen and children’s bathroom area"]}
      />

      <Container className="py-12">
        <ul className="grid gap-4 rounded-[2rem] bg-plum-50 p-6 md:grid-cols-3">
          <li className="flex items-center gap-3">
            <Icon name="clock" className="h-8 w-8 shrink-0 text-sun" />
            <span>
              <strong className="block text-ink">Open {HOURS}</strong>Same hours at every centre
            </span>
          </li>
          <li className="flex items-center gap-3">
            <Icon name="people" className="h-8 w-8 shrink-0 text-rose" />
            <span>
              <a href={PHONE_HREF} className="block font-bold text-ink hover:text-plum">{PHONE}</a>One number for all centres
            </span>
          </li>
          <li className="flex items-center gap-3">
            <Icon name="calendar" className="h-8 w-8 shrink-0 text-sky" />
            <span>
              <Link href="/book-a-tour" className="block font-bold text-ink hover:text-plum">Book a tour</Link>See the rooms and meet the team
            </span>
          </li>
        </ul>
        <div className="mt-10">
          <CentreCards />
        </div>
      </Container>

      <Band id="map">
        <SectionHeading title="Which centre is closest?" body="Tap the button and we’ll work out the nearest Mirabilia centre to where you are now." />
        <CentreMap />
      </Band>

      <Band tint="cream">
        <SectionHeading
          title={
            <>
              Spaces made for <Highlight tone="rose">playing</Highlight>
            </>
          }
          body="Sandpits, cubby houses, shady decks and calm indoor rooms, all designed to feel like a second home."
        />
        <div className="mt-12 pb-6">
          <Gallery
            photos={[
              ["yard-sandpit.jpg", "Big sandpit with a red slide and timber fence"],
              ["centre-playground.jpg", "Grassy yard with a climbing tower and garden paths"],
              ["caversham-room.jpg", "Bright playroom with low shelves"],
              ["byford-pergola.jpg", "Timber pergola over a sandpit"],
            ]}
          />
        </div>
      </Band>

      <ReviewsSection keys={["claire", "gigi", "shasta"]} />
      <TourSection />
    </>
  );
}
