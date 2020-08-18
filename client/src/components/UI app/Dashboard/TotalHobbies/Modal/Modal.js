import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Select from "@material-ui/core/Select";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";
import DialogTitle from "@material-ui/core/DialogTitle";
import MenuItem from "@material-ui/core/MenuItem";
import "./Modal.scss";
import { connect } from "react-redux";
import CloseIcon from "@material-ui/icons/Close";
import { addHobby } from "../../../../../redux/actions/modalAction";
import { Button, FormControl, TextField, IconButton } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

const Modal = ({ open, handleClose, addHobby }) => {
  const [option, setOption] = useState({
    age: 1,
  });
  const [hobbyVal, setHobbyVal] = useState("");
  const [descriptionVal, setDescriptionVal] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setOption({
      ...option,
      [e.target.name]: e.target.value,
    });
  };

  const changeValueHobby = (e) => {
    setHobbyVal(e.target.value);
  };

  const descriptionValueChange = (e) => {
    setDescriptionVal(e.target.value);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();

    const newHobby = {
      name: hobbyVal,
      number: option.age,
      message: descriptionVal,
    };

    if (!hobbyVal) {
      setErrorMessage("Please fill out the hobby");
    } else {
      setHobbyVal("");
      setDescriptionVal("");
      setOption({ age: 1 });
      setErrorMessage("");
      addHobby(newHobby);
      handleClose();
    }
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
        <form onSubmit={onSubmitForm} className="Modal__Form">
          {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
          <div className="Modal__InputFields">
            <p className="Modal__HobbyText">What hobby do you want to add?</p>
            <TextField
              name="hobby"
              value={hobbyVal}
              onChange={changeValueHobby}
              id="outlined-basic"
              placeholder="Enter your hobby..."
              className="Modal__FirstInputField"
            />
          </div>
          <div className="Modal__Select">
            <FormControl className="Modal__SelectInputLabel">
              <p className="Modal__ScaleLabel">
                How well do you like the hobby?
              </p>
              <Select
                labelId="demo-customized-select-label"
                id="demo-customized-select"
                value={option.age}
                onChange={handleChange}
                label="Scale"
                name="age"
                inputProps={{
                  id: "outlined-age-native-simple",
                }}
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={6}>6</MenuItem>
                <MenuItem value={7}>7</MenuItem>
                <MenuItem value={8}>8</MenuItem>
                <MenuItem value={9}>9</MenuItem>
                <MenuItem value={10}>10</MenuItem>
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
              value={descriptionVal}
              onChange={descriptionValueChange}
            />
          </div>
          <div className="Modal__ButtonsSubmit">
            <Button color="primary" type="submit" className="Moda__AddButton">
              ADD A HOBBY
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default connect(null, { addHobby })(Modal);
