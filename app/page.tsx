import PixelTrail from "@/fancy/components/background/pixel-trail";
import React from "react";

const Home: React.FC = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center ">
      <div className="absolute inset-0 z-0">
        <PixelTrail
          pixelSize={14}
          fadeDuration={500}
          pixelClassName="bg-white"
        />
      </div>

      <div className="justify-center items-center flex flex-col w-full h-full">
        <h2 className="font-tiny5 text-3xl sm:text-4xl md:text-6xl uppercase">
          Hello World!
        </h2>
        <p className="pt-0.5 sm:pt-2 text-xs sm:text-base md:text-xl">
          Make the web fun again.
        </p>
      </div>
    </div>
  );
};

export default Home;
