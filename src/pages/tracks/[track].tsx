import { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import { getPostBySlug, PostMatter } from "../../api/get-posts";

import hljs from "highlight.js";
import "highlight.js/styles/vs2015.css";
import { useEffect } from "react";
import { ProjectPageHero } from "../../components/molecule/project-page-header";
import { SimilarProjects } from "../../components/molecule/similar-projects";
import Head from "next/head";

const components = {};

interface IParams extends ParsedUrlQuery {
  track: string[];
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { track } = params as IParams;

  if (track === undefined) return { props: {} };

  const grayMatter = getPostBySlug(track);
  const sourceContent = await serialize(grayMatter.content);

  return {
    props: {
      content: grayMatter.content,
      data: grayMatter.data,
      matter: grayMatter.matter || "",
      language: grayMatter.language || "",
      source: sourceContent,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export default function GetStaticPathsIndex(props: PostMatter) {
  useEffect(() => {
    hljs.highlightAll();
  }, []);
  let similarProjects = [];

  const router = useRouter();
  function backToHome() {
    router.push("/");
  }

  // fallback: true, you can use:
  if (router.isFallback) {
    backToHome();
  }

  if (!props.data || !props.content) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  const tagsSplit = props.data.tags.split(",");

  return (
    <>
      <Head>
        <title>{props.data.title} | 100 Projects</title>
      </Head>
      <ProjectPageHero
        title={props.data.title}
        tags={tagsSplit}
        expertise={props.data.expertise}
        description={props.data.description}
      />
      <MDXRemote {...props.source} components={components} />
      {similarProjects.length > 0 && <SimilarProjects collectedSlugData={[]} />}
    </>
  );
}
