import { emojis } from "@/data/emojis";
import CopyButton from "./CopyButton";
import Link from "next/link";
const AllEmojis = () => {
  return (
    <>
      <section className="bg-linear-to-t from-surface to-background">
        <div className="container-custom space-y-4">
          <div>
            <h2 className="text-center">All TikTok Emojis</h2>
            <p>
              Below is a list of <b>all TikTok emojis</b> with their secret
              codes. Each emoji is available for <b>copy and download</b>. All
              of them work perfectly on both Android and iPhone Operating System
              (iOS).
            </p>
          </div>
          {/* cards */}
          <div className="grid grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {emojis.map((emoji) => (
              <div
                key={emoji.name}
                className="border flex flex-row justify-between items-center bg-surface rounded-2xl border-border p-2 shadow shadow-foreground/20"
              >
                <Link href={`emojis/${emoji.slug}`}>
                  <img
                    src={emoji.image}
                    alt={emoji.name}
                    className="w-20 hover:scale-110 duration-300 transition-all cursor-grab "
                    title={emoji.name}
                  />
                </Link>
                <div className="flex flex-col gap-1 items-center">
                  <CopyButton code={emoji.code} />
                  <a
                    href={emoji.image}
                    download
                    className="text-secondary hover:text-accent duration-200 transition-all"
                  >
                    Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AllEmojis;
