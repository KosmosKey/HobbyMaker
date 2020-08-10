import React, { useState } from "react";
import "./TotalHobbies.scss";
import AddIcon from "@material-ui/icons/Add";
import MoodIcon from "@material-ui/icons/Mood";
import MoodBadIcon from "@material-ui/icons/MoodBad";
import FavoriteIcon from "@material-ui/icons/Favorite";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { Container, Button } from "@material-ui/core";
import Modal from "./Modal/Modal";
import Paper from "@material-ui/core/Paper";

const TotalHobbies = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Container className="TotalHobbies">
      <Modal open={open} handleClose={handleClick} />
      <div className="TotalHobbies__">
        <div className="TotalHobbies__Text">
          <div className="TotalHobbies__HowManyHobbies">
            <h1>Active Hobbies (0)</h1>
          </div>
          <div className="TotalHobbies__AddNewHobbies">
            <Button onClick={handleClick}>
              <AddIcon /> Add Your Hobby
            </Button>
          </div>
        </div>
      </div>
      <div>
        <div className="TotalHobbies__Paper">
          <Paper className="TotalHobbies__Paper__Item">
            <div className="TotalHobbies__Name__Btns">
              <div className="TotalHobbies__Hobby">
                <FavoriteIcon className="Heart" />
                <p>Fotball Soccer</p>
              </div>
              <div className="TotalHobbies__ButtonsEdit__Delete">
                <Button variant="contained" className="TotalHobbies__EditIcon">
                  <EditIcon className="Edit" />
                </Button>
                <Button
                  variant="contained"
                  className="TotalHobbies__DeleteIcon"
                >
                  <DeleteIcon className="Delete" />
                </Button>
              </div>
            </div>
            <div className="TotalHobbies__Btn">
              <Button
                variant="contained"
                className="TotalHobbies__SecondButton"
              >
                Went Good <MoodIcon className="TotalHobbies__GoodMoodIcon" />
              </Button>
              <Button variant="contained" className="TotalHobbies__FirstButton">
                Went Bad <MoodBadIcon className="TotalHobbies__BadMoodIcon" />
              </Button>
            </div>
          </Paper>
        </div>
      </div>
    </Container>
  );
};

export default TotalHobbies;
