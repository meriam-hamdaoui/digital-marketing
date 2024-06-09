import React, { useState, useEffect } from "react";
import "./pack.css";
// import "./packStyle.css";
import { nosPacks } from "./nosPacks";
import PackCard from "./PackCard";

const PackSection = () => {
  const [packs, setPacks] = useState([]);

  const loadPacks = () => setPacks([...nosPacks]);

  useEffect(() => loadPacks(), []);

  return (
    <section id="packs" className="pack_section">
      <h2 className="section_title text-center">Nos Packs</h2>
      <div className="pack_container">
        {packs.map((pack) => (
          <div key={pack.id} className="pack_service_card">
            <h4 className="pack_name text-center">{pack.name}</h4>
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
