import React from "react";
import { v4 as uuidv4 } from "uuid";

const PackCard = ({ choice }) => {
  const { pack, price, details } = choice;

  return (
    <div className="pack-card">
      <div className="ribbon-wrapper">
        <div className="ribbon text-center">{pack}</div>
      </div>
      <br />
      <div className="detail-list">
        <div className=" text-center">{price}</div>
        <ul>
          {details.map((el) => (
            <li key={uuidv4()}>{el}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PackCard;
