import React from "react";
import "./footer.css";
// import FooterForm from "./FooterForm";
import trendyAgency from "../../assets/img/trendy-agency-removebg.png";
import { MdOutlinePhoneIphone, MdOutlineMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import CustomSocialIcon from "./CustomSocialIcon";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="top-footer">
        {/* agency definition */}
        <div className="footer-info">
          <img
            src={trendyAgency}
            alt="trendy-agency"
            width={"30%"}
            height={"30%"}
          />

          <div className="footer-intro">
            <p className="agency-name text-center">TRENDY AGENCY</p>
            <p className="shrink-text ">
              Agence marketing digital spécialisée dans les réseaux sociaux,
              offrant une gamme complète de services pour aider les entreprises
              à tirer le meilleur parti de leur présence en ligne.
            </p>
          </div>
        </div>

        {/* contacts */}
        <div className="footer_contact ">
          <h4 className="agency-name">Nos Contacts</h4>
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

        {/* social media */}
        <div className="follow">
          <h4 className="agency-name">Suivez-Nous</h4>
          <div className="social-icons d-flex justify-content-around">
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

        {/* <FooterForm /> */}
      </div>
      <hr style={{ color: "rgba(207, 117, 153, 1)" }} />
      <div className="bottom-footer text-center">
        TRENDY AGENCY@copyright-2024
      </div>
    </footer>
  );
};

export default Footer;
