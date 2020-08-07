import React, { useEffect, useState } from "react";
import { loadUser } from "../../redux/actions/actions";
import { connect } from "react-redux";
import AppsIcon from "@material-ui/icons/Apps";
import ListIcon from "@material-ui/icons/List";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { IconButton } from "@material-ui/core";
import "./HomeApplication.scss";
import Dashboard from "./Dashboard/Dashboard";

const HomeApplication = ({ auth, loadUser, first_name }) => {
  const [indexOfBtn, setIndexOfBtn] = useState(1);

  useEffect(() => {
    loadUser();
  }, [loadUser]);

  return (
    <div className="HomeApplication">
      <nav className="HomeApplication_SideNavigationBar">
        <div className="HomeApplication_userInfo">
          <img
            src="https://images.unsplash.com/photo-1541534401786-2077eed87a74?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
            alt="HomeApplication_profile_picture"
            className="HomeApplication_ProfilePicture"
          />
          <p>James Smith Andres</p>
        </div>
        <div className="HomeApplication_Tabs">
          <IconButton
            variant="contained"
            className={
              indexOfBtn === 1
                ? "HomeApplication_DashboardButton"
                : "HomeApplication_DashboardButtonWhite"
            }
            onClick={() => setIndexOfBtn(1)}
          >
            <div style={{ marginRight: " 25px", marginLeft: "25px" }}>
              <AppsIcon className="HomeApplication_Icons" />
            </div>
            <div style={{ marginBottom: "2px" }}>DASHBOARD</div>
          </IconButton>
          <div
            style={{
              width: "100%",
              height: "1px",
              background: "#7733ff",
              marginTop: "25px",
              marginBottom: "25px",
            }}
          ></div>
          <IconButton
            variant="contained"
            className={
              indexOfBtn === 2
                ? "HomeApplication_TotalHobbies"
                : "HomeApplication_TotalHobbiesWhite"
            }
            onClick={() => setIndexOfBtn(2)}
          >
            <div style={{ marginRight: "25px", marginLeft: "25px" }}>
              <ListIcon className="HomeApplication__ListIcon" />
            </div>
            <div style={{ marginBottom: "2px" }}>TOTAL</div>
          </IconButton>
          <IconButton
            variant="contained"
            className={
              indexOfBtn === 3
                ? "HomeApplication__SuccessHobiesBtn"
                : "HomeApplication__SuccessHobiesBtnWhite"
            }
            onClick={() => setIndexOfBtn(3)}
          >
            <div style={{ marginRight: "25px", marginLeft: "25px" }}>
              <CheckIcon className="HomeApplication__TotalIcons" />
            </div>
            <div style={{ marginBottom: "2px" }}>COMPLETED</div>
          </IconButton>

          <IconButton
            variant="contained"
            className={
              indexOfBtn === 4
                ? "HomeApplication__BadHobiesBtn"
                : "HomeApplication__BadHobiesBtnWhite"
            }
            onClick={() => setIndexOfBtn(4)}
          >
            <div style={{ marginRight: "25px", marginLeft: "25px" }}>
              <CloseIcon className="HomeApplication__FailedIcons" />
            </div>
            <div style={{ marginBottom: "2px" }}>FAILED</div>
          </IconButton>
        </div>
        <div
          style={{
            width: "100%",
            height: "1px",
            background: "#7733ff",
            marginTop: "25px",
          }}
        ></div>
        <div
          className="HomeApplication_userSection"
          style={{ marginTop: "25px" }}
        >
          <IconButton
            variant="contained"
            className={
              indexOfBtn === 5
                ? "HomeApplication__Settings"
                : "HomeApplication__SettingsWhite"
            }
            onClick={() => setIndexOfBtn(5)}
          >
            <div style={{ marginRight: "25px", marginLeft: "25px" }}>
              <SettingsIcon className="HomeApplication__SettingsIcon" />
            </div>
            <div style={{ marginBottom: "2px" }}>SETTINGS</div>
          </IconButton>
          <IconButton
            className={
              indexOfBtn === 6
                ? "HomeApplication__Logout"
                : "HomeApplication__LogoutWhite"
            }
            onClick={() => setIndexOfBtn(6)}
          >
            <div style={{ marginRight: "25px", marginLeft: "25px" }}>
              <ExitToAppIcon className="HomeApplication__LogOut" />
            </div>
            <div style={{ marginBottom: "2px" }}>LOG OUT</div>
          </IconButton>
        </div>
      </nav>
      <section className="HomeApplication_Section">
        <div>
          <Dashboard />
        </div>
      </section>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    first_name: state.auth.user.first_name,
  };
};

export default connect(mapStateToProps, { loadUser })(HomeApplication);
