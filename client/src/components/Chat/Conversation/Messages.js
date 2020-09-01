import React from "react";
import Avatar from "@material-ui/core/Avatar";
import DeleteIcon from "@material-ui/icons/Delete";
import { Paper, IconButton } from "@material-ui/core";
import { connect } from "react-redux";

const Messages = ({ name, message, email, auth, deleteButton }) => {
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
            <div className="Delete__">
              <IconButton
                style={{ fontSize: "10px", color: "#fff" }}
                onClick={deleteButton}
              >
                <DeleteIcon style={{ fontSize: "15px" }} />
              </IconButton>
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
