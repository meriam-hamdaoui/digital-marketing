import React, { useEffect } from "react";
import "./acceuil.css";
import instaGirl from "assets/img/insta_girl_acceuil.png";
import IconComponent, { URL, handleResize } from "./IconComponent";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { CiCirclePlus } from "react-icons/ci";

const Acceuil = () => {
  const navigate = useNavigate();

  const decouvrir = () => navigate("/qui-sommes-nous", { replace: true });

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="" className="acceuil">
      {/* img div */}
      <div className="acceuil_img">
        <img src={instaGirl} alt="insta-girl" className="img-fluid" />
        <Button
          onClick={decouvrir}
          variant="outlined"
          style={{
            border: "2px solid white",
            color: "white",
            fontSize: "1.2rem",
          }}
        >
          Decouvrir{" "}
          <CiCirclePlus
            style={{ width: "25px", height: "25px", fontSize: "bold" }}
          />
        </Button>
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
