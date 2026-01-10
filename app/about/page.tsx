import HeaderSection from "@/components/HeaderSection";
import FooterSection from "@/components/FooterSection";
import { Target } from "lucide-react";
import { Metadata } from "next";
export function generateMetadata(): Metadata {
  return {
    title: `About Us`,
    description:
      "Discover TikTokEmojiz.online, a tool built to help users copy hidden TikTok emoji codes and download transparent PNG emojis.",
  };
}
const AboutPage = () => {
  return (
    <>
      <HeaderSection />
      <main>
        <section>
          <div className="container-custom flex flex-col justify-center items-center gap-2">
            <h1 className="text-center">About Us</h1>
            <p>
              Welcome to <strong>TikTokEmojiz.online</strong> — your go-to
              source for TikTok secret emojis, shortcodes, and transparent PNGs
              that you won’t find on a standard emoji keyboard.
            </p>
          </div>
        </section>
        <section>
          <div className="container-custom ">
            <div className=" flex flex-col gap-5 bg-surface shadow-2xs shadow-foreground/20 border p-4 rounded-md border-border">
              <h3>Our Mission</h3>
              <p>
                Our mission is to help TikTok creators, social media
                enthusiasts, and emoji lovers express themselves in fun and
                unique ways. We provide easy access to hidden TikTok emojis,
                codes, and high-quality PNGs that can be used in comments,
                captions, and creative projects.
              </p>

              <h3>What We Offer</h3>
              <ul className="list-disc px-4 text-text-muted">
                <li>Comprehensive list of TikTok secret emojis and codes</li>
                <li>High-quality transparent PNG downloads for emojis</li>
                <li>
                  Copy-paste functionality to save time in comments and captions
                </li>
                <li>Blog articles, tips, and guides about TikTok emojis</li>
              </ul>

              <h3>Disclaimer</h3>
              <p>
                We are not affiliated with TikTok or any of its subsidiaries.
                All emoji assets and names belong to their respective owners and
                are shared for informational and creative purposes only.
              </p>

              <h3>Contact Us</h3>
              <p>
                Have questions or suggestions? Visit our{" "}
                <a href="/contact">Contact page</a>
                to get in touch.
              </p>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  );
};

export default AboutPage;
