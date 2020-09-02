import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import DeleteIcon from "@material-ui/icons/Delete";
import {
  Paper,
  IconButton,
  Popover,
} from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { connect } from "react-redux";

const Messages = ({ name, message, email, auth, deleteButton }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div className="ChatDashboard__Conversation">
      <div
        className={`ChatDashboard__Chat__Person ${
          email === auth.user.email && "active"
        }`}
      >
        <Avatar className="Avatar__">{name}</Avatar>
        <Paper className="ChatDashboard__Paper">
          {email === auth.user.email ? (
            <div>
              <IconButton
                aria-describedby={id}
                variant="contained"
                color="primary"
                onClick={handleClick}
                className="PopOver__Button"
              >
                <MoreHorizIcon style={{ color: "#fff" }} />
              </IconButton>
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                style={{ marginTop: "10px" }}
                anchorOrigin={{
                  vertical: "center",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
              >
                <div style={{ background: "red" }}>
                  <IconButton
                    style={{ fontSize: "10px", color: "#fff" }}
                    onClick={deleteButton}
                  >
                    <DeleteIcon style={{ fontSize: "15px" }} />
                  </IconButton>
                </div>
              </Popover>
            </div>
          ) : (
            ""
          )}

          <p>{message}</p>
        </Paper>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, null)(Messages);
