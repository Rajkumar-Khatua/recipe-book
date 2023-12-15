import React, { useState } from "react";
import { FaSearch, FaUser } from "react-icons/fa";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import AdminOperationMenus from "./AdminOperationMenus";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  const [showAdminOperationMenus, setShowAdminOperationMenus] = useState(false);

  const toggleAdminOperationMenus = () => {
    setShowAdminOperationMenus(!showAdminOperationMenus);
  };

  return (
    <nav className="navbar">
      <div className="leftNavBar">
        <Link to="/">
          <img
            src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
            alt="Netflix Logo"
            className="logo"
          />
        </Link>
      </div>
      <div className="middleNavBar">
        <ul className="navLists">
          <Link to="/" className="navLink">
            Home
          </Link>

          <Link to="/series" className="navLink">
            Recipes
          </Link>
          <Link to="/movies" className="navLink">
            Add Recipe
          </Link>
          <Link to="/new-and-popular" className="navLink">
            New and Popular
          </Link>
          <Link to="/my-list" className="navLink">
            My List
          </Link>
        </ul>
      </div>
      <div className="rightNavBar">
        <div className="searchContainer">
          <CiSearch className="searchIcon" />
          <input
            type="text"
            placeholder="Titles, People, Genres"
            className="searchInput"
          />
        </div>
        <div className="profileContainer">
          <div className="profileImgContainer">
            <img
              src="https://images.pexels.com/photos/16756656/pexels-photo-16756656/free-photo-of-black-and-white-photo-of-a-swan-on-a-lake.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt="Profile"
              className="profileImg"
              onClick={toggleAdminOperationMenus}
            />
          </div>
        </div>
        {showAdminOperationMenus && <AdminOperationMenus />}
      </div>
    </nav>
  );
};

export default Navbar;
