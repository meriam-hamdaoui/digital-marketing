import React from "react";
import { Form, Button } from "react-bootstrap";

const FormContact = () => {
  return (
    <Form className="contact_form">
      <h4
        className="plus_information trendy_agency"
        style={{ marginBottom: "2rem" }}
      >
        Pour plus d'information
      </h4>
      <Form.Group className="mb-3 d-flex" controlId="exampleForm.ControlInput1">
        <Form.Control type="email" placeholder="nom@example.com" />
      </Form.Group>
      <Form.Group
        className="mb-4"
        controlId="exampleForm.ControlInput1"
      ></Form.Group>
      <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
        <Form.Control type="text" placeholder="Sujet" />
      </Form.Group>
      <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Votre Message</Form.Label>
        <Form.Control as="textarea" rows={5} />
      </Form.Group>
      <Button className="form_btn">Envoyer</Button>
    </Form>
  );
};

export default FormContact;
