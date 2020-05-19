import React, { useState } from "react";
import Catnap from "../../Assets/Images/SVG/Catnap.svg";
import Progress from "../../Assets/Images/SVG/Progress.svg";

import { isolatingStrings, filterIt, dataCall } from "../../HelperFunction/helper";
import { useEffect } from "react";


// need to do axios call for the active challenges

function MyChallenges(props) {
  const [userActivities, setActivity] = useState(null);
  useEffect(() => {
    const report = { success: null, error: null, data: null };
    async function datawait() {
      const returnData = await dataCall("GET","/activity", props.userdata.data.activeChallenges, report)
      setActivity(report.data)
    }
    datawait()
  }, []);
  if (!props) {
    return <div>Loading!</div>;
  } else {
    console.log(props.userdata.data.activeChallenges);
    // const userdata = props.userdata.janice12;
    // console.log(userdata);
    // const whattosearch = [...isolatingStrings(userdata.ActiveChallenges)];
    // console.log(whattosearch)

    // const cardPopulated = props.userdata.map((x) => (
    //   <div className="card">
    //     <img className="card__image" src={Catnap} alt="Coffee" />
    //     <div className="card__bottom">
    //       <h3 className="card__bottom-title">Sleep at 11:00PM Everyday</h3>
    //       <h3 className="card__bottom-ending">Ends in 7 days</h3>
    //       <img
    //         className="card__bottom-progress"
    //         src={Progress}
    //         alt="Progress"
    //       />
    //     </div>
    //   </div>
    // ));
    // return { cardPopulated };
    return <div>blah</div>;
  }
}

export default MyChallenges;

//cardloop
//on load function
//call data here?
//sort what needs to be found
//pull challenge data
//find individual data
