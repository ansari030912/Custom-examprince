import { Inter } from "next/font/google";
import "./globals.css";
import { AuthGuard } from "./auth/AuthGuard";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Exam Prince",
  description: "A world of css",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body className={inter.className}>
          <AuthGuard>{children}</AuthGuard>
        </body>
      </html>
    </>
  );
}
