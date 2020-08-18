import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import "./GoodModal.scss";

const GoodModal = ({ handleClose, open, hobbyValue }) => {
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" className="GoodModal__Title">
          <p>Are you sure this hobby went well?</p>
        </DialogTitle>
        <DialogActions>
          <form className="GoodModal__FormSubmission">
            <h1>HOBBY</h1>

            <Button type="submit" color="primary">
              Primary
            </Button>
          </form>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default GoodModal;
