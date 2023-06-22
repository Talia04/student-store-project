import * as React from "react"
import { BrowserRouter } from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import axios from 'axios'
import ProductGrid from ""
import "./App.css"

export default function App() {

  const [products, setProducts] = React.useState([]);
  const [error, setError] = React.useState('');


  React.useEffect(() => {
    const storeURL = 'https://codepath-store-api.herokuapp.com/store';
    const fetchData = async () => {
      try {
        const response = await axios.get(storeURL);
        const productsArray = response.data
        setProducts(productsArray)
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
          {/* YOUR CODE HERE! */}
         
          <Navbar />
          <Sidebar />
          <Home />



        </main>
      </BrowserRouter>
    </div>
  )
}
