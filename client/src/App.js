import React from "react";
import NavigationBar from "./components/Navbar/NavigationBar";
import "./Styelsheet.scss";
import Home from "./components/Home/Home";
import Login from "./components/auth/Login";
import { Switch, Route } from "react-router-dom";
import Signup from "./components/auth/Signup";
function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Login" component={Login} />
        <Route path="/Register" component={Signup} />
      </Switch>
    </div>
  );
}

export default App;
