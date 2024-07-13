import React from "react";
import AboutBackgroundImage from "../Assets/cake3.png";



const About = () => {
  return (
    <section id="about">
    <div className="about-section-container">
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <h1 className="primary-heading">About</h1>

        <p className="primary-text">
        Welcome to Sweet Delights Cake Shop, where every slice tells a story!
        Founded in 2010, we are passionate about crafting delectable cakes
        that bring joy to every occasion. Our skilled bakers 
        and decorators use only the finest ingredients to create beautiful 
        and delicious cakes, from classic favorites to innovative custom designs.
        </p>
        <p className="primary-text">
        Thank you for choosing Sweet Delights Cake Shop. We look forward 
        to being a part of your sweetest moments!
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
        </div>
      </div>
    </div>
    </section>
  );
};

export default About;
