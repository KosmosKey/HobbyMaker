import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import ListIcon from "@material-ui/icons/List";
import HomeIcon from "@material-ui/icons/Home";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Link } from "react-router-dom";

const Conversation = ({ onclicHandler, match }) => {
  const [indexOfBtn, setIndexOfBtn] = useState(0);

  return (
    <div className="ChatDashboard__Conversations">
      <Link to="/Chat/General" style={{ textDecoration: "none" }}>
        <div onClick={() => setIndexOfBtn(0)}>
          <div
            className={`ChatDashboard__Conversation__Inbox ${
              indexOfBtn === 0 && "active"
            }`}
            onClick={onclicHandler}
          >
            <Avatar className="ChatDashboard__Inbox__Avatars">
              <HomeIcon />
            </Avatar>
            <p>#&nbsp;General</p>
          </div>
        </div>
      </Link>
      <Link to="/Chat/Total" style={{ textDecoration: "none" }}>
        <div onClick={() => setIndexOfBtn(1)}>
          <div
            className={`ChatDashboard__Conversation__Inbox ${
              indexOfBtn === 1 && "active"
            }`}
            onClick={onclicHandler}
          >
            <Avatar className="ChatDashboard__Inbox__Avatars">
              <ListIcon />
            </Avatar>
            <p>
              #&nbsp;Total <span>Hobbies</span>
            </p>
          </div>
        </div>
      </Link>

      <Link to="/Chat/Good" style={{ textDecoration: "none" }}>
        <div onClick={() => setIndexOfBtn(2)}>
          <div
            className={`ChatDashboard__Conversation__Inbox ${
              indexOfBtn === 2 && "active"
            }`}
            onClick={onclicHandler}
          >
            <Avatar className="ChatDashboard__Inbox__Avatars">
              <InsertEmoticonIcon />
            </Avatar>
            <p>
              #&nbsp;Good <span>Hobbies</span>
            </p>
          </div>
        </div>
      </Link>
      <Link to="/Chat/Bad" style={{ textDecoration: "none" }}>
        <div onClick={() => setIndexOfBtn(3)}>
          <div
            className={`ChatDashboard__Conversation__Inbox ${
              indexOfBtn === 3 && "active"
            }`}
            onClick={onclicHandler}
          >
            <Avatar className="ChatDashboard__Inbox__Avatars">
              <SentimentVeryDissatisfiedIcon />
            </Avatar>
            <p>
              #&nbsp;Bad <span>Hobbies</span>
            </p>
          </div>
        </div>
      </Link>
      <Link to="/Chat/Other" style={{ textDecoration: "none" }}>
        <div onClick={() => setIndexOfBtn(4)}>
          <div
            className={`ChatDashboard__Conversation__Inbox ${
              indexOfBtn === 4 && "active"
            }`}
            onClick={onclicHandler}
          >
            <Avatar className="ChatDashboard__Inbox__Avatars">
              <MoreHorizIcon />
            </Avatar>
            <p>#&nbsp;Other</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Conversation;
