import * as React from "react"
import { BrowserRouter } from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import axios from 'axios'
import ProductGrid from "../ProductGrid/ProductGrid"
import ProductCard from "../ProductCard/ProductCard"
import Hero from "../Hero/Hero"
import SubNavBar from "../SubNavBar/SubNavBar"
import About from "../About/About.jsx"
import "./App.css"

export default function App() {

  const [products, setProducts] = React.useState([]);
  const [error, setError] = React.useState('');


  React.useEffect(() => {
    const storeURL = 'https://codepath-store-api.herokuapp.com/store';
    const fetchData = async () => {
      try {
        const response = await axios.get(storeURL);
        const productsArray = response.data;
        setProducts(productsArray.products)
        console.log(productsArray);
      } catch (error) {
        setError('Sorry. No products found')
        console.log("Error:", error);
      }

    };
    fetchData();
  },[]); // Empty dependency array to ensure this effect only runs once on component mount
  

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          
          <Navbar />
          <Hero />
          <SubNavBar/>
          <Sidebar />
          <Home products={products}/>
            
  
        </main>
      </BrowserRouter>
    </div>
  );
};
