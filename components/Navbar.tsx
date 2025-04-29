"use client";
import { handleLinkClick } from "@/utils/smoothScroll";
import gsap from "gsap";
import { Circle, Navigation } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Logo from "./Logo";

const Navbar = () => {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    })
  );

  useEffect(() => {
    const navigation: HTMLElement | null =
      document.getElementById("navigation");
    const links: HTMLElement | null = document.getElementById("links");

    if (!navigation || !links) return;

    const showLinks = () => {
      gsap.to(navigation, {
        scaleX: 1,
        width: "414px",
        duration: 0.8,
        ease: "elastic.out(1, 0.8)",
      });
    };

    const hideLinks = () => {
      gsap.to(navigation, {
        scaleX: 1,
        width: "146px",
        duration: 0.8,
        ease: "elastic.out(1, 0.8)",
      });
    };

    navigation.addEventListener("mouseenter", showLinks);
    navigation.addEventListener("mouseleave", hideLinks);

    //? Clean up
    return () => {
      navigation.removeEventListener("mouseenter", showLinks);
      navigation.removeEventListener("mouseleave", hideLinks);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 flex items-center justify-center rounded-b-4xl w-full max-w-[1200px] h-[80px] mx-auto z-10 bg-background/80 backdrop-blur-xl">
      <div className="flex justify-between items-center w-full">
        <div className="">
          <Logo />
        </div>
        {/* Navigation */}
        <div className="h-[50px] flex justify-center items-center">
          <ul
            id="navigation"
            className="group flex space-x-12 items-center justify-center text-muted-foreground border rounded-full py-2 px-6 transition-transform"
          >
            <li>
              <Navigation color="oklch(0.708 0 0)" />
            </li>
            <div
              id="links"
              className="hidden group-hover:flex overflow-hidden space-x-4 text-muted-foreground"
            >
              <li>
                <Link
                  href="#home"
                  className="sm:text-lg capitalize hover:text-foreground"
                  onClick={(e) => handleLinkClick(e, "#home")}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#work"
                  className="sm:text-lg capitalize hover:text-foreground"
                  onClick={(e) => handleLinkClick(e, "#work")}
                >
                  Work
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="sm:text-lg capitalize hover:text-foreground"
                  onClick={(e) => handleLinkClick(e, "#about")}
                >
                  About
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
          <p className="sm:text-lg text-muted-foreground cursor-default">
            {currentTime}
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
