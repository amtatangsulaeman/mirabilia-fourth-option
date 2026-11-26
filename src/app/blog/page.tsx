import type { Metadata } from "next";
import { getPosts } from "@/lib/blog";
import { Band, PageHero, type Crumb } from "@/components/ui";
import { CtaBand } from "@/components/sections";
import { PostCard } from "@/components/blog";
import { Highlight } from "@/components/shapes";

export const metadata: Metadata = {
  title: "Blog: Childcare Tips for Perth Families",
  description: "Practical tips from Mirabilia educators on starting childcare, settling in, the Child Care Subsidy, early learning and family life in Perth.",
};

const CRUMBS: Crumb[] = [["Blog", "/blog"]];

export default function BlogPage() {
  const [first, ...rest] = getPosts();
  return (
    <>
      <PageHero
        crumbs={CRUMBS}
        title={
          <>
            Tips &amp; stories for <Highlight tone="rose">families</Highlight>
          </>
        }
        lead="Practical advice from our educators on starting childcare, settling in, subsidies and everyday learning at home."
      />
      <Band>
        {first ? (
          <>
            <PostCard post={first} featured headingLevel="h2" />
            {rest.length > 0 && (
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {rest.map((p) => (
                  <PostCard post={p} key={p.slug} headingLevel="h2" />
                ))}
              </div>
            )}
          </>
        ) : (
          <p className="text-center text-lg">New articles are on their way. Check back soon!</p>
        )}
      </Band>
      <CtaBand
        heading="Have a question we haven’t covered?"
        text="Our team is happy to talk it through, whether it’s settling in, fees or the Child Care Subsidy."
        primary={["/book-a-tour", "Book a tour"]}
        secondary={["/enquire-now", "Contact us"]}
      />
    </>
  );
}
