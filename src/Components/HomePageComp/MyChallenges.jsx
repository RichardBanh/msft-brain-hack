import React, { useState } from "react";

import { dataCall, scroll } from "../../HelperFunction/helper";
import { useEffect } from "react";
import Card from "../Card";

// sort data here!!!!!!
// sort into array and push into state then down to props
//need activityname

function MyChallenges(props) {
  const [userActivities, setActivity] = useState(null);
  const [username, setUser] = useState(props.userdata.data.user);
  const sortAct = (data) => {
    const Activities = [];

    for (let count = 0; count < data.length; count++) {
      const result = data[count].participants.find((user) => {
        return user.user === username;
      });

      const sortedActivity = {
        name: data[count].name,
        activityImg: data[count].BannerImg,
        progress: result.progress,
      };
      Activities.push(sortedActivity);
    }
    return Activities;
  };
  useEffect(() => {
    const report = { success: null, error: null, data: null };
    async function datawait() {
      const returnData = await dataCall(
        "POST",
        "/activity",
        props.userdata.data.activeChallenges,
        report
      );
      setActivity(sortAct(report.data.data));
    }

    datawait();
  }, []);
  if (userActivities === null || !username) {
    return <div>Loading</div>;
  } else {
    return (
      <div className="challenges">
        <button
          className="left"
          onClick={(e) => scroll( e, "left", ".challenges")}
        >
          <img src="" alt="" />
        </button>
        {userActivities.map((activity, index) => (
          <Card key={index} activity={activity} username={username} />
        ))}
        <button
          className="right"
          onClick={(e) => scroll(e, "right", ".challenges")}
        >
          <img src="" alt="" />
        </button>
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
