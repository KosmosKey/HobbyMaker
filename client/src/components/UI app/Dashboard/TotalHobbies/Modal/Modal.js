import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";
import DialogTitle from "@material-ui/core/DialogTitle";
import "./Modal.scss";
import { Button, FormControl, TextField } from "@material-ui/core";

const Modal = ({ open, handleClose }) => {
  return (
    <div className="Modal__Dialog">
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        style={{ padding: "25px" }}
      >
        <div>
          <p className="Modal__Text__Title">
            Let's add a hobby to your list
            <SentimentVerySatisfiedIcon className="Modal__Icon" />
          </p>
          You can see after if this hobby went bad or good for you.
        </div>

        <form autoComplete="off" className="Modal__Form">
          <div className="Modal__InputFields">
            <TextField
              id="standard-basic"
              label="Standard"
              className="Modal__FirstInputField"
            />
          </div>
          <div className="Modal__ButtonsSubmit">
            <Button
              onClick={handleClose}
              color="primary"
              className="Moda__AddButton"
            >
              ADD A HOBBY
            </Button>
          </div>
        </form>
      </Dialog>
    </div>
  );
};

export default Modal;
