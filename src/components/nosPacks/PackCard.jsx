import React from "react";
import { v4 as uuidv4 } from "uuid";

const PackCard = ({ choice }) => {
  const { price, details } = choice;

  return (
    <div className="pack-card">
      <p>{price}</p>
      <ul>
        {details.map((el) => (
          <li key={uuidv4()}>{el}</li>
        ))}
      </ul>
    </div>
  );
};

export default PackCard;
