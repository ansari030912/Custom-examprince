"use client";
/* eslint-disable @next/next/no-img-element */
// pages/SignIn.js

import { Container, Grid } from "@mui/material";
import loginAuth from "../auth/LoginAuth";
import SignUpForm from "../components/Form/SignUpForm";

export const metadata = {
  title: "Sign up",
  description: "A world of css",
  keywords: "A world of css",
  robots: "noIndex",
};
function SignUpPage() {
  return (
    <>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <div className="mx-auto max-w-8xl flex justify-center">
              <div className="md:mx-150px lg:mt-2 rounded-2">
                <img
                  src="/banner.gif"
                  alt="banner"
                  loading="lazy"
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={12}>
            <SignUpForm />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
export default loginAuth(SignUpPage);
