import React from "react";
import { SocialIcon } from "react-social-icons";

const CustomSocialIcon = ({ url, size }) => {
  const handleClick = (event) => {
    event.preventDefault();
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div style={{ height: size, width: size }}>
      <SocialIcon
        url={url}
        style={{ height: "100%", width: "100%" }}
        onClick={handleClick}
      />
    </div>
    // <a
    //   href={url}
    //   _target="_blank"
    //   rel="noopener noreferrer"
    //   style={{ display: "inline-block", height: size, width: size }}
    // >
    //   <SocialIcon url={url} style={{ height: "100%", width: "100%" }} />
    // </a>
  );
};

export default CustomSocialIcon;
