import React from "react";
import { Form, Button } from "react-bootstrap";

const FooterForm = () => {
  return (
    <div className="footer-form">
      <div className="trendy-agency-font text-left">
        Pour Plus d'information :
      </div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Sujet</Form.Label>
          <Form.Control type="text" placeholder="CC" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Votre Message</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Envoyer
        </Button>
      </Form>
    </div>
  );
};

export default FooterForm;
