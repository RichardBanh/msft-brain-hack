import React, { Component } from 'react';
import MyChallenges from "../PersonalPageComp/MyChallenges"
import OverallPerform from "../PersonalPageComp/OverallPerformance"

function PersonalPage() {
    return (
      <>
        <h1>Overall Performance</h1>
        <OverallPerform/>

        <h1>My Challenges in Process</h1>
        <MyChallenges/>
      </>
    );
  }
  
  export default PersonalPage;