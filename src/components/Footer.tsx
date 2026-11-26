import Image from "next/image";
import Link from "next/link";
import { CENTRES, EMAIL, HOURS, PHONE, PHONE_HREF } from "@/lib/data";
import { Container } from "./ui";
import { Leaf, Star, Sun, Wave } from "./shapes";

const PROGRAM_LINKS: [string, string][] = [
  ["/our-philosophy", "Philosophy"],
  ["/our-curriculum", "Learning Journeys"],
  ["/squad-programs", "Squad Programs"],
  ["/a-day-at-mirabilia", "A Day at Mirabilia"],
  ["/our-spaces", "Learning Spaces & Child Safety"],
];

export function Acknowledgement() {
  return (
    <section aria-labelledby="ack-title" className="relative overflow-hidden bg-cream">
      <Sun className="absolute -left-6 top-6 w-24 opacity-60" />
      <Container className="relative max-w-4xl py-14 text-center md:py-16">
        <h2 id="ack-title" className="text-2xl md:text-3xl">
          Acknowledgement of Country
        </h2>
        <p className="mt-4 leading-relaxed">
          Mirabilia acknowledges the traditional owners of all lands across Australia. We recognise and celebrate the contributions of Aboriginal and Torres
          Strait Islander people as the First Australians, including their role in the education and care of children. We acknowledge and pay our respects to
          the Elders of the past, present and emerging. We thank you for sharing and caring for the land we learn and play on. We endeavour to continue to
          respect, share and care for this beautiful land.
        </p>
      </Container>
    </section>
  );
}

export default function Footer() {
  return (
    <footer className="mt-10">
      <Acknowledgement />
      <Wave fill="#3d1a4a" className="-mb-px bg-cream" />
      <div className="relative overflow-hidden bg-plum-900 pb-20 text-plum-100 sm:pb-0">
        <Star tone="leaf" className="absolute right-[10%] top-8 w-8 opacity-80" />
        <Leaf className="absolute -bottom-4 left-4 w-20 opacity-30" />
        <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="inline-block rounded-2xl bg-white p-3">
              <Image src="/logo.png" alt="Mirabilia" width={196} height={46} className="h-9 w-auto" />
            </div>
            <p className="mt-5 max-w-xs leading-relaxed">
              Early Learning Education Centre &amp; Kindergarten. A caring, homelike place for Perth&apos;s little wonders.
            </p>
          </div>

          <FooterList title="Curriculum & Programs" links={PROGRAM_LINKS} />

          <div>
            <h3 className="text-lg text-white">Centres</h3>
            <ul className="mt-4 space-y-2.5">
              {CENTRES.map((c) => (
                <li key={c.slug}>
                  <Link href={`/${c.slug}`} className="hover:text-leaf">
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm">Open {HOURS}</p>
          </div>

          <div>
            <h3 className="text-lg text-white">Get in touch</h3>
            <ul className="mt-4 space-y-2.5">
              <li><a href={PHONE_HREF} className="font-semibold text-white hover:text-leaf">{PHONE}</a></li>
              <li><a href={`mailto:${EMAIL}`} className="font-semibold text-white hover:text-leaf">{EMAIL}</a></li>
              {(
                [
                  ["/childcare-subsidy", "Child Care Subsidy"],
                  ["/inclusive-care", "Inclusive Care"],
                  ["/family-benefits", "Family Benefits"],
                  ["/our-story", "Our Story"],
                  ["/careers", "Careers"],
                  ["/blog", "Blog"],
                  ["/contact", "Contact"],
                ] as [string, string][]
              ).map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-leaf">{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>

        <Container className="flex flex-col items-start justify-between gap-3 border-t border-white/10 py-6 text-sm sm:flex-row sm:items-center">
          <p>&copy; {new Date().getFullYear()} Cherub and Co | Mirabilia</p>
          {/* TODO: privacy policy page */}
          <a href="#" className="hover:text-leaf">Privacy Policy</a>
        </Container>
      </div>
    </footer>
  );
}

function FooterList({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <h3 className="text-lg text-white">{title}</h3>
      <ul className="mt-4 space-y-2.5">
        {links.map(([href, label]) => (
          <li key={href}>
            <Link href={href} className="hover:text-leaf">{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
