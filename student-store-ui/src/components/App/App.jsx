import * as React from "react"
import { useState, useEffect } from 'react'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import { useParams } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import axios from 'axios'
import ProductGrid from "../ProductGrid/ProductGrid"
import ProductCard from "../ProductCard/ProductCard"
import SubNavBar from "../SubNavBar/SubNavBar"
import About from "../About/About.jsx"
import Contact from "../Contact/Contact"
import Footer from "../Footer/Footer"
import ProductDetail from "../ProductDetail/ProductDetail"
import ShoppingCart from "../ShoppingCart/ShoppingCart"
import CheckoutForm from "../CheckoutForm/CheckoutForm"
import "./App.css"

export default function App() {

  const [products, setProducts] = React.useState([]);
  const [allProducts, setAllProducts] = React.useState([]);
  const [searchText, setSearchText] = React.useState("");
  const [error, setError] = React.useState('');
  const [isFetching, setIsFetching] = React.useState(true);
  const [isOpen, setIsOpen] = React.useState(null);
  const [shoppingCart, setShoppingCart] = useState([]);
  const [checkoutForm, setCheckoutForm] = useState({
    // Initial state for the checkout form fields
    name: '',
    email: '',
    address: '',
  }) 



  React.useEffect(() => {
    const storeURL = 'https://codepath-store-api.herokuapp.com/store';
    
    const fetchData = async () => {
      try {
        const response = await axios.get(storeURL);
        const productsArray = response.data.products;
        setIsFetching(false)
        setProducts(productsArray)
        setAllProducts(productsArray)
        
      } catch (error) {
        setError('Sorry. No products found')
        console.log("Error:", error);
      }

    };
    fetchData();
  },[]); // Empty dependency array to ensure this effect only runs once on component mount
  
 // Function to handle toggling the Sidebar's open/closed state
  const handleOnToggle = () => {
    setIsOpen(!isOpen);
    if (isOpen){
      console.log("Sidebar Open!")
    }
  };

  // Function to handle updating the shopping cart state
  const handleUpdateShoppingCart = (updatedCart) => {
    setShoppingCart(updatedCart);
    console.log(shoppingCart);
  };
  
  // Function to handle updating the checkout form state
  const handleUpdateCheckoutForm = (updatedForm) => {
    setCheckoutForm(updatedForm);
  };

  // Function to handle adding an item to the shopping cart
  const handleAddItemToCart = (productId) => {
  const updatedCart = [...shoppingCart];
  const existingItem = updatedCart.find((item) => item.itemId === productId);

  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    const product = products.find((item) => item.id === productId);
    const newItem = {
      itemId: productId,
      quantity: 1,
    };
    updatedCart.push(newItem);
    
  }
  setShoppingCart(updatedCart);
  };

  // Function to handle updating the quantity of an item in the shopping cart
  const handleUpdateQuantity = (itemId, newQuantity) => {
    const updatedCart = shoppingCart.map((item) => {
      if (item.itemId === itemId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setShoppingCart(updatedCart);
  };


  // Function to handle removing an item from the shopping cart
  const handleRemoveItemFromCart = (productId) => {
    const updatedCart = [...shoppingCart];
    const existingItem = updatedCart.find((item) => item.itemId === productId);

    if (existingItem) {
      existingItem.quantity -= 1;

      if (existingItem.quantity === 0) {
        const itemIndex = updatedCart.findIndex((item) => item.itemId === productId);
        updatedCart.splice(itemIndex, 1);
      }

    }

    setShoppingCart(updatedCart);
  };

  // Function to handle updating the checkout form state
  const handleOnCheckoutFormChange = (name, value) => {
    setCheckoutForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  // Function to handle submitting the checkout form
  const handleOnSubmitCheckoutForm = async () => {
    const requestBody = {
      user: {
        name: checkoutForm.name,
        email: checkoutForm.email,
      },
      shoppingCart: shoppingCart.map((item) => ({
        itemId: item.itemId,
        quantity: item.quantity,
    })),
  };
  console.log("Success!")
  };


  const handleSearch = (event) => {
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setProducts(filteredProducts);
  }
  
  return (
    <div className="app">
      <BrowserRouter>
        <Sidebar 
          isOpen={isOpen}
          handleOnToggle={handleOnToggle}
          shoppingCart={shoppingCart}
          products={products}
          checkoutForm={checkoutForm}
          handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
          
        >

        </Sidebar>
        <main>
          
          <Navbar />
          
          <SubNavBar searchText={searchText}
            setSearchText={setSearchText} 
            handleSearch={handleSearch} 
            allProducts={allProducts}
            setProducts={setProducts}

          />

          <Routes>

            <Route
              path='/'  element={<Home products={products} handleAddItemToCart={handleAddItemToCart} handleRemoveItemFromCart ={handleRemoveItemFromCart}/>}
            />
            <Route 
              path='/products/:productId' element={<
                ProductDetail products={products}
                isFetching={isFetching} 
                quantity={
                  shoppingCart.find((item) => item.itemId === useParams.productId)?.quantity || 0
                }
                handleAddItemToCart={handleAddItemToCart}
                handleRemoveItemFromCart={handleRemoveItemFromCart}
              />}
              />
          </Routes>

          <Contact />
          <Footer/>
            
        </main>
      </BrowserRouter>
    </div>
  );
};
