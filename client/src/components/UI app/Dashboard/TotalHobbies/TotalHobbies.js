import React, { useState, useEffect } from "react";
import "./TotalHobbies.scss";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import AddIcon from "@material-ui/icons/Add";
import MoodIcon from "@material-ui/icons/Mood";
import MoodBadIcon from "@material-ui/icons/MoodBad";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import DeleteIcon from "@material-ui/icons/Delete";
import MessageIcon from "@material-ui/icons/Message";
import EditIcon from "@material-ui/icons/Edit";
import Popover from "@material-ui/core/Popover";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Container, Button, IconButton } from "@material-ui/core";
import ReactPaginate from "react-paginate";
import Modal from "./Modal/Modal";
import {
  updateHobby,
  deleteHobby,
} from "../../../../redux/actions/modalAction";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";
import GoodModal from "./Modal/GoodModal/GoodModal";
import EditModal from "./Modal/EditModal/EditModal";

const TotalHobbies = ({ auth, hobbies, updateHobby, deleteHobby }) => {
  const [open, setOpen] = useState(false);
  const [offset, setOffset] = useState(0);
  const [lastPage] = useState(1);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [_id, set_Id] = useState(null);
  const [goodModal, setGoodModal] = useState(false);
  const [hobbyValue, setHobbyValue] = useState("");
  const [hobbyName, setHobbyName] = useState("");
  const [hobbyDesc, setHobbyDesc] = useState("");

  const deleteHobbyItem = (id) => {
    deleteHobby(id);
    setAnchorEl(null);
  };
  console.log(hobbyValue);

  const handleClick = () => {
    setOpen(!open);
  };

  const popOverClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

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

  const openPopOver = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const handleCloseEditModal = (hobbyName, hobbyRate, hobbyDesc, _id) => {
    setOpenEditModal(!openEditModal);
    setAnchorEl(false);
    setHobbyValue(hobbyRate);
    setHobbyName(hobbyName);
    setHobbyDesc(hobbyDesc);
    set_Id(_id);
  };

  const closeModal = () => {
    setOpenEditModal(!openEditModal);

    setHobbyValue("");
    setHobbyName("");
    setHobbyDesc("");
  };

  const submitForm = (e) => {
    if (!hobbyValue || !hobbyName) {
      e.preventDefault();
    }
    const valueUpdateItem = {
      name: hobbyName,
      number: hobbyValue,
      message: hobbyDesc,
    };

    updateHobby(_id, valueUpdateItem);
  };

  const onChangeValue = (e) => {
    setHobbyName(e.target.value);
  };

  const onChangeValueDesc = (e) => {
    setHobbyDesc(e.target.value);
  };

  const changeValueRate = (e) => {
    setHobbyValue(e.target.value);
  };

  return (
    <Container className="TotalHobbies">
      <GoodModal open={goodModal} />
      <EditModal
        open={openEditModal}
        handleClose={closeModal}
        editHobbyValue={hobbyName}
        editRateHobbyValue={hobbyValue}
        editDescHobbyValue={hobbyDesc}
        onChangeValue={onChangeValue}
        onChangeValueRate={changeValueRate}
        onChangeValueDesc={onChangeValueDesc}
        closeModal={closeModal}
        actionForm={submitForm}
      />
      <Modal open={open} handleClose={handleClick} />
      <div className="TotalHobbies__">
        <div className="TotalHobbies__Text">
          <div className="TotalHobbies__HowManyHobbies">
            <h1>
              Active Hobbies&nbsp;
              {hobbies.itemsLoading
                ? "(...)"
                : `(${hobbies.itemsHobbies.length})`}
            </h1>
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
            newItemsArray.map(({ name, number, message, _id }) => (
              <Paper key={_id} className="TotalHobbies__Paper__Item">
                <div className="TotalHobbies__BtnPopover">
                  <IconButton
                    aria-describedby={id}
                    variant="contained"
                    color="primary"
                    onClick={popOverClick}
                    className="TotalHobbies__OpenButton"
                  >
                    <MoreHorizIcon className="Dots__" />
                  </IconButton>
                  <Popover
                    id={id}
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
                    <div className="TotalHobbies__PopOverEdit">
                      <IconButton
                        className="TotalHobbies__IconButtonEdit"
                        onClick={() =>
                          handleCloseEditModal(name, number, message, _id)
                        }
                      >
                        <EditIcon className="EditPopover__" />
                        <p>EDIT</p>
                      </IconButton>
                    </div>
                    <div className="TotalHobbies__PopOverTrash">
                      <IconButton
                        className="TotalHobbies__IconButtonTrash"
                        onClick={() => deleteHobbyItem(_id)}
                      >
                        <DeleteIcon className="DeletePopover__" />
                        <p>DELETE</p>
                      </IconButton>
                    </div>
                  </Popover>
                </div>
                <div className="TotalHobbies__Name__Btns">
                  <div className="TotalHobbies__Hobby">
                    <div className="TotalHobbies_HeartResult">
                      <FavoriteIcon className="Heart" />
                      <p>Your Hobby : {name}</p>
                    </div>
                    <div className="TotalHobbies__Rate">
                      <TrendingUpIcon className="Rate" />
                      <p>Rate Hobby : {number}</p>
                    </div>
                    <div className="TotalHobbies__Message">
                      <MessageIcon className="Rate" />
                      <p>Your Hobby Description : </p>
                    </div>
                    <div className="TotalHobbies__MessageText">
                      <p>{message}</p>
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

export default connect(mapStateToProps, { updateHobby, deleteHobby })(
  TotalHobbies
);
