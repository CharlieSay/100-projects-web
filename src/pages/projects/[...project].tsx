import hljs from "highlight.js";
import "highlight.js/styles/vs2015.css";
import { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Head from "next/head";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import { useEffect } from "react";
import { getImageUrl } from "../../api/get-image";
import { getPostBySlug, PostMatter } from "../../api/get-posts";
import { ProjectPageHero } from "../../components/molecule/project-page-header";

const defaultProjectImageUrl =
  "https://images.unsplash.com/photo-1598791318878-10e76d178023?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNTU1MjB8MHwxfGFsbHx8fHx8fHx8fDE2NzE2NjY3NjM&ixlib=rb-4.0.3&q=80&w=400";
interface IParams extends ParsedUrlQuery {
  project: string[];
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { project } = params as IParams;

  if (project === undefined) return { props: {} };

  const grayMatter = getPostBySlug(project);
  const sourceContent = await serialize(grayMatter.content);
  const unsplashPhotoData = await getImageUrl(grayMatter.data.thumbId);

  return {
    props: {
      content: grayMatter.content,
      data: grayMatter.data,
      matter: grayMatter.matter || "",
      language: grayMatter.language || "",
      source: sourceContent,
      imgData: {
        url: unsplashPhotoData.error
          ? defaultProjectImageUrl
          : unsplashPhotoData.urls.small,
        description: unsplashPhotoData.error
          ? ""
          : unsplashPhotoData.description,
        author: unsplashPhotoData.error ? "" : unsplashPhotoData.user.name,
        username: unsplashPhotoData.error
          ? ""
          : unsplashPhotoData.user.username,
      },
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

  const router = useRouter();
  function backToHome() {
    router.push("/");
  }

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
        <title>{`${props.data.title} | 100 Projects`}</title>
      </Head>
      <ProjectPageHero
        title={props.data.title}
        tags={tagsSplit}
        expertise={props.data.expertise}
        description={props.data.description}
        imgData={props.imgData}
      />
      <section className="markdown-styles">
        <MDXRemote {...props.source} />
      </section>
    </>
  );
}
