import React, { useState, useEffect } from "react";
import "./pourquoi.css";
import ReasonCard from "./ReasonCard";
import { reasonTab } from "./data";

const Pourquoi = () => {
  const [reasons, setReasons] = useState([]);

  const loadReasons = () => setReasons([...reasonTab]);

  useEffect(() => loadReasons(), []);

  return (
    <section
      id="pourquoi"
      className="section_pourquoi d-flex align-items-center justify-content-center"
    >
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
