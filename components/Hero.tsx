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
    if (!info1.current || !info2.current) return;

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
  return (
    <section className="max-w-[1200px] overflow-hidden w-full min-h-screen flex justify-center items-center">
      <div className="w-full">
        <div className="flex justify-start gap-28 items-center w-full">
          <div className="w-full flex gap-6 justify-start items-center">
            <h1
              ref={scrollRef1}
              className="text-[150px] tracking-tighter font-extrabold leading-none"
            >
              Mahfujul
            </h1>
            <div ref={info1} id="info1" className="">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus repellat nobis laboriosam itaque, sequi facilis.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-end items-center">
          <div ref={info2} id="info2">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              consectetur maxime distinctio quod facere amet blanditiis labore.
            </p>
          </div>
          <h1
            ref={scrollRef2}
            className="text-[150px] tracking-tighter font-extrabold leading-none"
          >
            Sagor
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
