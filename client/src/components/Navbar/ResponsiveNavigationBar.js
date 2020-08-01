import React from "react";
import "./ResponsiveNavigationBar.scss";
import WhiteBlue from "../../Logo/White.png";
import { Link as ScrollLink } from "react-scroll";
import { Button, IconButton } from "@material-ui/core";
import CancelIcon from "@material-ui/icons/Cancel";
import { NavLink } from "react-router-dom";
function ResponsiveNavigationBar({ classNameNav, closeNavBar, active }) {
  return (
    <div className="ResponsiveNavigationBar">
      <nav className={classNameNav}>
        <IconButton
          className="ResponsiveNavigationBar__CloseIcon"
          onClick={closeNavBar}
        >
          <CancelIcon className="ResponsiveNavigationBar__Icon" />
        </IconButton>
        <header>
          <ul>
            <li>
              <img
                src={WhiteBlue}
                className="ResponsiveNavigationBar_logoWhite"
                alt="white-logo"
              />
            </li>
            <li>
              <ScrollLink
                activeClass="active"
                to="Home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <NavLink to="/" style={{ textDecoration: "none" }}>
                  <Button
                    onClick={closeNavBar}
                    color="primary"
                    className="ResponsiveNavgitionBar__Container__LinkButtons"
                  >
                    Home
                  </Button>
                </NavLink>
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                activeClass="active"
                to="About"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <NavLink to="/" style={{ textDecoration: "none" }}>
                  <Button
                    onClick={closeNavBar}
                    color="primary"
                    className="ResponsiveNavgitionBar__Container__LinkButtons"
                  >
                    About
                  </Button>
                </NavLink>
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                activeClass="active"
                to="Start"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <NavLink to="/" style={{ textDecoration: "none" }}>
                  <Button
                    onClick={closeNavBar}
                    color="primary"
                    className="ResponsiveNavgitionBar__Container__LinkButtons"
                  >
                    START
                  </Button>
                </NavLink>
              </ScrollLink>
            </li>
            <li>
              <NavLink to="/Register" style={{ textDecoration: "none" }}>
                <Button
                  onClick={closeNavBar}
                  color="primary"
                  className="ResponsiveNavgitionBar__Container__Signup"
                >
                  Sign up
                </Button>
              </NavLink>
            </li>
            <li>
              <NavLink to="/Login" style={{ textDecoration: "none" }}>
                <Button
                  onClick={closeNavBar}
                  color="primary"
                  className="ResponsiveNavgitionBar__Container__Login"
                >
                  Log in
                </Button>
              </NavLink>
            </li>
          </ul>
        </header>
      </nav>
      <div id="overlay" onClick={closeNavBar} className={active}></div>
    </div>
  );
}

export default ResponsiveNavigationBar;
