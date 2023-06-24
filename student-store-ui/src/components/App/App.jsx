import * as React from "react"
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import axios from 'axios'
import ProductGrid from "../ProductGrid/ProductGrid"
import ProductCard from "../ProductCard/ProductCard"
import Hero from "../Hero/Hero"
import SubNavBar from "../SubNavBar/SubNavBar"
import About from "../About/About.jsx"
import Contact from "../Contact/Contact"
import Footer from "../Footer/Footer"
import ProductView from "../ProductView/ProductView"
import "./App.css"

export default function App() {

  const [products, setProducts] = React.useState([]);
  const [allProducts, setAllProducts] = React.useState([]);
  const [searchText, setSearchText] = React.useState("");
  const [error, setError] = React.useState('');
  const [isFetching, setIsFetching] = React.useState(true);

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
  
  const handleSearch = (event) => {
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setProducts(filteredProducts);
  };

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          
          <Navbar />
          
          <SubNavBar searchText={searchText}
            setSearchText={setSearchText} 
            handleSearch={handleSearch} 
            allProducts={allProducts}
            setProducts={setProducts}
          />
          <Sidebar />

          <Routes>

            <Route
              path='/'        element={<Home products={products}/>}
            />
            <Route 
              path='/products/:productId' element={<ProductView products={products} isFetching={isFetching}/>}
              />
          </Routes>
          


          <Contact />
          <Footer/>
            
        </main>
      </BrowserRouter>
    </div>
  );
};
