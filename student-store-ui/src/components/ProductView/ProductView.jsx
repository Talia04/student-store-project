import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { useParams } from 'react-router-dom';
export default function ProductView({
  props, products, isFetching
}
//   quantity,
//   handleAddItemToCart,
//   handleRemoveItemToCart
) {
    let params =useParams();

    let product = products.find((product1)=>
        product1.id.toString()===params.productId
    )

    console.log(products,params);
    console.log(isFetching);
    if (isFetching===false){
  return (
    <div className="product-view">
      <h1 className="product-id">Product #{params.productId}</h1>
      <ProductCard
        product={product}
        showDescription={true}
        // quantity={quantity}
        // handleAddItemToCart={handleAddItemToCart}
        // handleRemoveItemToCart={handleRemoveItemToCart}
      />
    </div>
  );}

  else { 
    return <div>Error</div>

  }
}
