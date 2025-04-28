import "./App.css";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import backgroundImg from "./Assets/bg.png";

export default function App() {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <>
      {/* banner */}
      {showBanner && (
        <div className="signup-banner">
          <div className="con-left-signup-banner"></div>
          <div className="con-signup-banner">
            <span>Sign up and get 20% off to your first order.</span>
            <a href="">Sign Up Now</a>
          </div>
          <button className="banner-close" onClick={() => setShowBanner(false)}>
            &times;
          </button>
        </div>
      )}

      <nav>
        <div className="wrapper-nav">
          {/* nav left  start */}
          <div className="nav left">
            <p className="logo">SHOP.CO</p>
            <div className="nav-links">
              <ul>
                <li>
                  <a href="">Shop</a>
                </li>
                <li>
                  <a href="">On Sale</a>
                </li>
                <li>
                  <a href="">New Arrival</a>
                </li>
                <li>
                  <a href="">Brands</a>
                </li>
              </ul>
            </div>
          </div>
          {/* nav left end */}

          {/* nav right start */}
          <div className="nav-right">
            <form action="" className="search-bar">
              <div className="con-search-bar">
                <Icon
                  icon="bitcoin-icons:search-filled"
                  width="30"
                  height="30"
                  style={{ color: "#848484" }}
                />
                <input
                  type="text"
                  placeholder="Search for product..."
                  className="search-input"
                />
              </div>
            </form>
            <div className="auth-content">
              <div className="cart">
                <Icon icon="proicons:cart" width="24" height="24" />
              </div>
              <div className="user">
                <Icon icon="qlementine-icons:user-16" width="24" height="24" />
              </div>
            </div>
          </div>
          {/* nav right end */}
        </div>
      </nav>

      {/* body */}
      <div className="section-1">
        <div className="left-section-1">
          <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
          <p className="section-1-p">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individualtiy and cater to your sense of
            style
          </p>
          <button>
            <a href="">Shop Now</a>
          </button>
          <div className="con-testi-section-1">
            <div className="brands">
              <p className="testi-section-1-title">200+</p>
            </div>
            <div className="testi-separator"></div>
            <div className="products">
              <p className="testi-section-1-title">2.000+</p>
              <p className="testi-section-1-desc">High-Quality Products</p>
            </div>
            <div className="testi-separator"></div>
            <div className="costumers">
              <p className="testi-section-1-title">30,000+</p>
              <p className="Happy Costumers"></p>
            </div>
          </div>
        </div>
      </div>
      {/* brands */}
      <div className="brands">
        <div className="brands-container">
          <div className="brand-logo">VERSACE</div>
          <div className="brand-logo">ZARA</div>
          <div className="brand-logo">GUCCI</div>
          <div className="brand-logo">PRADA</div>
          <div className="brand-logo">Calvin Klein</div>
        </div>
      </div>
    </>
  );
}
