import React, { useEffect, useState } from "react";
import Messages from "../Messages";
import { TextField, CircularProgress } from "@material-ui/core";
import { connect } from "react-redux";
import {
  getGeneralChat,
  addGeneralChat,
  deleteGeneralChat,
} from "../../../../redux/actions/messagesActions";

const General = ({
  getGeneralChat,
  generalMessages,
  auth,
  addGeneralChat,
  deleteGeneralChat,
}) => {
  const [input, setInput] = useState("");

  useEffect(() => {
    getGeneralChat();
  }, [getGeneralChat]);

  const onSubmitForm = (e) => {
    e.preventDefault();
    const values = {
      name: auth.first_name,
      email: auth.email,
      message: input,
    };
    addGeneralChat(values);
    setInput("");
  };

  const deleteButtonMessage = (id) => {
    deleteGeneralChat(id);
  };

  return (
    <>
      <div
        className={`ChatDashboard__ChatSystem ${
          generalMessages.loading && "active"
        }`}
      >
        {generalMessages.loading ? (
          <CircularProgress size={100} style={{ color: "#7733FF" }} />
        ) : (
          generalMessages?.GeneralChat?.map(
            ({ _id, name, message, email, date }) => {
              return (
                <Messages
                  deleteButton={() => deleteButtonMessage(_id)}
                  key={_id}
                  name={name.charAt(0)}
                  email={email}
                  message={message}
                  date={date}
                />
              );
            }
          )
        )}
      </div>

      <form className="ChatDashboard__InputField" onSubmit={onSubmitForm}>
        <TextField
          id="outlined-multiline-flexible"
          label="Enter message"
          placeholder="Enter your message here..."
          className="InputField___"
          variant="outlined"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    generalMessages: state.generalMessages,
    auth: state.auth,
  };
};

export default connect(mapStateToProps, {
  getGeneralChat,
  addGeneralChat,
  deleteGeneralChat,
})(General);
