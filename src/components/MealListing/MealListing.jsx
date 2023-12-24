import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./MealListing.scss";

const MealListing = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        loading(true);
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/categories.php"
        );
        const data = await response.json();
        setCategories(response);
        console.log(data.categories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
      setLoading(false);
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const endpoint = selectedCategory
          ? `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`
          : "https://www.themealdb.com/api/json/v1/1/search.php?s=";
        const response = await fetch(endpoint);
        const data = await response.json();
        setRecipes(data.meals);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();
  }, [selectedCategory]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="meal-listing">
      <div className="categories">
        <label className="category-label">Filter by Category:</label>
        <select
          onChange={(e) => handleCategoryChange(e.target.value)}
          className="category-select"
        >
          <option value="" className="category-option">
            All Categories
          </option>
          {categories.map((category) => (
            <option
              key={category.strCategory}
              value={category.strCategory}
              className="category-option"
            >
              {category.strCategory}
            </option>
          ))}
        </select>
      </div>
      {recipes.map((recipe) => (
        <div key={recipe.idMeal} className="meal-card">
          <img
            src={`https://www.themealdb.com/images/media/meals/${recipe.strMealThumb}/preview`}
            alt={recipe.strMeal}
            className="meal-thumbnail"
          />
          <div className="meal-details">
            <h3 className="meal-title">{recipe.strMeal}</h3>
            <p className="meal-description">
              {recipe.strInstructions.slice(0, 80)}...
            </p>
            <Link to={`/recipe/${recipe.idMeal}`} className="details-button">
              Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MealListing;
