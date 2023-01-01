import type { GetStaticProps, NextPage } from "next";
import { CollectionSlug, getPostSlugs } from "../api/get-posts";
import { CollectionGroup } from "../components/collection-group";

export interface CollectionProps {
  collectedSlugData?: CollectionSlug[];
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      collectedSlugData: [],
    },
  };
};

const PopularCollections: NextPage = (props: CollectionProps) => {
  const { collectedSlugData } = props;
  return (
    <div>
      {collectedSlugData && (
        <CollectionGroup collectedSlugData={collectedSlugData} />
      )}
    </div>
  );
};

export default PopularCollections;
