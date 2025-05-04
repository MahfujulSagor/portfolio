import React from "react";
import Image, { StaticImageData } from "next/image";

const SkillsIcon = ({
  icon,
  height,
}: {
  icon: StaticImageData;
  height: number;
}) => {
  return (
    <Image
      src={icon}
      alt="skills"
      height={height || 60}
      loading="lazy"
      className="object-cover"
    />
  );
};

export default SkillsIcon;
