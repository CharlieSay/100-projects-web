import type { GetStaticProps, NextPage } from "next";
import { CollectionSlug, getAllProjectSlugs } from "../api/get-posts";
import { CollectionGroup } from "../components/collection-group";

export interface CollectionProps {
  collectedSlugData?: CollectionSlug[];
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      collectedSlugData: [
        {
          title: "All Projects",
          slugs: getAllProjectSlugs(),
        },
      ],
    },
  };
};

const AllProjects: NextPage = (props: CollectionProps) => {
  const { collectedSlugData } = props;
  return (
    <div>
      <CollectionGroup collectedSlugData={collectedSlugData} />
    </div>
  );
};

export default AllProjects;
