"use client";

import { useTheme } from "next-themes";
import Image from "next/image";

export const Footer = () => {
  const { resolvedTheme } = useTheme();
  const image = resolvedTheme === "dark" ? "light" : "dark";
  return (
    <footer className="flex items-center justify-center">
      Powered By
      <Image
        src={`https://assets.stackrlabs.xyz/${image}.svg`}
        width={100}
        height={100}
        alt="stackr-logo"
      />
    </footer>
  );
};
