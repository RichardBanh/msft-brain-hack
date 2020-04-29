import React, { useState } from "react";
import CardLoop from "../CardLoop";
import Categories from "../Categories";
import Suggested from "../Suggested";
function Homepage() {
  return (
    <>
      <Categories />
      <Suggested />
    </>
  );
}

export default Homepage;
