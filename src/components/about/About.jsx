import React from "react";
import "./about.css";
import trendyBrochure from "../../assets/img/trendy-agency-removebg.png";

const About = () => {
  return (
    <section id="about">
      <div className="section-title text-center qui-somme-nous">
        Qui Somme-Nous?
      </div>
      <div className="about-container d-flex flex-column align-items-center justify-content-between">
        <div className="trendy-broch" style={{ padding: "2.5rem" }}>
          <img
            src={trendyBrochure}
            alt="trendy brochure"
            width={"370rem"}
            height={"370rem"}
          />
        </div>
        <div className="d-flex">
          <div className="about-text shrink-text d-flex justify-content-center">
            <p className="agence-marketing">
              <b className="agency-name">Agence marketing digital </b>
              spécialisée dans le réseaux sociaux, offrant une gamme complète de
              services pour aider les entreprises à tirer le meilleur parti de
              leur présence en ligne.
            </p>
          </div>
          <div className="about-text shrink-text d-flex justify-content-center">
            <p className="notre-mission">
              <b className="agency-name">Notre mission </b>est de fournir à nos
              clients des solutions innovantes et personnalisées qui les aident
              à atteindre leurs objectifs commerciaux grâce à une stratégie
              digitale efficace.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
