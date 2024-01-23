// Navbar.jsx
import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import AdminOperationMenus from "./AdminOperationMenus";
import { AiOutlineLogin } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import "./Navbar.scss";

const Navbar = () => {
  const [showAdminOperationMenus, setShowAdminOperationMenus] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [demoUser, setDemoUser] = useState({
    username: "DemoUser",
    profileImage:
      "https://images.pexels.com/photos/16756656/pexels-photo-16756656/free-photo-of-black-and-white-photo-of-a-swan-on-a-lake.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  });

  useEffect(() => {
    // For demonstration purposes, let's assume the user is authenticated by default.
    setIsAuthenticated(true);
  }, []);

  const toggleAdminOperationMenus = () => {
    setShowAdminOperationMenus(!showAdminOperationMenus);
  };

  const handleScroll = () => {
    const navbar = document.querySelector(".navbar");

    if (navbar) {
      const scrolled = window.scrollY;
      const threshold = 50;

      if (scrolled > threshold) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isAuthenticated ? "authenticated" : ""}`}>
      <div className="leftNavBar">
        <Link to="/">
          <img src="/Logo.png" alt="Logo" className="logo" />
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
        {isAuthenticated ? (
          <div className="profileContainer">
            <div className="profileImgContainer">
              <img
                src={demoUser.profileImage}
                alt="Profile"
                className="profileImg"
                onClick={toggleAdminOperationMenus}
              />
            </div>
          </div>
        ) : (
          <div className="authButtons">
            <Link to="/signin" className="authButton">
              Sign In
              <AiOutlineLogin fontSize={20} />
            </Link>
          </div>
        )}
        {showAdminOperationMenus && <AdminOperationMenus />}
      </div>
    </nav>
  );
};

export default Navbar;
