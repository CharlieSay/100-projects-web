import capitalize from "capitalize";
import Link from "next/link";
import { ProjectSlug } from "../../api/get-posts";

export const ProjectCard = (props: ProjectSlug) => {
  const {
    title,
    tags,
    expertise,
    description,
    location: { collection, projectLocation },
  } = props;
  return (
    <Link
      href={`/projects/[collection]/[projectSlug]`}
      as={`/projects/${collection}/${projectLocation}`}
      key={title}
      className="bg-white dark:bg-darkMode-background border-solid border-lightMode-highlight dark:border-darkMode-highlight border-[1px] p-6 rounded-lg shadow-xs transition-all hover:bg-lightMode-background hover:shadow-lg hover:cursor-pointer flex flex-col basis-auto"
    >
      <span className="text-sm dark:text-darkMode-highlight text-lightMode-highlight font-semibold">
        {capitalize(expertise)}
      </span>
      <h4 className="mt-1 text-xl font-semibold leading-tight">{title}</h4>
      <div className="mt-1 text-sm">{description}</div>
      <div className="mt-4 grow flex flex-col-reverse">
        <div className="flex items-baseline truncate">
          {tags.map((tag) => (
            <span
              key={tag}
              className="dark:bg-darkMode-highlight bg-lightMode-highlight dark:text-darkMode-text dark:font-semibold text-lightMode-ctaText text-[10px] mx-0.5 px-1.5 inline-block rounded-full font-semi tracking-wide"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};
