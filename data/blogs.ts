export type Blog = {
  title: string;
  featured: string;
  slug: string;
  description: string;
  content: string;
  images?: Record<string, string>;
};

export const blogs: Blog[] = [
  {
    title: "What Are TikTok Secret Emojis and How Do They Work?",
    featured: "/uploads/tiktok-secret-emojis-cover.png",
    slug: "what-are-tiktok-secret-emojis",
    description:
      "Learn what TikTok secret emojis are, how their hidden codes work, and why they only appear inside TikTok comments, captions, and DMs.",
    content: `
  TikTok secret emojis are a unique set of expressive icons that only work inside the TikTok app. Unlike regular emojis found on your phone keyboard, these emojis appear only when specific shortcodes are typed.

  They are widely used to stand out in comments, replies, and captions, especially by creators who want more expressive reactions.

  ## How TikTok Secret Emojis Are Different
  ![TikTok emoji comparison](image-id-1)

  TikTok emojis do not exist as standard Unicode characters. Instead, they are platform-specific visuals that TikTok renders internally when it detects certain text patterns.

  This means they:
  - Do not appear on normal emoji keyboards
  - Only render inside TikTok
  - Rely on text-based shortcode triggers

  ## How Emoji Codes Activate Emojis
  ![TikTok emoji codes example](image-id-2)

  Each TikTok emoji has a hidden shortcode written inside square brackets, such as \`[happy]\` or \`[shock]\`. When this code is typed inside TikTok, the app instantly replaces it with the matching emoji.

  Outside TikTok, the same text remains plain text and does not convert into an emoji.

  ## Can You Use TikTok Emojis Outside the App?
  ![TikTok emoji PNG usage](image-id-3)

  While the emojis themselves do not function outside TikTok, many users download them as transparent PNG images. These PNGs are commonly used as:
  - Stickers
  - Meme reactions
  - Video overlays
  - Discord emotes

  This flexibility is one of the reasons TikTok emojis have become popular beyond the platform.
  `,
    images: {
      "image-id-1": "/uploads/tiktok-emoji-vs-normal-emoji.png",
      "image-id-2": "/uploads/tiktok-emoji-codes-example.png",
      "image-id-3": "/uploads/tiktok-emoji-png-usage.png",
    },
  },

  {
    title: "Complete Guide to TikTok Emoji Codes (Copy & Paste)",
    featured: "/uploads/tiktok-emoji-codes-guide.png",
    slug: "tiktok-emoji-codes-guide",
    description:
      "A complete beginner-friendly guide to TikTok emoji codes, including how to copy, paste, and use them correctly in comments and captions.",
    content: `
  TikTok emoji codes make it easy to add personality and emotion to your comments without memorizing every emoji. Once you understand how they work, using them becomes effortless.

  This guide explains how to use TikTok emoji codes the right way.

  ## What Are TikTok Emoji Codes?
  ![Emoji shortcode format](image-id-1)

  TikTok emoji codes are text-based commands written inside square brackets. When TikTok detects these codes, it replaces them with the corresponding emoji.

  For example:
  - \`[proud]\`
  - \`[happy]\`
  - \`[angry]\`

  Each code is unique and tied to a specific emoji design.

  ## How to Copy and Paste TikTok Emojis
  ![Copy paste TikTok emoji](image-id-2)

  Copying and pasting emoji codes is the fastest method, especially if you use multiple emojis regularly.

  Steps:
  1. Copy the emoji code from a reliable list
  2. Open TikTok comments, captions, or messages
  3. Paste the code into the text field
  4. Watch it instantly transform into an emoji

  ## Common Mistakes to Avoid
  ![Emoji error example](image-id-3)

  Some users forget the square brackets or add extra spaces. Even a small typo can prevent the emoji from rendering.

  Always double-check:
  - Opening and closing brackets
  - Correct spelling
  - No extra spaces

  Using copy-paste removes most of these errors.
  `,
    images: {
      "image-id-1": "/uploads/emoji-shortcode-format.png",
      "image-id-2": "/uploads/copy-paste-tiktok-emoji.png",
      "image-id-3": "/uploads/tiktok-emoji-error-example.png",
    },
  },

  {
    title: "How to Download TikTok Emojis as Transparent PNGs",
    featured: "/uploads/tiktok-emoji-png-download.png",
    slug: "download-tiktok-emoji-png",
    description:
      "Learn how to download TikTok emojis as transparent PNG files and use them as stickers, overlays, memes, or Discord emotes.",
    content: `
TikTok emojis are not limited to in-app use. Many creators download them as transparent PNG files to use across different platforms and creative projects.

Here’s how you can do the same.

## Why Download TikTok Emoji PNGs?
![TikTok emoji PNG examples](image-id-1)

Transparent PNG emojis are useful because they blend seamlessly into any background. This makes them ideal for:
- Video overlays
- Thumbnails
- Stickers
- Social media reactions

Their expressive style makes them stand out compared to standard emojis.

## How to Download TikTok Emojis
![Downloading emoji PNG](image-id-2)

To download TikTok emoji PNGs:
1. Select an emoji you like
2. Click the download option
3. Save the transparent PNG to your device

Once downloaded, the emoji can be reused anywhere as an image.

## Creative Ways to Use Emoji PNGs
![Creative emoji usage](image-id-3)

Creators use TikTok emoji PNGs in many creative ways, including:
- Meme templates
- Discord server emotes
- WhatsApp stickers
- Video reactions

Because they are images, they work across platforms without restrictions.
`,
    images: {
      "image-id-1": "/uploads/tiktok-emoji-png-examples.png",
      "image-id-2": "/uploads/download-emoji-png.png",
      "image-id-3": "/uploads/creative-emoji-usage.png",
    },
  },
];
