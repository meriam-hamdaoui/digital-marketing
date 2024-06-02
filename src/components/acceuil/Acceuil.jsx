import React from "react";
import "./acceuil.css";
import instaGirl from "../../assets/img/insta-girl-removebg.png";
import { SocialIcon } from "react-social-icons";

const Acceuil = () => {
  return (
    <section id="acceuil" className="acceuil">
      {/* img div */}
      <div className="acceuil_img">
        <img
          src={instaGirl}
          alt="insta-girl"
          width={500}
          height={600}
          className="img-fluid"
        />
      </div>

      {/* icons div */}
      <div className="acceuil_icons">
        <SocialIcon className="icon" url="https://pinterest.com/" />
        <SocialIcon className="icon" url="https://instagram.com/" />
        <SocialIcon className="icon" url="https://facebook.com/" />
        <SocialIcon className="icon" url="https://youtube.com/" />
        <SocialIcon className="icon" url="https://linkedin.com/" />
        <SocialIcon className="icon" url="https://x.com/" />
        <SocialIcon className="icon" url="https://tiktok.com/" />
      </div>

      {/* text */}
      <div className="acceuil_text">
        {/* title */}
        <div className="acceuil_title">
          <h1>BE TRENDY,</h1>
          <h1>BE SUCCESSFUL</h1>
        </div>
        {/* paragraph */}
        <div className="acceuil_paragraph">
          <p className="p-quote">
            "Les médias sociaux ne sont pas seulement une activité; c'est un
            investissement de temps et de ressources précieux. Entourez-vous de
            personnes qui non seulement vous soutient, mais qui éclaire votre
            réflexion."
          </p>
          <p className="p-author">- Sean Gardner</p>
        </div>
      </div>
    </section>
  );
};

export default Acceuil;
