import React from "react";
import Header from "../../Logo/header-bg.png";
import iPhone from "../../Logo/iPhone.png";
import firstSvg from "../../Logo/svg1.png";
import secondSvg from "../../Logo/svg2.png";
import Event from "../../Logo/Event1.png";
import thirdSvg from "../../Logo/svg3.png";
import { Grid, Container, Button } from "@material-ui/core";
import "./Home.scss";

function Home() {
  return (
    <div>
      <img src={Header} className="Home__ImageWave" alt="wave" />
      <Container className="Home__Container">
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid
            item
            container
            direction="row"
            justify="center"
            alignItems="center"
            xs={12}
            sm={12}
            lg={8}
          >
            <div className="Home__Text_Presentation">
              <h1>START MAKING NEW, CHANGES TO YOUR LIFE</h1>
              <p>
                This Hobby maker web application, You can see how many hobbies
                you have, have a plan when
                <br /> to complete your hobbies, What hobbies made you succeed
                and what hobbies made you not succeed. There is so much more
                than that. Just sign up and give a try to this web app!
              </p>
              <div className="Home__Buttons">
                <Button
                  variant="contained"
                  className="Home__GetStarted"
                  color="primary"
                >
                  GET STARTED
                </Button>
                <Button
                  vairant="contained"
                  className="Home__LogIn"
                  color="primary"
                >
                  LOG IN
                </Button>
              </div>
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            lg={4}
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
      <div className="Home__WhySection">
        <section>
          <h1 className="Home__WhyText">WHY HOBBYMAKER?</h1>
          <Container>
            <Grid container justify="center" alignItems="center">
              <Grid
                item
                container
                direction="row"
                justify="center"
                alignItems="center"
                lg={4}
              >
                <div className="Home__first">
                  <img
                    src={firstSvg}
                    className="Home__firstImage"
                    alt="third"
                  />
                  <h1>Share your hobbies and ideas with friends & family</h1>
                </div>
              </Grid>
              <Grid
                item
                container
                direction="row"
                justify="center"
                alignItems="center"
                lg={4}
              >
                <div className="Home__first">
                  <img
                    src={secondSvg}
                    className="Home__secondImage"
                    alt="third"
                  />
                  <h1>Structure your ideas very easily throughout the days</h1>
                </div>
              </Grid>
              <Grid
                item
                container
                direction="row"
                justify="center"
                alignItems="center"
                lg={4}
              >
                <div className="Home__first">
                  <img
                    src={thirdSvg}
                    className="Home__thirdImage"
                    alt="third"
                  />
                  <h1>Explore new things within the app and the world!</h1>
                </div>
              </Grid>
            </Grid>
          </Container>
        </section>
      </div>
      <div className="Home__SetContactGoal">
        <Container>
          <Grid container justify="center">
            <Grid
              item
              direction="row"
              justify="center"
              alignItems="center"
              lg={6}
              sm={6}
            >
              <div className="Home__SetGoalsForHobi">
                <h1>
                  Set your self future goals with
                  <br /> your passion and hobbies
                </h1>
                <p>
                  You've heard people telling you go and do what you love doing.
                  That's right! This app allows you to have so many
                  oppurtunitues.
                </p>
                <p className="Home__paragraph">
                  Such as How many hobbies you have, your plans for the hobbies,
                  hobbies that did go so well and hobbies that went well and
                  etc. So set yourself a future goal with your passion and
                  hobbies!
                </p>
                <Button
                  variant="contained"
                  color="primary"
                  className="Home__ButtonSignUp"
                >
                  SIGN UP TODAY!
                </Button>
              </div>
            </Grid>
            <Grid item direction="row" alignItems="center" lg={6} sm={6}>
              <img
                src={Event}
                alt="Image_column"
                className="Home__ImageFluid"
              />
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default Home;
