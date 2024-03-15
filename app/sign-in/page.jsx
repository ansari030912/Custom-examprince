"use client";
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import loginAuth from "../auth/LoginAuth";
import SignInForm from "../components/Form/SignInForm";


export const metadata = {
  title: "Sign in",
  description: "A world of css",
  keywords: "A world of css",
  robots: "noIndex",
};
const SignInPage = () => {
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
            <SignInForm />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export default loginAuth(SignInPage);
