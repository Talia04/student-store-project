import React, { useState, useEffect } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProductView from '../ProductView/ProductView';

export default function ProductDetail({
  handleAddItemToCart,
  handleRemoveItemFromCart
}) {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { productId } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://codepath-store-api.herokuapp.com/store/${productId}`);
        setProduct(response.data.product);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (isLoading) {
    return <h1 className="loading">Loading...</h1>;
  }

  if (!product) {
    return <h1 className="not-found">Not Found</h1>;
  }

  return (
    <div className="product-detail">
      <h1 className="product-id">Product #{productId}</h1>
      <ProductView
        product={product}
        showDescription={true}
        handleAddItemToCart={handleAddItemToCart}
        handleRemoveItemFromCart={handleRemoveItemFromCart}
      />
    </div>
  );
}
