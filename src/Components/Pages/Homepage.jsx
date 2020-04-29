import React, { useState } from "react";
import CardLoop from "../CardLoop";
import Categories from "../Categories";
import Suggested from "../Suggested";
import Popular from "../Popular";
import BotCategory from "../BotCategory";
function Homepage() {
  return (
    <>
      <Categories />
      <Suggested />
      <Popular />
      <BotCategory />
    </>
  );
}

export default Homepage;
