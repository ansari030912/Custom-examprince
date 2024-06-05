"use client";
/* eslint-disable @next/next/no-img-element */
// pages/SignIn.js
import { Container, Grid } from "@mui/material";
import loginAuth from "../auth/LoginAuth";
import SignUpForm from "../components/Form/SignUpForm";

function SignUpPage() {
  return (
    <>
      <Container maxWidth="lg" style={{ marginTop: "20px" }}>
        <Grid container spacing={2}>
          <Grid item lg={12}>
            <SignUpForm />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
export default loginAuth(SignUpPage);
