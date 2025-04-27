import React from "react";
import FooterContents from "./FooterContents";

const Footer = () => {
  return (
    <div
      className="relative w-full h-[500px] bg-secondary rounded-t-4xl border"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0% 100%)" }}
    >
      <div className="relative h-[calc(100vh+500px)] -top-[100vh]">
        <div className="sticky top-[calc(100vh-500px)] h-[500px]">
          <FooterContents />
        </div>
      </div>
    </div>
  );
};

export default Footer;
