import React, { useState, useEffect } from "react";
// import "./packs.css";
import "./packStyle.css";
import { nosPacks } from "./nosPacks";
import PackCard from "./PackCard";

const PackSection = () => {
  const [packs, setPacks] = useState([]);

  const loadPacks = () => setPacks([...nosPacks]);

  useEffect(() => loadPacks(), []);

  return (
    <section id="packs" className="pack_section">
      <div className="section_title text-center">Nos Packs</div>
      <div className="pack_container">
        {packs.map((pack) => (
          <div key={pack.id} className="pack_service_card">
            <div className="pack_name text-center">{pack.name}</div>
            <div className="pack_card">
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
