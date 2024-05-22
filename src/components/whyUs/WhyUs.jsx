import React from "react";
import "./whyUs.css";
import Reason from "./Reason";
import { reasons } from "./data";
const WhyUs = () => {
  return (
    <section id="whyUs">
      <h3 className="text-center">Pourquoi Nous?</h3>
      <div className="reasons">
        {reasons.map((el) => (
          <Reason
            key={el.id}
            imgSrc={el.imgSrc}
            text={el.text}
            order={el.order}
            style={el.style}
          />
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
