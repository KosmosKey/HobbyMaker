import React, { useState } from "react";
import "./Login.scss";
import Header from "../../Logo/header-bg.png";
import LogoBlue from "../../Logo/Blue.png";
import WhiteBlue from "../../Logo/Logo-with-white-text.png";
import {
  Container,
  Grid,
  FormControl,
  Button,
  TextField,
} from "@material-ui/core";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitForm = (e) => {
    e.preventDefault();
    console.log("Submitted");
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
      className="Logo__Container"
    >
      <img src={Header} className="Home__ImageWave" alt="wave" />
      <Grid
        container
        justify="center"
        alignItems="center"
        spacing={0}
        className="Login__"
      >
        <Grid container>
          <Grid
            item
            lg={6}
            className="Login__FirstGrid"
            style={{
              overflow: "hidden",
              display: "flex",
            }}
          >
            <div className="Login_form">
              <img src={WhiteBlue} className="Login__WhiteLogo" alt="" />
              <div className="Background"></div>
              <div className="Login_formText">
                <h1>Welcome back!</h1>
                <div className="Login__FormParagraph">
                  <p>We are glad to see you again!</p>
                </div>
              </div>
            </div>
          </Grid>

          <Grid
            item
            lg={6}
            md={12}
            sm={12}
            xs={12}
            style={{ background: "red", overflow: "hidden" }}
          >
            <div className="Login_Welcome">
              <img src={LogoBlue} className="Login__BlueLogo" alt="" />

              <h1>Log In</h1>
              <form onSubmit={onSubmitForm}>
                <FormControl className="Form">
                  <p style={{ textAlign: "left", marginBottom: "px" }}>
                    Email Address
                  </p>
                  <TextField
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
              <p className="Login__DontAccount" style={{ marginTop: "40px" }}>
                Don't have and account? <span>Sign up</span>
              </p>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
