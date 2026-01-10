import Link from "next/link";
import ThemeToggleButton from "./ThemeToggleButton";
const navLinks = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;
const HeaderSection = () => {
  return (
    <>
      <header className="z-100 px-8 border-b-2 border-border shadow-sm shadow-surface">
        <div className="py-2 flex justify-between items-center relative">
          <Link href="/">
            <div className="flex flex-row items-center gap-1">
              <img
                src="/tiktok-emojiz-logo.png"
                alt="TikTok Emojis"
                className="w-10"
              />
              <div className="text-2xl">
                <span className="font-bold text-accent">TikTok </span>Emojiz
              </div>
            </div>
          </Link>
          <nav aria-label="Main navigation" className="hidden lg:block">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li
                  key={link.href}
                  className="text-foreground transition-all duration-200 hover:text-secondary cursor-pointer"
                >
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <ThemeToggleButton />
        </div>
      </header>
    </>
  );
};

export default HeaderSection;
