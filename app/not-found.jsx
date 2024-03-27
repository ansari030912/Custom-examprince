"use client";
import { Container } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    const redirectHome = setTimeout(() => {
      router.replace("/");
    }, 0); // Redirect immediately

    return () => clearTimeout(redirectHome);
  }, []); // Run only once on component mount

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
      }}
    >
      <h2>404 | Page Not Found</h2>
    </Container>
  );
}
