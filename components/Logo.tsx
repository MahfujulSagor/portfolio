import Image from "next/image";
import React from "react";
import logo from "@/public/logo.svg";

const Logo = () => {
  return (
    <Image
      src={logo}
      width={100}
      height={100}
      loading="lazy"
      alt="Mahfujul_Sagor"
      className="object-cover hidden sm:flex"
    />
  );
};

export default Logo;
