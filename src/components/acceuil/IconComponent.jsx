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
      icon.style.width = "50px";
      icon.style.height = "50px";
    } else {
      icon.style.width = "55px";
      icon.style.height = "55px";
    }
  });
};

const IconComponent = ({ url }) => {
  const iconStyle = {
    width: "40px", // Default width
    height: "40px", // Default height
  };

  return <SocialIcon className="icon" url={url} style={iconStyle} />;
};

export default IconComponent;
