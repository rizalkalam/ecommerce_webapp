import { Icon } from '@iconify/react';
import cartIcon from '../../../assets/cart.png';
import userIcon from '../../../assets/user.png';
import './Navbar.css'; // Import CSS khusus Navbar

const Navbar = () => {
  return (
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
  );
};

export default Navbar;