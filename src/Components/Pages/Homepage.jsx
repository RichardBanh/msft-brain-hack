import React, { useState } from "react";
import CardLoop from "../CardLoop";
import Categories from "../Categories";
import Suggested from "../Suggested";
import BotCategory from "../BotCategory";
function Homepage() {
  return (
    <>
      <Categories />
      <Suggested />
      <BotCategory />
    </>
  );
}

export default Homepage;
