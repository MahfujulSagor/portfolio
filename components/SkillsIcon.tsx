import React from "react";
import Image, { StaticImageData } from "next/image";

const SkillsIcon = ({ icon }: { icon: StaticImageData }) => {
  return (
    <Image
      src={icon}
      alt="skills"
      height={60}
      loading="lazy"
      className="object-cover"
    />
  );
};

export default SkillsIcon;
