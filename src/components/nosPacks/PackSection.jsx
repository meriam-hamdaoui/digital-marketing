import React, { useState, useEffect } from "react";
import "./pack.css";
import { packAvecRibbon, packSansRibbon } from "./nosPacks";
import PackCard from "./PackCard";

const PackSection = () => {
  const [packRibbon, setPacks] = useState([]);
  const [packWithoutRibbon, setPackSansRibbon] = useState([]);

  const loadPacksRibbon = () => setPacks([...packAvecRibbon]);
  const loadPackSansRibbon = () => setPackSansRibbon([...packSansRibbon]);

  useEffect(() => {
    loadPacksRibbon();
    loadPackSansRibbon();
  }, []);

  return (
    <section id="packs" className="pack_section">
      <h2 className="section_title text-center">Nos Packs</h2>
      <div className="pack_container">
        {packRibbon.map((pack) => (
          <div key={pack.id} className="pack_service_card">
            <h4 className="pack_name text-center">{pack.name}</h4>
            <div className="pack_card">
              {pack.choices.map((choice) => (
                <PackCard key={choice.id} choice={choice} />
              ))}
            </div>
          </div>
        ))}

        {packWithoutRibbon.map((pack) => (
          <div key={pack.id} className="pack_service_card">
            <h4 className="pack_name text-center">{pack.name}</h4>
            <div
              className="pack_card d-flex justify-content-center align-items-center"
              style={{ width: "50%" }}
            >
              {pack.choice.map((el) => (
                <div className="pack_detail">
                  <div className="detail_list">
                    <div className="price_tag shrink_text text-center">
                      {el.price}
                    </div>
                    <ul className="shrink_text">
                      {el.details.map((el, index) => (
                        <li key={index * 3}>{el}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PackSection;
