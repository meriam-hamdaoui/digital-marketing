import React from "react";
import "./about.css";
import trendyBrochure from "../../assets/img/trendy-agency-removebg.png";

const About = () => {
  return (
    <section id="about">
      <div className="section-title text-center qui-somme-nous">
        Qui Sommes-Nous?
      </div>
      <div className="about-container d-flex">
        <div className="trendy-broch">
          <img
            src={trendyBrochure}
            alt="trendy brochure"
            // className="img-fluid"
          />
        </div>
        <div className="about-text d-flex">
          <div className="shrink-text">
            <p className="agence-marketing">
              <b className="agency-name">Agence marketing digital </b>
              spécialisée dans les réseaux sociaux, offrant une gamme complète
              de services pour aider les entreprises à tirer le meilleur parti
              de leur présence en ligne.
            </p>
          </div>
          <div className="shrink-text">
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
