import HeaderSection from "@/components/HeaderSection";
import FooterSection from "@/components/FooterSection";
import { Metadata } from "next";
export function generateMetadata(): Metadata {
  return {
    title: `Terms And Conditions | TikTokEmojiz.Online`,
    description:
      "Discover TikTokEmojiz.online, a tool built to help users copy hidden TikTok emoji codes and download transparent PNG emojis.",
  };
}
const Terms = () => {
  return (
    <>
      <HeaderSection />

      <main>
        <section>
          <div className="container-custom flex flex-col justify-center items-center gap-2">
            <h1 className="text-center">Terms And Conditions</h1>
            <p>
              By accessing and using this website, you agree to comply with and
              be bound by the following terms and conditions. If you do not
              agree with any part of these terms, please do not use the website.
            </p>
          </div>
        </section>
        <section>
          <div className="container-custom">
            <div className="space-y-4 bg-surface shadow-2xs shadow-foreground/20 border p-4 rounded-md border-border">
              <h3>1. Use of the Website</h3>
              <p>
                This website provides information, tools, and downloadable
                resources related to TikTok emojis. The content is intended for
                general informational and creative purposes only.
              </p>
              <p>
                You agree to use this website in a lawful manner and not for any
                activity that violates applicable laws or regulations.
              </p>

              <h3>2. No Affiliation Disclaimer</h3>
              <p>
                This website is not affiliated with, sponsored by, or endorsed
                by TikTok or its parent company. All trademarks, logos, and
                brand names belong to their respective owners.
              </p>

              <h3>3. Intellectual Property</h3>
              <p>
                All original content on this website, including text, layout,
                and design, is the property of this website unless otherwise
                stated.
              </p>
              <p>
                TikTok emojis, names, and related assets are referenced for
                informational and educational purposes. Ownership remains with
                their respective rights holders.
              </p>

              <h3>4. Use of Downloadable Assets</h3>
              <p>
                Emoji PNG files provided on this website are intended for
                personal and creative use, such as:
              </p>
              <ul className="list-disc px-4 text-text-muted">
                <li>Stickers</li>
                <li>Memes</li>
                <li>Video overlays</li>
                <li>Reactions</li>
              </ul>
              <p>
                Users are responsible for ensuring that their use of these
                assets complies with TikTok’s terms of service and any
                applicable platform policies.
              </p>

              <h3>5. Accuracy of Information</h3>
              <p>
                While we strive to keep the content accurate and up to date, we
                make no guarantees regarding the completeness, reliability, or
                accuracy of any information provided on this website.
              </p>

              <h3>6. External Links</h3>
              <p>
                This website may include links to third-party websites for
                convenience or reference. We do not control and are not
                responsible for the content, terms, or privacy practices of
                external sites.
              </p>

              <h3>7. Limitation of Liability</h3>
              <p>
                This website shall not be held liable for any direct or indirect
                damages arising from the use or inability to use the website,
                tools, or downloadable resources.
              </p>

              <h3>8. Changes to These Terms</h3>
              <p>
                These Terms and Conditions may be updated at any time without
                prior notice. Continued use of the website after changes are
                made constitutes acceptance of the revised terms.
              </p>

              <h3>9. Governing Principles</h3>
              <p>
                These terms are governed by general principles of fair use and
                applicable digital content regulations, without reference to any
                specific jurisdiction.
              </p>

              <h3>10. Contact</h3>
              <p>
                If you have any questions regarding these Terms and Conditions,
                please contact us through the Contact page.
              </p>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  );
};

export default Terms;
