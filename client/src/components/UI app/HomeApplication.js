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
import { Link, Route, Switch } from "react-router-dom";
import "./HomeApplication.scss";
import HobbiesTotal from "./Dashboard/HobbiesTotal/HobbiesTotal";
import TotalHobbies from "./Dashboard/TotalHobbies/TotalHobbies";
import CompletedHobbies from "./Dashboard/CompletedHobbies/CompletedHobbies";
import FailedHobbies from "./Dashboard/FailedHobbies/FailedHobbies";
import userSettings from "./Dashboard/Settings/userSettings";
import { Loading } from "./Dashboard/Loading/Loading";

const HomeApplication = ({ auth, loadUser, match, isLoading, getHobbies }) => {
  const [indexOfBtn, setIndexOfBtn] = useState(1);

  useEffect(() => {
    loadUser();
  }, [loadUser]);

  return (
    <div className="HomeApplication">
      {isLoading ? <Loading /> : ""}
      <nav className="HomeApplication_SideNavigationBar">
        <div className="HomeApplication_userInfo">
          <img
            src="https://images.unsplash.com/photo-1541534401786-2077eed87a74?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
            alt="HomeApplication_profile_picture"
            className="HomeApplication_ProfilePicture"
          />
          <p>
            {auth.user.first_name} {auth.user.last_name}
          </p>
        </div>
        <div className="HomeApplication_Tabs">
          <Link to="/User" style={{ textDecoration: "none", border: "none" }}>
            <IconButton
              variant="contained"
              className={
                indexOfBtn === 1
                  ? "HomeApplication_DashboardButton"
                  : "HomeApplication_DashboardButtonWhite"
              }
              onClick={() => setIndexOfBtn(1)}
            >
              <div className="HomeAppliction_IconMargin">
                <AppsIcon className="HomeApplication_Icons" />
              </div>
              <div
                style={{ marginBottom: "2px" }}
                className="HomeApplication__Text"
              >
                DASHBOARD
              </div>
            </IconButton>
          </Link>

          <div
            style={{
              width: "100%",
              height: "1px",
              background: "#7733ff",
              marginTop: "25px",
              marginBottom: "25px",
            }}
          ></div>

          <Link to={`${match.url}/Total`} style={{ textDecoration: "none" }}>
            <IconButton
              variant="contained"
              className={
                indexOfBtn === 2
                  ? "HomeApplication_TotalHobbies"
                  : "HomeApplication_TotalHobbiesWhite"
              }
              onClick={() => setIndexOfBtn(2)}
            >
              <div className="HomeAppliction_IconMargin">
                <ListIcon className="HomeApplication__ListIcon" />
              </div>
              <div className="HomeApplication__Text">TOTAL</div>
            </IconButton>
          </Link>
          <Link
            to={`${match.url}/Completed`}
            style={{ textDecoration: "none" }}
          >
            <IconButton
              variant="contained"
              className={
                indexOfBtn === 3
                  ? "HomeApplication__SuccessHobiesBtn"
                  : "HomeApplication__SuccessHobiesBtnWhite"
              }
              onClick={() => setIndexOfBtn(3)}
            >
              <div className="HomeAppliction_IconMargin">
                <CheckIcon className="HomeApplication__TotalIcons" />
              </div>
              <div
                style={{ marginBottom: "2px" }}
                className="HomeApplication__Text"
              >
                GOOD
              </div>
            </IconButton>
          </Link>

          <Link to={`${match.url}/Failed`} style={{ textDecoration: "none" }}>
            <IconButton
              variant="contained"
              className={
                indexOfBtn === 4
                  ? "HomeApplication__BadHobiesBtn"
                  : "HomeApplication__BadHobiesBtnWhite"
              }
              onClick={() => setIndexOfBtn(4)}
            >
              <div className="HomeAppliction_IconMargin">
                <CloseIcon className="HomeApplication__FailedIcons" />
              </div>
              <div className="HomeApplication__Text">BAD</div>
            </IconButton>
          </Link>
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
          <Link to={`${match.url}/Settings`} style={{ textDecoration: "none" }}>
            <IconButton
              variant="contained"
              className={
                indexOfBtn === 5
                  ? "HomeApplication__Settings"
                  : "HomeApplication__SettingsWhite"
              }
              onClick={() => setIndexOfBtn(5)}
            >
              <div className="HomeAppliction_IconMargin">
                <SettingsIcon className="HomeApplication__SettingsIcon" />
              </div>
              <div className="HomeApplication__Text">SETTINGS</div>
            </IconButton>
          </Link>
          <IconButton
            className={
              indexOfBtn === 6
                ? "HomeApplication__Logout"
                : "HomeApplication__LogoutWhite"
            }
            onClick={() => setIndexOfBtn(6)}
          >
            <div className="HomeAppliction_IconMargin">
              <ExitToAppIcon className="HomeApplication__LogOut" />
            </div>
            <div className="HomeApplication__Text">LOG OUT</div>
          </IconButton>
        </div>
      </nav>
      <section className="HomeApplication_Section">
        <Switch>
          <Route path="/User" exact component={HobbiesTotal} />
          <Route path={`${match.url}/Total`} component={TotalHobbies} />
          <Route path={`${match.url}/Completed`} component={CompletedHobbies} />
          <Route path={`${match.url}/Failed`} component={FailedHobbies} />
          <Route path={`${match.url}/Settings`} component={userSettings} />
        </Switch>
      </section>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    isLoading: state.auth.isLoading,
  };
};

export default connect(mapStateToProps, { loadUser })(HomeApplication);
