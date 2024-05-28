import React from "react";
import "./acceuil.css";
import instaGirl from "../../assets/img/insta-girl-removebg.png";
import { SocialIcon } from "react-social-icons";

const Acceuil = () => {
  return (
    <section
      id="acceuil"
      className="acceuil shrink-text d-flex justify-content-around"
    >
      <div
        className="left-acceuil"
        style={{
          background: `url("${instaGirl}")  no-repeat center `,
        }}
      >
        {/* <img
          src={instaGirl}
          alt="insta-girl"
          width={"520rem"}
          height={"620rem"}
        /> */}
        <SocialIcon className="icons" url="https://pinterest.com/" />
        <SocialIcon className="icons" url="https://instagram.com/" />
        <SocialIcon className="icons" url="https://facebook.com/" />
        <SocialIcon className="icons" url="https://youtube.com/" />
        <SocialIcon className="icons" url="https://linkedin.com/" />
        <SocialIcon className="icons" url="https://x.com/" />
        <SocialIcon className="icons" url="https://tiktok.com/" />
      </div>
      <div className="be-trendy-container d-flex flex-column justify-content-end align-items-end">
        <div className="be-trendy-title d-flex flex-column justify-content-around align-items-end">
          <h1>BE TRENDY,</h1>
          <h1>BE SUCCESSFUL</h1>
        </div>
        <div className="be-trendy-p shrink-text d-flex flex-column justify-content-end align-items-end">
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
