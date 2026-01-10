const HeroSection = () => {
  const EMOJI_LIST = [
    "😀",
    "😂",
    "🥰",
    "😎",
    "🤩",
    "😍",
    "🥳",
    "😊",
    "💖",
    "✨",
    "🔥",
    "💫",
    "⭐",
    "🎉",
    "💕",
    "🌟",
    "💗",
    "😘",
    "🤗",
    "💜",
  ];

  return (
    <>
      <section className="relative overflow-hidden">
        {/* Floating background emojis */}
        <div className="absolute inset-0 -z-10">
          {EMOJI_LIST.map((emoji, index) => (
            <span
              key={index}
              className="emoji-float"
              style={{
                left: `${Math.random() * 100}%`,
                bottom: `${Math.random() * 20}%`,
                animationDuration: `${12 + Math.random() * 10}s`,
                animationDelay: `${Math.random() * 8}s`,
              }}
            >
              {emoji}
            </span>
          ))}
        </div>
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex justify-center flex-col gap-5 order-2 md:order-1">
            <span className="text-foreground text-2xl font-semibold tracking-tight flex flex-col">
              <span>
                Hidden&nbsp;
                <span className="bg-text-muted text-background px-1 py-0.5">
                  TikTok
                </span>
                &nbsp;Emojis
              </span>
              <h2>Copy & Download TikTok Emojis as Transparent PNGs</h2>
            </span>

            <p className="tracking-wide *:bg-text-muted *:px-1 *:py-0.5 *:text-background">
              Stand out in TikTok comments using secret emoji codes like &nbsp;
              <span>[proud]</span>,&nbsp;
              <span>[happy]</span>, or <span>[shock]</span>. Copy hidden TikTok
              emojis instantly or download transparent PNGs to use as stickers,
              overlays, memes, or reactions across other apps.
            </p>
          </div>
          <div className="order-1 md:order-2 flex justify-center items-center">
            <img
              className="w-[80%]"
              src="/secret-emojis-hero.png"
              alt="secret-tiktok-emoji"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
