import React from "react";
import "./contactUs.css";
import trendy_agency_footer from "assets/img/trendy_agency_footer.png";
import { MdOutlinePhoneIphone, MdOutlineMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import CustomSocialIcon from "../contacts/CustomSocialIcon";
import FormContact from "./FormContact";

const ContactUs = () => {
  return (
    <section className="contact_section">
      <h2 className="section_title text-center">Contactez-Nous</h2>
      <div className="contact_container align-items-first-baseline">
        <div className="contact_img">
          <img src={trendy_agency_footer} alt="trendy agency logo" />
        </div>
        <div className="contact_personel d-flex flex-column justify-content-between">
          <div className="nos_contacts">
            <h4 className="trendy_agency">Contacts</h4>
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
          <div className="suivez_nous">
            <h4 className="trendy_agency">Suivez-Nous</h4>
            <div className="social_icons d-flex">
              <CustomSocialIcon
                url={"https://instagram.com/trendy.agency"}
                size={30}
              />
              <CustomSocialIcon
                url={
                  "https://www.facebook.com/profile.php?id=61559745715549&mibextid=ZbWKwL"
                }
                size={30}
              />
            </div>
          </div>
        </div>
        <FormContact />
      </div>
    </section>
  );
};

export default ContactUs;
