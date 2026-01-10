import { emojis } from "@/data/emojis";

export default function sitemap() {
  return [
    {
      url: "https://tiktokemojiz.online",
      lastModified: new Date(),
    },
    ...emojis.map((emoji) => ({
      url: `https://tiktokemojiz.online/emojis/${emoji.slug}`,
      lastModified: new Date(),
    })),
  ];
}
