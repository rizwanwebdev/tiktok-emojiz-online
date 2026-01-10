import HeaderSection from "@/components/HeaderSection";
import FooterSection from "@/components/FooterSection";
import { Metadata } from "next";
export function generateMetadata(): Metadata {
  return {
    title: `⚠️ Disclaimer | TikTokEmojiz.Online`,
    description:
      "Discover TikTokEmojiz.online, a tool built to help users copy hidden TikTok emoji codes and download transparent PNG emojis.",
  };
}
const DisclaimerPage = () => {
  return (
    <>
      <HeaderSection />

      <main>
        <section>
          <div className="container-custom flex flex-col justify-center items-center gap-2">
            <h1 className="text-center">⚠️ Disclaimer</h1>
            <p>
              The content on <strong>TikTokEmojiz.online</strong> is provided
              for informational and educational purposes only. We strive to
              provide accurate and up-to-date information, but we make no
              guarantees regarding completeness, reliability, or accuracy of the
              content.
            </p>
          </div>
        </section>
        <section>
          <div className="container-custom ">
            <div className="space-y-4 bg-surface shadow-2xs shadow-foreground/20 border p-4 rounded-md border-border">
              <h3>1. No Affiliation with TikTok</h3>
              <p>
                This website is not affiliated with, sponsored by, or endorsed
                by TikTok or any of its affiliates. All trademarks, logos, and
                brand names referenced on this website remain the property of
                their respective owners.
              </p>

              <h3>2. Use of Emoji Assets</h3>
              <p>
                The TikTok emojis, codes, and PNGs displayed on this site are
                intended for personal and creative use. Users are responsible
                for complying with TikTok’s terms of service or any other
                platform’s rules when using these assets.
              </p>

              <h3>3. External Links</h3>
              <p>
                This website may include links to third-party websites for
                convenience or reference. We do not control and are not
                responsible for the content, privacy policies, or practices of
                external websites.
              </p>

              <h3>4. Limitation of Liability</h3>
              <p>
                By using this website, you agree that we are not liable for any
                direct or indirect damages resulting from your use of the site,
                tools, or downloadable assets.
              </p>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  );
};

export default DisclaimerPage;
