import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./navbar";
import { Footer } from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dumps Boss",
  description: "A world of css",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
