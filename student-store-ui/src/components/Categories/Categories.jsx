import React from 'react';

const Categories = ({ categories, selectedCategory, onSelectCategory }) => {
  const handleSelectAllCategories = () => {
    onSelectCategory('');
  };

  return (
    <div className="categories">
      <button
        className={selectedCategory === '' ? 'selected' : ''}
        onClick={handleSelectAllCategories}
      >
        All Categories
      </button>
      {categories.map((category) => (
        <button
          key={category}
          className={category === selectedCategory ? 'selected' : ''}
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
