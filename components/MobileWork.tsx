import { mobileProjects } from "@/lib/projects/projects";
import Image from "next/image";
import React from "react";

const MobileWork = () => {
  return (
    <div className="relative w-full aspect-[16/9] bg-black/80 rounded-2xl p-2">
      <Image
        src={mobileProjects[0].image}
        alt="ImageFlux mobile screenshot"
        fill
        className="object-contain rounded-xl"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  );
};

export default MobileWork;
