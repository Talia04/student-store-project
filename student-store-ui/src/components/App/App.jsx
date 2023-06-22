import * as React from "react"
import { BrowserRouter } from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import axios from 'axios'

import "./App.css"

export default function App() {

  React.useEffect(() => {
    const storeURL = 'https://codepath-store-api.herokuapp.com/store';
    const fetchData = async () => {
      try {
        const response = await axios.get(storeURL);
        console.log("Success!");
        console.log(response.data);
      } catch (error) {
        console.log("Error:", error);
      }

    };
    fetchData();
  }
  )

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
