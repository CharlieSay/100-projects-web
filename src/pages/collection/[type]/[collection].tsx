import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import {
  CollectionSlug,
  getSlugsByFacets,
  ProjectSlug,
  SearchType,
} from "../../../api/get-posts";
import { CollectionGroup } from "../../../components/collection-group";

type TemporaryConversion = {
  type: string;
  collection: string;
};

type CollectionGroupProps = {
  collectedSlugData: CollectionSlug[];
  noResults: boolean;
  query: string;
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      // SSR these paths as theyre most common.
      { params: { type: "type", collection: "frontend" } },
      { params: { type: "type", collection: "data" } },
      { params: { type: "type", collection: "backend" } },
      { params: { type: "type", collection: "ai" } },
      { params: { type: "type", collection: "fullstack" } },
      { params: { type: "expertise", collection: "easy" } },
      { params: { type: "expertise", collection: "intermediate" } },
      { params: { type: "expertise", collection: "advanced" } },
      { params: { type: "tag", collection: "java" } },
      { params: { type: "tag", collection: "javascript" } },
      { params: { type: "tag", collection: "typescript" } },
      { params: { type: "tag", collection: "python" } },
    ],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  const convertedParams = params as TemporaryConversion;
  const collection = convertedParams.collection;
  const slugs: ProjectSlug[] = getSlugsByFacets(
    { key: convertedParams.type as SearchType, value: collection },
    999 // TO-DO - Actually do this
  );

  return {
    props: {
      collectedSlugData: [
        {
          title: collection,
          slugs: slugs,
        },
      ],
      noResults: slugs.length === 0,
      query: collection,
    },
  };
};

const CollectionsBySearch = (props: CollectionGroupProps) => {
  const { query, noResults } = props;

  if (noResults) {
    return (
      <section className="my-6 w-full bg-white dark:bg-darkMode-backgroundAlt rounded-lg p-4">
        <h1 className="text-inherit dark:text-darkMode-text text-lightMode-ctaText font-bold text-2xl">
          There seems to be no projects matching
        </h1>
        <h3 className="text-inherit dark:text-darkMode-text text-lightMode-ctaText text-lg">
          {query}
        </h3>
        <h3 className="text-inherit dark:text-darkMode-text text-lightMode-ctaText text-lg">
          You should help us make a project for this? Raise a PR over at{" "}
          <Link
            className="font-bold text-lightMode-text dark:text-darkMode-text hover:cursor-pointer dark:hover:text-darkMode-highlight hover:text-lightMode-highlight"
            href={"https://github.com/CharlieSay/100-projects-content"}
          >
            100 Projects Content Repo
          </Link>
        </h3>
      </section>
    );
  }

  const { collectedSlugData } = props;

  return (
    <>
      {collectedSlugData && (
        <CollectionGroup collectedSlugData={collectedSlugData} />
      )}
    </>
  );
};

export default CollectionsBySearch;
