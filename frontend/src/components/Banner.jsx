import { useState } from "react";

export default function Banner() {
  const [showBanner, setShowBanner] = useState(true);

  if (!showBanner) return null;

  return (
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
  );
}