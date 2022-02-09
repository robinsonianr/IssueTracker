import React from 'react';
import './homePage.scss';
import { issue, google, slack, blizzard, amazon, emailButton } from './imports.js';

function HomePage(){
  return <Homepage {...homepageData} />
}

export default HomePage;

function Homepage(props) {
  const { rectangle4, issueTracker, issueTrackerProject, dashboard, issues, signIn1, signUp, signIn2 } = props;

  return (
    <div className="container-center-horizontal">
      <div className="dashboard screen">
        <div className="overlap-group1">
          <div className="overlap-group">
            <img className="rectangle-4" src={rectangle4} />
            <div className="rectangle-5"></div>
            <div className="frame-3">
              <img className="ionbug-outline" src="ion-bug-outline.svg" />
              <div className="issue-tracker valign-text-middle poppins-normal-black-20px">
                {issueTracker}
              </div>
            </div>
            <div className="issue-tracker-project valign-text-middle">
              {issueTrackerProject}
            </div>
            <div className="frame-4 poppins-normal-black-20px">
              <div className="dashboard-1 valign-text-middle">
                {dashboard}
              </div>
              <div className="issues valign-text-middle">
                {issues}
              </div>
            </div>
            <img className="vector-1" src="vector-1.svg" />
            <img className="vector-2" src="vector-1.svg" />
            <div className="sign-in valign-text-middle poppins-normal-black-20px">
              {signIn1}
            </div>
            <div className="frame-5">
              <div className="sign-up valign-text-middle poppins-normal-black-20px">
                {signUp}
              </div>
            </div>
            <img className="ictwotone-space-dashboard" src="ic-twotone-space.svg" />
            <img className="ant-designissues-close-outlined" src="ant-design-issues-close-outlined.svg" />
            <div className="group-1">
              <img className="akar-iconsperson" src="akar-icons-person.svg" />
            </div>
            <div className="sign-in-1 valign-text-middle">
              {signIn2}
            </div>
          </div>
          <img className="browser_icon_3-1" src="browser-icon-3-1.svg" />
        </div>
      </div>
    </div>
  );
}

const homepageData = {
  rectangle4: "rectangle-4.png",
  issueTracker: "Issue Tracker",
  issueTrackerProject: "Issue Tracker Project",
  dashboard: "Dashboard",
  issues: "Issues",
  signIn1: "Sign in",
  signUp: "Sign up",
  signIn2: "Sign in",
};

