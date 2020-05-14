import React from "react";
import { Link } from "react-router-dom";
import { dataCall } from "../HelperFunction/helper";

const Header = (props) => {
  async function signout(e) {
    e.preventDefault();
    const report = { success: null, error: null, data: null };
    await dataCall("POST", "/logout", "", report);
    if (report.success === true) {
      localStorage.clear();
      props.setToken(false)
    }
  }
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
        <Link to="/PersonalPage" className="header__right-link">
          <div className="header__right-item">My Profile</div>
        </Link>
        <Link className="header__right-link" onClick={signout}>
          <div className="header__right-item">Sign Out</div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
