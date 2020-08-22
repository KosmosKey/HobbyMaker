import React from "react";
import CancelIcon from "@material-ui/icons/Cancel";
import MoodBadIcon from "@material-ui/icons/MoodBad";
import { IconButton, DialogActions, Dialog, Button } from "@material-ui/core";
import "./BadModal.scss";

const BadModal = ({ open, handleClose, formSubmit, nameValue }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <IconButton className="BadModal__CloseIcon" onClick={handleClose}>
        <CancelIcon className="CloseIcon" />
      </IconButton>
      <div className="BadModal__Title">
        <p>Are you sure this hobby went bad ?</p>
      </div>
      <DialogActions>
        <form onSubmit={formSubmit} className="BadModal__FormSubmission">
          <h1>
            <MoodBadIcon className="BadMood__Icon" /> {nameValue}
          </h1>
          <Button type="submit" color="primary" className="GoodModal__Button">
            SUBMIT
          </Button>
        </form>
      </DialogActions>
    </Dialog>
  );
};

export default BadModal;
