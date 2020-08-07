import React, { useState } from "react";
import { Grid, Typography, Container } from "@material-ui/core";
import "./HobbiesTotal.scss";
import { Bar } from "react-chartjs-2";
import SortIcon from "@material-ui/icons/Sort";
import MoodBadIcon from "@material-ui/icons/MoodBad";
import MoodIcon from "@material-ui/icons/Mood";
const HobbiesTotal = () => {
  const [charData, setCharData] = useState({
    labels: ["Total Hobbies", "Hobbies went bad", "Hobbies went well"],
    datasets: [
      {
        label: "Population",
        data: [18, 18, 17],
        backgroundColor: [
          "rgba(119, 51, 255, 1)",
          "rgba(119, 51, 255, 1)",
          "rgba(119, 51, 255, 1)",
        ],
      },
    ],
  });

  return (
    <div className="HobbiesTotal__">
      <Grid container spacing={10}>
        <Grid item lg={4} md={12} sm={12}>
          <div className="HobbiesTotal__TotalHobbies">
            <div className="HobbiesTotal__TotalHobbies_Text">
              <SortIcon className="HobbiesTotal__SortIcons" />
              <h1>4235</h1>
              <p>Total Hobbies</p>
            </div>
          </div>
        </Grid>
        <Grid item lg={4} md={12} sm={12}>
          <div className="HobbiesTotal__HobbiesWentWell">
            <div className="HobbiesTotal__HobbiesWentWellText">
              <MoodIcon className="HobbiesTotal__HobbiesWentWellGoodIcon" />
              <h1>2060</h1>
              <p>Hobbies went well</p>
            </div>
          </div>
        </Grid>
        <Grid item lg={4} md={12} sm={12}>
          <div className="HobbiesTotal__HobbiesWentBad">
            <div className="HobbiesTotal__HobbiesWentBadText">
              <MoodBadIcon className="HobbiesTotal__HobbiesWentGoodIcon" />
              <h1>1050</h1>
              <p>Hobbies went bad</p>
            </div>
          </div>
        </Grid>
        <Grid item lg={6} md={12} sm={12}>
          <div style={{ background: "white" }}>
            <Bar
              data={charData}
              width={100}
              height={500}
              options={{ maintainAspectRatio: false }}
            />
          </div>
        </Grid>
        <Grid item lg={6} md={12} sm={12}>
          <h1>Hello</h1>
        </Grid>
      </Grid>
    </div>
  );
};

export default HobbiesTotal;
