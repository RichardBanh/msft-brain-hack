import React from "react";
import Categories from "../../Assets/Images/SVG/Categories.svg";

const BotCategory = () => {
  return (
    <div className="cat">
      <img className="cat__image" src={Categories} alt="Categories" />
    </div>
  );
};

export default BotCategory;
