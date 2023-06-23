import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import "./ProductGrid.css"

const ProductGrid = ({
  products
//   handleAddItemToCart,
//   handleRemoveItemFromCart
}) => {
  return (
    <div className="product-grid">
        
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          showDescription={false}
          
        //   handleAddItemToCart={handleAddItemToCart}
        //   handleRemoveItemFromCart={handleRemoveItemFromCart}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
