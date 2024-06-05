import React from "react";
import { v4 as uuidv4 } from "uuid";

const PackCard = ({ choice }) => {
  const { pack, price, details, style } = choice;

  return (
    <div className="pack_detail">
      <div className="ribbon_wrapper">
        <div className="ribbon text-center" style={style}>
          {pack}
        </div>
      </div>
      <br />
      <div className="detail_list">
        <div className="price_tag text-center">{price}</div>
        <ul className="shrink_text">
          {details.map((el) => (
            <li key={uuidv4()}>{el}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PackCard;
