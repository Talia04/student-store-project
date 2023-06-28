import * as React from "react"
import { useState } from "react"
import About from "../About/About"
import ProductGrid from "../ProductGrid/ProductGrid"
import Hero from "../Hero/Hero"
import Categories from "../Categories/Categories"
import "./Home.css"

export default function Home ({
    products,
    handleAddItemToCart,
    handleRemoveItemFromCart
  }) {
  const [selectedCategory, setSelectedCategory] = useState('All Categories');

  // Filter the products based on the selected category
  const filteredByCategory = selectedCategory === 'All Categories'
    ? products
    : products.filter((product) => product.category === selectedCategory);

  // Get all the unique categories from the products
  const categories = [...new Set(products.map((product) => product.category))];

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    console.log("s",category);
  };

  return (
    <div>
    <Hero/>
      <Categories
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={handleCategorySelect}
      />
      <ProductGrid products={filteredByCategory} 
        handleAddItemToCart={handleAddItemToCart} 
        handleRemoveItemFromCart={handleRemoveItemFromCart}
        />
      <About/>
    </div>
  );
};
