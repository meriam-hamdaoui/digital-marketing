import React from "react";
import "./loader.css";
import IconComponent, { URL } from "components/acceuil/IconComponent";

const Loader = () => {
  return (
    <div className="loader">
      {URL.map((el) => (
        <IconComponent key={el.name} url={el.url} />
      ))}
      {/* <h1 className="loading_txt">
        TRENDY <br /> AGENCY...
      </h1> */}
    </div>
  );
};

export default Loader;
