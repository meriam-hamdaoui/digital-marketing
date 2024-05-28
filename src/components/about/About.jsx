import React from "react";
import "./about.css";
import trendyBrochure from "../../assets/img/trendy-agency-removebg.png";

const About = () => {
  return (
    <section id="about">
      <div className="section-title text-center">Qui Somme-Nous?</div>
      <div className="d-flex align-items-center justify-content-around">
        <img
          className="trendy-broch"
          src={trendyBrochure}
          alt="trendy brochure"
          width={450}
          height={450}
        />
        <div className="about-text">
          <h1 className="trendy-agency-font text-center"> TRENDY AGENCY </h1>
          <br />
          <p className="agence-marketing text-center">
            Agence marketing digital spécialisée dans le réseaux sociaux,
            offrant une gamme complète de services pour aider les entreprises à
            tirer le meilleur parti de leur présence en ligne.
          </p>
          <br />
          <p className="notre-mission">
            Notre mission est de fournir à nos clients des solutions innovantes
            et personnalisées qui les aident à atteindre leurs objectifs
            commerciaux grâce à une stratégie digitale efficace.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
