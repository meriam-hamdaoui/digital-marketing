import React from "react";

const ServiceCard = ({ service }) => {
  const { title, img, desc } = service;

  return (
    <div className="card">
      <div className="card-side front">
        <img src={img} alt="" width={"60%"} height={"50%"} />
        <div>{title}</div>
      </div>
      <div className="card-side back">
        <div>{desc}</div>
      </div>
    </div>
  );
};

export default ServiceCard;
