import React from "react";
import "./ChatDashboard.scss";
import Avatar from "@material-ui/core/Avatar";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import MenuIcon from "@material-ui/icons/Menu";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { IconButton, Paper, TextField } from "@material-ui/core";
import Conversation from "./Conversation/Conversation";
import Messages from "./Conversation/Messages";

const ChatDashboard = () => {
  return (
    <div className="ChatDashobard__">
      <nav className="ChatDashboard__SideNotificationBar">
        <div className="ChatDashboard__Logo">
          <IconButton>
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
              <p className="First__Paragraph">Active Conversations</p>&nbsp;
              <div className="CircleBadge__">
                <p>4</p>
              </div>
            </div>
            <div className="ChatDashboard__Archive">
              <KeyboardArrowUpIcon className="Icon__UpArrow" />
            </div>
          </div>
        </div>
        <Conversation />
      </nav>

      <Messages />
      <div className="ChatDashboard__UserInformation">
        <h1>User Information</h1>
      </div>
    </div>
  );
};

export default ChatDashboard;
