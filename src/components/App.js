import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React, {useState} from "react";


import '../styles/App.css';
import Dashboard from './Dashboard'; 
import Login from './login/Login';
import useToken from './login/useToken';







function App() {

  const {token, setToken} = useToken(); 
  
  if(!token) {
    return <div className="center-align">
      <Login setToken={setToken}/> 
    </div>
  } 


  return (
    <Router>
        <Switch>
          <Route exact path="/dashboard">
            <Dashboard userid={token}/> 
          </Route>

          <Route exact path="/problem-14">
            <h1>This is Problem 14</h1>
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
