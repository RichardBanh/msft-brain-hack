import React, { useState } from "react";
import CardLoop from "../CardLoop";
import MyChallenges from "../HomePageComp/MyChallenges";
import Suggested from "../HomePageComp/Suggested";
import Popular from "../HomePageComp/PopularSelct"
import Categories from "../HomePageComp/Categories"

function Homepage(props) {
  
  if(!props.userdata) {
    return <div>Loading!</div>
  } else {
 console.log(props.userdata)
  return (
    <>
      <h3>My Challenges in Process</h3>
      <MyChallenges />
      <h3>Suggested Challenges</h3>
      <Suggested />
      <h3>Popular Challenges</h3>
      <Popular/>
      <h3>Categories</h3>
      <Categories/>
    </>
  )}
}

export default Homepage;
