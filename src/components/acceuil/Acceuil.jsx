import React, { useEffect } from "react";
import "./acceuil.css";
import instaGirl from "../../assets/img/insta-girl-removebg.png";
// import { SocialIcon } from "react-social-icons";
import IconComponent, { URL, handleResize } from "./IconComponent";

const Acceuil = () => {
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="acceuil" className="acceuil">
      {/* img div */}
      <div className="acceuil_img">
        <img src={instaGirl} alt="insta-girl" className="img-fluid" />
      </div>

      {/* icons div */}
      <div className="acceuil_icons">
        {URL.map((el) => (
          <IconComponent key={el.name} url={el.url} />
        ))}
      </div>

      {/* text */}
      <div className="acceuil_text">
        {/* title */}
        <div className="acceuil_title">
          <h1>BE TRENDY,</h1>
          <h1>BE SUCCESSFUL</h1>
        </div>
        {/* paragraph */}
        <div className="acceuil_paragraph paragraph_font ">
          <p className="p-quote">
            "Les médias sociaux ne sont pas seulement une activité; c'est un
            investissement de temps et de ressources précieux. Entourez-vous de
            personnes qui non seulement vous soutient, mais qui éclaire votre
            réflexion."
          </p>
          <p className="p_author">- Sean Gardner</p>
        </div>
      </div>
    </section>
  );
};

export default Acceuil;
