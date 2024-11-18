import React from "react";
import pic1 from "../Assets/p1.png";
import pic2 from "../Assets/p2.png";
import pic3 from "../Assets/p3.png";
import pic4 from "../Assets/p4.png";
import pic5 from "../Assets/p5.png";
import pic6 from "../Assets/p6.png";

const Reviews = () => {
  return (
    <section id="reviews">
      <div className="work-section-wrapper2" style={{backgroundColor: "#E7E8D1", padding: "2rem",borderRadius: "3rem"}}>
        <div className="work-section-top2">
          <h1 className="primary-heading">Reviews</h1>
          <p className="primary-text">
          "I ordered a custom birthday cake from Sweet Delights, and it was absolutely 
          stunning! Not only did it look beautiful, but it also tasted amazing.
           The vanilla sponge was incredibly light and the frosting was perfectly sweet.
            Everyone at the party loved it!"
          </p>
        </div>
        <div className="testimonial-section-bottom">
          <img src={pic1} alt="pic1"/>
          <p>
          "I ordered a custom birthday cake from Sweet Delights, and it was absolutely 
          stunning! Not only did it look beautiful, but it also tasted amazing.
           The vanilla sponge was incredibly light and the frosting was perfectly sweet.
            Everyone at the party loved it!"
          </p>
         
          <h2>Vishal</h2>
        </div>
        <div className="testimonial-section-bottom">
          <img src={pic2} alt="" />
          <p>
          "The chocolate fudge cake from Sweet Delights is hands down the best
           I've ever had. It's rich, moist, and full of flavor. 
          I highly recommend this place to anyone with a sweet tooth. Plus, 
          the staff is always so friendly and helpful!"
          </p>
       
          <h2>Vineet</h2>
        </div>
        <div className="testimonial-section-bottom">
          <img src={pic3} alt="" />
          <p>
          "I recently tried the carrot cake and was blown away by how delicious it was.
           The spices were perfectly balanced, and the cream cheese frosting was to die 
           for. Sweet Delights has become my go-to cake shop for all special occasions."
          </p>
        
          <h2>Sonakshi</h2>
        </div>
        <div className="testimonial-section-bottom">
          <img src={pic4} alt="" />
          <p>
          "I had a fantastic experience with Sweet Delights. I needed 
          a gluten-free cake for my daughter's birthday, and they did not disappoint. 
          The cake was moist, flavorful, and beautifully decorated. 
          It's great to have such tasty options for dietary needs."
          </p>
       
          <h2>Sakshi</h2>
        </div>
        <div className="testimonial-section-bottom">
          <img src={pic5} alt="" />
          <p>
          "The red velvet cake I ordered for my anniversary was perfect. The cake was moist and 
          the cream cheese frosting was just right. It made our celebration extra special. 
          I'll definitely be coming back for more!"
          </p>
    
          <h2>Vihan</h2>
        </div>

        <div className="testimonial-section-bottom">
          <img src={pic6} alt="" />
          <p>
          "The lemon drizzle cake from Sweet Delights is a must-try. It's so refreshing and
           light, with just the right amount of sweetness. I've tried several cakes from here
            and they never disappoint. Highly recommended!"
          </p>
          <h2>Yuvraj</h2>
        </div>
      </div>
    </section>
  );
};

export default Reviews;




