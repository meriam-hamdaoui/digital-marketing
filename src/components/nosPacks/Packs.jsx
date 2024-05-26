import React from "react";
import "./packs.css";

const Packs = () => {
  return (
    <section
      id="packs"
      className="pack-section d-flex flex-column justify-content-between align-items-center"
    >
      <div className="pack-title section-title text-center">
        Qui Somme-Nous?
      </div>
      <div className="pack-container">
        <div className="pack">
          <h6>Pack Gestion Médias Sociaux</h6>
          <div className="pack-detail">
            <div className="detail-left">
              <p>PACK SIMPLE 70 dt</p>
              <ul>
                <li>sponsoring simple post 50 dt + les statistiques</li>
              </ul>
            </div>
            <div className="detail-right">
              <p>Pack Avancé 150 dt</p>
              <ul>
                <li>sponsoring post+ story+ méthodologies publicitaires</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pack">
          <h6>Pack Community Management</h6>
          <div className="pack-detail">
            <div className="detail-left">
              <p>PACK BASIQUE 480 dt/mois</p>
              <ul>
                <li>Modération Automatique</li>
                <li>Planning Editorial</li>
                <li>Réseau Sociaux</li>
              </ul>
            </div>
            <div className="detail-right">
              <p>Pack Silver 800 dt</p>
              <ul>
                <li>Modération Automatique</li>
                <li>Planning Editorial</li>
                <li>Réseau Sociaux</li>
                <li>Publications et Stories</li>
                <li>Sponsoring</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pack">
          <h6> Pack Gestion de Contenu</h6>
          <div className="pack-detail">
            <div className="detail-left">
              <p>PACK BASIQUE 700 dt /mois</p>
              <ul>
                <li>
                  Assistance à l’élaboration d’une stratégie sociale et création
                  des comptes sociaux
                </li>
                <li>Gestion et animation réseaux sociaux</li>
                <li>
                  Gestion et Assistance pour la collaboration avec les
                  influenceurs *
                </li>
                <li>Gestion des Ads</li>
              </ul>
            </div>
            <div className="detail-right">
              <p>PACK SILVER 1000 dt /mois</p>
              <ul>
                <li>
                  Assistance à l’élaboration d’une stratégie sociale et création
                  des comptes sociaux
                </li>
                <li>Gestion et animation réseaux sociaux</li>
                <li>
                  Gestion et Assistance pour la collaboration avec les
                  influenceurs *
                </li>
                <li>Gestion des Ads</li>
                <li>Analyse etreporting (mensuel)</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pack">
          <h6>Pack Influence Marketing</h6>
          <div className="pack-detail">
            A partir 100 dt: <br />- Les collaborations avec les influencers30 %
            de frais de contrat
          </div>
        </div>
        <div className="pack">
          <h6>
            Pack Stratégie de Médias Sociaux + Formation et Consultation +
            Veille Concurrentielle
          </h6>
          <div className="pack-detail">
            A partir de 1000 jusqu&#39;à 2500: -Mini formation accéléré
            -Consulting -Analyse clientèles et concurrentielles
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packs;
