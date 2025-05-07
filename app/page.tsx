import About from "@/components/About";
import Footer from "@/components/Footer";
import Introduction from "@/components/Introduction";
import Navbar from "@/components/Navbar";
import SelectedWork from "@/components/SelectedWork";
import React from "react";

const Home: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-background px-2">
      <div className="w-full max-w-[1200px] mx-auto min-h-screen">
        {/* Navbar */}
        <Navbar />
        {/* Introduction section */}
        <Introduction />
        {/* Projects section */}
        <SelectedWork />
        {/* End of scroll animation */}
        <div className="md:min-h-screen min-h-26 animation-end"></div>
        {/* About section */}
        <About />
        {/* Footer section */}
        <Footer />
      </div>
    </div>
  );
};

export default Home;
