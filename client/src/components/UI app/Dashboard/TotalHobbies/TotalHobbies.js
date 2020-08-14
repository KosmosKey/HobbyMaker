import React, { useState } from "react";
import "./TotalHobbies.scss";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import AddIcon from "@material-ui/icons/Add";
import MoodIcon from "@material-ui/icons/Mood";
import MoodBadIcon from "@material-ui/icons/MoodBad";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MessageIcon from "@material-ui/icons/Message";
import Popover from "@material-ui/core/Popover";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Container, Button } from "@material-ui/core";
import ReactPaginate from "react-paginate";
import Modal from "./Modal/Modal";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";

const TotalHobbies = ({ auth, hobbies }) => {
  const [open, setOpen] = useState(false);
  const [offset, setOffset] = useState(0);
  const [lastPage] = useState(1);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = () => {
    setOpen(!open);
  };

  const popOverClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const openPopOver = Boolean(anchorEl);
  const id = openPopOver ? "simple-popover" : undefined;

  const newItemsArray =
    hobbies.itemsHobbies &&
    hobbies.itemsHobbies.slice(offset, offset + lastPage);

  const totalValues =
    hobbies.itemsHobbies && Math.ceil(hobbies.itemsHobbies.length / lastPage);

  const handlePageClick = (e) => {
    const selected = e.selected;
    const offset = selected * lastPage;
    setOffset(offset);
  };
  const handleClosePopOver = () => {
    setAnchorEl(null);
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
          {hobbies.itemsLoading ? (
            <div className="TotalHobbies__DivLoading">
              <CircularProgress className="TotalHobbies__Loading" size={100} />
            </div>
          ) : hobbies.itemsHobbies.length === 0 ? (
            <p>No todos</p>
          ) : (
            newItemsArray.map((item) => (
              <Paper key={item._id} className="TotalHobbies__Paper__Item">
                <div className="TotalHobbies__BtnPopover">
                  <Button
                    aria-describedby={id}
                    variant="contained"
                    color="primary"
                    onClick={popOverClick}
                  >
                    Open Popover
                  </Button>
                  <Popover
                    open={openPopOver}
                    anchorEl={anchorEl}
                    onClose={handleClosePopOver}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "center",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "center",
                    }}
                  >
                    CHAT!
                  </Popover>
                </div>
                <div className="TotalHobbies__Name__Btns">
                  <div className="TotalHobbies__Hobby">
                    <div className="TotalHobbies_HeartResult">
                      <FavoriteIcon className="Heart" />
                      <p>Your Hobby : {item.name}</p>
                    </div>
                    <div className="TotalHobbies__Rate">
                      <TrendingUpIcon className="Rate" />
                      <p>Rate Hobby : {item.name}</p>
                    </div>
                    <div className="TotalHobbies__Message">
                      <MessageIcon className="Rate" />
                      <p>Your Hobby Description : </p>
                    </div>
                    <div className="TotalHobbies__MessageText">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Provident vel odio dolore quis, unde voluptatum
                        similique, deleniti facilis illum inventore ea amet
                        commodi? Maiores, aspernatur optio impedit itaque
                        dolores aliquam.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="TotalHobbies__Btn">
                  <Button
                    variant="contained"
                    className="TotalHobbies__SecondButton"
                  >
                    Went Good
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
          {hobbies.itemsHobbies && (
            <div className="">
              <ReactPaginate
                previousLabel={"<<"}
                nextLabel={">>"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={totalValues}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"}
              />
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    hobbies: state.hobbies,
    auth: state.auth,
  };
};

export default connect(mapStateToProps, null)(TotalHobbies);
