import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import emailjs from "emailjs-com";

const FormContact = () => {
  const {
    REACT_APP_EJS_SERVICE_ID,
    REACT_APP_EJS_TEMPLATE_ID,
    REACT_APP_EJS_USER_ID,
  } = process.env;

  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        REACT_APP_EJS_SERVICE_ID,
        REACT_APP_EJS_TEMPLATE_ID,
        {
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: "trendyagency@outlook.fr",
        },
        REACT_APP_EJS_USER_ID
      )
      .then((response) => {
        console.log("Email successfully sent!", response.status, response.text);
        alert("Message sent successfully!");
        setFormData({ email: "", subject: "", message: "" }); // Clear form after submission
      })
      .catch((err) => {
        console.error("Error sending email:", err);
        alert("Failed to send message, please try again later.");
      });

    console.log("formData : ", formData);
  };

  return (
    <Form className="contact_form" onSubmit={handleSubmit}>
      <h4
        className="plus_information trendy_agency"
        style={{ marginBottom: "2rem" }}
      >
        Pour plus d'information
      </h4>
      <Form.Group className="mb-3 d-flex" controlId="formEmail">
        <Form.Control
          type="email"
          placeholder="nom@example.com"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group className="mb-4" controlId="formSubject">
        <Form.Control
          type="text"
          placeholder="Sujet"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group className="mb-4" controlId="formMessage">
        <Form.Label>Votre Message</Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Button type="submit" className="form_btn">
        Envoyer
      </Button>
    </Form>
  );
};

export default FormContact;
