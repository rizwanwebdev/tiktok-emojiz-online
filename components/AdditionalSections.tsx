import { emojis } from "@/data/emojis";
const AdditionalSections = () => {
  return (
    <>
      <section>
        <div className="container-custom space-y-4">
          <div className="space-y-2">
            <h2 className="text-center">What Are TikTok Emojis?</h2>
            <p>
              TikTok emojis are custom reaction icons designed specifically for
              the TikTok platform. Unlike standard emojis found on mobile
              keyboards, these icons appear only when their unique text codes
              are typed. They function inside TikTok comments, captions, and
              direct messages. Outside the app, these emojis are typically
              shared as transparent PNG images rather than interactive emojis.
            </p>
          </div>
          <div className="space-y-2">
            <h2 className="text-center">
              Why Are They Called “Secret” TikTok Emojis?
            </h2>
            <p>
              These emojis are often described as “secret” because they are not
              visible on regular emoji keyboards and are exclusive to TikTok’s
              interface. Many users discover them only after seeing others use
              the special codes. Mixing these hidden emojis with standard ones
              often surprises viewers who are unfamiliar with how they work,
              which adds to their mystery.
            </p>
          </div>
          <div className="space-y-2">
            <h2 className="text-center">TikTok Emoji Codes Explained</h2>
            <p>
              Each TikTok emoji is triggered by a specific text code written
              inside square brackets. These codes act as commands that TikTok
              recognizes and replaces with the corresponding emoji. When TikTok
              introduced this system, it intentionally kept the emojis separate
              from traditional keyboards, limiting their automatic conversion to
              the TikTok app only.
            </p>
          </div>
          <div className="space-y-2">
            <h2 className="text-center">TikTok Emoji PNG Files</h2>
            <p>
              TikTok emoji PNGs allow these expressions to be used beyond the
              platform. Since they come with transparent backgrounds, they are
              commonly used as stickers, overlays, reaction images, and emotes
              on platforms like Discord or messaging apps. Their expressive
              designs have also made them popular in memes, digital artwork, and
              creative content across the web.
            </p>
            <div className="mt-2 flex justify-center items-center overflow-hidden rounded-2xl">
              <img
                src="/secret-emojis.png"
                alt="TikTok Emoji PNG Files"
                className="lg:w-[80%] aspect-video rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container-custom space-y-5">
          <div className="space-y-2">
            <h2 className="text-center">How to Use TikTok Emojis</h2>
            <p>
              Using TikTok emojis is straightforward once you know how the codes
              work. Follow these steps to start using them in comments or
              messages:
            </p>
            <ol className="list-decimal px-3 space-y-2">
              <li>
                <span>Pick an emoji</span>
                <p>
                  Browse the emoji list and choose one that matches your mood or
                  reaction.
                </p>
              </li>
              <li>
                <span>Open TikTok</span>
                <p>Go to a video’s comment section or open a direct message.</p>
              </li>
              <li>
                <span>Type the emoji code</span>
                <p>
                  Enter the emoji’s shortcode inside square brackets, such as
                  &nbsp;
                  <span className="bg-text-muted text-background px-1 py-0.5">
                    [happy]
                  </span>
                  or &nbsp;
                  <span className="bg-text-muted text-background px-1 py-0.5">
                    [shock]
                  </span>
                  .
                </p>
              </li>
              <li>
                <span>Automatic conversion</span>
                <p>
                  As soon as the code is entered, TikTok instantly turns it into
                  the matching emoji.
                </p>
              </li>
              <li>
                <span>Using emojis outside TikTok</span>
                <p>
                  To use these emojis on other platforms, download their
                  transparent PNG versions and use them as stickers or images.
                </p>
              </li>
            </ol>
          </div>
          <div className="space-y-2">
            <h2 className="text-center">TikTok Emoji Copy & Paste Method</h2>
            <ol className="list-decimal px-3">
              <li>
                <span>Choose an emoji</span>
                <p>
                  Find the emoji that fits your vibe from the complete list.
                </p>
              </li>
              <li>
                <span>Copy the code</span>
                <p>
                  Click the emoji code to copy it directly to your clipboard.
                </p>
              </li>
              <li>
                <span>Open TikTok</span>
                <p>
                  Navigate to the comments, captions, or messages where you want
                  to use it.
                </p>
              </li>
              <li>
                <span>Paste the code</span>
                <p>Paste the copied shortcode into the text field.</p>
              </li>
              <li>
                <span>Instant emoji display</span>
                <p>
                  The pasted code will immediately transform into the correct
                  TikTok emoji.
                </p>
              </li>
            </ol>
          </div>
        </div>
      </section>
      {/* display codes */}
      <section>
        <div className="container-custom flex flex-col gap-4">
          <div className="space-y-3">
            <h2 className="text-center">TikTok Emoji Meanings</h2>
            <p>
              Some TikTok emojis may be similar to each other like &nbsp;
              <span className="bg-text-muted text-background px-1 py-0.5">
                [pride]
              </span>
              and &nbsp;
              <span className="bg-text-muted text-background px-1 py-0.5">
                [proud]
              </span>
              . By knowing their meanings, it become so easy to differentiate
              between them. Here is a complete list of the emojis with their
              meanings.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            {emojis.map((emoji) => (
              <div
                key={emoji.name}
                className="flex flex-row gap-2 shadow p-4 bg-secondary/10 shadow-border"
              >
                <span className="font-semibold">{emoji.code}</span>
                <span>–</span>
                <p>{emoji.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="container-custom flex justify-center items-center flex-col gap-3">
          <h2 className="text-center">FAQs</h2>
          <div className="min-w-[80%] w-[80%] space-y-4 *:bg-foreground/10 *:text-secondary *:py-2 *:px-3 *:cursor-pointer *:rounded-xl *:border-2 *:border-accent/30">
            <details>
              <summary>What are TikTok secret emojis?</summary>
              <p>
                TikTok secret emojis are platform-specific emojis that appear
                only when their hidden shortcodes are typed. They work inside
                TikTok comments, captions, and direct messages but are not
                available on standard emoji keyboards.
              </p>
            </details>
            <details>
              <summary>What do TikTok emoji meanings represent?</summary>
              <p>
                Each TikTok emoji expresses a slightly different emotion or
                intent. For example, some emojis reflect confidence or pride,
                while others show excitement, humor, or embarrassment.
                Understanding the meanings helps you choose the right reaction.
              </p>
            </details>
            <details>
              <summary>Can I copy and paste TikTok emoji codes?</summary>
              <p>
                Yes. You can copy emoji shortcodes and paste them directly into
                TikTok comments, captions, or DMs. This is a quick way to reuse
                emojis across multiple posts without typing the codes manually.
              </p>
            </details>
            <details>
              <summary>Do TikTok emojis work outside the app?</summary>
              <p>
                As emojis, they only work inside TikTok. However, you can
                download their transparent PNG versions to use them as stickers,
                memes, overlays, or emotes on other platforms like Discord or
                messaging apps.
              </p>
            </details>
            <details>
              <summary>Are TikTok emojis free to use?</summary>
              <p>
                Yes. TikTok emojis and their codes can be used freely within the
                app, and their PNG versions are commonly shared for creative and
                personal use.
              </p>
            </details>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdditionalSections;
