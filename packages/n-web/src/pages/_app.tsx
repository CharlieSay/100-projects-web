import { Sora } from "next/font/google";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { Wrapper } from "../components/layout/wrapper";
import { Analytics } from "@vercel/analytics/react";
import "../styles/globals.css";

const sora = Sora({ subsets: ["latin"] });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={sora.className}>
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1777996650638313"
        crossOrigin="anonymous"
      />
      <ThemeProvider enableSystem={true} attribute="class">
        <div className="antialiased transition-colors duration-1000 min-h-screen dark:bg-darkMode-background bg-lightMode-background">
          <Wrapper>
            <Component {...pageProps} />
          </Wrapper>
        </div>
      </ThemeProvider>
      <Analytics />
    </main>
  );
}

export default MyApp;
