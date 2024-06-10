import React from "react";

const PackSansRibbon = ({ choix }) => {
  const { price, details } = choix;
  return (
    <div className="pack_detail">
      <div className="detail_list">
        {/* <div className="price_tag shrink_text text-center">{el.price}</div> */}
        <div
          dangerouslySetInnerHTML={{ __html: price.replace("<>", "") }}
          className="price_tag shrink_text text-center"
        />
        <ul className="shrink_text">
          {details.map((detail, index) => (
            <li key={Math.round(index * 3)}>{detail}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PackSansRibbon;
