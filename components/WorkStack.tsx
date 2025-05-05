import { StaticImageData } from "next/image";
import React from "react";
import SkillsIcon from "./SkillsIcon";

const WorkStack = ({
  icon,
  height,
}: {
  icon: StaticImageData;
  height: number;
}) => {
  return <SkillsIcon icon={icon} height={height || 30} />;
};

export default WorkStack;
