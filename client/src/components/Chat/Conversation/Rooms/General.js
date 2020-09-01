import React from "react";
import Messages from "../Messages";
import { TextField } from "@material-ui/core";

export const General = () => {
  return (
    <>
      <Messages />
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
    </>
  );
};
