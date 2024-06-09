import React from "react";
import "./about.css";
import trendyAgencyTitle from "assets/img/trendy_agency_title.png";
import logoAbout from "assets/img/trendy_logo.png";

const About = () => {
  return (
    <section id="about" className="section_about">
      <h2 className="section_title text-center qui-somme-nous">
        Qui Sommes-Nous?
      </h2>
      <div className="about_container">
        <div className="about_imgs">
          <img
            src={logoAbout}
            alt="trendy brochure"
            className="logo_about img-fluid"
          />
          <img
            src={trendyAgencyTitle}
            alt="trendy brochure"
            className="trendy_agency_title img-fluid"
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
