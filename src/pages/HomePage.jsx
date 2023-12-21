import React from "react";
import "./HomePage.scss";
import PopularRecipes from "../components/PopularRecipes/PopularRecipes";
const Home = () => {
  return (
    <div className="hero-section">
    <div className="hero-content">
      <div className="text-content">
        <h1 className="hero-website-name">Christmas Recipes Wonderland</h1>
        <p className="hero-description">Discover festive recipes to make your holidays extra special!</p>
        <div className="hero-search-container">
          <input type="text" placeholder="Search for recipes..." className="hero-search-input" />
          <button className="hero-search-button">Search</button>
        </div>
      </div>
    </div>
    <div className="recipes-container">
      <PopularRecipes />
    </div>
  </div>
  );
};

export default Home;
