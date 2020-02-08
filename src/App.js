import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//Components
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import Navbar from "./Components/Navbar";

//css
import "./bootstrap.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route exact path="/dashboard" component={Dashboard}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
