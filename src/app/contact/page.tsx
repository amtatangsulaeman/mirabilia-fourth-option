import type { Metadata } from "next";
import { Band, Container, PageHero, SectionHeading, type Crumb } from "@/components/ui";
import { EnquiryForm } from "@/components/forms";
import ContactAside from "@/components/ContactAside";
import CentreMap from "@/components/CentreMap";
import { Highlight } from "@/components/shapes";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Mirabilia Early Learning. Call, email or make an enquiry and our friendly team will be in touch.",
};

const CRUMBS: Crumb[] = [["Contact", "/contact"]];

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumbs={CRUMBS}
        title={
          <>
            Contact <Highlight tone="leaf">us</Highlight>
          </>
        }
        lead="Each Mirabilia centre is a warm, welcoming space where children are known, valued and inspired. Whether you’re exploring early learning for the first time or ready to take the next step, our friendly team is here to help. Reach out with any question, big or small, and we’ll be in touch to support you and your family."
      />
      <Container className="grid gap-8 py-12 lg:grid-cols-[1fr_380px]">
        <EnquiryForm heading="Make an Inquiry" />
        <ContactAside />
      </Container>
      <Band id="locations">
        <SectionHeading title="Our four centres" body="Find the one closest to you, get directions, or book a tour there." />
        <CentreMap />
      </Band>
    </>
  );
}
