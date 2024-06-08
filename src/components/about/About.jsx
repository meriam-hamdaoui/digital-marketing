import React from "react";
import "./about.css";
import trendyBrochure from "../../assets/img/trendy-agency-removebg.png";

const About = () => {
  return (
    <section id="about">
      <h2 className="section_title text-center qui-somme-nous">
        Qui Sommes-Nous?
      </h2>
      <div className="about_container">
        <div className="trendy_broch">
          <img
            src={trendyBrochure}
            alt="trendy brochure"
            className="img-fluid"
          />
        </div>
        <div className="about_paragraph paragraph_font">
          <div className="shrink_text">
            <p className="agence_marketing">
              <b className="trendy_agency">Agence marketing digital </b>
              spécialisée dans les réseaux sociaux, offrant une gamme complète
              de services pour aider les entreprises à tirer le meilleur parti
              de leur présence en ligne.
            </p>
          </div>
          <div className="shrink_text">
            <p className="notre_mission">
              <b className="trendy_agency">Notre mission </b>est de fournir à
              nos clients des solutions innovantes et personnalisées qui les
              aident à atteindre leurs objectifs commerciaux grâce à une
              stratégie digitale efficace.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
