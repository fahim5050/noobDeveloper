import React, { useState } from "react";

function ServicesExperience() {
  const [services] = useState([
    {
      icon: "fa-paintbrush",
      title: "UI Design",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
      active: false,
    },
    {
      icon: "fa-pen-to-square",
      title: "Product Design",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
      active: false,
    },
    {
      icon: "fa-ruler",
      title: "Branding",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
      active: false,
    },
  ]);
  return (
    <section className="services-experience">
      <div className="container">
        <div className="services" id="services">
          {services.map((service, i) => (
            <div
              key={i}
              className={`service ${service.active ? "active" : ""}`}
            >
              <i className={`fas ${service.icon}`} />
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
        <div className="experiences" id="experiences">
        
          <div className="portfolios">
            <div className="portfolio">
              <h4>56</h4>
              <p>Happy Clients</p>
            </div>
            <div className="portfolio">
              <h4>87</h4>
              <p>projects done</p>
            </div>
            <div className="portfolio">
              <h4>16</h4>
              <p>Awards winning</p>
            </div>
            <div className="portfolio">
              <h4>16</h4>
              <p>Awards winning</p>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesExperience;
