import React, { Fragment } from "react";
import Header from "../../Logo/header-bg.png";
import iPhone from "../../Logo/iPhone.png";
import { Grid, Container, Button } from "@material-ui/core";
import "./Home.scss";

function Home() {
  return (
    <div className="Home__Container">
      <img src={Header} className="Home__ImageWave" alt="wave" />
      <Container>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid
            item
            container
            direction="row"
            justify="center"
            alignItems="center"
            xs={12}
            sm={12}
            lg={6}
          >
            <div className="Home__Text_Presentation">
              <h1>
                START MAKING NEW,
                <br />
                CHANGES TO YOUR LIFE
              </h1>
              <p>
                This Hobby maker web application, You can see how many hobbies
                you have, have a plan when to complete your hobbies, What
                hobbies made you succeed and what hobbies made you not succeed.
                There is so much more than that. Just sign up and give a try to
                this web app!
              </p>
              <div className="Home__Buttons">
                <Button variant="contained" color="primary">
                  Primary
                </Button>
                <Button vairant="contained" color="primary">
                  Primary
                </Button>
              </div>
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            lg={6}
            container
            direction="row"
            justify="center"
            alignItems="center"
            className="Home__GridTwo"
          >
            <img src={iPhone} alt="iPhone" className="Home__iPhoneImage" />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Home;
