import React from "react";
import Book from "../Assets/Images/SVG/Book.svg";
// import POne from "../Assets/Images/SVG/Person1.svg";
// import PTwo from "../Assets/Images/SVG/Person2.svg";
// import PThree from "../Assets/Images/SVG/Person3.svg";
// import Plus from "../Assets/Images/SVG/Plus10.svg";
import All from "../Assets/Images/SVG/AllAvatars.svg";

function Categories() {
  return (
    <>
      <div className="suggested__title">Popular Challenges</div>
      <div className="suggested">
        <div className="suggested__category">
          <img className="suggested__image" src={Book} alt="Read" />
        </div>
        <div className="suggested__bottom">
          <div className="suggested__bottom-text">
            <div className="suggested__bottom-title">
              Read a Book Every Week
            </div>
            <div className="suggested__bottom-ending">Starts in 3 days</div>
          </div>
          <button className="suggested__bottom-button">Join</button>
        </div>
        <div className="suggested__people">
          <img className="suggested__people-avatar" src={All} alt="avatar" />
          {/* <img className="suggested__people-avatar" src={PTwo} alt="avatar" />
        <img className="suggested__people-avatar" src={PThree} alt="avatar" />
        <img className="suggested__people-avatar" src={Plus} alt="avatar" /> */}
        </div>
      </div>
    </>
  );
}

export default Categories;
