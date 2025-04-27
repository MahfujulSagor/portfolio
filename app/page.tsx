import About from "@/components/About";
import Footer from "@/components/Footer";
import Introduction from "@/components/Introduction";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import React from "react";

const Home: React.FC = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto min-h-screen justify-center items-center">
      {/* Navbar */}
      <Navbar />

      {/* Introduction section */}
      <Introduction />

      {/* Projects section */}
      <Projects />
      {/* End of scroll animation */}
      <div className="min-h-screen animation-end"></div>

      {/* About section */}
      <About />

      {/* Footer section */}
      <Footer />
    </div>
  );
};

export default Home;
