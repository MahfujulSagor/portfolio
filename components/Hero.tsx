"use client";
import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const scrollRef1 = useRef<HTMLHeadingElement | null>(null);
  const scrollRef2 = useRef<HTMLHeadingElement | null>(null);
  const info1 = useRef<HTMLDivElement | null>(null);
  const info2 = useRef<HTMLDivElement | null>(null);
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

  useLayoutEffect(() => {
    if (
      !info1.current ||
      !info2.current ||
      !scrollRef1.current ||
      !scrollRef2.current
    )
      return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        scrollRef1.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.5,
          ease: "power1.inOut",
        }
      );

      gsap.fromTo(
        scrollRef2.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.5,
          ease: "power1.inOut",
        }
      );

      gsap.fromTo(
        info1.current,
        {
          opacity: 0,
          x: 100,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          ease: "power1.inOut",
        }
      );

      gsap.fromTo(
        info2.current,
        {
          opacity: 0,
          x: -100,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          ease: "power1.inOut",
        }
      );
    });

    return () => ctx.revert();
  }, []);
  return (
    <section
      id="home"
      className="max-w-[1200px] overflow-hidden w-full min-h-screen flex justify-center items-center"
    >
      <div className="w-full">
        <div className="flex justify-start gap-28 items-center w-full">
          <div className="w-full flex sm:gap-4 gap-2 justify-start items-center">
            <h1
              ref={scrollRef1}
              className="lg:text-[150px] md:text-[120px] max-[425px]:text-6xl sm:text-8xl text-[80px] tracking-tighter font-extrabold leading-none cursor-default"
            >
              Mahfujul
            </h1>
            <div ref={info1} id="info1" className="">
              <p className="text-muted-foreground cursor-default lg:text-base sm:text-sm text-xs hidden sm:flex">
                Software engineer with 2+ years of experience, crafting fast
                products, intuitive UIs, and scalable AI solutions.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-end items-center sm:gap-4 gap-2">
          <div ref={info2} id="info2">
            <p className="text-muted-foreground cursor-default md:text-base sm:text-sm text-xs hidden sm:flex">
              From freelance work to personal projects, I’m always learning and
              refining my craft — exploring new ideas across web and AI —
              growing one project, one challenge at a time.
            </p>
          </div>
          <h1
            ref={scrollRef2}
            className="lg:text-[150px] md:text-[120px] sm:text-8xl max-[425px]:text-6xl text-[80px] tracking-tighter font-extrabold leading-none cursor-default"
          >
            Sagor
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
