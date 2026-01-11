import { notFound } from "next/navigation";
import { Metadata } from "next";
import HeaderSection from "@/components/HeaderSection";
import FooterSection from "@/components/FooterSection";
import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { blogs } from "@/data/blogs";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Props = {
  params: Promise<{ slug: string }>;
};
export function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blog = blogs.find((e) => e.slug === slug);

  if (!blog) {
    return {
      title: "blog Not Found",
    };
  }

  return {
    title: blog.title,
    description: blog.description,
  };
}

export default async function BlogsPage({ params }: Props) {
  const { slug } = await params;

  const blog = blogs.find((e) => e.slug === slug);
  if (!blog) notFound();

  return (
    <>
      <HeaderSection />
      <main>
        <section>
          <div className="container-custom grid grid-cols-1 lg:grid-cols-4 gap-4 relative">
            <div className="lg:col-span-3 bg-surface rounded-lg p-5 flex flex-col gap-4">
              <img
                src={blog.featured}
                alt={blog.title}
                className="rounded-md aspect-video"
                loading="lazy"
              />

              <h1 className="text-3xl font-bold">{blog.title}</h1>

              <article className="markdown">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    img({ src, alt }) {
                      const imageSrc = blog.images?.[src as string] ?? src;

                      return (
                        <img
                          src={imageSrc}
                          alt={alt ?? ""}
                          loading="lazy"
                          className="rounded-md my-6 aspect-video"
                        />
                      );
                    },
                  }}
                >
                  {blog.content}
                </ReactMarkdown>
              </article>
            </div>

            <aside className="bg-surface p-5 rounded-xl h-fit sticky top-4 flex flex-col gap-3 ">
              <h3>Relate Articles</h3>
              <hr />
              <div className="flex flex-col gap-4">
                {blogs.map((blog) => (
                  <Link key={blog.slug} href={blog.slug}>
                    <span className="line-clamp-1 hover:text-secondary duration-300 transition-all font-semibold text-lg">
                      {blog.title}
                    </span>
                    <p className="line-clamp-2">{blog.description}</p>
                  </Link>
                ))}
              </div>
              <hr />
              <div className="flex flex-wrap gap-3 *:bg-accent/50 *:p-1.5 *:text-white *:rounded-xl  *:hover:bg-secondary *:duration-300 *:transition-all">
                <a href="https://Facebook.com/" target="_blank">
                  <Facebook className="w-7 h-7" />
                </a>
                <a href="https://Facebook.com/" target="_blank">
                  <Twitter className="w-7 h-7" />
                </a>
                <a href="https://Facebook.com/" target="_blank">
                  <Instagram className="w-7 h-7" />
                </a>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  );
}
