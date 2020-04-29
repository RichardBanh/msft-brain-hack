import React from "react";
import Category from "../../Assets/Images/SVG/Categories.svg";

const Categories = () => {
  return (
    <div className="cat">
      <img className="cat__image" src={Category} alt="Categories" />
    </div>
  );
};

export default Categories;
