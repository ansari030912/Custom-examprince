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
            <SignInForm />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export default loginAuth(SignInPage);
