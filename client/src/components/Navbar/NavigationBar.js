import React, { useEffect, useState } from "react";
import "./NavigationBar.scss";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Button } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import LogoBlue from "../../Logo/LogoBlue.png";
import logoWithout from "../../Logo/White.png";
import WhiteLogo from "../../Logo/Logo-with-white-text.png";

const NavigationBar = () => {
  const [showNav, setShowNav] = useState(true);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 100) {
      }
    });
  }, []);

  return (
    <AppBar position="static" className={showNav ? "NavigationBar__NavBar__active": "NavigationBar__NavBar"}>
      <div className="NavigationBar___ResponsiveIcon">
        <MenuIcon className="NavigationBar__Icon" />
      </div>
      <Toolbar className="NavigationBar__AppBar">
        <img
          src={logoWithout}
          alt="Logo-without-text"
          className="NavigationBar__LogoWithout"
        />
        <img src={LogoBlue} alt="LogoBlue" className="NavigatioBar__LogoBlue" />
        <img
          src={WhiteLogo}
          alt="WhiteLogo"
          className="NavigationBar__WhiteLogo"
        />
        <div className="NavigationBar__Toolbar">
          <div className="Buttons">
            <Button color="primary" className="Home__LinkButtons">
              Home
            </Button>
            <Button color="primary" className="Home__LinkButtons">
              About
            </Button>
            <Button color="primary" className="Home__LinkButtons">
              Contact
            </Button>

            <Button className="NavigationBar__LoginButton">Sign up</Button>
            <Button className="NavigationBar__LoginButton">Login</Button>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
