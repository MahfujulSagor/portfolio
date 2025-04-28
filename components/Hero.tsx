"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const scrollRef1 = useRef(null);
  const scrollRef2 = useRef(null);
  useEffect(() => {
    if (!scrollRef1 || !scrollRef2) return;

    gsap.to(scrollRef1.current, {
      x: -250,
      scrollTrigger: {
        trigger: "section",
        start: "top top",
        end: "bottom top",
        scrub: 1,
        scroller: "body",
      },
    });
    gsap.to(scrollRef2.current, {
      x: 250,
      scrollTrigger: {
        trigger: "section",
        start: "top top",
        end: "bottom top",
        scrub: 1,
        scroller: "body",
      },
    });
  }, []);
  return (
    <section className="max-w-[1200px] overflow-hidden w-full min-h-screen flex justify-center items-center">
      <div className="w-full">
        <div className="flex justify-start gap-28 items-center w-full">
          <div>
            <h1
              ref={scrollRef1}
              className="text-[150px] tracking-tight font-extrabold leading-none"
            >
              Mahfujul
            </h1>
          </div>
        </div>
        <div className="w-full flex justify-end items-center">
          <h1
            ref={scrollRef2}
            className="text-[150px] tracking-tight font-extrabold leading-none"
          >
            Sagor
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
