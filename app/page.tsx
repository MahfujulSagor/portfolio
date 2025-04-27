import Introduction from "@/components/Introduction";
import Projects from "@/components/Projects";
import React from "react";

const Home: React.FC = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto min-h-screen justify-center items-center">
      {/* Introduction section */}
      <Introduction />
      {/* Projects section */}
      <Projects />
      {/* End of scroll animation */}
      <div className="min-h-screen animation-end"></div>

      <div className="min-h-screen">Something else</div>
    </div>
  );
};

export default Home;
