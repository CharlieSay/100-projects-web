import { GetStaticPaths, GetStaticProps } from "next";
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
      // generate these paths as theyre most common.
      // { params: { type: "type", collection: "data" } },
    ],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  const convertedParams = params as TemporaryConversion;
  const collection = convertedParams.collection;
  const slugs: ProjectSlug[] = getSlugsByFacets(
    { key: "type", value: collection },
    0
  );

  // getSlugsByFacets([
  //   {
  //     key: convertedParams.type as SearchType,
  //     value: collection,
  //   },
  // ]);

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
      <section className="my-6 w-full bg-secondary-background p-4">
        <h1 className="text-primary-ctaText font-bold text-2xl">
          There seems to be no projects matching
        </h1>
        <h3 className="text-primary-ctaText text-lg">{query}</h3>
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
