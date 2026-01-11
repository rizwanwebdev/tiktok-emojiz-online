import HeaderSection from "@/components/HeaderSection";
import FooterSection from "@/components/FooterSection";
import { Metadata } from "next";
import {
  Clock,
  Facebook,
  Github,
  Instagram,
  Linkedin,
  LocationEditIcon,
  Mail,
  MessageCircle,
  Globe,
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
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-5">
                <div className="bg-surface shadow-2xs shadow-foreground/20 border p-4 rounded-md border-border flex flex-col gap-3">
                  <span className="flex  gap-4 items-center flex-row">
                    <span className="bg-accent/50 p-2 text-white rounded-xl">
                      <Mail className="w6" />
                    </span>
                    <span className="flex flex-col">
                      <span>Email</span>
                      <a href="mailto:contact@rizwanweb.site">
                        <p>contact@rizwanweb.site</p>
                      </a>
                    </span>
                  </span>
                  <span className="flex  gap-2 items-center flex-row">
                    <span className="bg-accent/50 p-2 text-white rounded-xl">
                      <MessageCircle className="w6" />
                    </span>
                    <span className="flex flex-col">
                      <span>WhatsApp</span>
                      <p>+1 234 567 890</p>
                    </span>
                  </span>
                  <span className="flex  gap-2 items-center flex-row">
                    <span className="bg-accent/50 p-2 text-white rounded-xl">
                      <LocationEditIcon className="w6" />
                    </span>
                    <span className="flex flex-col">
                      <span>Location</span>
                      <p>Remote • Worldwide</p>
                    </span>
                  </span>
                  <span className="flex  gap-2 items-center flex-row">
                    <span className="bg-accent/50 p-2 text-white rounded-xl">
                      <Clock className="w6" />
                    </span>
                    <span className="flex flex-col">
                      <span>Availability</span>
                      <p>24/7</p>
                    </span>
                  </span>
                </div>
                <div className="bg-surface shadow-2xs shadow-foreground/20 border p-4 rounded-md border-border h-full flex justify-between flex-col">
                  <h3>Connect With Me</h3>
                  <div className="flex gap-3 *:bg-accent/50 *:p-2 *:text-white *:rounded-xl  *:hover:bg-secondary *:duration-300 *:transition-all">
                    <a href="https://rizwanweb.site">
                      <Globe />
                    </a>
                    <a href="https://facebook.com/rizwanwebdev">
                      <Facebook />
                    </a>
                    <a href="https://Instagram.com/rizwanwebdev">
                      <Instagram />
                    </a>
                    <a href="https://Linkedin.com/in/rizwanwebdev">
                      <Linkedin />
                    </a>
                    <a href="https://Github.com/rizwanwebdev">
                      <Github />
                    </a>
                  </div>
                </div>
              </div>
              <form className="bg-surface shadow-2xs shadow-foreground/20 border p-4 rounded-md border-border flex flex-col *:flex *:flex-col gap-4">
                <fieldset>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    autoComplete="name"
                    placeholder="Enter your name"
                    className="border p-2 rounded-md"
                  />
                </fieldset>
                <fieldset>
                  <label htmlFor="email">Email</label>

                  <input
                    type="text"
                    name="email"
                    autoComplete="email"
                    placeholder="Enter your email"
                    className="border p-2 rounded-md"
                  />
                </fieldset>
                <fieldset>
                  <label htmlFor="message">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Enter your message"
                    className="border p-2 rounded-md"
                    rows={4}
                  ></textarea>
                </fieldset>
                <button
                  type="submit"
                  className="w-fit text-center py-2 px-4  cursor-pointer disabled:cursor-default disabled:bg-background
                  bg-accent/50 p-2 text-white rounded-lg  hover:bg-secondary duration-300 transition-all"
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
