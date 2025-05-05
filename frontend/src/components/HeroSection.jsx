import starVector from "../assets/Vector.png";

export default function HeroSection() {
  return (
    <div className="section-1">
      {/* Left section */}
      <div className="left-section-1">
        <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
        <p className="section-1-desc">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <button>Shop Now</button>

        {/* Testimonial section */}
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

          <div className="products">
            <p className="testi-section-1-title">30,000+</p>
            <p className="testi-section-1-desc">Happy Customers</p>
          </div>
        </div>
      </div>

      {/* Right section */}
      <div className="right-section-1">
        <img src={starVector} alt="" className="star star-top-left" />
        <img src={starVector} alt="" className="star star-bottom-right" />
      </div>
    </div>
  );
}