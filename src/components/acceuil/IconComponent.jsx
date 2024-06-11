import React from "react";
import { SocialIcon } from "react-social-icons";

// Adjust icon size based on screen width

export const handleResize = () => {
  const icons = document.querySelectorAll(".icon");
  icons.forEach((icon) => {
    if (window.innerWidth <= 1200) {
      icon.style.width = "25px";
      icon.style.height = "25px";
    } else {
      icon.style.width = "35px";
      icon.style.height = "35px";
    }
  });
};

const IconComponent = ({ url }) => {
  const iconStyle = {
    width: "30px", // Default width
    height: "30px", // Default height
  };

  return <SocialIcon className="icon" url={url} style={iconStyle} />;
};

export default IconComponent;

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
    name: "tiktok",
    url: "https://tiktok.com/",
  },
  {
    name: "youtube",
    url: "https://youtube.com/",
  },
  {
    name: "pinterest",
    url: "https://pinterest.com/",
  },
];
