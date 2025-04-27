"use client";
import ComesInGoesOutUnderline from "@/fancy/components/text/underline-comes-in-goes-out";
import { handleLinkClick } from "@/utils/smoothScroll";
import Link from "next/link";
import React from "react";

const FooterContents = () => {
  return (
    <div className="content p-10 flex flex-col items-center justify-around min-h-full">
      <p className="text-2xl font-semibold text-center">
        👋 Thanks for stopping by :)
      </p>
      <div className="grid grid-cols-2 place-items-center w-full">
        {/* navigation */}
        <div className="Navigation flex flex-col gap-6">
          <p className="text-sm text-ring uppercase">NAVIGATION</p>
          <div className="flex flex-col gap-3 md:text-xl text-muted-foreground capitalize">
            <Link href={"#home"} onClick={(e) => handleLinkClick(e, "#home")}>
              <ComesInGoesOutUnderline label="Home" direction="left" />
            </Link>
            <Link href={"#work"} onClick={(e) => handleLinkClick(e, "#work")}>
              <ComesInGoesOutUnderline label="Work" direction="left" />
            </Link>
            <Link href={"#about"} onClick={(e) => handleLinkClick(e, "#about")}>
              <ComesInGoesOutUnderline label="About Me" direction="left" />
            </Link>
          </div>
        </div>

        {/* let's connect */}
        <div className="Connections flex flex-col gap-6">
          <p className="text-sm text-ring uppercase">LET&apos;S CONNECT</p>
          <div className="flex flex-col text-muted-foreground gap-3 md:text-xl">
            <Link
              href={"https://www.linkedin.com/in/mahfujul-sagor"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ComesInGoesOutUnderline label="LinkedIn" direction="right" />
            </Link>
            <Link
              href={"https://github.com/MahfujulSagor"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ComesInGoesOutUnderline label="GitHub" direction="right" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterContents;
