import Head from "next/head";
import dynamic from "next/dynamic";
import { Header } from "./header";
const Footer = dynamic(() => import("./footer"), { ssr: false });

export const Wrapper = (props: { children: React.ReactNode }) => {
  return (
    <main className="h-full w-screen dark:bg-darkMode-background bg-lightMode-background mx-auto max-w-screen-lg px-6">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <title>100 Projects</title>
        <meta name="title" content="100 Projects for developers to do" />
        <meta
          name="description"
          content="A library of projects for developers if they're stuck on what to do next. 100 Projects will give you inspiration of what project to do next to upskill yourself"
        />
        <meta
          name="keywords"
          content="software, web design, websites, javascript, java"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="charlie@talesoft.digital" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#141a46" />
        <meta name="msapplication-TileColor" content="#141A46" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <section className="dark:bg-darkMode-background bg-lightMode-background">
        <Header />
        <main>{props.children}</main>
        <Footer />
      </section>
    </main>
  );
};
