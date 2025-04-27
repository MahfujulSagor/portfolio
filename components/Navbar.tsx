"use client";
import { handleLinkClick } from "@/utils/smoothScroll";
import gsap from "gsap";
import { Circle, Navigation } from "lucide-react";
import Link from "next/link";
import React, { useEffect } from "react";

const Navbar = () => {
  useEffect(() => {
    const navigation: HTMLElement | null =
      document.getElementById("navigation");
    const links: HTMLElement | null = document.getElementById("links");

    if (!navigation || !links) return;

    const showLinks = () => {
      gsap.set(links, { display: "flex" });
    };

    const hideLinks = () => {
      gsap.set(links, { display: "none" });
    };

    navigation.addEventListener("mouseenter", showLinks);
    navigation.addEventListener("mouseleave", hideLinks);

    // Clean up
    return () => {
      navigation.removeEventListener("mouseenter", showLinks);
      navigation.removeEventListener("mouseleave", hideLinks);
    };
  }, []);
  return (
    <nav className="fixed top-0 left-0 right-0 flex items-center justify-center rounded-b-4xl w-full max-w-[1200px] h-[80px] mx-auto z-10 bg-background/80 backdrop-blur-xl">
      <div className="flex justify-between items-center w-full">
        <div className="text-2xl font-bold">Portfolio</div>
        {/* Navigation */}
        <div className="h-full flex justify-center items-center">
          <ul
            id="navigation"
            className="flex space-x-12 transition-all items-center text-muted-foreground border border-dashed rounded-full py-2 px-6"
          >
            <li>
              <Navigation color="oklch(0.708 0 0)" />
            </li>
            <div
              id="links"
              className="hidden space-x-4 text-muted-foreground transition-all"
            >
              <li>
                <Link
                  href="#home"
                  className="text-lg capitalize"
                  onClick={(e) => handleLinkClick(e, "#home")}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#work"
                  className="text-lg capitalize"
                  onClick={(e) => handleLinkClick(e, "#work")}
                >
                  Work
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-lg capitalize"
                  onClick={(e) => handleLinkClick(e, "#about")}
                >
                  About Me
                </Link>
              </li>
            </div>
            <li>
              <Circle color="oklch(0.708 0 0)" />
            </li>
          </ul>
        </div>

        {/* Time */}
        <div className="">
          <p className="text-lg text-muted-foreground">
            {new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
