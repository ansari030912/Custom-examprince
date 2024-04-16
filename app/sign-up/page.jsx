"use client";
/* eslint-disable @next/next/no-img-element */
// pages/SignIn.js
import { Container, Grid } from "@mui/material";
import loginAuth from "../auth/LoginAuth";
import SignUpForm from "../components/Form/SignUpForm";

function SignUpPage() {
  return (
    <>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item lg={7}>
            <div className="mx-auto max-w-8xl flex justify-center">
              <div className="md:mx-150px lg:mt-2 rounded-2">
                <img
                  src="/examprince-discount-banner.png"
                  alt="banner"
                  loading="lazy"
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
          </Grid>
          <Grid item lg={5}>
            <SignUpForm />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
export default loginAuth(SignUpPage);
