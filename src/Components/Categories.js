import React from "react";
import Coffee from "../Assets/Cards/SVG/Coffee.svg";
import Progress from "../Assets/Cards/SVG/Progress.svg";

const Categories = () => {
  return (
    <div className="card">
      <img className="card__image" src={Coffee} alt="Coffee" />
      <div className="card__bottom">
        <h3 className="card__bottom-title">Sleep at 11:00PM Everyday</h3>
        <h3 className="card__bottom-ending">Ends in 7 days</h3>
        <img className="card__bottom-progress" src={Progress} alt="Progress" />
      </div>
    </div>
  );
};

export default Categories;
