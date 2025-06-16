"use client";
import { projects } from "@/lib/projects/projects";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import WorkStack from "./WorkStack";
import MobileWork from "./MobileWork";

gsap.registerPlugin(ScrollTrigger);

const SelectedWork = () => {
  const selectedwork = useRef<HTMLHeadingElement | null>(null);
  const scrollSectionRef = useRef<HTMLDivElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);

  //? Clear refs on re-render to avoid stale elements
  itemsRef.current = [];

  const addToItemsRef = (el: HTMLDivElement | null) => {
    if (el && !itemsRef.current.includes(el)) {
      itemsRef.current.push(el);
    }
  };

  useEffect(() => {
    const width = window.innerWidth;
    const section = scrollSectionRef.current;
    const items = itemsRef.current;

    if (width < 768) return;

    if (items) {
      items.forEach((item: HTMLDivElement, index) => {
        if (index != 0) {
          gsap.set(item, { yPercent: 150 });
        }
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          pin: true,
          start: "top 15%",
          end: "bottom top",
          scrub: 1,
          invalidateOnRefresh: true,
        },
        defaults: { ease: "power1.inOut" },
      });

      items.forEach((item, index) => {
        timeline.to(item, { scale: 0.9 });
        timeline.to(items[index + 1], { yPercent: 0 }, "<");
      });
    }

    if (!selectedwork.current) return;

    gsap.from(selectedwork.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: selectedwork.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }, []);
  return (
    <div
      id="work"
      className={`flex flex-col gap-26 items-center w-full min-h-screen`}
    >
      <div>
        <h2
          ref={selectedwork}
          className="md:text-5xl sm:text-4xl text-3xl font-bold text-center flex gap-2 items-center cursor-default"
        >
          Selected Work ↓
        </h2>
      </div>
      <div
        ref={scrollSectionRef}
        className="scroll-section w-full min-h-screen"
      >
        <div ref={wrapperRef} className={`wrapper md:min-h-[200vh]`}>
          <div className="list relative flex flex-col md:gap-0 gap-26 min-h-[65vh]">
            {projects.map((project, index) => {
              return (
                <div
                  key={index}
                  ref={addToItemsRef}
                  className="item max-md:static md:absolute md:inset-0 bg-secondary w-full max-w-[1200px] mx-auto flex gap-4 max-md:flex-col-reverse p-4 sm:p-8 md:p-12 border rounded-4xl min-h-[65vh]"
                >
                  <div className="flex md:flex-1 flex-col gap-4 justify-center">
                    <p className="md:text-4xl text-2xl font-bold">
                      {project.name}
                    </p>
                    <hr />
                    <p className="text-sm lg:text-base">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap items-center gap-4">
                      {project.icons.map((icon, index) => {
                        return (
                          <WorkStack
                            key={index}
                            icon={icon.icon}
                            height={icon.height}
                          />
                        );
                      })}
                    </div>
                  </div>
                  <div className="w-full md:flex-1 flex justify-center items-center">
                    <div className="relative w-full aspect-[16/9]">
                      {project.type === "mobile" ? (
                        <MobileWork />
                      ) : (
                        <Image
                          src={project.image}
                          sizes="(max-width: 768px) 100vw, 50vw"
                          alt={`project preview ${index}`}
                          loading="lazy"
                          fill
                          className="object-fit rounded-2xl w-full"
                        />
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedWork;
