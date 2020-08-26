import React, { useState } from "react";
import "./userSettings.scss";
import { Button } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import LockIcon from "@material-ui/icons/Lock";

const UserSettings = () => {
  const [indexOfButton, setIndexOfButton] = useState(0);

  return (
    <div className="userSettings__">
      <div className="userSettings__Title">
        <h1>PERSONAL SETTINGS</h1>
      </div>
      <div className="userSettings__IconsSettings">
        <div className="userSettings__buttons">
          <Button
            variant="contained"
            className={`userSettings__AccountButton ${
              indexOfButton === 0 && "active"
            }`}
            onClick={() => setIndexOfButton(0)}
          >
            <PersonIcon className="PersonIcon__" />
            Account
          </Button>
          <Button
            variant="contained"
            className={`userSettings__SecurityButton ${
              indexOfButton === 1 && "active"
            }`}
            onClick={() => setIndexOfButton(1)}
          >
            <LockIcon className="LockIcon__" />
            Security
          </Button>
        </div>
        <div className="userSettings__Account">
          <form>dd</form>
        </div>
      </div>
    </div>
  );
};

export default UserSettings;
