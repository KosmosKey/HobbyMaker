import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Button from "@material-ui/core/Button";
import CancelIcon from "@material-ui/icons/Cancel";
import "./GoodModal.scss";
import { IconButton } from "@material-ui/core";

const GoodModal = ({ handleClose, open, hobbyValue, formSubmit }) => {
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <IconButton className="GoodModal__CloseIcon" onClick={handleClose}>
          <CancelIcon className="CloseIcon" />
        </IconButton>
        <div className="GoodModal__Title">
          <p>Are you sure this hobby went well ?</p>
        </div>
        <DialogActions>
          <form onSubmit={formSubmit} className="GoodModal__FormSubmission">
            <h1>
              <FavoriteIcon /> {hobbyValue}
            </h1>
            <Button type="submit" color="primary" className="GoodModal__Button">
              SUBMIT
            </Button>
          </form>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default GoodModal;
