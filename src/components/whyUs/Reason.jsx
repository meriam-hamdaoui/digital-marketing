import React from "react";

const Reason = ({ order, name, imgSrc, text }) => {
  return (
    <div className={`reason-card d-flex ${name}`}>
      <div className="img-container" style={{ order: order }}>
        <img src={imgSrc} alt="reason" width={"180rem"} height={"180rem"} />
      </div>
      <div className="reason-text p-3">
        <p className="shrink-text paragraph-font">{text}</p>
      </div>
    </div>
  );
};

export default Reason;
