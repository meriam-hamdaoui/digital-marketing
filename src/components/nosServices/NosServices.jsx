import React from "react";
import "./nosServices.css";
import presentation from "../../assets/img/plan-presentation.png";
import accompagner from "../../assets/img/accompagner.png";
import objectif from "../../assets/img/objectif.png";

const NosServices = () => {
  return (
    <section
      id="services"
      className="services d-flex flex-column justify-content-between"
    >
      <div className="service-title section-title text-center">
        Nos Services
      </div>
      <div className="service-container d-flex justify-content-around">
        <div className="service">
          <img src={presentation} alt="plan presentation" />
          <p className="shrink-text">
            Nous vous soutenons à toutes les étapes de votre entreprise, de sa
            création jusqu'à sa commercialisation, et même plus loin.
          </p>
        </div>
        <div className="service">
          <img src={accompagner} alt="accompagner" />
          <p className="shrink-text">
            Nous sommes là pour vous accompagner dans une meilleure
            compréhension du marketing digital et du consulting.
          </p>
        </div>
        <div className="service">
          <img src={objectif} alt="objectives" />
          <p className="shrink-text">
            Notre objectif, à nous et à vous, est de fidéliser les clients.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NosServices;
