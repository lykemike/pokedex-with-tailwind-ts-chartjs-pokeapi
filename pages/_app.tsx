import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navigationbar from "../components/Navigationbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Navigationbar>
      <Component {...pageProps} />
    </Navigationbar>
  );
}

export default MyApp;
