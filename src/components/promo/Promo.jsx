import React from "react";
import "./promo.css";
import trendyLogo from "assets/img/trendy_logo.png";

const Promo = () => {
  return (
    <section className="promo">
      <div className="profiter">
        <h1>
          Profitez{" "}
          <span style={{ color: " rgb(186, 8, 208, 0.85)" }}>20%*</span>
        </h1>
        <p>*lors du mois d'ouverture</p>
      </div>

      <div className="promo_logo">
        <img src={trendyLogo} alt="agency logo" className="img-fluid" />
      </div>

      <div className="sponsoring text-center">
        <h1>
          Sponsoring <span className="highlight">GRATUIT</span>
        </h1>
        <p className="shrink_text">
          lors de votre innscription au service Community Manager
        </p>
      </div>
    </section>
  );
};

export default Promo;
