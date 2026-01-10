"use client";

import { useState } from "react";

type CopyButtonProps = {
  code: string;
};

const CopyButton = ({ code }: CopyButtonProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <button
      title="click to copy"
      onClick={handleCopy}
      className="cursor-pointer animate-pulse-attention px-4 py-3 rounded-md hover:text-secondary transition-all duration-300"
      aria-label={`Copy TikTok emoji code ${code}`}
    >
      {copied ? "Copied!" : code}
    </button>
  );
};

export default CopyButton;
