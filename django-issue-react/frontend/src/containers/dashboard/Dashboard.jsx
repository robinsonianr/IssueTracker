import React, { Component } from 'react';
import './dashboard.scss';
import { issue, bug, console, nav, dash, user, vector } from './imports.js';

class Dashboard extends Component{
  render(){
    return <HomeDashboard {...dashboardData}/>
  }
}

export default Dashboard;

class HomeDashboard extends Component {
 

  render() {
    const { issueTracker, dashboard, issues, signIn, signUp, title, rectangle3, login } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="dashboard screen">
          <div className="overlap-group-container">
            <div className="overlap-group3">
              <img className="ion-bug-outline-1" src={bug} />
              <div className="issue-tracker poppins-normal-black-18px">
                {issueTracker}
              </div>
            </div>
            <div className="overlap-group1">
              <div className="group-6">
                <img className="vector" src={dash} />
                <div className="dashboard-1 poppins-normal-black-18px">
                  {dashboard}
                </div>
              </div>
              <div className="frame-2">
                <img className="ant-design-issues-close-outlined-1" src={issue} />
                <div className="issues poppins-normal-black-18px">
                  {issues}
                </div>
              </div>
              <img className="vector-1" src={vector} />
              <div className="sign-in poppins-normal-black-18px">
                {signIn}
              </div>
              <div className="overlap-group">
                <div className="sign-up poppins-normal-black-18px">
                  {signUp}
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col">
            <div className="overlap-group2">
              <h1 className="title">
                {title}
              </h1>
              <img className="rectangle-3" src={rectangle3} />
              <div className="group-5">
                <div className="login">
                  {login}
                </div>
                <div className="group-4"></div>
              </div>
            </div>
            <img className="browser_icon_3-1" src={console} />
          </div>
        </div>
      </div>
    );
    }
  }
  
  
  
  
  const dashboardData = {
    issueTracker: "Issue Tracker",
    dashboard: "Dashboard",
    issues: "Issues",
    signIn: "Sign In",
    signUp: "Sign Up",
    title: "Issue Tracker Project",
    rectangle3: nav,
    login: "Login",
  };

