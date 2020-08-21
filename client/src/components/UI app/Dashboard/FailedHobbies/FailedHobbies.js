import React, { useState } from "react";
import "./FailedHobbies.scss";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import CancelIcon from "@material-ui/icons/Cancel";
import DeleteIcon from "@material-ui/icons/Delete";
import { Container, Paper, IconButton } from "@material-ui/core";

const FailedHobbies = () => {
  const [popover, setPopover] = useState(false);

  const PopOverClick = () => {
    setPopover(!popover);
  };
  return (
    <Container>
      <div className="FailedHobbies__">
        <div className="FailedHobbies__Text">
          <h1>Hobbies Went Bad (2) </h1>
        </div>

        <div className="FailedHobbies__Result">
          <Paper>
            <div className="FailedHobbies__Header">
              <div className="FailedHobbies__TextAndBadMood">
                <h1>Hobbies went bad</h1>
                <SentimentVeryDissatisfiedIcon className="BadMood_Icon" />
                <div className="FailedHobbies__DotsIcon">
                  <div className="FailedHobbies__ButtonAndText">
                    <IconButton
                      className="FailedHobbies__DotsButton"
                      onClick={() => PopOverClick()}
                    >
                      <MoreHorizIcon className="Dots__Icon" />
                    </IconButton>
                    <div className="FailedHobbies__PopOver">
                      <IconButton
                        className={`FailedHobbies__DeleteButton ${
                          popover && "active"
                        }`}
                        onClick={() => PopOverClick()}
                      >
                        <DeleteIcon className="IconButton_IconDelete" />
                        <p>DELETE</p>
                      </IconButton>
                    </div>
                  </div>
                </div>
              </div>
              <div className="FailedHobbies__BadHobbies">
                <div className="FailedHobbies__TextAndIconCroos">
                  <CancelIcon className="CloseIcon__" />
                  <h1>Bad hobby</h1>
                </div>
              </div>
            </div>
          </Paper>
        </div>
      </div>
    </Container>
  );
};

export default FailedHobbies;
