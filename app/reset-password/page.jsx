/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import loginAuth from "../auth/LoginAuth";
import ResetPasswordForm from "../components/Form/ResetPasswordForm";

function ResetPassword() {
  return (
    <>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item xs={12}></Grid>
          <Grid item xs={12} md={12}>
            <ResetPasswordForm />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
export default loginAuth(ResetPassword);
