import React from 'react';
import { useState} from 'react'
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import "./CheckoutForm.css"

const CheckoutForm = ({ 
    isOpen,
    shoppingCart,
    checkoutForm,
    handleOnCheckoutFormChange,
    handleOnSubmitCheckoutForm
}) => {

const [isCheckoutComplete, setIsCheckoutComplete] = useState(false);

const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleOnCheckoutFormChange(name, value);
};

const handleSubmit = (e) => {
    e.preventDefault();
    handleOnSubmitCheckoutForm();
    setIsCheckoutComplete(true);
};

return (
    <div className="checkout-form">
        
      <div className='checkout-header'>
        <h2>CHECKOUT</h2>
      </div>
      
       {!isCheckoutComplete && (
        <>
            <input
            type="email"
            name="email"
            label="email"
            placeholder="student@codepath.org"
            value={checkoutForm.email}
            onChange={handleInputChange}
            className="checkout-form-input"
             />
            <input
                type="text"
                name="name"
                placeholder="Student Name"
                label="Name"
                value={checkoutForm.name}
                onChange={handleInputChange}
                className="checkout-form-input"
            />
            <button className="checkout-button" onClick={handleSubmit}>
              Checkout
            </button>
        </>
        )}

        {isCheckoutComplete && (
            <p className="checkout-confirmation">Thank you for your purchase! Your receipt will be sent to your email.</p>
        )}
       {checkoutForm.error && <p className="error">{checkoutForm.error}</p>}
       {checkoutForm.success && <p className="success">Success!</p>}
    </div>
  );
};

export default CheckoutForm;
