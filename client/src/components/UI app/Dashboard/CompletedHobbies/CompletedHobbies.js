import React, { useState, forwardRef } from "react";
import "./CompletedHobbies.scss";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import Paper from "@material-ui/core/Paper";
import FlipMove from "react-flip-move";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ReactPaginate from "react-paginate";
import { Container, CircularProgress } from "@material-ui/core";
import { connect } from "react-redux";

const CompletedHobbies = forwardRef(({ hobbies }, ref) => {
  const [offset, setOffset] = useState(0);
  const [lastPage] = useState(2);

  const newArrayBadHobbies =
    hobbies.goodItems && hobbies.goodItems.slice(offset, offset + lastPage);

  const totalValuesPagination =
    hobbies.goodItems && Math.ceil(hobbies.goodItems.length / lastPage);

  const handlePageClick = (e) => {
    const selected = e.selected;
    const offset = selected * lastPage;
    setOffset(offset);
  };

  return (
    <div>
      <Container>
        <div className="CompletedHobbies__TitleAndLength">
          <div className="CompletedHobbies__Length">
            <h1>Hobbies went good</h1>
          </div>
        </div>
        <div className="CompletedHobbies__Results">
          <FlipMove>
            {hobbies.itemsLoading ? (
              <div className="Completed__DivLoading">
                <CircularProgress className="Completed__Loading" size={100} />
              </div>
            ) : (
              newArrayBadHobbies.map(({ name, _id }) => {
                return (
                  <Paper key={_id} className="CompletedHobbies__div" ref={ref}>
                    <div className="CompletedHobbies__RedHeader">
                      <h1>Hobby went good</h1>
                      <InsertEmoticonIcon className="CompletedHobbies__IconGood" />
                    </div>
                    <div className="CompletedHobbies__TextAndHeart">
                      <FavoriteIcon className="CompletedHobbies__FavourtieIcon" />
                      <h1>{name}</h1>
                    </div>
                  </Paper>
                );
              })
            )}
          </FlipMove>
        </div>

        <div className="CompletedHobbies__Pagination">
          {hobbies.itemsLoading ? (
            ""
          ) : (
            <ReactPaginate
              previousLabel={"<<"}
              nextLabel={">>"}
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageCount={totalValuesPagination}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePageClick}
              containerClassName={"pagination"}
              subContainerClassName={"pages pagination"}
              activeClassName={"active"}
            />
          )}
        </div>
      </Container>
    </div>
  );
});

const mapStateToProps = (state) => {
  return {
    hobbies: state.hobbies,
  };
};

export default connect(mapStateToProps, null)(CompletedHobbies);
