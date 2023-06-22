import React from 'react';
import { Link } from 'react-router-dom';
import "./ProductCard.css"

const ProductCard = ({
  product,
  productId,
  quantity,
  handleAddItemToCart,
  handleRemoveItemFromCart,
  showDescription
}) => {
  const { id, name, price, image, description } = product;

  const handleAddToCart = () => {
    handleAddItemToCart(id);
  };

  const handleRemoveFromCart = () => {
    handleRemoveItemFromCart(id);
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <Link to={`/products/${id}`}>
          <img src={image} alt={name} />
        </Link>
      </div>
      <h3 className="product-name">{name}</h3>
      <p className="product-price">${price.toFixed(2)}</p>
      {showDescription && <p className="product-description">{description}</p>}
      <div className="product-actions">
        <button className="add" onClick={handleAddToCart}>
          Add to Cart
        </button>
        <button className="remove" onClick={handleRemoveFromCart}>
          Remove from Cart
        </button>
      </div>
      {quantity > 0 && <div className="product-quantity">{quantity}</div>}
    </div>
  );
};

export default ProductCard;
