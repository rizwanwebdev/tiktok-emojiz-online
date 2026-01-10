import HeaderSection from "@/components/HeaderSection";
import FooterSection from "@/components/FooterSection";
import { Metadata } from "next";
import {
  Clock,
  Github,
  LocationEditIcon,
  Mail,
  MessageCircle,
} from "lucide-react";
export function generateMetadata(): Metadata {
  return {
    title: `Contact Us`,
    description:
      "We’d love to hear from you! Whether you have questions, suggestions, or feedback about TikTokEmojiz.online, feel free to reach out.",
  };
}
const page = () => {
  return (
    <>
      <HeaderSection />
      <main>
        <section>
          <div className="container-custom flex flex-col justify-center items-center gap-2">
            <h1 className="text-center">Contact Us</h1>
            <p>
              We’d love to hear from you! Whether you have questions,
              suggestions, or feedback about
              <strong> TikTokEmojiz.online</strong>, feel free to reach out.
            </p>
          </div>
        </section>
        <section>
          <div className="container-custom flex flex-col gap-5">
            <div className="bg-surface shadow-2xs shadow-foreground/20 border p-4 rounded-md border-border grid grid-cols-1 md:grid-cols-2">
              <div className="flex flex-col gap-5">
                <span className="flex  gap-4 items-center flex-row">
                  <Mail className="w-7 h-7" />
                  <span className="flex flex-col">
                    <span>Email</span>
                    <p>hello@example.com</p>
                  </span>
                </span>
                <span className="flex  gap-2 items-center flex-row">
                  <MessageCircle className="w-7 h-7" />
                  <span className="flex flex-col">
                    <span>WhatsApp</span>
                    <p>+1 234 567 890</p>
                  </span>
                </span>
                <span className="flex  gap-2 items-center flex-row">
                  <LocationEditIcon className="w-7 h-7" />
                  <span className="flex flex-col">
                    <span>Location</span>
                    <p>Remote • Worldwide</p>
                  </span>
                </span>
                <span className="flex  gap-2 items-center flex-row">
                  <Clock className="w-7 h-7" />
                  <span className="flex flex-col">
                    <span>Availability</span>
                    <p>24/7</p>
                  </span>
                </span>
              </div>
              <form className="flex flex-col *:flex *:flex-col gap-4">
                <fieldset>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    autoComplete="name"
                    className="border p-2 rounded-md"
                  />
                </fieldset>
                <fieldset>
                  <label htmlFor="email">Email</label>

                  <input
                    type="text"
                    name="name"
                    autoComplete="name"
                    className="border p-2 rounded-md"
                  />
                </fieldset>
                <fieldset>
                  <label htmlFor="message">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    className="border p-2 rounded-md"
                    rows={4}
                  ></textarea>
                </fieldset>
                <button
                  type="submit"
                  className="w-fit bg-foreground text-background rounded text-center py-2 px-4 duration-300 transition-all hover:bg-text-muted cursor-pointer disabled:cursor-default disabled:bg-secondary"
                  disabled
                >
                  Send Message
                </button>
              </form>
            </div>
            <div className="bg-surface shadow-2xs shadow-foreground/20 border p-4 rounded-md border-border">
              <h3>Feedback & Suggestions</h3>
              <p>
                Your feedback helps us improve. If you notice missing emojis,
                broken links, or want to suggest new features, please send us a
                message via email or social media.
              </p>

              <h3>Business Inquiries</h3>
              <p>
                For collaborations, partnerships, or web development services
                inquiries, you can also reach us via email. We are happy to
                discuss opportunities related to TikTok content, emoji tools,
                and web development projects.
              </p>

              <h3>Note</h3>
              <p>
                We respect your privacy. Any information you share will be used
                solely for communication purposes and will not be sold or shared
                with third parties.
              </p>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  );
};

export default page;
