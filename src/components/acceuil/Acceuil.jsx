import React from "react";
import "./acceuil.css";
import instaGirl from "../../assets/img/insta-girl-removebg.png";

const Acceuil = () => {
  return (
    <section
      id="acceuil"
      className="acceuil shrink-text d-flex justify-content-around"
      style={{ padding: "30px" }}
    >
      <img src={instaGirl} alt="insta-girl" width={450} height={550} />
      <div className="be-trendy-container d-flex flex-column justify-content-end align-items-end">
        <div className="be-trendy-title d-flex flex-column justify-content-around align-items-end">
          <h1>BE TRENDY,</h1>
          <h1>BE SUCCESSFUL</h1>
        </div>
        <div className="be-trendy-p d-flex flex-column justify-content-end align-items-end">
          <p>
            "Les médias sociaux ne sont pas seulement une activité; c'est un
            investissement de temps et de ressources précieux. Entourez-vous de
            personnes qui non seulement vous soutiennent, mais qui éclairent
            votre réflexion."
          </p>
          <p>- Sean Gardner</p>
        </div>
      </div>
    </section>
  );
};

export default Acceuil;
