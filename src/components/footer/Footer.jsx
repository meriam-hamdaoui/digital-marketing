import React from "react";
import "./footer.css";
import trendyAgency from "../../assets/img/trendy-agency.jpg";
import { Form, Button } from "react-bootstrap";
import { MdOutlinePhoneIphone, MdOutlineMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="top-footer d-flex justify-content-around">
        <div className="footer-info  p-3">
          <img
            src={trendyAgency}
            alt="trendy-agency"
            width={"35%"}
            height={"35%"}
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
            <p>insta + facebook</p>
          </div>
        </div>
        <div className="footer-form">
          <div className="trendy-agency-font text-left">
            Pour Plus d'information :
          </div>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Sujet</Form.Label>
              <Form.Control type="text" placeholder="CC" />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Votre Message</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Envoyer
            </Button>
          </Form>
        </div>
      </div>
      <hr style={{ color: "rgba(207, 117, 153, 0.75)" }} />
      <div className="bottom-footer text-center">
        TRENDY AGENCY@copyright-2024
      </div>
    </footer>
  );
};

export default Footer;
