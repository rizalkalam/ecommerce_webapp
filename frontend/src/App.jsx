import "./App.css";
import { Icon } from "@iconify/react";
import starVector from "./Assets/Vector.png";
import { useState } from "react";

export default function App() {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <>
      {/* section before nav */}
      {showBanner && (
        <div className="signup-banner">
          <div className="con-left-signup-banner"></div>
          <div className="con-signup-banner">
            <span>Sign up and get 20% off to yout first order.</span>
            <a href="">Sign Up Now</a>
          </div>
          <button className="banner-close" onClick={() => setShowBanner(false)}>
            &times;
          </button>
        </div>
      )}
      {/* section before nav end */}

      {/* navbar start  */}
      <nav>
        <div className="wrapper-nav">
          <div className="nav-left">
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
                  <a href="">New Arrivals</a>
                </li>
                <li>
                  <a href="">Brands</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="nav-right">
            <form className="search-bar">
              <div className="con-search-bar">
                <Icon icon="ic:twotone-search" width="30" height="30" />
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="search-input"
                />
              </div>
            </form>
            <div className="auth-content">
              <Icon icon="fluent:cart-24-regular" width="30" height="30" />
              <Icon icon="iconamoon:profile-circle" width="30" height="30" />
            </div>
          </div>
        </div>
      </nav>
      {/* navbar end  */}

      {/* body start */}
      <div className="section-1">
        {/* Bagian kiri section-1 */}
        <div className="left-section-1">
          <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
          <p className="section-1-desc">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <button>Shop Now</button>

          {/* Bagian testimonial */}
          <div className="con-testi-section-1">
            {/* Testimoni - International Brands */}
            <div className="brands">
              <p className="testi-section-1-title">200+</p>
              <p className="testi-section-1-desc">International Brands</p>
            </div>

            {/* Garis pemisah */}
            <div className="testi-separator"></div>

            {/* Testimoni - High-Quality Products */}
            <div className="products">
              <p className="testi-section-1-title">2,000+</p>
              <p className="testi-section-1-desc">High-Quality Products</p>
            </div>

            {/* Garis pemisah */}
            <div className="testi-separator"></div>

            {/* Testimoni - Happy Customers */}
            <div className="products">
              <p className="testi-section-1-title">30,000+</p>
              <p className="testi-section-1-desc">Happy Customers</p>
            </div>
          </div>
          {/* Akhir testimonial */}
        </div>
        {/* Akhir kiri section-1 */}

        {/* Bagian kanan section-1 */}
        <div className="right-section-1">
          {/* Hiasan bintang */}
          <img src={starVector} alt="" className="star star-top-left" />
          <img src={starVector} alt="" className="star star-bottom-right" />
        </div>
        {/* Akhir kanan section-1 */}
      </div>

      {/* body end */}

      <div className="banner-brand">
        <p>VERSACE</p>
        <p>ERIGO</p>
        <p>ZARA</p>
        <p>GUCCI</p>
        <p>Calvin Clein</p>
      </div>
    </>
  );
}
