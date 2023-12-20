import React, { useState } from "react";
import { RiMenu2Line } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import { CiHome } from "react-icons/ci";
import { GiRiceCooker } from "react-icons/gi";
import { MdOutlineCallMade } from "react-icons/md";
import { MdOutlineWavingHand } from "react-icons/md";

import { Link } from "react-router-dom";
import "./MobileMenu.scss";
import AdminOperationMenus from "../Navbar/AdminOperationMenus";

const MobileMenu = () => {
  const [showMenuLinks, setShowMenuLinks] = useState(false);
  const [showAdminOperationMenus, setShowAdminOperationMenus] = useState(false);

  const toggleAdminOperationMenus = () => {
    setShowAdminOperationMenus(!showAdminOperationMenus);
  };

  const handleMenuIconClick = () => {
    setShowMenuLinks(!showMenuLinks);
  };

  const handleLinkClick = () => {
    // Additional logic when a menu link is clicked
    setShowMenuLinks(false); // Close the menu after clicking a link
  };

  const closeAdminMenus = () => {
    setShowAdminOperationMenus(false);
  };

  return (
    <div className="mobile-menu">
      <div className="menu-icon" onClick={handleMenuIconClick}>
        {showMenuLinks ? <RxCross1 /> : <RiMenu2Line />}
      </div>
      <div className={`menu-links ${showMenuLinks ? "show" : ""}`}>
        <Link
          to="/home"
          className="menu-link"
          onClick={() => {
            handleLinkClick();
            closeAdminMenus();
          }}
        >
          Home <CiHome className="Home__mobile__icon" />
        </Link>
        <Link
          to="/recipes"
          className="menu-link"
          onClick={() => {
            handleLinkClick();
            closeAdminMenus();
          }}
        >
          Recipes <GiRiceCooker className="Recipe__mobile__icon" />
        </Link>
        <Link
          to="/favorites"
          className="menu-link"
          onClick={() => {
            handleLinkClick();
            closeAdminMenus();
          }}
        >
          Add Recipe <MdOutlineCallMade className="Add__recipe__mobile__icon" />
        </Link>
        <Link
          to="/profile"
          className="menu-link"
          onClick={() => {
            handleLinkClick();
            closeAdminMenus();
          }}
        >
          New and Popular{" "}
          <MdOutlineWavingHand className="NewRecipe__mobile__icon" />
        </Link>
      </div>
      <div className="logo">
        <img
          src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
          alt="Netflix Logo"
          className="logo__img"
        />
      </div>
      <div className="profile-img" onClick={toggleAdminOperationMenus}>
        <img
          src="https://images.pexels.com/photos/16756656/pexels-photo-16756656/free-photo-of-black-and-white-photo-of-a-swan-on-a-lake.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="Profile"
          className="profile-img"
        />
      </div>
      {showAdminOperationMenus && (
        <AdminOperationMenus onClose={closeAdminMenus} />
      )}
    </div>
  );
};

export default MobileMenu;
