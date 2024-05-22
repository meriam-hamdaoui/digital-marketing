import React from "react";
import "./footer.css";
import FooterForm from "./FooterForm";
import trendyAgency from "../../assets/img/trendy-agency.jpg";
import { MdOutlinePhoneIphone, MdOutlineMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import CustomSocialIcon from "./CustomSocialIcon";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="top-footer d-flex justify-content-around">
        <div className="footer-info  p-3">
          <img
            src={trendyAgency}
            alt="trendy-agency"
            width={"40%"}
            height={"40%"}
          />

          <div className="footer-info-txt paragraph-font">
            <p className="trendy-agency-font text-center">trendy agency</p>
            <p className="shrink-text ">
              Agence marketing digital spécialisée dans les réseaux sociaux,
              offrant une gamme complète de services pour aider les entreprises
              à tirer le meilleur parti de leur présence en ligne.
            </p>
            <p>
              <MdOutlinePhoneIphone />
              &nbsp;&nbsp; (+216) 21 95 60 39 / 28 14 90 95
            </p>
            <p>
              <MdOutlineMailOutline />
              &nbsp;&nbsp; trendyagency@outlook.fr
            </p>
            <p>
              <IoLocationOutline />
              &nbsp;&nbsp; CENTRE URBAIN NORD, Tunis
            </p>
            <div
              className="d-flex justify-content-between"
              style={{ width: "15%" }}
            >
              <CustomSocialIcon
                url={"https://instagram.com/trendy.agency"}
                size={25}
              />
              <CustomSocialIcon url={"https://facebook.com"} size={25} />
            </div>
          </div>
        </div>
        <FooterForm />
      </div>
      <hr style={{ color: "rgba(207, 117, 153, 0.75)" }} />
      <div className="bottom-footer text-center">
        TRENDY AGENCY@copyright-2024
      </div>
    </footer>
  );
};

export default Footer;
