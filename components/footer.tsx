import { Link } from "@nextui-org/link";
import React from "react";

import { TwitterIcon, DiscordIcon, GithubIcon } from "./icons";
import { ThemeSwitch } from "./theme-switch";

import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <>
      <footer className="container mx-auto max-w-7xl flex items-center justify-between p-5">
        <div>©2024 MaxShop. All rights reserved to Mustafa Ramazan.</div>
        <div>
          <Link isExternal aria-label="Twitter" href={siteConfig.links.twitter}>
            <TwitterIcon className="text-default-500" />
          </Link>
          <Link isExternal aria-label="Discord" href={siteConfig.links.discord}>
            <DiscordIcon className="text-default-500" />
          </Link>
          <Link isExternal aria-label="Github" href={siteConfig.links.github}>
            <GithubIcon className="text-default-500" />
          </Link>
          <ThemeSwitch />
        </div>
      </footer>
    </>
  );
}
