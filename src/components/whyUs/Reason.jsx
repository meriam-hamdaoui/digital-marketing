import React from "react";

const Reason = ({ order, style, imgSrc, text }) => {
  return (
    <div className="reason-card d-flex" style={style}>
      <div className="img-container" style={{ order: order }}>
        <img src={imgSrc} alt="reason" width={200} height={200} />
      </div>
      <div className="reason-text">
        <p className="shrink-text">{text}</p>
      </div>
    </div>
  );
};

export default Reason;
