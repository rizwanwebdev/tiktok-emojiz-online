import { emojis } from "@/data/emojis";

export default function sitemap() {
  return [
    {
      url: "https://yourdomain.com",
      lastModified: new Date(),
    },
    ...emojis.map((emoji) => ({
      url: `https://yourdomain.com/tiktok-emojis/${emoji.slug}`,
      lastModified: new Date(),
    })),
  ];
}
