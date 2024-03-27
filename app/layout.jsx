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
        {/* <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "Recipe",
              name: "Hello Friends How are you",
              author: {
                "@type": "Person",
                name: "Mary Stone",
              },
              datePublished: "2018-03-10",
              description:
                "This coffee cake is awesome and perfect for parties.",
              prepTime: "PT20M",
            }),
          }}
        /> */}
        <body className={inter.className}>
          <Navbar />
          <SearchBar />
          <main style={{ marginTop: "6px" }}>
            <AuthGuard>{children}</AuthGuard>
          </main>
          <Footer />
        </body>
      </html>
    </>
  );
}
