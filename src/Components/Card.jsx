import React, { Component } from "react";

function Card(props) {
  const { activity, username } = props;
  console.log(props);
  return (
    <div className="card">
      <img className="card__image" src={activity.activityImg ? activity.activityImg : ""} alt="Coffee" />
      <div className="card__bottom">
        <h3 className="card__bottom-title">
          {activity.name ? activity.name : "not found"}
        </h3>
        <h3 className="card__bottom-ending">Ends in 7 days</h3>
        <div className="meter">
          <span />
        </div>
      </div>
    </div>
  );
}

export default Card;
