import type { AppProps } from "next/app";
import { Wrapper } from "../components/layout/wrapper";
import "../styles/globals.css";
import { Sora } from "@next/font/google";

const sora = Sora({ subsets: ["latin"] });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={sora.className}>
      <div className="min-h-screen bg-primary-background">
        <Wrapper>
          <Component {...pageProps} />
        </Wrapper>
      </div>
    </main>
  );
}

export default MyApp;
