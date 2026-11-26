import Link from "next/link";
import { CENTRES, EMAIL, HOURS, PHONE, PHONE_HREF } from "@/lib/data";
import { Icon } from "./icons";

export default function ContactAside() {
  return (
    <aside className="space-y-6">
      <div className="rounded-[2rem] bg-plum p-8 text-white">
        <h2 className="text-2xl text-white">Talk to a real person</h2>
        <p className="mt-2 text-plum-100">Our team is happy to help with enrolments, fees, CCS or anything else.</p>
        <ul className="mt-6 space-y-4">
          <li className="flex gap-3">
            <Icon name="people" className="h-6 w-6 shrink-0 text-leaf" />
            <span>
              <a href={PHONE_HREF} className="block text-lg font-bold hover:text-leaf">{PHONE}</a>
              <span className="text-sm text-plum-100">Call any centre</span>
            </span>
          </li>
          <li className="flex gap-3">
            <Icon name="calendar" className="h-6 w-6 shrink-0 text-leaf" />
            <span>
              <a href={`mailto:${EMAIL}`} className="block font-bold hover:text-leaf">{EMAIL}</a>
              <span className="text-sm text-plum-100">We reply within business hours</span>
            </span>
          </li>
          <li className="flex gap-3">
            <Icon name="clock" className="h-6 w-6 shrink-0 text-leaf" />
            <span>
              <strong className="block">{HOURS}</strong>
              <span className="text-sm text-plum-100">Opening hours, all centres</span>
            </span>
          </li>
        </ul>
      </div>
      <div className="space-y-3">
        {CENTRES.map((c) => (
          <Link key={c.slug} href={`/${c.slug}`} className="flex gap-3 rounded-[1.5rem] bg-white p-5 ring-1 ring-plum-100 hover:ring-plum">
            <Icon name="pin" className="h-6 w-6 shrink-0 text-plum" />
            <span>
              <strong className="block text-ink">{c.name}</strong>
              <span className="text-sm">
                {c.street}, {c.suburb}
              </span>
            </span>
          </Link>
        ))}
      </div>
    </aside>
  );
}
