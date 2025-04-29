"use client";
import { AboutMe } from "@/lib/about/about";
import gsap from "gsap";
import React, { useEffect } from "react";
import Skills from "./Skills";

const About = () => {
  const heading = React.useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    if (!heading) return;

    gsap.from(heading.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: heading.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <div
      id="about"
      className="relative z-2 min-h-screen flex flex-col gap-26 items-center mb-26"
    >
      <h3
        ref={heading}
        className="md:text-5xl sm:text-4xl text-3xl font-bold text-center"
      >
        About Me
      </h3>
      <div className="w-full space-y-8">
        <div className="border bg-muted rounded-4xl md:px-8 sm:px-6 px-4 sm:py-8 py-4 md:text-xl sm:text-base text-sm text-muted-foreground flex flex-col gap-8 items-center">
          <div>
            <h4 className="uppercase text-ring sm:text-sm text-xs">TODAY</h4>
            <p>{AboutMe?.today?.text}</p>
          </div>
          <div>
            <h4 className="uppercase text-ring sm:text-sm text-xs">GROWTH</h4>
            <p>{AboutMe?.growth?.text}</p>
          </div>
          <div>
            <h4 className="uppercase text-ring sm:text-sm text-xs">GOAL</h4>
            <p>{AboutMe?.goal?.text}</p>
          </div>
          <div>
            {/* <h4 className="uppercase text-ring sm:text-sm text-xs">CONNECT</h4> */}
            <p>{AboutMe?.connect?.text}</p>
          </div>
        </div>
        {/* skills */}
        <div className="w-full bg-muted py-10 rounded-4xl border">
          <Skills />
        </div>
      </div>
    </div>
  );
};

export default About;
