import HeaderSection from "@/components/HeaderSection";
import FooterSection from "@/components/FooterSection";
import { Metadata } from "next";
export function generateMetadata(): Metadata {
  return {
    title: `Privacy Policy | TikTokEmojiz.Online`,
    description:
      "Discover TikTokEmojiz.online, a tool built to help users copy hidden TikTok emoji codes and download transparent PNG emojis.",
  };
}
export default function PrivacyPage() {
  return (
    <>
      <HeaderSection />

      <main>
        <section>
          <div className="container-custom flex flex-col justify-center items-center gap-2">
            <h1 className="text-center">Privacy Policy</h1>
            <p>
              Your privacy matters. This Privacy Policy explains how information
              is handled when you visit TikTokEmojiz.online.
            </p>
          </div>
        </section>
        <section>
          <div className="container-custom">
            <div className="space-y-4 bg-surface shadow-2xs shadow-foreground/20 border p-4 rounded-md border-border">
              <h3>1. Information We Collect</h3>
              <p>
                This website does not collect personal information such as
                names, email addresses, phone numbers, or account details.
              </p>
              <p>
                We do not require user registration, login, or form submissions
                to use our tools.
              </p>
              <h3>2. Automatically Collected Data</h3>
              <p>
                Like most websites, basic non-personal information may be
                collected automatically, including:
              </p>
              <ul className="list-disc px-4 text-text-muted">
                <li>Browser type</li>
                <li>Device type</li>
                <li>Pages visited</li>
                <li>Time spent on pages</li>
                <li>Referring URLs</li>
              </ul>
              <p>
                This data is used only for analytics and performance improvement
                and cannot be used to identify you personally.
              </p>
              <h3>3. Cookies</h3>
              <p>We may use cookies or similar technologies to:</p>
              <ul className="list-disc px-4 text-text-muted">
                <li>Understand how visitors interact with the website</li>
                <li>Improve user experience</li>
                <li>Analyze traffic trends</li>
              </ul>
              <p>
                You can disable cookies in your browser settings at any time.
              </p>
              <h3>4. Third-Party Services</h3>
              <p>This website may use third-party tools such as:</p>
              <ul className="list-disc px-4 text-text-muted">
                <li>Analytics services (e.g., Google Analytics)</li>
                <li>Advertising platforms (if enabled in the future)</li>
              </ul>
              <p>
                These services may collect anonymous usage data under their own
                privacy policies. We do not control how third parties manage
                their data.
              </p>

              <h3>5. TikTok Disclaimer</h3>
              <p>This website is not affiliated with or endorsed by TikTok.</p>
              <p>
                All TikTok emojis, names, and assets are used for informational
                and educational purposes only.
              </p>

              <h3>6. Use of Emoji PNGs</h3>
              <p>
                Emoji images provided on this site are shared for personal and
                creative use, such as:
              </p>
              <ul className="list-disc px-4 text-text-muted">
                <li>Stickers</li>
                <li>Memes</li>
                <li>Video overlays</li>
                <li>Reactions</li>
              </ul>
              <p>
                Users are responsible for ensuring compliance with TikTok’s
                terms when using these assets.
              </p>

              <h3>7. External Links</h3>
              <p>
                Our website may contain links to third-party websites. We are
                not responsible for the content or privacy practices of external
                sites.
              </p>

              <h3>8. Children’s Information</h3>
              <p>
                This website does not knowingly collect any personal information
                from children under the age of 13.
              </p>

              <h3>9. Changes to This Policy</h3>
              <p>
                This Privacy Policy may be updated occasionally. Any changes
                will be reflected on this page with an updated date.
              </p>

              <h3>10. Contact</h3>
              <p>
                If you have questions or concerns about this Privacy Policy, you
                may contact us through the Contact page.
              </p>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  );
}
