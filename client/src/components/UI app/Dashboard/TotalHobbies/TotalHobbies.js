import React, { useState, forwardRef } from "react";
import "./TotalHobbies.scss";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import AddIcon from "@material-ui/icons/Add";
import MoodIcon from "@material-ui/icons/Mood";
import MoodBadIcon from "@material-ui/icons/MoodBad";
import FlipMove from "react-flip-move";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import DeleteIcon from "@material-ui/icons/Delete";
import MessageIcon from "@material-ui/icons/Message";
import EditIcon from "@material-ui/icons/Edit";
import Popover from "@material-ui/core/Popover";
import {
  addGoodHobby,
  addBadHobbyList,
} from "../../../.././redux/actions/modalAction";
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
import Alert from "@material-ui/lab/Alert";
import BadModal from "./Modal/BadModal/BadModal";

const TotalHobbies = forwardRef(
  ({ auth, hobbies, updateHobby, deleteHobby, addGoodHobby }, ref) => {
    const [open, setOpen] = useState(false);
    const [offset, setOffset] = useState(0);
    const [lastPage] = useState(1);
    const [anchorEl, setAnchorEl] = useState(null);
    const [openEditModal, setOpenEditModal] = useState(false);
    const [_id, set_Id] = useState(null);
    const [goodModal, setGoodModal] = useState(false);
    const [successEditMessage, setSuccessEditMessage] = useState(false);
    const [hobbyValue, setHobbyValue] = useState("");
    const [hobbyName, setHobbyName] = useState("");
    const [hobbyDesc, setHobbyDesc] = useState("");
    const [goodHobbyValue, setGoodHobbyValue] = useState("");
    const [badModal, setBadModal] = useState(false);
    const [badModalNameValue, setBadModalNameValue] = useState("");

    const deleteHobbyItem = (id) => {
      deleteHobby(id);
      setAnchorEl(null);
    };

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
      e.preventDefault();

      const valueUpdateItem = {
        name: hobbyName,
        number: hobbyValue,
        message: hobbyDesc,
      };

      updateHobby(_id, valueUpdateItem);
      closeModal();
      setSuccessEditMessage(true);
      setTimeout(() => {
        setSuccessEditMessage(false);
      }, 2000);
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

    const handleOpenModalGood = (name) => {
      setGoodModal(!goodModal);
      setGoodHobbyValue(name);
    };

    const closeModalGood = () => {
      setGoodModal(!goodModal);
    };

    const submitFormHobbyGood = (e) => {
      e.preventDefault();
      const newItem = {
        name: goodHobbyValue,
      };
      addGoodHobby(newItem);
      closeModalGood();
    };

    const onOpenBadModal = () => {
      setBadModal(!badModal);
    };

    const badModalSetNameValue = (name) => {
      setBadModal(!badModal);
      setBadModalNameValue(name);
    };

    return (
      <Container className="TotalHobbies">
        <BadModal
          open={badModal}
          handleClose={onOpenBadModal}
          nameValue={badModalNameValue}
        />
        <GoodModal
          open={goodModal}
          hobbyValue={goodHobbyValue}
          handleClose={closeModalGood}
          formSubmit={submitFormHobbyGood}
        />
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
                <span>Active Hobbies&nbsp;</span>
                {hobbies.itemsLoading
                  ? "(...)"
                  : `(${hobbies.itemsHobbies.length})`}
              </h1>
            </div>
            <div className="TotalHobbies__AddNewHobbies">
              <Button onClick={handleClick} className="TotalHobbies__AddBtn">
                <AddIcon /> <h4>Add Your Hobby</h4>
              </Button>
            </div>
          </div>
        </div>
        <div>
          <div className="TotalHobbies__Paper">
            <FlipMove>
              {hobbies.itemsLoading ? (
                <div className="TotalHobbies__DivLoading">
                  <CircularProgress
                    className="TotalHobbies__Loading"
                    size={100}
                  />
                </div>
              ) : hobbies.itemsHobbies.length === 0 ? (
                <h1
                  style={{
                    textAlign: "center",
                    color: "#2F3179",
                  }}
                >
                  You have currently no hobbies at the moment!
                </h1>
              ) : (
                newItemsArray.map(({ name, number, message, _id }) => (
                  <Paper
                    key={_id}
                    className="TotalHobbies__Paper__Item"
                    ref={ref}
                  >
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
                          <p>
                            <span>Your Hobby : </span>
                            {name}
                          </p>
                        </div>
                        <div className="TotalHobbies__Rate">
                          <TrendingUpIcon className="Rate" />
                          <p>
                            <span>Rate Hobby : </span>
                            {number}
                          </p>
                        </div>
                        <div className="TotalHobbies__Message">
                          <MessageIcon className="Rate" />
                          <p>
                            <span>Your Hobby Description : </span>
                          </p>
                        </div>
                        <div className="TotalHobbies__MessageText">
                          <p>{message || "No description were added"}</p>
                        </div>
                      </div>
                    </div>
                    <div className="TotalHobbies__Btn">
                      <Button
                        variant="contained"
                        className="TotalHobbies__SecondButton"
                        onClick={() => handleOpenModalGood(name)}
                      >
                        <p>Went Good</p>
                        <MoodIcon className="TotalHobbies__GoodMoodIcon" />
                      </Button>
                      <Button
                        variant="contained"
                        className="TotalHobbies__FirstButton"
                        onClick={() => badModalSetNameValue(name)}
                      >
                        <p>Went Bad</p>
                        <MoodBadIcon className="TotalHobbies__BadMoodIcon" />
                      </Button>
                    </div>
                  </Paper>
                ))
              )}
            </FlipMove>
            {hobbies.itemsLoading ? (
              ""
            ) : hobbies.itemsHobbies.length === 0 ? (
              ""
            ) : (
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
            )}
          </div>
        </div>
        <Alert
          variant="filled"
          severity="success"
          className={`HobbiesTotal__SuccessMessage ${
            successEditMessage && "active"
          }`}
        >
          You have successfully edited your hobby!
        </Alert>
      </Container>
    );
  }
);

const mapStateToProps = (state) => {
  return {
    hobbies: state.hobbies,
    auth: state.auth,
  };
};

export default connect(mapStateToProps, {
  updateHobby,
  deleteHobby,
  addGoodHobby,
  addBadHobbyList,
})(TotalHobbies);
