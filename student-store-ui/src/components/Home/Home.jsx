import * as React from "react"
import About from "../About/About"
import ProductGrid from "../ProductGrid/ProductGrid"
import ProductCard from "../ProductCard/ProductCard"
import App from "../App/App"
import "./Home.css"

export default function Home({products}) {
  return (
    <div className="home">
      <ProductGrid products={products}/>
      <About/>
    </div>
  )
}
