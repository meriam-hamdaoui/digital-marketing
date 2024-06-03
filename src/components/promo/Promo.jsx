import React from "react";
import "./promo.css";
import animateLogo from "../../assets/img/logo-1.png";

const Promo = () => {
  return (
    <section className="promo">
      <div className="profiter">
        <h1>
          Profitez <span>20%*</span>
        </h1>

        <p>*lors du mois d'ouverture</p>
      </div>

      <div className="promo_logo">
        <img
          src={animateLogo}
          alt="agency logo"

          // className="img-fluid"
        />
      </div>

      <div className="sponsoring">
        <h1>
          Sponsoring <span className="highlight">GRATUIT</span>
        </h1>
        <p className="shrink-text">
          lors de votre innscription au service Community Manager
        </p>
      </div>
    </section>
  );
};

export default Promo;
