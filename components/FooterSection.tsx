import Link from "next/link";
import { ArrowRight, Facebook, Github, Instagram, Mail } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className=" border-t-2 border-border">
      <div className="px-8 container-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        <div className="space-y-3">
          <Link href="/">
            <span className="font-bold text-2xl">TikTok Emojiz</span>
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            deleniti.
          </p>
          <div className="flex items-center gap-2 *:p-2 *:bg-foreground *:text-background *:rounded-xl *:hover:text-secondary *:transition-all duration-300">
            <a href="https://github.com/rizwanwebdev" target="_blank">
              <Github />
            </a>
            <a href="https://facebook.com/rizwanwebdev" target="_blank">
              <Facebook />
            </a>
            <a href="https://instagram.com/rizwanwebdev" target="_blank">
              <Instagram />
            </a>
          </div>
        </div>
        <div>
          <span className="text-xl font-semibold">Quick Links</span>
          <ul className="list-none *:flex *:flex-row *:gap-1 *:hover:text-secondary *:duration-300 *:transition-all *:text-text-muted">
            <Link href="/">
              <ArrowRight className="w-3" />
              <li>Home</li>
            </Link>
            <Link href="/blog">
              <ArrowRight className="w-3" />
              <li>Blog</li>
            </Link>
            <Link href="/about">
              <ArrowRight className="w-3" />
              <li>About</li>
            </Link>
            <Link href="/contact">
              <ArrowRight className="w-3" />
              <li>Contact</li>
            </Link>
          </ul>
        </div>
        <div>
          <span className="text-xl font-semibold">Quick Pages</span>
          <ul className="list-none *:flex *:flex-row *:gap-1 *:hover:text-secondary *:duration-300 *:transition-all *:text-text-muted">
            <Link href="/privacy">
              <ArrowRight className="w-3" />
              <li>Privacy</li>
            </Link>
            <Link href="/terms">
              <ArrowRight className="w-3" />
              <li>Terms</li>
            </Link>
            <Link href="/disclaimer">
              <ArrowRight className="w-3" />
              <li>Disclaimer</li>
            </Link>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-xl font-semibold">Contact</span>
          <p>
            Available for web development projects — hire me to build fast,
            SEO-friendly websites.
          </p>
          <a
            href="mailto:rizwanwebdev1@gmail.com"
            className="flex items-center flex-row gap-2 hover:text-secondary transition-all duration-200 text-text-muted"
          >
            <Mail /> rizwanwebdev1@gmail.com
          </a>
          <a
            href="https://rizwnweb.site"
            target="_blank"
            className="w-fit bg-foreground text-background rounded text-center py-2 px-4 duration-300 transition-all hover:bg-text-muted"
          >
            Hire Me
          </a>
        </div>
      </div>
      <div className="px-8 py-2 flex justify-between items-center border-t-2 border-border *:text-sm *:text-text-muted">
        <span>&copy; All Rights Reserved | TikTokEmojiz.online</span>
        <span className="flex gap-2 *:hover:text-secondary *:duration-200 *:transition-all">
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms & Conditions</Link>
        </span>
      </div>
    </footer>
  );
};

export default FooterSection;
