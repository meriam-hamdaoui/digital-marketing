import React from "react";

const ReasonCard = ({ reason }) => {
  const { order, name, imgSrc, text } = reason;
  return (
    <div className={`reason_card ${name}`}>
      <div className={`reason_img `} style={{ order: order }}>
        <img src={imgSrc} alt="reason" />
      </div>
      <div className="reason_text p-3">
        <p className="shrink-text">{text}</p>
      </div>
    </div>
  );
};

export default ReasonCard;
