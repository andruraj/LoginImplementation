import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

//Components
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import Navbar from "./Components/Navbar";

//css
import "./bootstrap.css";
import { connect } from "react-redux";

function App(props) {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Login}></Route>
          {props.emp.user ? (
            <Route exact path="/dashboard" component={Dashboard} />
          ) : (
            <Redirect to="/" />
          )}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

const mapStateToProps = state => ({
  emp: state.emp
});

export default connect(mapStateToProps)(App);
