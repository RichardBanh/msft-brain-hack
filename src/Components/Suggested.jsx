import React from "react";
import Book from "../Assets/Images/SVG/Book.svg";
import POne from "../Assets/Images/SVG/Person1.svg";
import PTwo from "../Assets/Images/SVG/Person2.svg";
import PThree from "../Assets/Images/SVG/Person3.svg";
import Plus from "../Assets/Images/SVG/Plus10.svg";

function Categories() {
  return (
    <div className="suggested">
      <img className="suggested__image" src={Book} alt="Read" />
      <div className="suggested__bottom">
        <div className="suggested__bottom-text">
          <h3 className="suggested__bottom-title">Read a Book Every Week</h3>
          <h3 className="suggested__bottom-ending">Starts in 3 days</h3>
        </div>
        <button className="suggested__bottom-button">Attend</button>
      </div>
      <div className="suggested__people">
        <img className="suggested__people-avatar" src={POne} alt="avatar" />
        <img className="suggested__people-avatar" src={PTwo} alt="avatar" />
        <img className="suggested__people-avatar" src={PThree} alt="avatar" />
        <img className="suggested__people-avatar" src={Plus} alt="avatar" />
      </div>
    </div>
  );
}

export default Categories;
