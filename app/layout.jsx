import { Inter } from "next/font/google";
import { AuthGuard } from "./auth/AuthGuard";
import SearchBar from "./components/Search/SearchBar";
import { Footer } from "./components/footer";
import "./globals.css";
import { Navbar } from "./navbar";
const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body className={inter.className}>
          <Navbar />
          <SearchBar />
          <main>
            <AuthGuard>{children}</AuthGuard>
          </main>
          <Footer />
        </body>
      </html>
    </>
  );
}
