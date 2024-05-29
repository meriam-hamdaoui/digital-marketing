import React, { useState, useEffect } from "react";
import ServiceCard from "./ServiceCard";
import "./nosServices.css";
import { serviceData } from "./serviceData";

const ServiceSection = () => {
  const [services, setServices] = useState([]);

  const loadServices = () => setServices([...serviceData]);

  useEffect(() => loadServices(), []);

  return (
    <section id="services">
      <div className="section-title text-center">Nos Services</div>
      <div className="card-container">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
