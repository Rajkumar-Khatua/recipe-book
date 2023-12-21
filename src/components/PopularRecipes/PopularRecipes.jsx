// PopularRecipes.js
import React, { useState } from "react";
import "./PopularRecipes.scss";
import { GiPolarStar } from "react-icons/gi";
import { Link } from "react-router-dom";

const recipes = [
  {
    id: 1,
    title: "Roasted Turkey",
    image:
      "https://img.freepik.com/free-photo/baked-chicken-wings-asian-style-tomatoes-sauce-plate_2829-10657.jpg?w=1380&t=st=1703139232~exp=1703139832~hmac=8e2f99732d57bf01d6059e70d886343a531a60f73ceabc9958b1a8a092156c30",
    rating: 4.5,
  },
  {
    id: 2,
    title: "Christmas Cookies",
    image:
      "https://img.freepik.com/free-photo/chocolate-chip-cookie-white_93675-132144.jpg?t=st=1703139243~exp=1703139843~hmac=f30242e6e154309ffcf30aeea420809feec7409746a56e11a1979bcd6d50a319",
    rating: 5,
  },
  {
    id: 3,
    title: "Eggnog Delight",
    image:
      "https://img.freepik.com/free-photo/hot-chocolate-with-marshmallows_2829-8013.jpg?w=826&t=st=1703139323~exp=1703139923~hmac=c31bdd7777105fcfedeeb3d50d4450ece5319fde06a70fb2eac36d8791a1035d",
    rating: 4,
  },
];

const PopularRecipes = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleHover = (index) => {
    setHoveredIndex(index);
  };

  const handleLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="popular-recipes">
      <div className="recipe-container">
        {recipes.map((recipe, index) => (
          <Link
            to={`/recipe/${recipe.id}`}
            key={recipe.id}
            className="recipe-link"
          >
            <div
              className={`recipe-card ${
                hoveredIndex === index ? "hovered" : ""
              }`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={handleLeave}
            >
              <div className="background-layer"></div>
              <div className="content-container">
                <h3 className="recipe-title">{recipe.title}</h3>
                <p className="recipe-description">Description goes here...</p>
                <div className="ratings">
                  {[...Array(Math.floor(recipe.rating))].map((star, i) => (
                    <GiPolarStar key={i} className="star" />
                  ))}
                </div>
              </div>
              <img
                src={recipe.image}
                alt={recipe.title}
                className="recipe-image"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PopularRecipes;
