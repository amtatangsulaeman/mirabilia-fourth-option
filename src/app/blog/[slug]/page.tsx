import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { formatDate, getPost, getPosts, relatedPosts } from "@/lib/blog";
import { HOURS, PHONE, PHONE_HREF } from "@/lib/data";
import { Band, Breadcrumbs, Button, Container, SectionHeading, type Crumb } from "@/components/ui";
import { CtaBand } from "@/components/sections";
import { PostCard, PostMeta } from "@/components/blog";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  return { title: post.title, description: post.description };
}

export default async function PostPage({ params }: Props) {
  const post = getPost((await params).slug);
  if (!post) notFound();
  const crumbs: Crumb[] = [["Blog", "/blog"], [post.title, `/blog/${post.slug}`]];
  const related = relatedPosts(post);

  return (
    <>
      <article>
        <header className="bg-plum-50 pb-24 pt-12">
          <Container className="max-w-4xl">
            <Breadcrumbs trail={crumbs} />
            <span className="inline-block rounded-full bg-leaf px-3 py-1 text-xs font-bold text-plum-950">{post.category}</span>
            <h1 className="mt-4 text-4xl md:text-5xl">{post.title}</h1>
            <p className="mt-5 text-lg leading-relaxed">{post.description}</p>
            <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
              <span className="font-semibold text-ink">By {post.author}</span>
              <PostMeta post={post} />
              {post.updated && (
                <span>
                  Updated <time dateTime={post.updated}>{formatDate(post.updated)}</time>
                </span>
              )}
            </div>
          </Container>
        </header>

        <Container className="max-w-5xl">
          <figure className="relative -mt-16 aspect-[16/9] overflow-hidden rounded-[2rem] border-8 border-white shadow-[0_30px_60px_-30px_rgba(42,18,51,0.5)]">
            <Image src={post.image} alt={post.imageAlt} fill priority sizes="(min-width: 1100px) 1000px, 92vw" className="object-cover" />
          </figure>

          <div className={`mt-12 grid gap-10 ${post.toc.length > 1 ? "lg:grid-cols-[240px_1fr]" : ""}`}>
            {post.toc.length > 1 && (
              <aside className="lg:sticky lg:top-28 lg:self-start">
                <details open className="rounded-[1.5rem] bg-plum-50 p-5">
                  <summary className="cursor-pointer font-bold text-ink">In this article</summary>
                  <ol className="mt-3 space-y-2 text-sm">
                    {post.toc.map((h) => (
                      <li key={h.id}>
                        <a href={`#${h.id}`} className="hover:text-plum">
                          {h.text}
                        </a>
                      </li>
                    ))}
                  </ol>
                </details>
              </aside>
            )}

            <div className="min-w-0">
              <div className="prose-mira" dangerouslySetInnerHTML={{ __html: post.html }} />
              <aside className="mt-12 rounded-[2rem] bg-leaf-100 p-8">
                <h2 className="text-2xl">Want to talk it through?</h2>
                <p className="mt-3 text-ink">
                  Call our friendly team on{" "}
                  <a href={PHONE_HREF} className="font-bold text-plum">
                    {PHONE}
                  </a>
                  , or come and see our rooms in person.
                </p>
                <div className="mt-5">
                  <Button href="/book-a-tour">Book a tour</Button>
                </div>
              </aside>
              <p className="mt-8">
                <Link href="/blog" className="font-bold text-plum hover:underline">
                  ← Back to all articles
                </Link>
              </p>
            </div>
          </div>
        </Container>
      </article>

      {related.length > 0 && (
        <Band tint="plum" className="mt-16">
          <SectionHeading title="Keep reading" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <PostCard post={p} key={p.slug} />
            ))}
          </div>
        </Band>
      )}

      <CtaBand
        heading="Come and see Mirabilia for yourself"
        text={`Four centres across Perth, open ${HOURS}. Meet the educators and ask anything.`}
        primary={["/book-a-tour", "Book a tour"]}
        secondary={["/centres", "Find a centre"]}
      />
    </>
  );
}
