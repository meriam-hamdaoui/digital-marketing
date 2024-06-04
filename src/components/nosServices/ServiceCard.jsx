import React from "react";

const ServiceCard = ({ service }) => {
  const { title, img, desc } = service;

  return (
    <div className="card">
      <div className="card_side front">
        <img src={img} alt="service-img" />
        <div className="card_title text-center shrink_text">{title}</div>
      </div>
      <div className="card_side back shrink_text card_p">{desc}</div>
    </div>
  );
};

export default ServiceCard;
