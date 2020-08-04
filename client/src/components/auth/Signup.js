import React, { useState, useEffect } from "react";
import Header from "../../Logo/header-bg.png";
import WhiteBlue from "../../Logo/Logo-with-white-text.png";
import LogoBlue from "../../Logo/Blue.png";
import { connect } from "react-redux";
import { registerUser } from "../../redux/actions/actions";

import "./Signup.scss";
import {
  Container,
  Grid,
  TextField,
  FormControl,
  Button,
} from "@material-ui/core";

const Signup = ({ registerUser, error }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [errorRegister, setErrorRegister] = useState("");

  useEffect(() => {
    if (error.status === 400) {
      return setErrorRegister(error.message.message);
    } else {
      setErrorRegister("");
    }
  }, [error]);

  const submitFormRegister = (e) => {
    e.preventDefault();

    const userDetail = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password,
    };

    registerUser(userDetail);
  };

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
        <Grid container className="Signup__">
          <Grid item lg={6} md={6} className="Signup__GridFirst">
            <div className="Signup__Container">
              <div className="Signup__BlueBackground"></div>
              <img
                src={WhiteBlue}
                className="Signup__ImageLogoWhite"
                alt="white_logo"
              />
              <div className="Signup__InfoText">
                <h1>Let's get started!</h1>
                <p style={{ marginTop: "5px" }}>
                  Make a user and jump straight to hobbymaker!
                </p>
              </div>
            </div>
          </Grid>
          <Grid
            item
            lg={6}
            md={6}
            sm={12}
            xs={12}
            className="Signup__GridSecond"
          >
            <img
              src={LogoBlue}
              className="Signup__BlueLogo"
              alt="Signup__BlueLogo"
            />
            <h1>Sign up</h1>
            <form onSubmit={submitFormRegister} className="Signup__Form">
              {errorRegister}
              <FormControl className="Signup__Form">
                <p
                  style={{
                    textAlign: "left",
                    marginTop: "25px",
                    marginBottom: "15px",
                  }}
                >
                  First Name
                </p>
                <TextField
                  id="outlined-basic"
                  placeholder="Enter Your First Name"
                  variant="outlined"
                  type="name"
                  className="Signup__Variant"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <p
                  style={{
                    textAlign: "left",
                    marginTop: "25px",
                    marginBottom: "15px",
                  }}
                >
                  Last Name
                </p>
                <TextField
                  id="outlined-basic"
                  placeholder="Enter Your Last Name"
                  variant="outlined"
                  type="name"
                  className="Signup__Variant"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />

                <p
                  style={{
                    textAlign: "left",
                    marginTop: "25px",
                  }}
                >
                  Email Address
                </p>
                <TextField
                  id="outlined-basic"
                  type="email"
                  variant="outlined"
                  className="Signup__Variant"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <p
                  style={{
                    textAlign: "left",
                    marginTop: "25px",
                    marginBottom: "10px",
                  }}
                >
                  Password
                </p>
                <TextField
                  id="outlined-basic"
                  placeholder="Enter Your Password"
                  variant="outlined"
                  type="password"
                  className="Signup__Variant"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <Button color="primary" type="submit" variant="contained">
                  Sign up
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

const mapStateToProps = (state) => {
  return {
    error: state.error,
  };
};

export default connect(mapStateToProps, { registerUser })(Signup);
