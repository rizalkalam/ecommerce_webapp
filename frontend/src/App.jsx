import './App.css';
import cartIcon from './assets/cart.png';
import userIcon from './assets/user.png';
import starVector from './assets/vct_star.png';
import section1Preview from './assets/section1-preview.png';
import preview from './assets/preview.png';
import { Icon } from '@iconify/react';
import { useState } from 'react';

import na1 from './assets/na-1.png';
import na2 from './assets/na-2.1.png';
import na3 from './assets/na-3.png';
import na4 from './assets/na-4.png';

import ts1 from './assets/ts1.png';
import ts2 from './assets/ts2.png';
import ts3 from './assets/ts3.png';
import ts4 from './assets/ts4.png';


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
        <p>Calvin Clein</p>
      </div>

      <div className="new-arrivals">
        <p className="sec-title">NEW ARRIVALS</p>
        <div className="content-product">
          <div className="card">
            <div className="card-img">
              <img src={na1} alt="" />
            </div>
            <div className="card-txt">
              <p className="card-title">T-shirt with Tape Details</p>
              <div className="rating">
                <div className="star-rating">
                  <Icon icon="ic:round-star" width="20" height="20" style={{ color: "#FFD700" }} />
                  <Icon icon="ic:round-star" width="20" height="20" style={{ color: "#FFD700" }} />
                  <Icon icon="ic:round-star" width="20" height="20" style={{ color: "#FFD700" }} />
                  <Icon icon="ic:round-star" width="20" height="20" style={{ color: "#FFD700" }} />
                  <Icon icon="ic:round-star-half" width="20" height="20" style={{ color: "#FFD700" }} />
                </div>
                <p>4.5/<span style={{ color: "#888888" }}>5</span></p>
              </div>
              <div className="price">
                <p className="new-price">$120</p>
                {/* <p className="old-price">$260</p>
                <div className="discount">
                  <p className="txt-discount">-20%</p>
                </div> */}
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-img">
              <img src={na2} alt="" />
            </div>
            <div className="card-txt">
              <p className="card-title">Skinny Fit Jeans</p>
              <div className="rating">
                <div className="star-rating">
                  <Icon icon="ic:round-star" width="20" height="20" style={{ color: "#FFD700" }} />
                  <Icon icon="ic:round-star" width="20" height="20" style={{ color: "#FFD700" }} />
                  <Icon icon="ic:round-star" width="20" height="20" style={{ color: "#FFD700" }} />
                  <Icon icon="ic:round-star" width="20" height="20" style={{ color: "#FFD700" }} />
                  <Icon icon="ic:round-star-half" width="20" height="20" style={{ color: "#FFD700" }} />
                </div>
                <p>3.5/<span style={{ color: "#888888" }}>5</span></p>
              </div>
              <div className="price">
                <p className="new-price">$240</p>
                <p className="old-price">$260</p>
                <div className="discount">
                  <p className="txt-discount">-20%</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-img">
              <img src={na3} alt="" />
            </div>
            <div className="card-txt">
              <p className="card-title">Checkered Shirt</p>
              <div className="rating">
                <div className="star-rating">
                  <Icon icon="ic:round-star" width="20" height="20" style={{ color: "#FFD700" }} />
                  <Icon icon="ic:round-star" width="20" height="20" style={{ color: "#FFD700" }} />
                  <Icon icon="ic:round-star" width="20" height="20" style={{ color: "#FFD700" }} />
                  <Icon icon="ic:round-star" width="20" height="20" style={{ color: "#FFD700" }} />
                  <Icon icon="ic:round-star-half" width="20" height="20" style={{ color: "#FFD700" }} />
                </div>
                <p>4.5/<span style={{ color: "#888888" }}>5</span></p>
              </div>
              <div className="price">
                <p className="new-price">$180</p>
                {/* <p className="old-price">$260</p>
                <div className="discount">
                  <p className="txt-discount">-20%</p>
                </div> */}
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-img">
              <img src={na4} alt="" />
            </div>
            <div className="card-txt">
              <p className="card-title">Sleeve Striped T-shirt</p>
              <div className="rating">
                <div className="star-rating">
                  <Icon icon="ic:round-star" width="20" height="20" style={{ color: "#FFD700" }} />
                  <Icon icon="ic:round-star" width="20" height="20" style={{ color: "#FFD700" }} />
                  <Icon icon="ic:round-star" width="20" height="20" style={{ color: "#FFD700" }} />
                  <Icon icon="ic:round-star" width="20" height="20" style={{ color: "#FFD700" }} />
                  <Icon icon="ic:round-star-half" width="20" height="20" style={{ color: "#FFD700" }} />
                </div>
                <p>4.5/<span style={{ color: "#888888" }}>5</span></p>
              </div>
              <div className="price">
                <p className="new-price">$130</p>
                <p className="old-price">$160</p>
                <div className="discount">
                  <p className="txt-discount">-30%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="btn-viewall">
          <p>View All</p>
        </div>
      </div>

      <div className="section-separator"></div>

      <div className="top-selling">
        <p className="sec-title">TOP SELLING</p>
        <div className="content-product">
          <div className="card">
            <div className="card-img">
              <img src={ts1} alt="" />
            </div>
            <div className="card-txt">
              <p className="card-title">Vertical Striped Shirt</p>
              <div className="rating">
                <div className="star-rating">
                  <Icon icon="ic:round-star" width="20" height="20" style={{ color: "#FFD700" }} />
                  <Icon icon="ic:round-star" width="20" height="20" style={{ color: "#FFD700" }} />
                  <Icon icon="ic:round-star" width="20" height="20" style={{ color: "#FFD700" }} />
                  <Icon icon="ic:round-star" width="20" height="20" style={{ color: "#FFD700" }} />
                  <Icon icon="ic:round-star-half" width="20" height="20" style={{ color: "#FFD700" }} />
                </div>
                <p>4.5/<span style={{ color: "#888888" }}>5</span></p>
              </div>
              <div className="price">
                <p className="new-price">$240</p>
                <p className="old-price">$260</p>
                <div className="discount">
                  <p className="txt-discount">-20%</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-img">
              <img src={ts2} alt="" />
            </div>
            <div className="card-txt">
              <p className="card-title">Courage Graphic T-shirt</p>
              <div className="rating">
                <div className="star-rating">
                  <Icon icon="ic:round-star" width="20" height="20" style={{ color: "#FFD700" }} />
                  <Icon icon="ic:round-star" width="20" height="20" style={{ color: "#FFD700" }} />
                  <Icon icon="ic:round-star" width="20" height="20" style={{ color: "#FFD700" }} />
                  <Icon icon="ic:round-star" width="20" height="20" style={{ color: "#FFD700" }} />
                  <Icon icon="ic:round-star-half" width="20" height="20" style={{ color: "#FFD700" }} />
                </div>
                <p>4.5/<span style={{ color: "#888888" }}>5</span></p>
              </div>
              <div className="price">
                <p className="new-price">$240</p>
                <p className="old-price">$260</p>
                <div className="discount">
                  <p className="txt-discount">-20%</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-img">
              <img src={ts3} alt="" />
            </div>
            <div className="card-txt">
              <p className="card-title">Loose Fit Bermuda Shorts</p>
              <div className="rating">
                <div className="star-rating">
                  <Icon icon="ic:round-star" width="20" height="20" style={{ color: "#FFD700" }} />
                  <Icon icon="ic:round-star" width="20" height="20" style={{ color: "#FFD700" }} />
                  <Icon icon="ic:round-star" width="20" height="20" style={{ color: "#FFD700" }} />
                  <Icon icon="ic:round-star" width="20" height="20" style={{ color: "#FFD700" }} />
                  <Icon icon="ic:round-star-half" width="20" height="20" style={{ color: "#FFD700" }} />
                </div>
                <p>4.5/<span style={{ color: "#888888" }}>5</span></p>
              </div>
              <div className="price">
                <p className="new-price">$240</p>
                <p className="old-price">$260</p>
                <div className="discount">
                  <p className="txt-discount">-20%</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-img">
              <img src={ts4} alt="" />
            </div>
            <div className="card-txt">
              <p className="card-title">Faded Skinny Jeans</p>
              <div className="rating">
                <div className="star-rating">
                  <Icon icon="ic:round-star" width="20" height="20" style={{ color: "#FFD700" }} />
                  <Icon icon="ic:round-star" width="20" height="20" style={{ color: "#FFD700" }} />
                  <Icon icon="ic:round-star" width="20" height="20" style={{ color: "#FFD700" }} />
                  <Icon icon="ic:round-star" width="20" height="20" style={{ color: "#FFD700" }} />
                  <Icon icon="ic:round-star-half" width="20" height="20" style={{ color: "#FFD700" }} />
                </div>
                <p>4.5/<span style={{ color: "#888888" }}>5</span></p>
              </div>
              <div className="price">
                <p className="new-price">$240</p>
                <p className="old-price">$260</p>
                <div className="discount">
                  <p className="txt-discount">-20%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="btn-viewall">
          <p>View All</p>
        </div>
      </div>
    </>
  );
}

