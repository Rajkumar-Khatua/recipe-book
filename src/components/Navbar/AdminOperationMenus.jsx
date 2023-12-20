import React, { useEffect, useRef, useState } from "react";
import "./AdminLinksStyles.scss";
import { CiSettings } from "react-icons/ci";
import { GiHeartStake } from "react-icons/gi";
import { IoIosLogOut } from "react-icons/io";
import { Link } from "react-router-dom";
import { GiCampCookingPot } from "react-icons/gi";

const AdminOperationMenus = ({ onClose }) => {
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <div className="AdminOperationMenus" ref={menuRef}>
      <ul className="adminMenuLinks">
        <Link to="/add-recipe" className="adminLink" onClick={handleLinkClick}>
          <GiCampCookingPot className="addRecipeIcon" />
          Add Recipe
        </Link>
        <Link to="/bookmarked" className="adminLink" onClick={handleLinkClick}>
          <GiHeartStake className="savedIcon" />
          My Favorite
        </Link>
        <Link to="/settings" className="adminLink" onClick={handleLinkClick}>
          <CiSettings className="settingsIcon" />
          Settings
        </Link>
        <Link to="/logout" className="adminLink" onClick={handleLinkClick}>
          <IoIosLogOut className="logoutIcon" color="" />
          Logout
        </Link>
      </ul>
    </div>
  );
};

export default AdminOperationMenus;
