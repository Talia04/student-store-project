import React from 'react';
import "./ShoppingCart.css";

const ShoppingCart = ({ isOpen, 
    products, 
    shoppingCart, 
    handleRemoveItemFromCart,
    handleClearCart,
    handleCheckout,
    handleUpdateQuantity

}) => {

  const calculateSubtotal = () => {
    let subtotal = 0;
    for (const item of shoppingCart) {
      const product = products.find((p) => p.id === item.itemId);
      const productPrice = product.price
      subtotal += productPrice * item.quantity;
      console.log(productPrice)
      console.log(item.quantity)
      console.log(subtotal)
    }
    return subtotal.toFixed(2);
  };

  const calculateTax = (subtotal) => {
    const taxRate = 0.0875; // 8.75%
    return (subtotal * taxRate).toFixed(2);
  };

  const calculateTotal = () => {
    const subtotal = parseFloat(calculateSubtotal());
    const tax = parseFloat(calculateTax(subtotal));
    return (subtotal + tax).toFixed(2);
  };

  const handleCheckoutClick = () => {
    handleCheckout();
    setIsCheckoutComplete(true);
  };

  return (
    <div className="shopping-cart">
        <div className='cart-header'>
            <h2>YOUR CART</h2>
        </div>
      {shoppingCart.length === 0 ? (
        <p className="notification">No items added to cart yet. Start shopping now!</p>
      ) : (
        <>
            <div className='table-headers'>
                <h3 className='item'>Item</h3>
                <h3 className='quantity'>Quantity</h3>
                <h3 className='unit-price'>Unit Price</h3>
            </div>
          {shoppingCart.map((item) => {
            const product = products.find((p) => p.id === item.itemId);
            return (
              <div key={item.itemId} className="cart-item">
                <div className='item'>
                    <p className="cart-product-name">{product.name}</p>
                </div>
                <div className='quantity'>
                    <p className="cart-product-quantity">{item.quantity}</p>
                </div>
                <div className='price'>
                    <p className="cart-product-price">${product.price}</p>
                </div>
                
              </div>
            );
          })}
          <p className="subtotal">Subtotal: ${calculateSubtotal()}</p>
          <p className="total-price">
            Total Price (incl. tax): ${calculateTotal()}
          </p>
        </>
      )}
    </div>
  );
};

export default ShoppingCart;
