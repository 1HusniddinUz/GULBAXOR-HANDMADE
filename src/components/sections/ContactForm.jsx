import React from "react";
import "../../assets/ContactForm.css";
const ContactForm = () => {
  return (
    <div id="ContactForm">
      <div id="ContactData">
        <h3>Contacts</h3>
        <ul>
          <li>Menejer : Палончаев Палонча</li>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer">
              Phone : +998(99) 999-99-99
            </a>
          </li>
        </ul>
      </div>
      <div id="LocationData">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093647!2d144.9537363153183!3d-37.81627944202151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f2bdf1c9%3A0x4e8f9f0b5eeb0f0a!2sGoogle!5e0!3m2!1sen!2sus!4v1602595394286!5m2!1sen!2sus"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactForm;
