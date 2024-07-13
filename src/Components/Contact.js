import React from "react";
import Logo from "../Assets/Logo.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" >
      <div style={{ marginBottom: "10rem" }}>
        <div className="contact-page-wrapper" >
          <h1 className="primary-heading">Have Question In Mind?</h1>
          <h1 className="primary-heading">Let Us Help You</h1>
          <div className="contact-form-container">
            <input type="text" placeholder="CakeBake@gmail.com" />
            <button className="secondary-button">Submit</button>
          </div>
        </div>
        <div className="footer-wrapper">
          <div className="footer-section-one">
            <div className="footer-logo-container">
              <img src={Logo} alt="" />
            </div>
            <div className="footer-icons">
              <BsTwitter />
              <SiLinkedin />
              <BsYoutube />
              <FaFacebookF />
            </div>
          </div>
          <div className="footer-section-two">
            <div className="footer-section-columns">
              <span>Help</span>
              <span>Share</span>
              <span>Qualtiy</span>
              <span>Reviews</span>
            </div>
            <div className="footer-section-columns">
              <span>8429885542</span>
              <span>CakeBake@gmail.com</span>
              <span>Terms & Condition</span>
              <span>Privacy Policy</span>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
