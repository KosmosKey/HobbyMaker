import React from "react";
import VectorPeople from "../../Logo/VectorPeople.png";
import { Button } from "@material-ui/core";

const WelcomeMessage = ({ active, setButtOnClick }) => {
  return (
    <div className="WelcomMessage__">
      <div className={`ChatDashboard__MotionDiv ${active && "active"}`}>
        <img src={VectorPeople} alt="vector" />
        <h1>Welcome to the Hobbymaker Chat!</h1>
        <p>Enjoy with chating to other passionate people here!</p>
        <Button
          variant="contained"
          color="primary"
          className="Button"
          onClick={setButtOnClick}
        >
          ENTER HOBBYMAKER CHAT
        </Button>
      </div>
      <div className={`overlayWelcome ${active && "active"}`}></div>
    </div>
  );
};

export default WelcomeMessage;
