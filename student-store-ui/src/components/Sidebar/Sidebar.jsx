import React from 'react';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import MenuIcon from '@material-ui/core/Menu';
import './Sidebar.css';

const Sidebar = ({
  isOpen,
  shoppingCart,
  products,
  checkoutForm,
  handleOnCheckoutFormChange,
  handleOnSubmitCheckoutForm,
  handleOnToggle,
}) => {
  return (
    <section className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <button className="toggle-button" onClick={handleOnToggle}>
        <i className="material-icons">
          menu
        </i>
      </button>
      
      {isOpen && (
        <>
          <ShoppingCart className='shopping-cart' shoppingCart={shoppingCart} products={products}  />
          <CheckoutForm className='checkout-form'
            checkoutForm={checkoutForm}
            handleOnCheckoutFormChange={handleOnCheckoutFormChange}
            handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
          />
        </>
      )}
    </section>
  );
};

export default Sidebar;
