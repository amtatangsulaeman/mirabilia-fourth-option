"use client";

import { useRef, useState, type FormEvent, type ReactNode } from "react";
import { CENTRES } from "@/lib/data";

// TODO before launch: send submissions to the CRM / an API route. For now the forms
// validate, then show the thank-you message.

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const AGE_OPTIONS = ["0 to 1 years", "1 to 2 years", "2 to 3 years", "3 to 5 years"];

const field =
  "w-full rounded-2xl border border-plum-100 bg-white px-4 py-3 text-ink placeholder:text-body/60 focus:border-plum focus:outline-none focus:ring-2 focus:ring-plum/20";
const labelCls = "mb-1.5 block text-sm font-bold text-ink";
const optional = <span className="font-normal text-body">(optional)</span>;

function useSubmit() {
  const [sent, setSent] = useState(false);
  const thanksRef = useRef<HTMLDivElement>(null);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    requestAnimationFrame(() => thanksRef.current?.focus());
  };
  return { sent, onSubmit, thanksRef };
}

function Thanks({ refEl, title, children }: { refEl: React.RefObject<HTMLDivElement | null>; title: string; children: ReactNode }) {
  return (
    <div ref={refEl} tabIndex={-1} role="status" className="rounded-[2rem] bg-leaf-100 p-10 text-center outline-none">
      <h3 className="text-2xl">{title}</h3>
      <p className="mt-3 text-ink">{children}</p>
    </div>
  );
}

function CentreSelect({ id, required, defaultValue, anyLabel = "Choose a centre" }: { id: string; required?: boolean; defaultValue?: string; anyLabel?: string }) {
  return (
    <select id={id} name="centre" required={required} defaultValue={defaultValue ? `Mirabilia ${defaultValue}` : ""} className={field}>
      <option value="">{anyLabel}</option>
      {CENTRES.map((c) => (
        <option key={c.slug}>Mirabilia {c.name}</option>
      ))}
    </select>
  );
}

function DayChips({ id, withFlexible }: { id: string; withFlexible?: boolean }) {
  const days = withFlexible ? [...DAYS, "Not sure yet"] : DAYS;
  return (
    <div className="flex flex-wrap gap-2" role="group" aria-labelledby={id}>
      {days.map((d) => (
        <label key={d} className="cursor-pointer">
          <input type="checkbox" name="care_days" value={d} className="peer sr-only" />
          <span className="inline-block rounded-full border border-plum-100 bg-white px-4 py-2 text-sm font-semibold peer-checked:border-leaf peer-checked:bg-leaf peer-checked:text-plum-950 peer-focus-visible:ring-2 peer-focus-visible:ring-sky">
            {d === "Not sure yet" ? d : d.slice(0, 3)}
          </span>
        </label>
      ))}
    </div>
  );
}

const submitCls = "mt-8 inline-flex min-h-12 items-center rounded-full bg-plum px-8 font-bold text-white transition-colors hover:bg-plum-700";

export function TourForm({ centre }: { centre?: string }) {
  const { sent, onSubmit, thanksRef } = useSubmit();
  if (sent)
    return (
      <Thanks refEl={thanksRef} title="Thank you!">
        We&apos;ve got your request and will be in touch soon to find a time that suits.
      </Thanks>
    );
  return (
    <form onSubmit={onSubmit} className="rounded-[2rem] bg-white p-6 text-body md:p-8">
      <h3 className="text-2xl">Book a tour</h3>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="t-name" className={labelCls}>Your name</label>
          <input id="t-name" name="name" autoComplete="name" required className={field} />
        </div>
        <div>
          <label htmlFor="t-phone" className={labelCls}>Phone</label>
          <input id="t-phone" name="phone" type="tel" autoComplete="tel" required className={field} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="t-email" className={labelCls}>Email</label>
          <input id="t-email" name="email" type="email" autoComplete="email" required className={field} />
        </div>
        <div>
          <label htmlFor="t-centre" className={labelCls}>Centre</label>
          <CentreSelect id="t-centre" required defaultValue={centre} />
        </div>
        <div>
          <label htmlFor="t-age" className={labelCls}>Child&apos;s age</label>
          <select id="t-age" name="child_age" required className={field} defaultValue="">
            <option value="">Choose one</option>
            {[...AGE_OPTIONS, "School age"].map((a) => (
              <option key={a}>{a}</option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <span id="t-days-label" className={labelCls}>
            Days of care wanted <span className="font-normal text-body">(choose any)</span>
          </span>
          <DayChips id="t-days-label" withFlexible />
        </div>
        <div>
          <label htmlFor="t-start" className={labelCls}>Preferred start date {optional}</label>
          <input id="t-start" name="start_date" type="date" className={field} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="t-msg" className={labelCls}>Anything we should know? {optional}</label>
          <textarea id="t-msg" name="message" rows={3} className={field} />
        </div>
      </div>
      <button type="submit" className={submitCls}>Request a tour</button>
    </form>
  );
}

export function EnquiryForm({ heading = "Send us an enquiry", button = "Submit enquiry" }: { heading?: string; button?: string }) {
  const { sent, onSubmit, thanksRef } = useSubmit();
  if (sent)
    return (
      <Thanks refEl={thanksRef} title="Thank you!">
        We&apos;ve received your details. Our friendly team will be in touch soon.
      </Thanks>
    );
  const legend = "mb-4 text-lg font-bold text-ink";
  return (
    <form onSubmit={onSubmit} className="rounded-[2rem] border border-plum-100 bg-white p-6 shadow-[0_30px_60px_-40px_rgba(42,18,51,0.5)] md:p-10">
      <h2 className="text-2xl md:text-3xl">{heading}</h2>

      <fieldset className="mt-8">
        <legend className={legend}>About you</legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <div><label htmlFor="e-first" className={labelCls}>First name</label><input id="e-first" name="first_name" autoComplete="given-name" required className={field} /></div>
          <div><label htmlFor="e-last" className={labelCls}>Last name</label><input id="e-last" name="last_name" autoComplete="family-name" required className={field} /></div>
          <div><label htmlFor="e-email" className={labelCls}>Email</label><input id="e-email" name="email" type="email" autoComplete="email" required className={field} /></div>
          <div><label htmlFor="e-phone" className={labelCls}>Phone</label><input id="e-phone" name="phone" type="tel" autoComplete="tel" required className={field} /></div>
        </div>
      </fieldset>

      <fieldset className="mt-8">
        <legend className={legend}>About your child</legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <div><label htmlFor="e-dob" className={labelCls}>Child&apos;s date of birth</label><input id="e-dob" name="child_dob" type="date" className={field} /></div>
          <div>
            <label htmlFor="e-age" className={labelCls}>Age range</label>
            <select id="e-age" name="age_range" className={field} defaultValue="">
              <option value="">Choose one</option>
              {AGE_OPTIONS.map((a) => <option key={a}>{a}</option>)}
            </select>
          </div>
        </div>
      </fieldset>

      <fieldset className="mt-8">
        <legend className={legend}>Care you need</legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <div><label htmlFor="e-centre" className={labelCls}>Centre</label><CentreSelect id="e-centre" required /></div>
          <div><label htmlFor="e-start" className={labelCls}>Required care date</label><input id="e-start" name="care_date" type="date" className={field} /></div>
          <div className="sm:col-span-2">
            <span id="e-days-label" className={labelCls}>Required care days <span className="font-normal text-body">(choose any)</span></span>
            <DayChips id="e-days-label" />
          </div>
          <div>
            <label htmlFor="e-total" className={labelCls}>Total days per week</label>
            <select id="e-total" name="total_days" className={field} defaultValue="">
              <option value="">Choose one</option>
              {[1, 2, 3, 4, 5].map((n) => <option key={n}>{n}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="e-ref" className={labelCls}>Where did you hear about us?</label>
            <select id="e-ref" name="referral" className={field} defaultValue="">
              <option value="">Choose one</option>
              {["Google search", "Facebook or Instagram", "Friend or family", "Drove past", "Other"].map((o) => <option key={o}>{o}</option>)}
            </select>
          </div>
          <div className="sm:col-span-2"><label htmlFor="e-msg" className={labelCls}>Message {optional}</label><textarea id="e-msg" name="message" rows={4} className={field} /></div>
        </div>
      </fieldset>

      <label className="mt-6 flex items-start gap-3 text-sm">
        <input type="checkbox" name="sms_consent" className="mt-1 h-4 w-4 accent-plum" />
        I consent to receive SMS notifications, alerts and occasional marketing communication from Mirabilia. Message frequency varies. Message and data rates may apply.
      </label>
      <button type="submit" className={submitCls}>{button}</button>
    </form>
  );
}
