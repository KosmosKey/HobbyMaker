import React, { useState, useEffect } from "react";
import { TextField, Button, CircularProgress } from "@material-ui/core";
import { connect } from "react-redux";
import { updateUser } from "../../../../../redux/actions/actions";
import { useHistory } from "react-router-dom";
import SaveIcon from "@material-ui/icons/Save";
import Alert from "@material-ui/lab/Alert";

const AccountSettings = ({ auth, updateUser }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [_id, setId] = useState("");
  const [error, setError] = useState("");
  let history = useHistory();

  useEffect(() => {
    setFirstName(auth.first_name && auth.first_name);
    setLastName(auth.last_name && auth.last_name);
    setEmailAddress(auth.email && auth.email);
    setId(auth.id && auth.id);
  }, [auth]);

  const submitForm = (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !emailAddress) {
      setError("You have not filled out all the fields!");
    } else {
      setError("");
      const bodyValue = {
        first_name: firstName,
        last_name: lastName,
        email: emailAddress,
      };

      updateUser(_id, bodyValue);

      history.push("/");
    }
  };

  return (
    <>
      {auth.isLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress size={100} style={{ color: "#7733FF" }} />
        </div>
      ) : (
        <div style={{ marginTop: "10px" }}>
          <span className="AccountSettings__SpanFirst">
            Personal settings /
          </span>
          <h1 className="userSettings__AccountSettingsText">Account</h1>
          <form onSubmit={submitForm}>
            <div className="AccountSettings__Names">
              <div className="FirstName__">
                <p className="AccountSettings__Labels">First Name</p>
                <TextField
                  placeholder="First name..."
                  variant="outlined"
                  className="TextFields__"
                  value={firstName || ""}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="LastName__">
                <p className="AccountSettings__Labels">Last Name</p>
                <TextField
                  placeholder="Last name..."
                  variant="outlined"
                  className="TextFields__"
                  style={{ border: "1px solid white" }}
                  value={lastName || ""}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
            <div className="AccountSettings__EmailInput">
              <p className="AccountSettings__Labels">Email address</p>
              <TextField
                placeholder="Email address..."
                variant="outlined"
                className="TextFields__"
                type="email"
                style={{ border: "1px solid white" }}
                value={emailAddress || ""}
                onChange={(e) => setEmailAddress(e.target.value)}
              />
            </div>
            <div className="AccountSettings_ButtonSaveChanges">
              <Button className="AccountSettings__Button" type="Submit">
                <span className="Icon__Save">
                  <SaveIcon className="Save__Icon" />
                </span>
                <span>Save changes</span>
              </Button>
            </div>
          </form>

          {error && (
            <Alert
              variant="filled"
              severity="error"
              className="AccountSettings__Failed"
            >
              {error}
            </Alert>
          )}
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { updateUser })(AccountSettings);
