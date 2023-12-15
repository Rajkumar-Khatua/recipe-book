import React from "react";
import "./AdminLinksStyles.scss";
import { CiSettings } from "react-icons/ci";
import { GiHeartStake } from "react-icons/gi";
import { IoIosLogOut } from "react-icons/io";
import { Link } from "react-router-dom";
import { GiCampCookingPot } from "react-icons/gi";

const AdminOperationMenus = () => {
  return (
    <div className="AdminOperationMenus">
      <ul className="adminMenuLinks">
        <Link to="/add-recipe" className="adminLink">
          <GiCampCookingPot className="addRecipeIcon" />
          Add Recipe
        </Link>
        <Link to="/bookmarked" className="adminLink">
          <GiHeartStake className="savedIcon" />
          My Favorite
        </Link>
        <Link to="/settings" className="adminLink">
          <CiSettings className="settingsIcon" />
          Settings
        </Link>
        <Link to="/logout" className="adminLink">
          <IoIosLogOut className="logoutIcon" color="" />
          Logout
        </Link>
      </ul>
    </div>
  );
};

export default AdminOperationMenus;
