import React, { useEffect } from "react";
import NavigationBar from "./components/Navbar/NavigationBar";
import "./Styelsheet.scss";
import Home from "./components/Home/Home";
import Login from "./components/auth/Login";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import Signup from "./components/auth/Signup";
function App({ auth, loadUser }) {
  const isAuthenticated = localStorage.getItem("token");

  useEffect(() => {
    loadUser(isAuthenticated);
  }, [loadUser, isAuthenticated]);

  return (
    <div className="App">
      <NavigationBar />
      {isAuthenticated ? (
        <Redirect to={{ pathname: "/Register" }} />
      ) : (
        <Redirect to={{ pathname: "/" }} />
      )}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Login" component={Login} />
        <Route path="/Register" component={Signup} />
      </Switch>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { loadUser })(App);
