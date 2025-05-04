import React from "react";
import SkillsIcon from "./SkillsIcon";
import { InfiniteSlider } from "./motion-primitives/infinite-slider";
import { icons } from "@/lib/icons/icons";

const Skills = () => {
  return (
    <div className="w-full">
      <InfiniteSlider gap={40} speedOnHover={40} reverse>
        <SkillsIcon icon={icons.react} height={60} />
        <SkillsIcon icon={icons.nextjs} height={60} />
        <SkillsIcon icon={icons.mongodb} height={60} />
        <SkillsIcon icon={icons.expressjs} height={60} />
        <SkillsIcon icon={icons.nodejs} height={60} />
        <SkillsIcon icon={icons.javascript} height={60} />
        <SkillsIcon icon={icons.typescript} height={60} />
        <SkillsIcon icon={icons.tailwindcss} height={60} />
        <SkillsIcon icon={icons.git} height={60} />
        <SkillsIcon icon={icons.github} height={60} />
        <SkillsIcon icon={icons.html} height={60} />
        <SkillsIcon icon={icons.css} height={60} />
      </InfiniteSlider>
    </div>
  );
};

export default Skills;
