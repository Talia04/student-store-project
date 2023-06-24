import React from 'react';
import ProductCard from '../ProductCard/ProductCard';

const ProductView = ({
  product,
  productId,
  quantity,
  handleAddItemToCart,
  handleRemoveItemFromCart,
}) => {
  return (
    <div className="product-view">
      <h1 className="product-id">Product #{productId}</h1>
      <ProductCard
        product={product}
        showDescription={true}
        quantity={quantity}
        handleAddItemToCart={handleAddItemToCart}
        handleRemoveItemFromCart={handleRemoveItemFromCart}
      />
    </div>
  );
};

export default ProductView;
