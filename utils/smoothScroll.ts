import React from "react";

export const handleLinkClick = (
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string
) => {
  e.preventDefault();
  const targetElement = document.querySelector(href);
  if (targetElement) {
    const offset = -85;
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY + offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};
