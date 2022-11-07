import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { Navbar, Footer } from "../components";
import Script from "next/script";
import "../styles/globals.css";

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider attribute="class">
    <div className="dark:bg-nft-dark bg-white min-h-screen">
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>

    <Script
      src="https://kit.fontawesome.com/a076d05399.js"
      crossOrigin="anonymous"
    />
  </ThemeProvider>
);

export default App;
