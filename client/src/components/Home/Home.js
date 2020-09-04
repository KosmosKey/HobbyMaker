import React from "react";
import Header from "../../Logo/header-bg.png";
import iPhone from "../../Logo/iPhone.png";
import firstSvg from "../../Logo/svg1.png";
import secondSvg from "../../Logo/svg2.png";
import Event from "../../Logo/Event1.png";
import thirdSvg from "../../Logo/svg3.png";
import iPhoneTwo from "../../Logo/iPhoneTwo.png";
import LogoBlue from "../../Logo/LogoBlue.png";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import YouTubeIcon from "@material-ui/icons/YouTube";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import { Grid, Container, Button } from "@material-ui/core";
import "./Home.scss";
import { Link } from "react-router-dom";

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
                <Link to="/Register" style={{ textDecoration: "none" }}>
                  <Button
                    variant="contained"
                    className="Home__GetStarted"
                    color="primary"
                  >
                    GET STARTED
                  </Button>
                </Link>
                <Link to="/Login" style={{ textDecoration: "none" }}>
                  <Button
                    vairant="contained"
                    className="Home__LogIn"
                    color="primary"
                  >
                    LOG IN
                  </Button>
                </Link>
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
      <div className="Home__WhySection" id="About">
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
            <Grid item lg={6} sm={6}>
              <div className="Home__SetGoalsForHobi">
                <h1 className="Home__TitleSet">
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
                  hobbies that did go so well and hobbies that did not go well
                  and etc. So set yourself a future goal with your passion and
                  hobbies!
                </p>
                <Link to="/Register" style={{ textDecoration: "none" }}>
                  <Button
                    variant="contained"
                    color="primary"
                    className="Home__ButtonSignUp"
                  >
                    SIGN UP TODAY!
                  </Button>
                </Link>
              </div>
            </Grid>
            <Grid item lg={6} sm={6}>
              <img
                src={Event}
                alt="Image_column"
                className="Home__ImageFluid"
              />
            </Grid>
          </Grid>
        </Container>
      </div>
      <section className="Home__SectionBenefits">
        <Container>
          <Grid container justify="center">
            <Grid item lg={6} md={6} sm={6}>
              <img
                src={Event}
                alt="Image_column"
                className="Home__ImageFluid"
              />
            </Grid>
            <Grid
              item
              lg={6}
              md={6}
              sm={6}
              container
              direction="row"
              justify="flex-end"
              alignItems="flex-start"
              className="Home__gridSystemFourth"
            >
              <div className="Home__SetYourSelfGoal">
                <h1>Explore the hobbymaker app</h1>
                <div className="Home__ListOfGroup">
                  <p className="Home__QuoteParagraph">
                    "People with great passion can make the impossible happen".
                    Here are some benefits that you can get from this
                    application.
                  </p>
                  <ul>
                    <li className="Home__UnlistItems">
                      <CheckCircleIcon className="Home__icons" />
                      The web app is free to use
                    </li>

                    <li className="Home__UnlistItems">
                      <CheckCircleIcon className="Home__icons" />
                      Having a plan for your hobbies
                    </li>
                    <li className="Home__UnlistItems">
                      <CheckCircleIcon className="Home__icons" />
                      Hobbies that went well/bad for you
                      <br />
                    </li>
                    <li className="Home__UnlistItems">
                      <CheckCircleIcon className="Home__icons" />
                      Follow your best hobbies and
                      <br /> structure them within the app
                      <br />
                    </li>
                  </ul>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>

      <section className="Home__GetStartedToday" id="Start">
        <Container>
          <Grid container spacing={0} justify="center" alignItems="center">
            <Grid item container lg={8} md={8} sm={12} xs={12} justify="center">
              <div className="Home__LETSGET">
                <h1>LET'S GET STARTED!</h1>
                <p>Make sure that you sign up today for free!</p>
                <Link to="/Register" style={{ textDecoration: "none" }}>
                  <Button variant="contained" color="primary">
                    Sign up for free!
                  </Button>
                </Link>
              </div>
            </Grid>
            <Grid item className="Home__DeleteGrid" lg={4} md={4}>
              <img
                src={iPhoneTwo}
                alt="iPhoneTwo"
                className="Home__GetStartediPhone"
              />
            </Grid>
          </Grid>
        </Container>
      </section>
      <footer className="Home__Footer">
        <Container>
          <Grid container justify="center">
            <Grid item lg={4} md={6}>
              <div className="Home__FooterLogoInfo">
                <img
                  src={LogoBlue}
                  className="Home__FooterLogo"
                  alt="logo_blue"
                />
                <p>
                  Hobbymaker allows you to control your daily routines with your
                  hobbies. Try the web application for free today. If this gets
                  very popular we will be going to make app version of this. If
                  you want to support the creator make sure to follow him on
                  Twitter, Linkedin or YouTube.
                </p>
              </div>
            </Grid>
            <Grid item container justify="center" lg={8}>
              <div className="Home__SocialSection">
                <h1>FOLLOW ON SOCIAL MEDIA!</h1>
                <p>Follow on social media for more information!</p>
                <div className="Home__FooterSocialMedias">
                  <a
                    href="https://twitter.com/KosmosDeveloper"
                    style={{ color: "black" }}
                  >
                    <div className="Home__SocialIcons">
                      <TwitterIcon />
                    </div>
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCC0nd4ub4bFxIFxWoO2H1kA"
                    style={{ color: "black" }}
                  >
                    <div className="Home__SocialIcons">
                      <YouTubeIcon />
                    </div>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/magomed-khamidov-37b7ba197/"
                    style={{ color: "black" }}
                  >
                    <div className="Home__SocialIcons">
                      <LinkedInIcon />
                    </div>
                  </a>
                </div>
              </div>
            </Grid>
          </Grid>
          <p className="Home__CopyrightText">
            Copyright © 2020 Magomed Khamidov. All rights reserved.
          </p>
        </Container>
      </footer>
    </div>
  );
}

export default Home;
