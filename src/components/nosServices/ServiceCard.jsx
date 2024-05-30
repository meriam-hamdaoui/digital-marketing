import React from "react";

const ServiceCard = ({ service }) => {
  const { title, img, style, desc } = service;

  return (
    <div className="card">
      <div className="card-side front">
        <img src={img} alt="service-img" style={style} />
        <div
          className="card-title text-center"
          style={{ color: "white", lineHeight: "2rem" }}
        >
          {title}
        </div>
      </div>
      <div className="card-side back">
        <div className="shrink-text card-p">{desc}</div>
      </div>
    </div>
  );
};

export default ServiceCard;
