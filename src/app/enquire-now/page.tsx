import type { Metadata } from "next";
import { Band, Container, PageHero, SectionHeading, type Crumb } from "@/components/ui";
import { EnquiryForm } from "@/components/forms";
import ContactAside from "@/components/ContactAside";
import CentreMap from "@/components/CentreMap";
import { Highlight } from "@/components/shapes";

export const metadata: Metadata = {
  title: "Enquire Now",
  description: "Have a question about Mirabilia childcare? Send an enquiry about enrolments, fees or CCS and our team will get back to you.",
};

const CRUMBS: Crumb[] = [["Contact Us", "/enquire-now"]];

export default function EnquirePage() {
  return (
    <>
      <PageHero
        crumbs={CRUMBS}
        title={
          <>
            Have any <Highlight tone="sun">questions?</Highlight>
          </>
        }
        lead="Contact us here and our team will get back to you. Tell us a little about your family and the care you need."
      />
      <Container className="grid gap-8 py-12 lg:grid-cols-[1fr_380px]">
        <EnquiryForm />
        <ContactAside />
      </Container>
      <Band id="locations">
        <SectionHeading title="Our four centres" body="Find the one closest to you, get directions, or book a tour there." />
        <CentreMap />
      </Band>
    </>
  );
}
