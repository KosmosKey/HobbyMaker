import React from "react";
import LogoWhite from "../../../../Logo/Logo-with-white-text.png";
import "./NavigationBar.scss";
import CancelIcon from "@material-ui/icons/Cancel";
import AppsIcon from "@material-ui/icons/Apps";
import ListIcon from "@material-ui/icons/List";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";
import { logOut } from "../../../../redux/actions/actions";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const NavigationBar = ({ active, onChangeActive, logOut }) => {
  let history = useHistory();

  const logOutUser = () => {
    logOut();
    history.push("/");
  };

  return (
    <div className="NavigationBar__">
      <div className={`NavigationBar__Menu ${active && "active"}`}>
        <IconButton
          className="Navigationbar__CloseIcon"
          onClick={onChangeActive}
        >
          <CancelIcon style={{ fontSize: "30px" }} />
        </IconButton>

        <img
          src={LogoWhite}
          style={{ maxWidth: "200px", marginTop: "40px" }}
          alt="Logo__"
        />
        <ul>
          <li>
            <Link to="/User" style={{ textDecoration: "none" }}>
              <IconButton onClick={onChangeActive}>
                <AppsIcon className="Icon__" />
                <p>DASHBOARD</p>
              </IconButton>
            </Link>
          </li>
          <li>
            <Link to="/User/Total" style={{ textDecoration: "none" }}>
              <IconButton onClick={onChangeActive}>
                <ListIcon className="Icon__" />
                <p>TOTAL</p>
              </IconButton>
            </Link>
          </li>
          <li>
            <Link to="/User/Completed" style={{ textDecoration: "none" }}>
              <IconButton onClick={onChangeActive}>
                <CheckIcon className="Icon__" />
                <p>GOOD</p>
              </IconButton>
            </Link>
          </li>
          <li>
            <Link to="/User/Failed" style={{ textDecoration: "none" }}>
              <IconButton onClick={onChangeActive}>
                <CloseIcon className="Icon__" />
                <p>BAD</p>
              </IconButton>
            </Link>
          </li>
          <li>
            <Link to="/User/Settings" style={{ textDecoration: "none" }}>
              <IconButton onClick={onChangeActive}>
                <SettingsIcon className="Icon__" />
                <p>SETTINGS</p>
              </IconButton>
            </Link>
          </li>
          <li>
            <IconButton onClick={logOutUser}>
              <ExitToAppIcon className="Icon__" />
              <p>LOGOUT</p>
            </IconButton>
          </li>
        </ul>
      </div>
      <div
        className={`overlay ${active && "active"}`}
        onClick={onChangeActive}
      ></div>
    </div>
  );
};

export default connect(null, { logOut })(NavigationBar);
