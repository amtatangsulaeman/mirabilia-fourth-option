import Image from "next/image";
import Link from "next/link";
import { formatDate, type Post } from "@/lib/blog";

/** "8 October 2026 · 4 min read" */
export function PostMeta({ post }: { post: Post }) {
  return (
    <p className="flex flex-wrap items-center gap-2 text-sm">
      <time dateTime={post.date}>{formatDate(post.date)}</time>
      <span aria-hidden>·</span>
      <span>{post.minutes} min read</span>
    </p>
  );
}

/** Blog card: the whole card is clickable through the title link. */
export function PostCard({ post, featured, headingLevel = "h3" }: { post: Post; featured?: boolean; headingLevel?: "h2" | "h3" }) {
  const H = headingLevel;
  return (
    <article
      className={`group relative overflow-hidden rounded-[2rem] bg-white ring-1 ring-plum-100 transition-shadow hover:shadow-[0_24px_48px_-24px_rgba(61,26,74,0.4)] ${
        featured ? "grid md:grid-cols-[1.2fr_1fr]" : "flex flex-col"
      }`}
    >
      <div className={`relative overflow-hidden ${featured ? "aspect-[4/3] md:aspect-auto md:min-h-80" : "aspect-[16/10]"}`}>
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          sizes={featured ? "(min-width: 768px) 55vw, 90vw" : "(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className={`flex flex-1 flex-col ${featured ? "p-8 md:p-10" : "p-6"}`}>
        <span className="self-start rounded-full bg-leaf px-3 py-1 text-xs font-bold text-plum-950">{post.category}</span>
        <H className={`mt-4 ${featured ? "text-2xl md:text-3xl" : "text-xl"}`}>
          <Link href={`/blog/${post.slug}`} className="after:absolute after:inset-0">
            {post.title}
          </Link>
        </H>
        <p className="mt-3 flex-1 leading-relaxed">{post.description}</p>
        <div className="mt-5 flex items-center justify-between gap-4">
          <PostMeta post={post} />
          <span className="font-bold text-plum" aria-hidden>
            Read →
          </span>
        </div>
      </div>
    </article>
  );
}
