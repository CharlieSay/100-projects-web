import type { NextPage } from "next";
import Head from "next/head";
import { getPostSlugs } from "../lib/api";

const Home: NextPage = () => {
  console.log(getPostSlugs());
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
};

export default Home;
