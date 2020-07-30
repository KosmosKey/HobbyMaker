import React from "react";
import "./NavigationBar.scss";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import LogoBlue from "../../Logo/LogoBlue.png";

const NavigationBar = () => {
  return (
    <AppBar position="static" className="NavigationBar__NavBar">
      <Toolbar className="NavigationBar__AppBar">
        <img src={LogoBlue} alt="" />
        <div className="Buttons">
          <Button className="NavigationBar__LoginButton">Login</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
