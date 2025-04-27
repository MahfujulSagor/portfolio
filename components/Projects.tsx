"use client";
import { projects } from "@/lib/projects/projects";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const Projects: React.FC = () => {
  useEffect(() => {
    const section = document.querySelector(".scroll-section");
    const wrapper = section?.querySelector(".wrapper");
    const items = wrapper?.querySelectorAll(".item");

    if (items) {
      items.forEach((item, index) => {
        if (index !== 0) {
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
  }, []);
  return (
    <div className={`flex flex-col gap-26 items-center w-full min-h-screen`}>
      <div>
        <h2 className="md:text-5xl text-4xl font-bold text-center flex gap-2 items-center">
          Projects ↓
        </h2>
      </div>
      <div className="scroll-section w-full min-h-screen">
        <div className={`wrapper min-h-[200vh]`}>
          <div className="list relative flex flex-col min-h-[65vh]">
            {projects.map((project, index) => {
              return (
                <div
                  key={index}
                  className="item absolute inset-0 bg-background w-full max-w-[1200px] mx-auto flex gap-4 p-8 md:p-16 border rounded-4xl min-h-[65vh]"
                >
                  <div className="flex flex-col gap-4 justify-center">
                    <p className="text-2xl">{project.name}</p>
                    <p>{project.description}</p>
                  </div>
                  <div className="w-full flex justify-center items-center">
                    <Image
                      src={project.image}
                      height={800}
                      width={800}
                      alt={`project preview ${index}`}
                      loading="lazy"
                      className="object-cover"
                    />
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

export default Projects;
