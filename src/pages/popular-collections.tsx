import type { GetStaticProps, NextPage } from "next";
import { CollectionSlug, getAllCollectionSlugs } from "../api/get-posts";
import { CollectionGroup } from "../components/collection-group";

export interface CollectionProps {
  collectedSlugData?: CollectionSlug[];
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      collectedSlugData: getAllCollectionSlugs(),
    },
  };
};

const PopularCollections: NextPage = (props: CollectionProps) => {
  const { collectedSlugData } = props;
  return (
    <div>
      <CollectionGroup collectedSlugData={collectedSlugData} />
    </div>
  );
};

export default PopularCollections;
