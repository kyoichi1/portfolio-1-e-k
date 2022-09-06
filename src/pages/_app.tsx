import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Footer } from "src/component/Footer";
import { Header } from "src/component/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer copyright="© ️2022 Shimabu IT University" />
    </>
  );
}

export default MyApp;
