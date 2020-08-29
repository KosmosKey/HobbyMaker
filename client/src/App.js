import React, { useState, useEffect } from "react";
import NavigationBar from "./components/Navbar/NavigationBar";
import "./Styelsheet.scss";
import Home from "./components/Home/Home";
import Login from "./components/auth/Login";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import Signup from "./components/auth/Signup";
import HomeApplication from "./components/UI app/HomeApplication";
import Alert from "@material-ui/lab/Alert";
import { updateUserFalse } from "./redux/actions/actions";

function App({ auth, loadUser, updateUserFalse }) {
  const isAuthenticated = auth.token;
  const [updateSuccessMessage, setUpdateSuccessMessage] = useState(false);

  useEffect(() => {
    if (auth.updatedSuccess === true) {
      setUpdateSuccessMessage(true);
      setTimeout(() => {
        updateUserFalse();
      }, 5000);
    } else {
      setUpdateSuccessMessage(false);
    }
  }, [auth, updateSuccessMessage, updateUserFalse]);

  return (
    <div className="App">
      {isAuthenticated ? "" : <NavigationBar />}
      {isAuthenticated ? (
        <Redirect to={{ pathname: "/User" }} />
      ) : (
        <Redirect to={{ pathname: "/" }} />
      )}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/User" component={HomeApplication} />
        <Route path="/Login" component={Login} />
        <Route path="/Register" component={Signup} />
      </Switch>

      <Alert
        variant="filled"
        severity="success"
        className={`App__UserSuccessUpdate ${updateSuccessMessage && "active"}`}
      >
        You have successfully updated your user. Try to log in again!
      </Alert>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { updateUserFalse })(App);
