"use client";
import Image from "next/image";
import React from "react";
import logo from "@/public/logo.svg";
import { handleLinkClick } from "@/utils/smoothScroll";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"#home"} onClick={(e) => handleLinkClick(e, "#home")}>
      <Image
        src={logo}
        width={100}
        height={100}
        loading="lazy"
        alt="Mahfujul_Sagor"
        className="object-cover hidden sm:flex"
      />
    </Link>
  );
};

export default Logo;
