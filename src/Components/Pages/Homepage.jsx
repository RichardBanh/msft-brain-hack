import React, { useState } from "react";
import CardLoop from "../CardLoop";
import MyChallenges from "../HomePageComp/MyChallenges";
import Suggested from "../HomePageComp/Suggested";
import Popular from "../HomePageComp/PopularSelct";
import Categories from "../HomePageComp/Categories";
import Hero from "../HomePageComp/Hero";
import { dataCall } from "../../HelperFunction/helper";
import { useEffect } from "react";

function Homepage(props) {
  const [userLoginData, setData] = useState(null);
  useEffect(() => {
    const report = { success: null, error: null, data: null };
    async function datawait() {
      const returnData = await dataCall("GET", "/user", "", report);
      console.log(report.data);
      setData(report.data)
    }
    datawait();
  }, []);
  if (!userLoginData) {
    return <div>Loading!</div>;
  } else {
    return (
      <>
        <Hero />
        <h3>My Challenges in Process</h3>
        <MyChallenges userdata={userLoginData} />
        <h3>Suggested Challenges</h3>
        <Suggested />
        <div className="suggested__title">Popular Challenges</div>
        <Popular />
        <div className="cat__title">Categories</div>
        <Categories />
      </>
    );
  }
}

export default Homepage;
