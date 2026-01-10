import { emojis } from "@/data/emojis";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import HeaderSection from "@/components/HeaderSection";
import FooterSection from "@/components/FooterSection";
import CopyButton from "@/components/CopyButton";
import { Star, StarHalf } from "lucide-react";
type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return emojis.map((emoji) => ({
    slug: emoji.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const emoji = emojis.find((e) => e.slug === slug);

  if (!emoji) {
    return {
      title: "Emoji Not Found",
    };
  }

  return {
    title: `${emoji.name} TikTok Emoji PNG – Copy & Download`,
    description: `Copy the ${emoji.name} TikTok emoji code ${emoji.code} or download it as a transparent PNG.`,
  };
}

export default async function EmojiPage({ params }: Props) {
  const { slug } = await params;

  const emoji = emojis.find((e) => e.slug === slug);
  if (!emoji) notFound();

  return (
    <>
      <HeaderSection />
      <main>
        <section>
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="flex justify-center items-center">
                <img
                  src={emoji.image}
                  alt={emoji.name}
                  className="max-md:w-[70%]"
                />
              </div>
              <div className="md:col-span-2 flex justify-center gap-3 flex-col">
                <h2>{emoji.name} TikTok Emoji</h2>
                <p className="font-bold text-xl">
                  Copy Code: <CopyButton code={emoji.code} />
                </p>
                <span className="flex flex-row gap-1">
                  <span className="text-xl">Popularity:</span>
                  <Star className="fill-amber-400 stroke-amber-400" />
                  <Star className="fill-amber-400 stroke-amber-400" />
                  <Star className="fill-amber-400 stroke-amber-400" />
                  <Star className="fill-amber-400 stroke-amber-400" />
                  <Star className=" stroke-amber-400" />
                </span>
                <p>
                  <span className="text-foreground">Description: </span>
                  {emoji.description}
                </p>
                <a
                  href={emoji.image}
                  download
                  className="w-fit bg-foreground text-background rounded text-center py-2 px-4 duration-300 transition-all hover:bg-text-muted"
                >
                  Download {emoji.name} Emoji PNG image
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  );
}
