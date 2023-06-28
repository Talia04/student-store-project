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
    console.log("Successfully added to cart!")
  };

  const handleRemoveFromCart = () => {
    handleRemoveItemFromCart(id);
  };

  return (
    <div className="product-card">
      <div className="media">
        <Link to={`/products/${id}`}>
          <img src={image} alt={name} />
        </Link>
      </div>
      <div className="product-info">
        <div className="main-info">
          <h3 className="product-name">{name}</h3>
          <p className="product-price">${price.toFixed(2)}</p>
          {showDescription && <p className="product-description">{description}</p>}
        </div>
        <div className="product-actions">
        <button className="add" onClick={() => handleAddToCart(id)}>
            +
          </button>
          <button className="remove" onClick= {() =>handleRemoveFromCart(id)}>
            -
          </button>
        </div>
        {quantity > 0 && <div className="product-quantity">{quantity}</div>}
      </div>
    </div>
  );
};

export default ProductCard;
