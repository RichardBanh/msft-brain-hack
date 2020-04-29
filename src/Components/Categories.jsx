import React from "react";
import Catnap from "../Assets/Images/SVG/Catnap.svg";
import Progress from "../Assets/Images/SVG/Progress.svg";

function Categories() {
  return (
    <div className="card">
      <img className="card__image" src={Catnap} alt="Coffee" />
      <div className="card__bottom">
        <h3 className="card__bottom-title">Sleep at 11:00PM Everyday</h3>
        <h3 className="card__bottom-ending">Ends in 7 days</h3>
        <img className="card__bottom-progress" src={Progress} alt="Progress" />
      </div>
    </div>
  );
};

export default Categories;

//cardloop
