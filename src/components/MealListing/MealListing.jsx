// MealListing.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiFilter } from "react-icons/ci";

import "./MealListing.scss";

const MealListing = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);

  const recipes = [
    // Dummy data
    {
      id: 1,
      name: "Pasta Carbonara",
      category: "Italian",
      difficulty: "Intermediate",
    },
    { id: 2, name: "Chicken Curry", category: "Indian", difficulty: "Easy" },
    // Add more dummy data as needed
  ];

  const categories = ["All", "Italian", "Indian", "Mexican", "Desserts"];

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const handleCategoryChange = (index) => {
    setCurrentCategoryIndex(index);
  };

  return (
    <div className="recipe-list-container">
      <div className="filter-menu" onClick={toggleFilters}>
        <CiFilter className="filter-icon" />
        <span className="filter-text">Filter</span>
      </div>
      {showFilters && (
        <div className="filters-container">
          {/* Include filter options here */}
          {/* ... */}
        </div>
      )}
      <div className="category-carousel">
        {/* Manual category carousel content */}
        <div className="slider-controls">
          <button
            onClick={() =>
              handleCategoryChange(
                (currentCategoryIndex - 1 + categories.length) % categories.length
              )
            }
          >
            Previous
          </button>
          <div className="category-item">{categories[currentCategoryIndex]}</div>
          <button
            onClick={() =>
              handleCategoryChange((currentCategoryIndex + 1) % categories.length)
            }
          >
            Next
          </button>
        </div>
        {categories.map((category, index) => (
          <div
            key={category}
            className={`category-item ${
              index === currentCategoryIndex ? "active" : ""
            }`}
            onClick={() => handleCategoryChange(index)}
          >
            {/* {category} */}
          </div>
        ))}
      </div>
      <div className="recipe-cards">
        {/* Recipe cards */}
        {recipes
          .filter(
            (recipe) =>
              categories[currentCategoryIndex] === "All" ||
              recipe.category === categories[currentCategoryIndex]
          )
          .map((recipe) => (
            <div key={recipe.id} className="recipe-card">
              <img src="" alt="recipe-img" className="recipe-img" />
              <h3 className="recipe-name">{recipe.name}</h3>
              <p className="recipe-category">Category: {recipe.category}</p>
              <p className="recipe-difficulty">Difficulty: {recipe.difficulty}</p>
              <Link to={`/recipe/${recipe.id}`} className="recipe-link">
                View Recipe
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MealListing;
