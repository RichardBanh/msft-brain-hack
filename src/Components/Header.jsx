import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="header__left"></Link>
      <div className="header__right">
        <Link to="" className="header__right-link">
          <h3 className="header__right-item">Explore</h3>
        </Link>
        <Link to="" className="header__right-link">
          <h3 className="header__right-item">My Challenges</h3>
        </Link>
        <Link to="" className="header__right-link">
          <h3 className="header__right-item">My Profile</h3>
        </Link>
        <Link to="" className="header__right-link">
          <h3 className="header__right-item">Sign Out</h3>
        </Link>
      </div>
    </div>
  );
};

export default Header;
