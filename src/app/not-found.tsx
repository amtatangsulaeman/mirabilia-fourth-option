import type { Metadata } from "next";
import { Button, PageHero } from "@/components/ui";
import { Highlight } from "@/components/shapes";

export const metadata: Metadata = { title: "Page not found", robots: { index: false } };

export default function NotFound() {
  return (
    <PageHero
      title={
        <>
          Oops, this page went out to <Highlight tone="sun">play!</Highlight>
        </>
      }
      lead="We couldn't find the page you were looking for. Let's get you back somewhere fun."
      actions={
        <>
          <Button href="/">Back to home</Button>
          <Button href="/centres" variant="outline">
            Find a centre
          </Button>
        </>
      }
    />
  );
}
