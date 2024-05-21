import React from "react";
import "./footer.css";
import trendyAgency from "../../assets/img/trendy-agency.jpg";
import { FloatingLabel, Form, Button } from "react-bootstrap";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="top-footer d-flex">
        <div>
          <img
            src={trendyAgency}
            alt="trendy-agency"
            width={150}
            height={150}
          />
          <div>
            <div>trendy agency</div>
            <div>
              Agence marketing digital spécialisée dans le réseaux sociaux,
              offrant une gamme complète de services pour aider les entreprises
              à tirer le meilleur parti de leur présence en ligne.
            </div>
          </div>
        </div>
        <div>
          <div>Nos Contacts</div>
          <div>
            <p>(+216) 21 95 60 39 / (+216) 28 14 90 95</p>
            <p>trendyagency@outlook.fr</p>
            <p>CENTRE URBAIN NORD, Tunis</p>
          </div>
        </div>
        <div>
          <FloatingLabel
            controlId="floatingTextarea"
            label="Comments"
            className="mb-3"
          >
            <Form.Control as="textarea" placeholder="Sujet" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingTextarea2" label="Comments">
            <Form.Control
              as="textarea"
              placeholder="Message"
              style={{ height: "100px" }}
            />
          </FloatingLabel>
          <Button>Envoyer</Button>
        </div>
      </div>
      <div className="bottom-footer">TRENDY AGENCY@copyright-2024</div>
    </footer>
  );
};

export default Footer;
