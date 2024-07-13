import React from "react";
import PickMeals from "../Assets/img1.png";
import ChooseMeals from "../Assets/img2.png";
import DeliveryMeals from "../Assets/img3.png";
import cake4 from "../Assets/img4.png";
import cake5 from "../Assets/img5.png";
import cake6 from "../Assets/img6.png";

const Work = () => {
  return (
    <section id="works">
    <div className="work-section-wrapper" style={{backgroundColor: "#E7E8D1",borderRadius: "3rem", padding: "2rem", marginBottom: "3rem"}}>
      <div className="work-section-top">
        <h1 className="primary-heading">Categories</h1>
        <p className="primary-text">
          At Sweet Delights Cake Shop, we offer an array of cake varieties to
          satisfy every palate. Here’s a glimpse of our delicious selections:
        </p>
      </div>
      <div className="work-section-bottom" style={{ display: "flex", flexWrap: "wrap" }}>
      
        <div className="work-section-info" style={{ flex: "0 0 calc(33.33% - 20px)", margin: '10px', minWidth: '250px' ,backgroundColor: '#D3C5E5'}}>
          <div className="info-boxes-img-container">
            <img src={PickMeals} alt="Chocolate Cake" className="cake-image" />
          </div>
          <h2>Chocolate Cake</h2>
          <p>Rich chocolate cake with layers of chocolate ganache and sprinkles.</p>
          <p>Price: Rs.800/kg</p>
        </div>

      
        <div className="work-section-info" style={{ flex: "0 0 calc(33.33% - 20px)", margin: '10px', minWidth: '250px' ,backgroundColor: '#D3C5E5'}}>
          <div className="info-boxes-img-container">
            <img src={ChooseMeals} alt="Vanilla Cake" className="cake-image" />
          </div>
          <h2>Vanilla Cake</h2>
          <p>Classic vanilla cake with vanilla buttercream frosting and fruit toppings.</p>
          <p>Price: Rs.850/kg</p>
        </div>

       
        <div className="work-section-info" style={{ flex: "0 0 calc(33.33% - 20px)", margin: '10px', minWidth: '250px' ,backgroundColor: '#D3C5E5' }}>
          <div className="info-boxes-img-container">
            <img src={DeliveryMeals} alt="Red Velvet Cake" className="cake-image" />
          </div>
          <h2>Red Velvet Cake</h2>
          <p>Moist red velvet cake with cream cheese frosting and red velvet crumbs.</p>
          <p>Price: Rs.900/kg</p>
        </div>

       
        <div className="work-section-info" style={{ flex: "0 0 calc(33.33% - 20px)", margin: '10px', minWidth: '250px' ,backgroundColor: '#D3C5E5'}}>
          <div className="info-boxes-img-container">
            <img src={cake4} alt="Red Velvet Cake" className="cake-image" />
          </div>
          <h2>Black Forest Cake</h2>
          <p>Moist red velvet cake with cream cheese frosting and red velvet crumbs.</p>
          <p>Price: Rs.700/kg</p>
        </div>

        <div className="work-section-info" style={{ flex: "0 0 calc(33.33% - 20px)", margin: '10px', minWidth: '250px' ,backgroundColor: '#D3C5E5'}}>
          <div className="info-boxes-img-container">
            <img src={cake5} alt="Red Velvet Cake" className="cake-image" />
          </div>
          <h2>Pinnaple Cake</h2>
          <p>Moist red velvet cake with cream cheese frosting and red velvet crumbs.</p>
          <p>Price: Rs.950/kg</p>
        </div>

        <div className="work-section-info" style={{ flex: "0 0 calc(33.33% - 20px)", margin: '10px', minWidth: '250px' ,backgroundColor: '#D3C5E5'}}>
          <div className="info-boxes-img-container">
            <img src={cake6} alt="Red Velvet Cake" className="cake-image" />
          </div>
          <h2>White Forest Cake</h2>
          <p>Moist red velvet cake with cream cheese frosting and red velvet crumbs.</p>
          <p>Price: 1000/kg</p>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Work;
