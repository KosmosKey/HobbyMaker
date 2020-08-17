import React from "react";
import { Grid } from "@material-ui/core";
import "./HobbiesTotal.scss";
import { Pie, Line } from "react-chartjs-2";
import SortIcon from "@material-ui/icons/Sort";
import MoodBadIcon from "@material-ui/icons/MoodBad";
import MoodIcon from "@material-ui/icons/Mood";
import { motion } from "framer-motion";
import { connect } from "react-redux";

const HobbiesTotal = ({ hobbies }) => {
  const charData = {
    labels: ["Total Hobbies", "Hobbies went bad", "Hobbies went well"],
    datasets: [
      {
        label: "Population",
        data: [5, 2, 3],
        backgroundColor: [
          "rgba(119, 51, 255, 1)",
          "rgb(102, 58, 189, 1)",
          "rgb(165, 120, 255, 1)",
        ],
      },
    ],
  };

  return (
    <div className="HobbiesTotal__">
      <div className="HobbiesTotal__Results">
        <Grid container spacing={10}>
          <Grid item lg={4} md={12} sm={12}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{ border: "2px solid white", cursor: "pointer" }}
              className="HobbiesTotal__BtnHover"
            >
              <div className="HobbiesTotal__TotalHobbies">
                <div className="HobbiesTotal__TotalHobbies_Text">
                  <SortIcon className="HobbiesTotal__SortIcons" />
                  {hobbies.itemsLoading ? (
                    <h1>Loading...</h1>
                  ) : (
                    <div>
                      <h1>
                        {hobbies.itemsHobbies && hobbies.itemsHobbies.length}
                      </h1>
                      <p>Total Hobbies</p>
                    </div>
                  )}
                </div>
              </div>
            </motion.button>
          </Grid>
          <Grid item lg={4} md={12} sm={12}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{ border: "2px solid white", cursor: "pointer" }}
              className="HobbiesTotal__BtnHover"
            >
              <div className="HobbiesTotal__HobbiesWentWell">
                <div className="HobbiesTotal__HobbiesWentWellText">
                  <MoodIcon className="HobbiesTotal__HobbiesWentWellGoodIcon" />
                  {hobbies.itemsLoading ? (
                    <h1>Loading...</h1>
                  ) : (
                    <div>
                      <h1>{hobbies.goodItems && hobbies.goodItems.length}</h1>
                      <p>Hobbies went well</p>
                    </div>
                  )}
                </div>
              </div>
            </motion.button>
          </Grid>
          <Grid item lg={4} md={12} sm={12}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{ border: "2px solid white", cursor: "pointer" }}
              className="HobbiesTotal__BtnHover"
            >
              <div className="HobbiesTotal__HobbiesWentBad">
                <div className="HobbiesTotal__HobbiesWentBadText">
                  <MoodBadIcon className="HobbiesTotal__HobbiesWentGoodIcon" />
                  {hobbies.itemsLoading ? (
                    <h1>Loading...</h1>
                  ) : (
                    <div>
                      <h1>{hobbies.badItems && hobbies.badItems.length}</h1>
                      <p>Hobbies went bad</p>
                    </div>
                  )}
                </div>
              </div>
            </motion.button>
          </Grid>
        </Grid>
      </div>

      <div className="HobbiesTotal__Statistics" style={{ marginTop: "75px" }}>
        <Grid container spacing={5}>
          <Grid item lg={6} md={6} sm={6}>
            <div className="HobbieTotal__ChartJS">
              <Line
                data={charData}
                width={50}
                height={350}
                options={{ maintainAspectRatio: false, responsive: true }}
              />
            </div>
          </Grid>
          <Grid item lg={6} md={6} sm={6}>
            <div className="HomeTotal__ChartJSTwo">
              <Pie
                data={charData}
                width={50}
                height={350}
                options={{ maintainAspectRatio: false, responsive: true }}
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    hobbies: state.hobbies,
  };
};

export default connect(mapStateToProps, null)(HobbiesTotal);
