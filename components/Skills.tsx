import React from "react";
import react from "@/public/react-js-icon.svg";
import nextjs from "@/public/nextjs-icon.svg";
import mongodb from "@/public/mongodb-icon.svg";
import expressjs from "@/public/express-js-icon.svg";
import nodejs from "@/public/node-js-icon.svg";
import javascript from "@/public/javascript-programming-language-icon.svg";
import typescript from "@/public/typescript-programming-language-icon.svg";
import tailwindcss from "@/public/tailwind-css-icon.svg";
import git from "@/public/git-icon.svg";
import github from "@/public/github-icon.svg";
import html from "@/public/html-icon.svg";
import css from "@/public/css-icon.svg";
import SkillsIcon from "./SkillsIcon";
import { InfiniteSlider } from "./motion-primitives/infinite-slider";

const Skills = () => {
  return (
    <div className="w-full">
      <InfiniteSlider gap={40} speedOnHover={40} reverse>
        <SkillsIcon icon={react} />
        <SkillsIcon icon={nextjs} />
        <SkillsIcon icon={mongodb} />
        <SkillsIcon icon={expressjs} />
        <SkillsIcon icon={nodejs} />
        <SkillsIcon icon={javascript} />
        <SkillsIcon icon={typescript} />
        <SkillsIcon icon={tailwindcss} />
        <SkillsIcon icon={git} />
        <SkillsIcon icon={github} />
        <SkillsIcon icon={html} />
        <SkillsIcon icon={css} />
      </InfiniteSlider>
    </div>
  );
};

export default Skills;
