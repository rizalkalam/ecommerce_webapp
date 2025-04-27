import "./App.css";
import React from "react";
import { Icon } from "@iconify/react";
import backgroundImg from "./Assets/bg.png";

export default function App() {
  return (
    <>
      <nav>
        <div className="left">
          <p>SHOP.CO</p>

          <ul>
            <li>
              <a href="">Shop</a>
            </li>
            <li>
              <a href="">On sale</a>
            </li>
            <li>
              <a href="">New Arrival</a>
            </li>
            <li>
              <a href="">Brands</a>
            </li>
          </ul>
        </div>

        <div className="right">
          <div className="search-bar">
            <Icon icon="ic:baseline-search" width="24" height="24" />
            <input type="" placeholder="Search for product.." />
          </div>
          <div className="auth-content">
            <Icon
              icon="majesticons:shopping-cart-line"
              width="24"
              height="24"
            />
            <Icon icon="gg:profile" width="24" height="24" />
          </div>
        </div>
      </nav>

      {/* body */}

      <div className="container">
        <img src={backgroundImg} alt="Background Image" />

        <div className="content">
          <div className="first-p">
            {" "}
            <p>FIND CLOTHES THAT MATCHES YOUR STYLE</p>
          </div>

          <p>
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>

          <button className="button-shop">
            <a href="">Shop Now</a>
          </button>

          {/*  rating */}
          <div className="rating">
            <div className="rating-item">
              <p className="rating-number">200+</p>
              <p className="rating-text">International Brands</p>
            </div>
            <div className="rating-item">
              <p className="rating-number">2,000+</p>
              <p className="rating-text">High Quality Products</p>
            </div>
            <div className="rating-item">
              <p className="rating-number">30,000+</p>
              <p className="rating-text">Happy Customers</p>
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
