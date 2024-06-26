import React, { useState, useEffect } from "react";
import "./pourquoi.css";
import ReasonCard from "./ReasonCard";
import { reasonTab } from "./data";

const Pourquoi = () => {
  const [reasons, setReasons] = useState([]);

  const loadReasons = () => setReasons([...reasonTab]);

  useEffect(() => loadReasons(), []);

  return (
    <section id="whyUs" className="section_pourquoi">
      <div className="section_title text-center">Pourquoi Nous?</div>
      <div className="reason_container">
        {reasons.map((reason) => (
          <ReasonCard key={reason.id} reason={reason} />
        ))}
      </div>
    </section>
  );
};

export default Pourquoi;
