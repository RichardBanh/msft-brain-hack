import React from "react";
import Categories from "../Assets/Images/SVG/Categories.svg";

const BotCategory = () => {
  return (
    <div className="cat">
      <div className="cat__title">Categories</div>
      <img className="cat__image" src={Categories} alt="Categories" />
    </div>
  );
};

export default BotCategory;
