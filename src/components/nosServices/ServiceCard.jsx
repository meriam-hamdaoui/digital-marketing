import React from "react";

const ServiceCard = ({ service }) => {
  const { title, img, desc } = service;

  return (
    <div className="card">
      <div className="card-side front">
        <img src={img} alt="service-img" />
        <div className="card-title text-center shrink-text">{title}</div>
      </div>
      <div className="card-side back shrink-text card-p">
        {desc}
        {/* <div className="shrink-text card-p"></div> */}
      </div>
    </div>
  );
};

export default ServiceCard;
