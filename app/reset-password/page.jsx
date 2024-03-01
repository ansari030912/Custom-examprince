'use client'
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import ResetPasswordForm from "../components/Form/ResetPasswordForm";
import { Footer } from "../components/footer";
import { Navbar } from "../navbar";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ResetPassword() {
  const router = useRouter();
  useEffect(() => {
    const loginResponse = JSON.parse(localStorage.getItem("loginResponse"));
    if (loginResponse?.is_active) {
      return router.push("/");
    }
  }, [router]);
  return (
    <>
      <Navbar />
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <div className="mx-auto max-w-8xl flex justify-center">
              <div className="md:mx-150px lg:mt-2 rounded-2">
                <img
                  src="/banner.png"
                  alt="Banner"
                  loading="lazy"
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={12}>
            <ResetPasswordForm />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}
