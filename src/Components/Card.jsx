import React, { Component } from "react";

function Card(props) {
  const { imgSrc, activityname, progress } = props;
  console.log(props);
  return (
    <div className="card">
      <img className="card__image" src={imgSrc ? imgSrc : ""} alt="Coffee" />
      <div className="card__bottom">
        <h3 className="card__bottom-title">
          {activityname ? activityname : "not found"}
        </h3>
        <h3 className="card__bottom-ending">Ends in 7 days</h3>
        <div className="meter">
          <span style={{ width: `${progress ? progress : "50%"}` }} />
        </div>
      </div>
    </div>
  );
}

export default Card;
