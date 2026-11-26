import type { Metadata } from "next";
import { PHONE, PHONE_HREF } from "@/lib/data";
import { Band, Button, CtaStrip, PageHero, SectionHeading, TickList, type Crumb } from "@/components/ui";
import { Icon } from "@/components/icons";
import { Highlight, toneBg, type Tone } from "@/components/shapes";

export const metadata: Metadata = {
  title: "Child Care Subsidy (CCS) & How to Claim",
  description: "Everything about the Child Care Subsidy in one place: eligibility, how much you can receive, the activity test, and how to claim CCS through myGov.",
};

const SA_URL = "https://www.servicesaustralia.gov.au/child-care-subsidy";
const CRUMBS: Crumb[] = [["Families", "/childcare-subsidy"], ["Child Care Subsidy", "/childcare-subsidy"]];

const WHO = [
  "Care for a child 13 or younger who isn’t attending secondary school, unless an exemption applies",
  "Use an approved child care service, like Mirabilia",
  "Be responsible for paying the child care fees",
  "Meet residency and immunisation requirements",
];

const ACTIVITY = [
  "Paid work, including self-employment or paid and unpaid parental leave",
  "Unpaid work in the family business",
  "Training to improve work skills or job prospects",
  "An approved course of education or study",
  "Volunteering",
  "Unpaid work experience or internships",
  "Actively setting up a business",
  "Actively looking for work",
];

function IconCard({ icon, tone, title, children }: { icon: string; tone: Tone; title: string; children: React.ReactNode }) {
  return (
    <article className="rounded-[2rem] bg-white p-7 ring-1 ring-plum-100">
      <span className={`flex h-14 w-14 items-center justify-center rounded-full ${toneBg[tone]}`} aria-hidden>
        <Icon name={icon} className="h-7 w-7" />
      </span>
      <h3 className="mt-5 text-xl">{title}</h3>
      <p className="mt-2 leading-relaxed">{children}</p>
    </article>
  );
}

export default function SubsidyPage() {
  return (
    <>
      <PageHero
        crumbs={CRUMBS}
        eyebrow="Child Care Subsidy (CCS)"
        title={
          <>
            Quality care, made more <Highlight tone="leaf">accessible</Highlight>
          </>
        }
        lead="The Australian Government’s Child Care Subsidy helps families with the cost of early learning, and our team is here to guide you through it. From understanding your eligibility to setting up your claim through myGov, we’ll help you get the support you’re entitled to, without the stress."
        actions={
          <>
            <Button href="#claim">How to claim</Button>
            <Button href={SA_URL} variant="outline">
              Estimate your subsidy
            </Button>
          </>
        }
      />

      <Band>
        <SectionHeading eyebrow="Eligibility" title="Who can get the CCS?" body="The CCS is paid directly to us and comes off the fees you pay. To get it, you must:" />
        <div className="mx-auto mt-12 max-w-4xl">
          <TickList items={WHO} />
        </div>
      </Band>

      <Band tint="cream">
        <SectionHeading eyebrow="Your entitlement" title="How much can a family receive?" body="Your subsidy depends on three things." />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <IconCard icon="piggy" tone="rose" title="Combined family income">
            Both partners’ combined income sets the percentage of the fee that is subsidised, up to the government’s hourly rate cap. The rate gradually decreases as income goes up.
          </IconCard>
          <IconCard icon="calendar" tone="sky" title="Activity level">
            An activity test sets how many hours of subsidised care you can access each fortnight. In two-parent families, the parent with fewer activity hours determines the hours.
          </IconCard>
          <IconCard icon="house" tone="sun" title="Type of care">
            The subsidy is based on the type of approved care you use, such as Centre Based Day Care, each with its own hourly rate cap.
          </IconCard>
        </div>
        <p className="mt-8 text-center">
          <strong className="text-ink">Extra support</strong> is available for some families, such as grandparents and families experiencing temporary financial hardship.
        </p>
      </Band>

      <Band>
        <SectionHeading
          eyebrow="Activity test"
          title="What counts as activity?"
          body="A broad range of activities count, and they can be combined to reach the maximum number of subsidised hours. Travel time between care and your activity counts too."
        />
        <div className="mx-auto mt-12 max-w-4xl">
          <TickList items={ACTIVITY} />
        </div>
      </Band>

      <Band tint="cream" id="claim">
        <SectionHeading eyebrow="How to claim" title="Claiming your CCS in three steps" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <IconCard icon="pencil" tone="plum" title="1. Apply online">Apply through your Services Australia account via myGov.</IconCard>
          <IconCard icon="magnifier" tone="sky" title="2. Check eligibility">Use the Services Australia eligibility tool if you’re unsure what you can receive.</IconCard>
          <IconCard icon="people" tone="leaf" title="3. Tell us">Let us know when you enrol so we can link your CCS to your booking.</IconCard>
        </div>
        <p className="mx-auto mt-10 max-w-3xl text-center leading-relaxed">
          Subsidy rates and hourly caps are set by the government and change each financial year. For current figures, use the{" "}
          <a href={SA_URL} target="_blank" rel="noopener" className="font-bold text-plum underline">
            Services Australia estimator
          </a>
          . Having trouble with your CCS? Call Centrelink on{" "}
          <a href="tel:136150" className="font-bold text-plum">
            136 150
          </a>
          , or ask our team on{" "}
          <a href={PHONE_HREF} className="font-bold text-plum">
            {PHONE}
          </a>
          .
        </p>
      </Band>

      <Band>
        <CtaStrip text="Speak with our team and we’ll help you through fees and CCS." />
      </Band>
    </>
  );
}
