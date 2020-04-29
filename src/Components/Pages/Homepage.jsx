import React, { useState } from "react";
import CardLoop from "../CardLoop";
import MyChallenges from "../HomePageComp/MyChallenges";
import Suggested from "../HomePageComp/Suggested";
import Popular from "../HomePageComp/PopularSelct";
import Categories from "../HomePageComp/Categories";

function Homepage() {
  return (
    <>
      <div className="card__title">My Challenges in Process</div>
      <MyChallenges />
      <div className="suggested__title">Suggested Challenges</div>
      <Suggested />
      <div className="suggested__title">Popular Challenges</div>
      <Popular />
      <div className="cat__title">Categories</div>
      <Categories />
    </>
  );
}

export default Homepage;
