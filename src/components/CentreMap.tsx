"use client";

import Link from "next/link";
import { useState } from "react";
import { CENTRES, directionsUrl } from "@/lib/data";

type Status = "idle" | "locating" | "found" | "denied" | "unsupported";

/** Straight-line distance in km (haversine). */
function km(a: { lat: number; lng: number }, b: { lat: number; lng: number }) {
  const rad = (d: number) => (d * Math.PI) / 180;
  const dLat = rad(b.lat - a.lat);
  const dLng = rad(b.lng - a.lng);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(rad(a.lat)) * Math.cos(rad(b.lat)) * Math.sin(dLng / 2) ** 2;
  return 6371 * 2 * Math.asin(Math.sqrt(h));
}

const embedUrl = ({ lat, lng }: { lat: number; lng: number }) => {
  const d = 0.018;
  return `https://www.openstreetmap.org/export/embed.html?bbox=${lng - d}%2C${lat - d}%2C${lng + d}%2C${lat + d}&layer=mapnik&marker=${lat}%2C${lng}`;
};

/**
 * Map of one centre at a time (OpenStreetMap embed) beside a list of all four, with a
 * "find my nearest centre" button that asks for location only when pressed.
 */
export default function CentreMap({ focus }: { focus?: string }) {
  const [active, setActive] = useState(focus ?? CENTRES[0].slug);
  const [status, setStatus] = useState<Status>("idle");
  const [dist, setDist] = useState<Record<string, number>>({});
  const current = CENTRES.find((c) => c.slug === active) ?? CENTRES[0];

  const locate = () => {
    if (!navigator.geolocation) return setStatus("unsupported");
    setStatus("locating");
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        const me = { lat: coords.latitude, lng: coords.longitude };
        const d = Object.fromEntries(CENTRES.map((c) => [c.slug, km(me, c.geo)]));
        setDist(d);
        setActive(CENTRES.reduce((a, b) => (d[a.slug] <= d[b.slug] ? a : b)).slug);
        setStatus("found");
      },
      () => setStatus("denied"),
      { timeout: 10000 },
    );
  };

  const sorted = status === "found" ? [...CENTRES].sort((a, b) => dist[a.slug] - dist[b.slug]) : CENTRES;

  return (
    <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.5fr]">
      <div className="space-y-3">
        <button
          type="button"
          onClick={locate}
          className="flex w-full items-center justify-center gap-2 rounded-full bg-leaf px-6 py-3 font-bold text-plum-950 hover:bg-[#9cc02c]"
        >
          {status === "locating" ? "Finding you…" : "Find my nearest centre"}
        </button>
        <p className="min-h-5 text-center text-sm" aria-live="polite">
          {status === "found" && `Nearest to you: Mirabilia ${sorted[0].name}`}
          {status === "denied" && "We couldn’t get your location. Pick a centre below instead."}
          {status === "unsupported" && "Your browser can’t share location. Pick a centre below instead."}
        </p>
        <ul className="space-y-3">
          {sorted.map((c) => {
            const on = c.slug === active;
            return (
              <li key={c.slug}>
                <div className={`rounded-[1.5rem] p-5 ring-1 transition-colors ${on ? "bg-plum text-white ring-plum" : "bg-white ring-plum-100"}`}>
                  <button type="button" onClick={() => setActive(c.slug)} className="w-full text-left" aria-pressed={on}>
                    <strong className={`block text-lg ${on ? "text-white" : "text-ink"}`}>
                      Mirabilia {c.name}
                      {dist[c.slug] !== undefined && <span className="ml-2 text-sm font-semibold opacity-80">{dist[c.slug].toFixed(1)} km</span>}
                    </strong>
                    <span className={`text-sm ${on ? "text-plum-100" : ""}`}>
                      {c.street}, {c.suburb}
                    </span>
                  </button>
                  <div className="mt-3 flex gap-4 text-sm font-bold">
                    <Link href={`/${c.slug}`} className={on ? "text-leaf" : "text-plum"}>
                      Visit centre →
                    </Link>
                    <a href={directionsUrl(c)} target="_blank" rel="noopener" className={on ? "text-white" : "text-body"}>
                      Directions
                    </a>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="overflow-hidden rounded-[2rem] border-8 border-white bg-plum-50 shadow-[0_30px_60px_-30px_rgba(42,18,51,0.5)]">
        <iframe
          key={current.slug}
          title={`Map showing Mirabilia ${current.name}`}
          src={embedUrl(current.geo)}
          loading="lazy"
          className="h-full min-h-[360px] w-full lg:min-h-[520px]"
        />
      </div>
    </div>
  );
}
