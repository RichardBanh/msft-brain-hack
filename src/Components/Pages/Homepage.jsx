import React, { useState } from "react";
import CardLoop from "../CardLoop";
<<<<<<< HEAD
import Categories from "../Categories";
import Suggested from "../Suggested";
import Popular from "../Popular";
import BotCategory from "../BotCategory";
=======
import MyChallenges from "../HomePageComp/MyChallenges";
import Suggested from "../HomePageComp/Suggested";
import Popular from "../HomePageComp/PopularSelct"
import Categories from "../HomePageComp/Categories"

>>>>>>> origin/master
function Homepage() {
  return (
    <>
      <h3>My Challenges in Process</h3>
      <MyChallenges />
      <h3>Suggested Challenges</h3>
      <Suggested />
<<<<<<< HEAD
      <Popular />
      <BotCategory />
=======
      <h3>Popular Challenges</h3>
      <Popular/>
      <h3>Categories</h3>
      <Categories/>
>>>>>>> origin/master
    </>
  );
}

export default Homepage;
