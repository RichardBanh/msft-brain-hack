import React, { useState } from "react";
import Catnap from "../../Assets/Images/SVG/Catnap.svg";
import Progress from "../../Assets/Images/SVG/Progress.svg";
import challenges from "../../Data/challenges.json";
import { isolatingStrings, filterIt } from "../../HelperFunction/helper";



function MyChallenges(props) {
  if (!props) {
    return <div>Loading!</div>;
  } else {
    const userdata = props.userdata.janice12;
    console.log(userdata);
    const whattosearch = [...isolatingStrings(userdata.ActiveChallenges)];
    console.log(whattosearch)
    

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
