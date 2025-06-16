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

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      gsap.set(navigation, {
        scaleX: 1,
        width: "146px",
      });

      const showLinks = (): void => {
        gsap.to(navigation, {
          scaleX: 1,
          width: "414px",
          duration: 0.8,
          ease: "elastic.out(1, 0.8)",
        });
      };

      const hideLinks = (): void => {
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
    });

    return () => {
      mm.revert();
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
    <nav className="fixed top-0 left-0 right-0 flex items-center justify-center rounded-b-4xl w-full max-w-[1200px] max-[1199px]:px-2 h-[80px] mx-auto z-10 bg-background/80 backdrop-blur-xl">
      <div className="flex sm:justify-between justify-center items-center w-full">
        {/* Logo */}
        <div className="hidden sm:flex">
          <Logo />
        </div>

        {/* Navigation */}
        <div className="h-[50px] flex justify-center items-center">
          <ul
            id="navigation"
            className="group sm:w-full flex sm:space-x-12 space-x-6 items-center justify-center text-muted-foreground border rounded-full py-2 sm:px-6 px-4"
          >
            <li>
              <Navigation color="oklch(0.708 0 0)" />
            </li>
            <div
              id="links"
              className="md:hidden md:group-hover:flex flex md:overflow-hidden space-x-4 text-muted-foreground"
            >
              <li>
                <Link
                  href="#home"
                  className="text-lg capitalize hover:text-foreground"
                  onClick={(e) => handleLinkClick(e, "#home")}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#work"
                  className="text-lg capitalize hover:text-foreground"
                  onClick={(e) => handleLinkClick(e, "#work")}
                >
                  Work
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-lg capitalize hover:text-foreground"
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
        <div className="hidden sm:flex">
          <p className="sm:text-lg text-muted-foreground cursor-default">
            {currentTime}
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
