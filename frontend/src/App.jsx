import './App.css';
import cartIcon from './assets/cart.png';
import userIcon from './assets/user.png';
import starVector from './assets/vct_star.png';
import section1Preview from './assets/section1-preview.png';
import preview from './assets/preview.png';
import { Icon } from '@iconify/react';
import { useState } from 'react';

export default function App() {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <>
      {showBanner && (
        <div className="signup-banner">
            <div className="con-left-signup-banner"></div>
            <div className="con-signup-banner">
                <span>
                    Sign up and get 20% off to your first order. 
                </span>
                <a href="">Sign Up Now</a>
            </div>  
            <button className="banner-close" onClick={() => setShowBanner(false)}>&times;</button>
        </div>
      )}
      <nav>
        <div className="wrapper-nav">
        <div className="nav-left">
          <p className="logo">SHOP.CO</p>
          <div className="nav-links">
            <ul>
              <li><a href="">Shop</a></li>
              <li><a href="">On Sale</a></li>
              <li><a href="">New Arrivals</a></li>
              <li><a href="">Brands</a></li>
            </ul>
          </div>
        </div>
        <div className="nav-right">
          <form className="search-bar">
            <div className="con-search-bar">
              <Icon icon="bitcoin-icons:search-filled" width="30" height="30" style={{ color: "#848484" }} />
              <input type="text" placeholder="Search for products..." className="search-input" />
            </div>
          </form>
          <div className="auth-content">
            <div className="cart"><img src={cartIcon} alt="Cart" /></div>
            <div className="user"><img src={userIcon} alt="User" /></div>
          </div>
        </div>
        </div>
      </nav>

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
            <img className="star star-top-left" src={starVector} alt="" srcset="" />
            <img className="star star-bottom-right" src={starVector} alt="" srcset="" />
            {/* <img src={preview} alt="Section 1 Preview" /> */}
        </div>
      </div>

      <div className="banner-brand">
        <p>VERSACE</p>
        <p>ZARA</p>
        <p>GUCCI</p>
        <p>PRADA</p>
        <p>Calivn Clein</p>
      </div>
    </>
  );
}

