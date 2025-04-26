import { projects } from "@/lib/projects/projects";
import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <div className="flex flex-col gap-12 justify-center items-center w-full min-h-screen">
      {projects.map((project, index) => {
        return (
          <div
            key={index}
            className="w-full max-w-[1200px] mx-auto flex gap-4 p-8 md:p-16 border rounded-4xl min-h-[65vh]"
          >
            <div className="flex flex-col gap-4 justify-center">
              <p className="text-2xl">{project.name}</p>
              <p>{project.description}</p>
            </div>
            <div className="w-full flex justify-center items-center">
              <Image
                src={project.image}
                height={400}
                width={400}
                alt={`project preview ${index}`}
                loading="lazy"
                className="object-cover"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
