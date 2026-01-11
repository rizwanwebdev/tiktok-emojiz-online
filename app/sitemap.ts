import { emojis } from "@/data/emojis";
import { blogs } from "@/data/blogs";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://tiktokemojiz.online";
  const now = new Date();

  return [
    {
      url: baseUrl,
      lastModified: now,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: now,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: now,
    },
    {
      url: `${baseUrl}/disclaimer`,
      lastModified: now,
    },
    ...emojis.map((emoji) => ({
      url: `${baseUrl}/emojis/${emoji.slug}`,
      lastModified: now,
    })),
    ...blogs.map((blog) => ({
      url: `${baseUrl}/blog/${blog.slug}`,
      lastModified: now,
    })),
  ];
}
