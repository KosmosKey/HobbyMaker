import React, { useState, forwardRef } from "react";
import "./FailedHobbies.scss";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import CancelIcon from "@material-ui/icons/Cancel";
import DeleteIcon from "@material-ui/icons/Delete";
import InfoIcon from "@material-ui/icons/Info";
import {
  Container,
  Paper,
  IconButton,
  CircularProgress,
  Popover,
} from "@material-ui/core";
import FlipMove from "react-flip-move";
import { connect } from "react-redux";
import { deleteBadHobby } from "../../../../redux/actions/modalAction";
import ReactPaginate from "react-paginate";

const FailedHobbies = forwardRef(({ deleteBadHobby, hobbies }, ref) => {
  const [popover, setPopover] = useState(false);
  const [offset, setOffset] = useState(0);
  const [lastPage] = useState(2);
  const [_id_delete, set_Id_delete] = useState();
  const [anchorEl, setAnchorEl] = useState(null);

  const PopOverClick = (id) => {
    setPopover(!popover);
    set_Id_delete(id);
  };

  const handlePageClick = (e) => {
    const selected = e.selected;
    const offset = selected * lastPage;
    setOffset(offset);
  };

  const newArray =
    hobbies.badItems && hobbies.badItems.slice(offset, offset + lastPage);

  const totalPagination =
    hobbies.badItems && Math.ceil(hobbies.badItems.length / lastPage);

  const deleteBadHobbyId = (id) => {
    deleteBadHobby(id);
    setPopover(!popover);
  };

  const handleClickPopover = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Container>
      <div className="FailedHobbies__">
        <div className="FailedHobbies__Text">
          <h1>
            <span>Hobbies Went Bad&nbsp;</span>
            {hobbies.itemsLoading ? `(...)` : `(${hobbies.badItems.length})`}
          </h1>
        </div>
        <div className="FailedHobbies__Result">
          <FlipMove>
            {hobbies.itemsLoading ? (
              <div className="FailedHobbies__LoadingDiv">
                <CircularProgress size={100} />
              </div>
            ) : hobbies.badItems.length === 0 ? (
              <h1 style={{ textAlign: "center", color: "#2F3179" }}>
                You have no bad hobbies
              </h1>
            ) : (
              newArray.map(({ name, _id }) => {
                return (
                  <Paper key={_id} className="FailedHobbies__Paper" ref={ref}>
                    <div className="FailedHobbies__Header">
                      <div className="FailedHobbies__TextAndBadMood">
                        <h1>Hobbies went bad</h1>
                        <SentimentVeryDissatisfiedIcon className="BadMood_Icon" />
                        <div className="FailedHobbies__DotsIcon">
                          <div className="FailedHobbies__ButtonAndText">
                            <IconButton
                              className="FailedHobbies__DotsButton"
                              onClick={() => PopOverClick(_id)}
                            >
                              <MoreHorizIcon className="Dots__Icon" />
                            </IconButton>
                            <div className="FailedHobbies__PopOver">
                              <IconButton
                                className={`FailedHobbies__DeleteButton ${
                                  popover && _id_delete === _id ? "active" : ""
                                }`}
                                onClick={() => deleteBadHobbyId(_id)}
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
                          <h1> {name} </h1>
                        </div>
                      </div>
                      <div className="CompletedHobbies__InformationIcon">
                        <InfoIcon
                          className="CompletedHobbies__Info_Icon"
                          aria-owns={open ? "mouse-over-popover" : undefined}
                          onMouseEnter={handleClickPopover}
                        />
                        <Popover
                          id="mouse-over-popover"
                          open={open}
                          anchorEl={anchorEl}
                          onClose={handleClose}
                          anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "center",
                          }}
                          transformOrigin={{
                            vertical: "top",
                            horizontal: "center",
                          }}
                        >
                          <div className="FailedHobbies__Background">
                            <p className="Paragraph_InfoPopOver">
                              No Problem!
                              <br /> Continue to <br /> explore more :)
                            </p>
                          </div>
                        </Popover>
                      </div>
                    </div>
                  </Paper>
                );
              })
            )}
          </FlipMove>
        </div>
        {hobbies.itemsLoading ? (
          ""
        ) : hobbies.badItems.length > 2 ? (
          <ReactPaginate
            previousLabel={"<<"}
            nextLabel={">>"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={totalPagination}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
          />
        ) : (
          ""
        )}
      </div>
    </Container>
  );
});

const mapStateToProps = (state) => {
  return {
    hobbies: state.hobbies,
  };
};

export default connect(mapStateToProps, { deleteBadHobby })(FailedHobbies);
