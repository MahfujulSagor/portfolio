import Projects from "@/components/Projects";
// import PixelTrail from "@/fancy/components/background/pixel-trail";
import React from "react";

const Home: React.FC = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto min-h-screen flex flex-col gap-12 justify-center items-center">
      {/* <div className="absolute inset-0 z-0">
        <PixelTrail
          pixelSize={14}
          fadeDuration={500}
          pixelClassName="bg-white"
        />
      </div> */}
      <Projects />
    </div>
  );
};

export default Home;
