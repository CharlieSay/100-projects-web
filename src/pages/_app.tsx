import type { AppProps } from "next/app";
import { Wrapper } from "../components/layout/wrapper";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="h-full bg-primary-background">
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
    </div>
  );
}

export default MyApp;
