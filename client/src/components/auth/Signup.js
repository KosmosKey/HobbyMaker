import React, { useState } from "react";
import Header from "../../Logo/header-bg.png";
import WhiteBlue from "../../Logo/Logo-with-white-text.png";
import "./Signup.scss";
import {
  Container,
  Grid,
  TextField,
  FormControl,
  Button,
} from "@material-ui/core";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100%",
        marginTop: "75px",
      }}
    >
      <Grid container justify="center" alignItems="center">
        <Grid container lg={12} spacing={0} className="Signup__">
          <Grid
            container
            item
            lg={6}
            justify="center"
            alignItems="center"
          >
            <img
              src={WhiteBlue}
              className="Signup__ImageLogoWhite"
              alt="white_logo"
            />

            <div className="Signup__TextDiv">
              <div className="Signup__Container">
                <div className="Signup__BlueBackground"></div>
              </div>
            </div>
            <div className="Signup__InfoText">
              <h1>LET'S GET STARTED</h1>
              <p>Make a user and jump straight to hobbymaker!</p>
            </div>
          </Grid>
          <Grid item lg={6}>
            <h1>Sign up</h1>
            <form>
              <FormControl className="Signup__Form">
                <p style={{ textAlign: "left", marginBottom: "px" }}>
                  Email Address
                </p>
                <TextField
                  id="outlined-basic"
                  type="email"
                  variant="outlined"
                  className="Login__Variant"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <p
                  style={{
                    textAlign: "left",
                    marginTop: "15px",
                    marginBottom: "5px",
                  }}
                >
                  Password
                </p>
                <TextField
                  id="outlined-basic"
                  placeholder="Enter Your Password"
                  variant="outlined"
                  type="password"
                  className="Login__Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <Button color="primary" type="submit" variant="contained">
                  Login
                </Button>
              </FormControl>
            </form>
          </Grid>
        </Grid>
      </Grid>
      <img src={Header} className="Home__ImageWave" alt="" />
    </Container>
  );
};

export default Signup;
