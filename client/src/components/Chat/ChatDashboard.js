import React, { useState } from "react";
import "./ChatDashboard.scss";
import Avatar from "@material-ui/core/Avatar";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import MenuIcon from "@material-ui/icons/Menu";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { IconButton } from "@material-ui/core";
import LogoWhite from "../../Logo/White.png";
import Conversation from "./Conversation/Conversation";
import Messages from "./Conversation/Messages";
import UserInfo from "./Conversation/UserInfo";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { NavigationBar } from "./Conversation/NavigationBar/NavigationBar";

const ChatDashboard = () => {
  const [open, setOpen] = useState(false);
  const [openMessageMenu, setOpenMessageMenu] = useState(true);
  const [toggleChatDashboard, setToggleChatDashboard] = useState(false);

  const toggleChatDashboardFunction = () => {
    setToggleChatDashboard(!toggleChatDashboard);
  };

  const toggleNavigationBar = () => {
    toggleChatDashboardFunction();
    setOpen(!open);
  };

  return (
    <div className="ChatDashobard__">
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
            <h1>Magomed K.</h1>
          </div>
        </div>
        <div className="ChatDashboard__ActiveConversations">
          <div className="ChatDashobard_Text">
            <div className="Text__">
              <p className="First__Paragraph">
                Active <span>Conversations</span>
              </p>
              &nbsp;
              <div className="CircleBadge__">
                <p>4</p>
              </div>
            </div>
            <div
              className="ChatDashboard__Archive"
              onClick={() => setOpenMessageMenu(!openMessageMenu)}
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
      <Messages />
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

export default ChatDashboard;
