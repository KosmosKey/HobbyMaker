import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const GoodModal = ({ handleClose, open }) => {
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <p>Are you sure this hobby went well?</p>
        </DialogTitle>
        <DialogActions>
          <form>
            <h1>HOBBY</h1>
            <button type="submit">fas</button>
          </form>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default GoodModal;
