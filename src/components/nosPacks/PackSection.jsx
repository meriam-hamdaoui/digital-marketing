import React, { useState, useEffect } from "react";
import "./packs.css";
import { nosPacks } from "./nosPacks";
import PackCard from "./PackCard";

const PackSection = () => {
  const [packs, setPacks] = useState([]);

  const loadPacks = () => setPacks([...nosPacks]);

  useEffect(() => loadPacks(), []);

  return (
    <section
      id="packs"
      className="pack-section d-flex flex-column justify-content-between align-items-center"
    >
      <div className="section-title text-center">Nos Packs</div>
      <div className="pack-container">
        {packs.map((pack) => (
          <div key={pack.id} className="pack">
            <h6 className="pack-title">{pack.name}</h6>
            <div className="pack-detail">
              {pack.choices.map((choice) => (
                <PackCard key={choice.id} choice={choice} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PackSection;
