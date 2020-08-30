import React, { useState, useEffect } from "react";
import { TextField, Button, CircularProgress } from "@material-ui/core";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { updateUserPassword } from "../../../../../redux/actions/actions";
import SaveIcon from "@material-ui/icons/Save";
import Alert from "@material-ui/lab/Alert";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";

const PrivacySettings = ({ auth, updateUserPassword, passwordErr }) => {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassowrd, setConfirmPassowrd] = useState("");
  const [error, setError] = useState();
  const [_id, setId] = useState("");
  const [visibility, setVisibility] = useState(false);
  const [visibilitySecond, setVisibilitySecond] = useState(false);
  const [visibilityThird, setVisibilityThird] = useState(false);
  let history = useHistory();

  useEffect(() => {
    setId(auth.id && auth.id);
    if (passwordErr) {
      setError(passwordErr);
    } else {
      setError("");
    }
    if (!auth.token) {
      history.push("/");
    }
  }, [auth, passwordErr, history]);

  const submitForm = (e) => {
    e.preventDefault();
    const passwordValue = {
      oldPassword: password,
      confirmPassword: confirmPassowrd,
      password: newPassword,
    };

    updateUserPassword(_id, passwordValue);
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
          <span className="AccountSettings__SpanFirst">Privacy settings /</span>
          <h1 className="userSettings__AccountSettingsText">Password</h1>
          <form onSubmit={submitForm}>
            <div className="AccountSettings__Names">
              <div className="FirstName__">
                <p className="AccountSettings__Labels">Current password</p>
                <div style={{ position: "relative" }}>
                  <div
                    className="Visibility__Icon"
                    onClick={() => setVisibility(!visibility)}
                  >
                    {visibility ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </div>
                  <TextField
                    placeholder="Current password..."
                    type={visibility ? "text" : "password"}
                    variant="outlined"
                    className="TextFields__"
                    value={password || ""}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="AccountSettings__EmailInput">
              <p className="AccountSettings__Labels">New password</p>
              <div style={{ position: "relative" }}>
                <div
                  className="Visibility__Icon"
                  onClick={() => setVisibilitySecond(!visibilitySecond)}
                >
                  {visibilitySecond ? (
                    <VisibilityOffIcon />
                  ) : (
                    <VisibilityIcon />
                  )}
                </div>
                <TextField
                  placeholder="New password..."
                  variant="outlined"
                  type={visibilitySecond ? "text" : "password"}
                  className="TextFields__"
                  style={{ border: "1px solid white" }}
                  value={newPassword || ""}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="AccountSettings__EmailInput">
              <p className="AccountSettings__Labels">Confirm new password</p>
              <div style={{ position: "relative" }}>
                <div
                  className="Visibility__Icon"
                  onClick={() => setVisibilityThird(!visibilityThird)}
                >
                  {visibilityThird ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </div>
                <TextField
                  placeholder="Confirm new password..."
                  variant="outlined"
                  type={visibilityThird ? "text" : "password"}
                  className="TextFields__"
                  style={{ border: "1px solid white" }}
                  value={confirmPassowrd || ""}
                  onChange={(e) => setConfirmPassowrd(e.target.value)}
                />
              </div>
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

          {error && error.message && (
            <Alert
              variant="filled"
              severity="error"
              className="AccountSettings__Failed"
            >
              {error.message}
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
    passwordErr: state.passwordErr,
  };
};

export default connect(mapStateToProps, { updateUserPassword })(
  PrivacySettings
);
