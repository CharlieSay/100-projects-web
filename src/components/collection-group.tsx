import capitalize from "capitalize";
import { CollectionSlug } from "../api/get-posts";
import { CollectionProps } from "../pages/all-projects";
import { getSynonym } from "../util/string-manipulation";
import { ProjectCard } from "./organism/project-card";

export const CollectionGroup = (props: CollectionProps) => {
  const { collectedSlugData } = props;
  return (
    <ul>
      {collectedSlugData &&
        collectedSlugData.map((slug: CollectionSlug) => (
          <li key={slug.title} className="mt-4">
            {slug.title && (
              <h1 className="mb-8 text-4xl text-primary-ctaText">
                {capitalize(getSynonym(slug.title))}
              </h1>
            )}
            <ul className="grid auto-rows-max grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
              {slug.slugs.map((subSlug) => (
                <ProjectCard
                  title={subSlug.title}
                  tags={subSlug.tags}
                  expertise={subSlug.expertise}
                  description={subSlug.description}
                  location={subSlug.location}
                  key={subSlug.title}
                />
              ))}
            </ul>
          </li>
        ))}
    </ul>
  );
};
