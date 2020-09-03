import React from "react";
import Avatar from "@material-ui/core/Avatar";
import MailIcon from "@material-ui/icons/Mail";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ListIcon from "@material-ui/icons/List";
import MoodIcon from "@material-ui/icons/Mood";
import MoodBadIcon from "@material-ui/icons/MoodBad";
import EqualizerIcon from "@material-ui/icons/Equalizer";
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
            <p>
              Barcaboys<span>@gmail.com</span>
            </p>
          </div>
          <div className="Username__">
            <AccountCircleIcon className="AccountCircle__Icon" />
            <p>
              Magomed <span>Khamidov</span>
            </p>
          </div>
        </div>

        <div className="DeleteButton">
          <Button
            variant="contained"
            color="primary"
            className="UserInfo__DeleteButton"
          >
            <EqualizerIcon className="DeleteIcon__" />
            VIEW&nbsp;<span className="span__">STATISTIC</span>
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
              <p>
                1300 <span>TOTAL HOBBIES</span>
              </p>
            </div>
          </div>
        </div>
        <div className="UserInfo__BadAndGoodHobbies">
          <div className="UserInfo__GoodHobbies">
            <div className="Icon__">
              <MoodIcon className="Icon__List" />
            </div>
            <div className="Text__">
              <p>
                50 <span>GOOD</span>
              </p>
            </div>
          </div>
          <div className="UserInfo__BadHobbies">
            <div className="Icon__">
              <MoodBadIcon className="Icon__List" />
            </div>
            <div className="Text__">
              <p>
                1300 <span>BAD</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
