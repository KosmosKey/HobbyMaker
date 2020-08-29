import React, { useState } from "react";
import "./userSettings.scss";
import { Button } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import LockIcon from "@material-ui/icons/Lock";
import AccountSettings from "./AcccountSettings/AccountSettings";
import PrivacySettings from "./PrivacySettings/PrivacySettings";

const UserSettings = () => {
  const [indexOfButton, setIndexOfButton] = useState(1);

  return (
    <div className="userSettings__">
      <div className="userSettings__Title">
        <h1>
          <span>PERSONAL</span> SETTINGS
        </h1>
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
            <span className="Span__">Account</span>
          </Button>
          <Button
            variant="contained"
            className={`userSettings__SecurityButton ${
              indexOfButton === 1 && "active"
            }`}
            onClick={() => setIndexOfButton(1)}
          >
            <LockIcon className="LockIcon__" />
            <span className="Span__">Security</span>
          </Button>
        </div>
        <div className="userSettings__Account">
          {indexOfButton === 0 ? <AccountSettings /> : <PrivacySettings />}
        </div>
      </div>
    </div>
  );
};

export default UserSettings;
