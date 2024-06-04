import React from "react";
import { SocialIcon } from "react-social-icons";

export const URL = [
  {
    name: "instagram",
    url: "https://instagram.com/",
  },
  {
    name: "x",
    url: "https://x.com/",
  },
  {
    name: "facebook",
    url: "https://facebook.com/",
  },
  {
    name: "youtube",
    url: "https://youtube.com/",
  },
  {
    name: "tiktok",
    url: "https://tiktok.com/",
  },
  {
    name: "pinterest",
    url: "https://pinterest.com/",
  },
];
// Adjust icon size based on screen width

export const handleResize = () => {
  const icons = document.querySelectorAll(".icon");
  icons.forEach((icon) => {
    if (window.innerWidth <= 1200) {
      icon.style.width = "7rem";
      icon.style.height = "7rem";
    } else {
      icon.style.width = "8rem";
      icon.style.height = "8rem";
    }
  });
};

const IconComponent = ({ url }) => {
  const iconStyle = {
    width: "5rem", // Default width
    height: "5rem", // Default height
  };

  return <SocialIcon className="icon" url={url} style={iconStyle} />;
};

export default IconComponent;
