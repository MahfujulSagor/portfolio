import React from "react";
import SkillsIcon from "./SkillsIcon";
import { InfiniteSlider } from "./motion-primitives/infinite-slider";
import { icons } from "@/lib/icons/icons";

const Skills = () => {
  return (
    <div className="w-full">
      <InfiniteSlider gap={40} speedOnHover={40} reverse>
        {Object.values(icons).map((icon, index) => {
          return <SkillsIcon key={index} icon={icon} height={60} />;
        })}
      </InfiniteSlider>
    </div>
  );
};

export default Skills;
