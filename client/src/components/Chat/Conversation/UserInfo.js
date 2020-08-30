import React from "react";
import Avatar from "@material-ui/core/Avatar";
import MailIcon from "@material-ui/icons/Mail";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ListIcon from "@material-ui/icons/List";
import MoodIcon from "@material-ui/icons/Mood";
import MoodBadIcon from "@material-ui/icons/MoodBad";
import DeleteIcon from "@material-ui/icons/Delete";
import { Button } from "@material-ui/core";

const UserInfo = () => {
  return (
    <div className="ChatDashord__UserProfileAndInfo">
      <div className="UserInfo__UserInfo">
        <div className="ChatDasbhoard__ProfilePicture">
          <Avatar className="ChatDashboard__Avatar">HM</Avatar>
        </div>
        <div className="UserInfo__ProfileInformation">
          <div className="Mail__">
            <MailIcon className="Mail__Icon" />
            <p>Barcaboys2002@gmail.com</p>
          </div>
          <div className="Username__">
            <AccountCircleIcon className="AccountCircle__Icon" />
            <p>Magomed Khamidov</p>
          </div>
        </div>

        <div className="DeleteButton">
          <Button
            variant="contained"
            color="primary"
            className="UserInfo__DeleteButton"
          >
            <DeleteIcon className="DeleteIcon__" />
            DELETE CONVERSATION
          </Button>
        </div>
      </div>

      <div className="UserInfo__StatiStics">
        <div className="UserInfo__TotalHobbies">
          <div className="UserInfo__TotalHobbies__Container">
            <div className="Icon__">
              <ListIcon className="Icon__List" />
            </div>
            <div className="Text__">
              <p>1300 TOTAL HOBBIES</p>
            </div>
          </div>
        </div>
        <div className="UserInfo__BadAndGoodHobbies">
          <div className="UserInfo__GoodHobbies">
            <div className="Icon__">
              <MoodIcon className="Icon__List" />
            </div>
            <div className="Text__">
              <p>50 GOOD</p>
            </div>
          </div>
          <div className="UserInfo__BadHobbies">
            <div className="Icon__">
              <MoodBadIcon className="Icon__List" />
            </div>
            <div className="Text__">
              <p>1300 BAD</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
