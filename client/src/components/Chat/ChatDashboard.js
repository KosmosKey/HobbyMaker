import React, { useState, useEffect } from "react";
import "./ChatDashboard.scss";
import Avatar from "@material-ui/core/Avatar";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import MenuIcon from "@material-ui/icons/Menu";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { IconButton } from "@material-ui/core";
import LogoWhite from "../../Logo/White.png";
import Conversation from "./Conversation/Conversation";
import UserInfo from "./Conversation/UserInfo";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import NavigationBar from "./Conversation/NavigationBar/NavigationBar";
import General from "./Conversation/Rooms/General";
import { Route, Switch } from "react-router-dom";
import TotalHobbies from "./Conversation/Rooms/TotalHobbies";
import BadHobbies from "./Conversation/Rooms/BadHobbies";
import GoodHobbies from "./Conversation/Rooms/GoodHobbies";
import Other from "./Conversation/Rooms/Other";
import { connect } from "react-redux";
import { welcomeTrue } from "../../redux/actions/actions";
import WelcomeMessage from "./WelcomeMessage";

const ChatDashboard = ({ match, auth, welcomeTrue }) => {
  const [open, setOpen] = useState(false);
  const [openMessageMenu, setOpenMessageMenu] = useState(true);
  const [toggleChatDashboard, setToggleChatDashboard] = useState(false);
  const [welcomeUser, setWelcomeUser] = useState(false);

  useEffect(() => {
    if (!auth.welcomeStorage) {
      welcomeTrue();
      setWelcomeUser(true);
    } else {
      setWelcomeUser(false);
    }
  }, [auth.welcomeStorage, welcomeTrue]);

  const toggleChatDashboardFunction = () => {
    setToggleChatDashboard(!toggleChatDashboard);
  };

  const toggleNavigationBar = () => {
    toggleChatDashboardFunction();
    setOpen(!open);
  };

  const buttonOnClick = () => {
    setWelcomeUser(false);
  };

  return (
    <div className="ChatDashobard__">
      <WelcomeMessage active={welcomeUser} setButtOnClick={buttonOnClick} />
      <header className="IconButton__DisplayChatDashboard">
        <div className="ChatDashboard__Header">
          <div onClick={() => toggleChatDashboardFunction()}>
            <ArrowRightAltIcon className="Arrow__" />
          </div>
          <div className="Logo__">
            <img src={LogoWhite} alt="Logo" className="Image__" />
          </div>
        </div>
      </header>
      <NavigationBar active={open} onChangeActive={toggleNavigationBar} />
      <nav
        className={`ChatDashboard__SideNotificationBar ${
          toggleChatDashboard && "active"
        }`}
      >
        <div className="ChatDashboard__Logo">
          <IconButton onClick={toggleNavigationBar}>
            <MenuIcon className="MenuBar__" />
          </IconButton>
        </div>
        <div className="ChatDashboard__UserInfoAndProfile">
          <div className="ChatDashobard__ProfilePicture">
            <Avatar className="ChatDashboard__Avatar">MK</Avatar>
          </div>
          <div className="ChatDashboard__Name">
            <h1>
              {`${auth?.user?.first_name} ${auth?.user?.last_name?.charAt(0)}`}.
            </h1>
          </div>
        </div>
        <div className="ChatDashboard__ActiveConversations">
          <div className="ChatDashobard_Text">
            <div className="Text__">
              <p className="First__Paragraph">
                Active&nbsp;<span>Conversations</span>
              </p>
              &nbsp;
              <div className="CircleBadge__">
                <p>5</p>
              </div>
            </div>
            <div
              className="ChatDashboard__Archive"
              onClick={() => setOpenMessageMenu(!openMessageMenu)}
              style={{ cursor: "pointer" }}
            >
              {openMessageMenu ? (
                <KeyboardArrowDownIcon className="Icon__UpArrow" />
              ) : (
                <KeyboardArrowUpIcon className="Icon__UpArrow" />
              )}
            </div>
          </div>
        </div>
        {openMessageMenu ? (
          <Conversation onclicHandler={toggleChatDashboardFunction} />
        ) : (
          ""
        )}
      </nav>
      <div style={{ width: "100%", height: "100vh", position: "relative" }}>
        <Switch>
          <Route path={`${match.url}/General`} component={General} />
          <Route path={`${match.url}/Total`} component={TotalHobbies} />
          <Route path={`${match.url}/Good`} component={GoodHobbies} />
          <Route path={`${match.url}/Bad`} component={BadHobbies} />
          <Route path={`${match.url}/Other`} component={Other} />
        </Switch>
      </div>

      <div className="ChatDashboard__UserInformation">
        <UserInfo />
      </div>
      <div
        className={`overlayArchive ${toggleChatDashboard && "active"}`}
        onClick={() => toggleChatDashboardFunction()}
      ></div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { welcomeTrue })(ChatDashboard);
