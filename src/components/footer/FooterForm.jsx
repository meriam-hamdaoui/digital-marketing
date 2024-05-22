import React from "react";
import { Form, Button } from "react-bootstrap";

const FooterForm = () => {
  return (
    <div className="footer-form">
      <div
        className="trendy-agency-font text-left"
        style={{ padding: "15px 30px 20px" }}
      >
        Pour Plus d'information :
      </div>
      <Form style={{ paddingLeft: "20px" }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="paragraph-font">Sujet</Form.Label>
          <Form.Control type="text" placeholder="sujet" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label className="paragraph-font">Votre Message</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="votre message" />
        </Form.Group>
        <Button type="button" id="envoyer">
          Envoyer
        </Button>
      </Form>
    </div>
  );
};

export default FooterForm;
