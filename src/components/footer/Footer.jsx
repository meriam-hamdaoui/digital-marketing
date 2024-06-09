import React from "react";
import "./footer.css";
import digitalStrategie from "assets/img/digital_strategie.png";
import { MdOutlinePhoneIphone, MdOutlineMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import CustomSocialIcon from "./CustomSocialIcon";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="top_footer d-flex flex-row align-items-center justify-content-around">
        <div className="footer_agency d-flex flex-row align-items-center justify-content-around">
          <div className="footer_img_container text-center">
            <img src={digitalStrategie} alt="trendy-agency" />
          </div>

          <div className="footer_about_agency">
            <h3 className="trendy_agency text-center">TRENDY AGENCY</h3>
            <p className="shrink_text">
              Agence marketing digital spécialisée dans les réseaux sociaux,
              offrant une gamme complète de services pour aider les entreprises
              à tirer le meilleur parti de leur présence en ligne.
            </p>
          </div>
        </div>

        <div className="footer_contact_agency d-flex justify-content-around">
          <div className="footer_contacts">
            <h4 className="trendy_agency">Nos Contacts</h4>
            <p className="">
              <MdOutlinePhoneIphone />
              &nbsp;&nbsp; (+216) 21 95 60 39 / 28 14 90 95
            </p>
            <p className="">
              <MdOutlineMailOutline />
              &nbsp;&nbsp; trendyagency@outlook.fr
            </p>
            <p className="">
              <IoLocationOutline />
              &nbsp;&nbsp; CENTRE URBAIN NORD, Tunis
            </p>
          </div>

          <div className="footer_social_media">
            <h4 className="trendy_agency">Suivez-Nous</h4>
            <div className="social-icons d-flex align-items-center justify-content-around">
              <CustomSocialIcon
                url={"https://instagram.com/trendy.agency"}
                size={25}
              />
              <CustomSocialIcon
                url={
                  "https://www.facebook.com/profile.php?id=61559745715549&mibextid=ZbWKwL"
                }
                size={25}
              />
            </div>
          </div>
        </div>
      </div>
      <hr style={{ color: "rgba(207, 117, 153, 1)" }} />
      <div className="bottom_footer text-center">
        TRENDY AGENCY@copyright-2024
      </div>
    </footer>
  );
};

export default Footer;
