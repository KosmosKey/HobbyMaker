import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import CancelIcon from "@material-ui/icons/Cancel";
import TextField from "@material-ui/core/TextField";
import "./EditModal.scss";
import { IconButton } from "@material-ui/core";

const EditModal = ({ open, handleClose }) => {
  return (
    <div className="EditModal__">
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        className="EditModal__Dialog"
      >
        <IconButton className="EditModal__CloseButton" onClick={handleClose}>
          <CancelIcon className="Cancel__" />
        </IconButton>
        <DialogTitle
          id="responsive-dialog-title"
          className="EditModal__DialogTitle"
        >
          <p>EDIT YOUR HOBBY</p>
        </DialogTitle>
        <DialogContent>
          <form action="" className="EditModal_FormSubmission">
            <TextField
              label="Hobby"
              placeholder="Your hobby..."
              type="name"
              variant="outlined"
              className="EditModal__HobbyInput"
            />
            <TextField
              label="Hobby Rate"
              placeholder="Hobby rate..."
              type="name"
              variant="outlined"
              className="EditModal__HobbyRate"
            />
            <TextField
              label="Hobby Description"
              placeholder="Hobby Description..."
              type="name"
              variant="outlined"
              className="EditModal__HobbyDescription"
            />
            <div className="EditModal__Buttons">
              <Button type="submit" className="EditModal__ConfirmEditButton">
                CONFIRM
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EditModal;
