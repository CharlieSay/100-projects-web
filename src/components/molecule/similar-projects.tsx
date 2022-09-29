import { CollectionProps } from "../../pages/popular-collections";
import { CollectionGroup } from "../collection-group";

export const SimilarProjects = (props: CollectionProps) => {
  return (
    <section className="py-4">
      <h1 className="text-secondary-text">Similar Projects</h1>
      <CollectionGroup collectedSlugData={props.collectedSlugData} />
    </section>
  );
};
