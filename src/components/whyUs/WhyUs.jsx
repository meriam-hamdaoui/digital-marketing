import React from "react";
import "./whyUs.css";
import Reason from "./Reason";
import { reasons } from "./data";
const WhyUs = () => {
  return (
    <section id="whyUs" className="section-pourquoi">
      <div className="text-center pourquoi">Pourquoi Nous?</div>
      <div className="reasons">
        {reasons.map((el) => (
          <Reason
            key={el.id}
            imgSrc={el.imgSrc}
            text={el.text}
            name={el.name}
            order={el.order}
          />
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
