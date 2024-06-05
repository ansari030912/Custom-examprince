"use client";
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import loginAuth from "../auth/LoginAuth";
import SignInForm from "../components/Form/SignInForm";

const SignInPage = () => {
  return (
    <>
      <Container maxWidth="lg" style={{ marginTop: "20px" }}>
        <Grid container spacing={2}>
          <Grid item lg={12}>
            <SignInForm />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export default loginAuth(SignInPage);
