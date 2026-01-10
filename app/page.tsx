import HeaderSection from "@/components/HeaderSection";
import HeroSection from "@/components/HeroSection";
import AllEmojis from "@/components/AllEmojis";
import AdditionalSections from "@/components/AdditionalSections";
import FooterSection from "@/components/FooterSection";
import { Metadata } from "next";
export function generateMetadata(): Metadata {
  return {
    title: `TikTokEmojiz.Online`,
    description:
      "Discover TikTokEmojiz.online, a tool built to help users copy hidden TikTok emoji codes and download transparent PNG emojis.",
  };
}
export default function HomePage() {
  return (
    <>
      <HeaderSection />
      <main>
        <HeroSection />
        <AllEmojis />
        <AdditionalSections />
        <FooterSection />
      </main>
    </>
  );
}
