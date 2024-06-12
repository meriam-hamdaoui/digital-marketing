import React from "react";
import { Form, Button } from "react-bootstrap";
import "./contact.css";
import trendy_agency_footer from "assets/img/trendy_agency_footer.png";
import { MdOutlinePhoneIphone, MdOutlineMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import CustomSocialIcon from "../contacts/CustomSocialIcon";

const Contact = () => {
  return (
    <div id="contactez-nous" className="contact_section">
      <h2 className="section_title text-center">Contactez-Nous</h2>
      <div className="contact_container ">
        <div className="trendy_description d-flex align-items-center justify-content-between">
          <img
            src={trendy_agency_footer}
            alt="trendy-agency"
            width={150}
            height={150}
          />

          <div className="trendy_description_text">
            <h3 className="trendy_agency text-center">TRENDY AGENCY</h3>
            <p className="shrink_text text-justify">
              Agence de marketing digital experte en réseaux sociaux, proposant
              une gamme de services complets pour optimiser la visibilité en
              ligne des entreprises.
              <br />
              <div className="text-center" style={{ padding: "12px 0" }}>
                <strong>Digital Strategy = Real Results</strong>
              </div>
            </p>
          </div>
        </div>

        <div className="nos_contact">
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
          <div className="social_icons">
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

      {/* for section */}
      <Form className="contact_form">
        <h4 className="plus_information">Pour plus d'information</h4>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Votre Message</Form.Label>
          <Form.Control as="textarea" rows={5} />
        </Form.Group>
        <Button>Envoyer</Button>
      </Form>
    </div>
  );
};

export default Contact;
