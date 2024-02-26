/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import SignInForm from "../components/Form/SignInForm";
import { Footer } from "../components/footer";
import { Navbar } from "../navbar";

export default function SignIn() {
  return (
    <>
      <Navbar />
      <Container maxWidth="lg">
        <Grid container spacing={2}>
        <Grid item xs={12}>
            <div class="mx-auto max-w-8xl flex justify-center">
              <div class="md:mx-150px lg:mt-2 rounded-2">
                <img
                  src="/banner.gif"
                  alt="SASSA_Status_Check"
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
      <Footer />
    </>
  );
}
