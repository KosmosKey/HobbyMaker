import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { Paper, TextField } from "@material-ui/core";

const Messages = () => {
  return (
    <div style={{ width: "100%", height: "90vh", position: "relative" }}>
      <div className="ChatDashboard__ChatSystem">
        <div className="ChatDashboard__Conversation">
          <div className="ChatDashboard__Chat__Person">
            <Avatar className="Avatar__">MK</Avatar>
            <Paper className="ChatDashboard__Paper">
              <p>
                Hello bill nice to meet you! Hello bill nice to meet you! Hello
                bill nice to meet you! Hello bill nice to meet you! Hello bill
                nice to meet you! Hello bill nice to meet you! Hello bill nice
                to meet you! Hello bill nice to meet you! Hello bill nice to
                meet you! Hello bill nice to meet you!
              </p>
            </Paper>
          </div>

          <div className="ChatDashboard__Chat__Person active">
            <Avatar className="Avatar__">MK</Avatar>
            <Paper className="ChatDashboard__Paper">
              <p>
                Hello bill nice to meet you! Hello bill nice to meet you! Hello
                bill nice to meet you! Hello bill nice to meet you! Hello bill
                nice to meet you! Hello bill nice to meet you! Hello bill nice
                to meet you! Hello bill nice to meet you! Hello bill nice to
                meet you!
              </p>
            </Paper>
          </div>
          <div className="ChatDashboard__Chat__Person active">
            <Avatar className="Avatar__">MK</Avatar>
            <Paper className="ChatDashboard__Paper">
              <p>
                Hello bill nice to meet you! Hello bill nice to meet you! Hello
                bill nice to meet you! Hello bill nice to meet you! Hello bill
                nice to meet you! Hello bill nice to meet you! Hello bill nice
                to meet you! Hello bill nice to meet you! Hello bill nice to
                meet you!
              </p>
            </Paper>
          </div>
          <div className="ChatDashboard__Chat__Person active">
            <Avatar className="Avatar__">MK</Avatar>
            <Paper className="ChatDashboard__Paper">
              <p>
                Hello bill nice to meet you! Hello bill nice to meet you! Hello
                bill nice to meet you! Hello bill nice to meet you! Hello bill
                nice to meet you! Hello bill nice to meet you! Hello bill nice
                to meet you! Hello bill nice to meet you! Hello bill nice to
                meet you!
              </p>
            </Paper>
          </div>
          <div className="ChatDashboard__Chat__Person active">
            <Avatar className="Avatar__">MK</Avatar>
            <Paper className="ChatDashboard__Paper">
              <p>
                Hello bill nice to meet you! Hello bill nice to meet you! Hello
                bill nice to meet you! Hello bill nice to meet you! Hello bill
                nice to meet you! Hello bill nice to meet you! Hello bill nice
                to meet you! Hello bill nice to meet you! Hello bill nice to
                meet you!
              </p>
            </Paper>
          </div>
          <div className="ChatDashboard__Chat__Person active">
            <Avatar className="Avatar__">MK</Avatar>
            <Paper className="ChatDashboard__Paper">
              <p>
                Hello bill nice to meet you! Hello bill nice to meet you! Hello
                bill nice to meet you! Hello bill nice to meet you! Hello bill
                nice to meet you! Hello bill nice to meet you! Hello bill nice
                to meet you! Hello bill nice to meet you! Hello bill nice to
                meet you!
              </p>
            </Paper>
          </div>
          <div className="ChatDashboard__Chat__Person active">
            <Avatar className="Avatar__">MK</Avatar>
            <Paper className="ChatDashboard__Paper">
              <p>
                Hello bill nice to meet you! Hello bill nice to meet you! Hello
                bill nice to meet you! Hello bill nice to meet you! Hello bill
                nice to meet you! Hello bill nice to meet you! Hello bill nice
                to meet you! Hello bill nice to meet you! Hello bill nice to
                meet you!
              </p>
            </Paper>
          </div>
          <div className="ChatDashboard__Chat__Person active">
            <Avatar className="Avatar__">MK</Avatar>
            <Paper className="ChatDashboard__Paper">
              <p>
                Hello bill nice to meet you! Hello bill nice to meet you! Hello
                bill nice to meet you! Hello bill nice to meet you! Hello bill
                nice to meet you! Hello bill nice to meet you! Hello bill nice
                to meet you! Hello bill nice to meet you! Hello bill nice to
                meet you!
              </p>
            </Paper>
          </div>
        </div>
      </div>
      <div className="ChatDashboard__InputField">
        <TextField
          id="outlined-multiline-flexible"
          label="Enter message"
          placeholder="Enter your message here..."
          className="InputField___"
          multiline
          rowsMax={4}
          variant="outlined"
        />
      </div>
    </div>
  );
};

export default Messages;
