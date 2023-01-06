import { CollectionProps } from "../../pages/all-projects";
import { CollectionGroup } from "../collection-group";

export const SimilarProjects = (props: CollectionProps) => {
  return (
    <section className="py-4">
      <h1 className="text-primary-black">Similar Projects</h1>
      <CollectionGroup collectedSlugData={props.collectedSlugData} />
    </section>
  );
};
