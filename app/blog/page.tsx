import { blogs } from "@/data/blogs";
import Link from "next/link";
import HeaderSection from "@/components/HeaderSection";
import FooterSection from "@/components/FooterSection";

import { Metadata } from "next";
export function generateMetadata(): Metadata {
  return {
    title: `Tiktok Emojiz's Blog`,
    description:
      "Discover TikTokEmojiz.online, a tool built to help users copy hidden TikTok emoji codes and download transparent PNG emojis.",
  };
}

export default function BlogPage() {
  return (
    <>
      <HeaderSection />

      <main>
        <section>
          <div className="container-custom flex flex-col justify-center items-center gap-2">
            <h1 className="text-center">Tiktok Emojiz's Blog</h1>
            <p>
              Welcome to TikTokEmojiz.online – your source for hidden TikTok
              emojis, shortcodes, and PNGs not found in the regular emoji
              keyboard.
            </p>
          </div>
        </section>
        <section>
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {blogs.map((blog) => (
                <article
                  key={blog.title}
                  className="border-2 group border-border bg-surface p-2 rounded-2xl shadow-2xl shadow-surface"
                >
                  <Link href={`blog/${blog.slug}`}>
                    <img
                      src={blog.featured}
                      alt={blog.title}
                      className="aspect-video rounded-xl"
                    />
                  </Link>
                  <div className="py-2 space-y-2">
                    <h3 className="group-hover:text-secondary duration-300 transition-all line-clamp-3">
                      <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                    </h3>
                    <p className="line-clamp-3">{blog.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  );
}
