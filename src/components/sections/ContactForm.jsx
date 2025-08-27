import React from "react";
import "../../assets/ContactForm.css";
import {useTranslation} from "react-i18next";
import Logo from "../../../public/favicon.png"
const ContactForm = () => {
    const {t , i18n} = useTranslation();

  return (

    <div id="ContactForm">
      <div id="ContactData">
        <h3>{t(`contact`)}</h3>
          <ul>
              <li>{t(`generalManager`)} : {t(`managerName`)}</li>
              <li>
                  <a href="tel:+998997234487" target="_blank" rel="noopener noreferrer">
                      {t(`phone`)} : +998(99) 723 44 87
                  </a>
              </li>
                <li className="logo_social_box">
                    <img src={Logo} alt="GULBAXOR HANDMADE LOGO"/>
                    <div className="social_box">
                        <a href="https://www.instagram.com/gulbaxor_hand_made" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i> GULBAHOR HANDMADE</a>
                        <a href="https://www.instagram.com/gulbaxor_hand_made" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-telegram"></i> GULBAHOR HANDMADE</a>
                    </div>
                </li>
          </ul>
      </div>
        <div id="LocationData">
            <h3>
                {t(`location`)}
            </h3>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1533.1640342100022!2d64.4414957!3d39.7771924!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f50059e4be78105%3A0xdffcc32a2eefa04e!2sKichik%20biznesga%20ko&#39;maklashish%20markazi%20%7C%20Tadbirkorlar%20biznes%20klubi!5e0!3m2!1sru!2s!4v1756195345846!5m2!1sru!2s"
                width="100%"
                height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactForm;
