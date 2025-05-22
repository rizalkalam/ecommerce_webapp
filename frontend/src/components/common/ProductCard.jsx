import { Icon } from '@iconify/react';

const ProductCard = ({ image, title, rating, price, oldPrice, discount }) => {
  return (
    <div className="card">
      <div className="card-img">
        <img src={image} alt={title} />
      </div>
      <div className="card-txt">
        <p className="card-title">{title}</p>
        <div className="rating">
          {/* Rating component bisa dipisahkan lagi */}
          <div className="star-rating">
            {/* Stars */}
          </div>
          <p>{rating}/<span style={{ color: "#888888" }}>5</span></p>
        </div>
        <div className="price">
          <p className="new-price">${price}</p>
          {oldPrice && <p className="old-price">${oldPrice}</p>}
          {discount && (
            <div className="discount">
              <p className="txt-discount">{discount}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;