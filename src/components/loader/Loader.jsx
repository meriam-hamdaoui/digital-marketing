import React from "react";
import "./loader.css";
import IconComponent, { URL } from "components/acceuil/IconComponent";

const Loader = () => {
  const loaderIcons = URL.slice(0, 5);

  return (
    <div className="loader">
      {loaderIcons.map((el) => (
        <IconComponent key={el.name} url={el.url} />
      ))}
    </div>
  );
};

export default Loader;
