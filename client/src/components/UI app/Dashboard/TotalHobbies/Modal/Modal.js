import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Select from "@material-ui/core/Select";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";
import DialogTitle from "@material-ui/core/DialogTitle";
import "./Modal.scss";
import CloseIcon from "@material-ui/icons/Close";
import { Button, FormControl, TextField, IconButton } from "@material-ui/core";

const Modal = ({ open, handleClose }) => {
  const [option, setOption] = useState({
    age: "1",
  });

  const handleChange = (e) => {
    setOption({
      ...open,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      className="Modal__DialogWindow"
    >
      <DialogTitle
        id="alert-dialog-slide-title"
        style={{ position: "relative" }}
      >
        <IconButton className="Modal__CloseButton" onClick={handleClose}>
          <CloseIcon className="Close_icon" />
        </IconButton>
        <p className="Modal__Text__Title">
          Let's add a hobby to your list
          <SentimentVerySatisfiedIcon className="Modal__Icon" />
        </p>
        <p className="Modal__ParagraphTwo">
          You can see after if this hobby went bad or good for you.
        </p>
        <div
          className="Modal__Line"
          style={{ border: "1px solid #2f3179", marginTop: "10px" }}
        ></div>
      </DialogTitle>

      <DialogContent>
        <form autoComplete="off" className="Modal__Form">
          <div className="Modal__InputFields">
            <p className="Modal__HobbyText">What hobby do you want to add?</p>
            <TextField
              id="outlined-basic"
              placeholder="Enter your hobby..."
              className="Modal__FirstInputField"
            />
          </div>
          <div className="Modal__Select">
            <FormControl
              id="outlined-multiline-static"
              className="Modal__SelectInputLabel"
            >
              <p className="Modal__ScaleLabel">
                How well do you like the hobby?
              </p>

              <Select
                native
                value={option.age}
                onChange={handleChange}
                label="Scale"
                inputProps={{
                  name: "age",
                  id: "outlined-age-native-simple",
                }}
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
                <option value={9}>9</option>
                <option value={10}>10</option>
              </Select>
            </FormControl>
          </div>
          <div className="Modal__InputFieldMessage">
            <p className="Modal__MessageText">
              Add a description to your hobby? (optional)
            </p>
            <TextField
              id="outlined-multiline-static"
              placeholder="Why do you like this hobby..."
              className="Modal__MessageInput"
            />
          </div>
          <div className="Modal__ButtonsSubmit">
            <Button
              color="primary"
              onClick={handleClose}
              className="Moda__AddButton"
            >
              ADD A HOBBY
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
