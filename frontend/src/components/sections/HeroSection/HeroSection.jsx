import React from 'react';
import starVector from '../../../assets/vct_star.png';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="section-1">
      <div className="left-section-1">
        <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
        <p className="section-1-desc">Browse through our diverse range of meticulously crafted garments, designed to bring out your individualtiy and cater to your sense of style.</p>
        <button>Shop Now</button>
        <div className="con-testi-section-1">
          <div className="brands">
            <p className="testi-section-1-title">200+</p>
            <p className="testi-section-1-desc">International Brands</p>
          </div>
          <div className="testi-separator"></div>
          <div className="products">
            <p className="testi-section-1-title">2,000+</p>
            <p className="testi-section-1-desc">High-Quality Products</p>
          </div>
          <div className="testi-separator"></div>
          <div className="customers">
            <p className="testi-section-1-title">30,000+</p>
            <p className="testi-section-1-desc">Happy Customers</p>
          </div>
        </div>
      </div>
      <div className="right-section-1">
        <img className="star star-top-left" src={starVector} alt="" />
        <img className="star star-bottom-right" src={starVector} alt="" />
      </div>
    </div>
  );
};

export default HeroSection;