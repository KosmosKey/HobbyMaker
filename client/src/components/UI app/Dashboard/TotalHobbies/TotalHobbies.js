import React, { useState, useEffect } from "react";
import "./TotalHobbies.scss";
import AddIcon from "@material-ui/icons/Add";
import MoodIcon from "@material-ui/icons/Mood";
import MoodBadIcon from "@material-ui/icons/MoodBad";
import FavoriteIcon from "@material-ui/icons/Favorite";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { Container, Button } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import Modal from "./Modal/Modal";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";
// import { getHobbies } from "../../../../redux/actions/actions";

const TotalHobbies = ({ getHobbies, auth, hobbies }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  // useEffect(() => {
  //   getHobbies();
  // }, [getHobbies]);

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
          {hobbies.itemsLoading === false &&
          hobbies.itemsHobbies.length === 0 ? (
            <p>You have no Hobbies in your list</p>
          ) : hobbies.itemsLoading ? (
            <div className="TotalHobbies__PositionSpinner">
              <CircularProgress
                className="TotalHobbies__CircularProgress"
                size="40"
              />
            </div>
          ) : (
            hobbies.itemsHobbies.map((item) => (
              <Paper key={item._id} className="TotalHobbies__Paper__Item">
                <div className="TotalHobbies__Name__Btns">
                  <div className="TotalHobbies__Hobby">
                    <FavoriteIcon className="Heart" />
                    <p>{item.name}</p>
                  </div>
                  <div className="TotalHobbies__ButtonsEdit__Delete">
                    <Button
                      variant="contained"
                      className="TotalHobbies__EditIcon"
                    >
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
                    Went Good{" "}
                    <MoodIcon className="TotalHobbies__GoodMoodIcon" />
                  </Button>
                  <Button
                    variant="contained"
                    className="TotalHobbies__FirstButton"
                  >
                    Went Bad{" "}
                    <MoodBadIcon className="TotalHobbies__BadMoodIcon" />
                  </Button>
                </div>
              </Paper>
            ))
          )}
        </div>
      </div>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    hobbies: state.hobbies,
  };
};

export default connect(mapStateToProps, null)(TotalHobbies);
