import React, { useState, useEffect } from "react";
import "./whyUs.css";
import Reason from "./Reason";
import { reasonTab } from "./data";
const WhyUs = () => {
  const [reasons, setReasons] = useState([]);

  const loadReasons = () => setReasons([...reasonTab]);

  useEffect(() => loadReasons(), []);

  return (
    <section id="whyUs" className="section-pourquoi">
      <div className="pourquoi section-title text-center">Pourquoi Nous?</div>
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
