import React from "react";
import Avatar from "@material-ui/core/Avatar";

const Conversation = ({ onclicHandler }) => {
  return (
    <div className="ChatDashboard__Conversations">
      <div
        className="ChatDashboard__Conversation__Inbox active"
        onClick={onclicHandler}
      >
        <Avatar className="ChatDashboard__Inbox__Avatars">H</Avatar>
        <p>
          Henry <span>Libsens</span>
        </p>
      </div>
      <div className="ChatDashboard__Conversation__Inbox">
        <Avatar className="ChatDashboard__Inbox__Avatars">H</Avatar>
        <p>
          Henry <span>Libsens</span>
        </p>
      </div>
      <div className="ChatDashboard__Conversation__Inbox">
        <Avatar className="ChatDashboard__Inbox__Avatars">H</Avatar>
        <p>
          Henry dddd d d d dd <span>Libsens</span>
        </p>
      </div>
      <div className="ChatDashboard__Conversation__Inbox">
        <Avatar className="ChatDashboard__Inbox__Avatars">H</Avatar>
        <p>
          Henry <span>Libsens</span>
        </p>
      </div>
      <div className="ChatDashboard__Conversation__Inbox">
        <Avatar className="ChatDashboard__Inbox__Avatars">H</Avatar>
        <p>
          Henry <span>Libsens</span>
        </p>
      </div>
      <div className="ChatDashboard__Conversation__Inbox">
        <Avatar className="ChatDashboard__Inbox__Avatars">H</Avatar>
        <p>
          Henry<span>Libsens Maximov carasov</span>
        </p>
      </div>
      <div className="ChatDashboard__Conversation__Inbox">
        <Avatar className="ChatDashboard__Inbox__Avatars">H</Avatar>
        <p>
          Henry <span>Libsens</span>
        </p>
      </div>
      <div className="ChatDashboard__Conversation__Inbox">
        <Avatar className="ChatDashboard__Inbox__Avatars">H</Avatar>
        <p>
          Henry <span>Libsens</span>
        </p>
      </div>
      <div className="ChatDashboard__Conversation__Inbox">
        <Avatar className="ChatDashboard__Inbox__Avatars">H</Avatar>
        <p>
          Henry <span>Libsens</span>
        </p>
      </div>
    </div>
  );
};

export default Conversation;
