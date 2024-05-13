import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function GroceryStores() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % document.querySelectorAll('.carousel-item-form').length);
    updateCarousel();
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + document.querySelectorAll('.carousel-item-form').length) % document.querySelectorAll('.carousel-item-form').length);
    updateCarousel();
  };

  const updateCarousel = () => {
    const carousel = document.querySelector('.carousel-form');
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
  };

  return (
    <>
    <div className="container-slideform">
      <div className="carousel-container-form">
        <div className="carousel-form">
          <div className="carousel-item-form">
            <h2>Raj fashion</h2>
            <img src="../images/clothing/1.jpg" alt="Shop 1" />
            <p ><Link to="/clothingForm" className="order-form-btn"><b>ORDER</b></Link></p>
          </div>
          <div className="carousel-item-form">
            <h2>Rangoli Showroom</h2>
            <img src="../images/clothing/2.jpg" alt="Shop 2" />
            <p ><Link to="/clothingForm" className="order-form-btn"><b>ORDER</b></Link></p>
          </div>
          <div className="carousel-item-form">
            <h2>The loom house</h2>
            <img src="../images/clothing/3.jpg" alt="Shop 3" />
            <p ><Link to="/clothingForm" className="order-form-btn"><b>ORDER</b></Link></p>
          </div>
          <div className="carousel-item-form">
            <h2>PSR silk sarees</h2>
            <img src="../images/clothing/4.jpg" alt="Shop 4" />
            <p ><Link to="/clothingForm" className="order-form-btn"><b>ORDER</b></Link></p>
          </div>
          <div className="carousel-item-form">
            <h2>DresSmart</h2>
            <img src="../images/clothing/5.jpg" alt="Shop 5" />
            <p ><Link to="/clothingForm" className="order-form-btn"><b>ORDER</b></Link></p>
          </div>
          <div className="carousel-item-form">
            <h2>Coming Soon</h2>
            <img src="../images/cs.png" alt="Shop 6" />
            <p>More services coming soon..!</p>
          </div>
          {/* Add more items as needed */}
        </div>
      </div>
      <div className="carousel-controls">
        <button className="control-form-btn prev-form-btn" onClick={prevSlide}><span className="slide">&#60;</span></button>
        <button className="control-form-btn next-form-btn" onClick={nextSlide}><span className="slide">&#62;</span></button>
      </div>
      <iframe src="https://storage.googleapis.com/maps-solutions-zuyinvhrl2/neighborhood-discovery/g4d9/neighborhood-discovery.html"
      width="100%" height="100%"
      title= "Clothing"
      style={{height: "500px", border: 0, width: "500px", marginLeft: "80px", marginBottom: "50px", 		position: "relative", boxShadow: "10px 10px 40px 5px #000", borderRadius: "20px"}}
      loading="lazy">
    </iframe>
    </div>
    </>
  );
};

export default GroceryStores;