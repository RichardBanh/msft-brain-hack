import React, { useState } from "react";
import Catnap from "../../Assets/Images/SVG/Catnap.svg";
import { dataCall } from "../../HelperFunction/helper";
import { useEffect } from "react";
import Card from "../Card";

// need to do axios call for the active challenges

function MyChallenges(props) {
  const [userActivities, setActivity] = useState(null);
  const [username, setUser] = useState(props.userdata.data.user);

  useEffect(() => {
    const report = { success: null, error: null, data: null };
    async function datawait() {
      const returnData = await dataCall(
        "POST",
        "/activity",
        props.userdata.data.activeChallenges,
        report
      );
      setActivity(report.data.data);
    }
    datawait();
  }, []);
  if (userActivities === null || !username) {
    return <div>Loading</div>;
  } else {
    console.log(userActivities)
    return (
      <div>
        {userActivities.map((activity, index) => (
          <Card key={index} activity={activity} username={username} />
        ))}
      </div>
    );
  }
  // ;
}

export default MyChallenges;

//cardloop
//on load function
//call data here?
//sort what needs to be found
//pull challenge data
//find individual
