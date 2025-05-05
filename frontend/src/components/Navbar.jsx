import { Icon } from "@iconify/react";
import { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const [isShopOpen, setIsShopOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsShopOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav>
      <div className="wrapper-nav">
        <div className="nav-left">
          <p className="logo">SHOP.CO</p>
          <div className="nav-links">
            <ul>
              <li className="nav-dropdown-container" ref={dropdownRef}>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsShopOpen(!isShopOpen);
                  }}
                  className="nav-dropdown-trigger"
                >
                  Shop
                  <Icon
                    icon={isShopOpen ? "mdi:chevron-up" : "mdi:chevron-down"}
                    width="20"
                    className="nav-dropdown-icon"
                  />
                </a>
                {isShopOpen && (
                  <div className="nav-dropdown-menu">
                    <a href="#">Men's Clothing</a>
                    <a href="#">Women's Clothing</a>
                    <a href="#">Accessories</a>
                    <a href="#">Footwear</a>
                    <a href="#">Collections</a>
                  </div>
                )}
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
  );
}