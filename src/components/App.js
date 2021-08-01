import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, { useState } from "react";

import "../styles/App.css";
import Dashboard from "./Dashboard";
import Problem5 from "./internalComp/ProjectPages/problem5";
import Login from "./login/Login";
import useToken from "./login/useToken";
import Meetings from "./videoChat/meetingWin";
import Onboard from "./onboarding/onboard";

function App() {
  const { token, setToken } = useToken();

  if (!token) {
    return (
      <div className="center-align">
        <Login setToken={setToken} />
      </div>
    );
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/dashboard">
          <Dashboard userid={token} />
        </Route>

        <Route exact path="/problem-14">
          <Problem5 />
        </Route>
        <Route exact path="/meetings">
          <Meetings />
        </Route>

        <Route exact path="/onboarding">
          <Onboard />
        </Route>

        {/* <Route exact path="/login">
            <div className="App">
             <Login /> 
            </div>
          </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
