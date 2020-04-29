import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="header__left"></Link>
      <div className="header__right">
        <Link to="" className="header__right-link">
          <div className="header__right-item">Explore</div>
        </Link>
        <Link to="" className="header__right-link">
          <div className="header__right-item">My Challenges</div>
        </Link>
        <Link to="" className="header__right-link">
          <div className="header__right-item">My Profile</div>
        </Link>
        <Link to="" className="header__right-link">
          <div className="header__right-item">Sign Out</div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
