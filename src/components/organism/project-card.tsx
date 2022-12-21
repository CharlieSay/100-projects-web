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
    >
      <div className="bg-white border-solid border-primary-ctaBackground border-[1px] p-6 rounded-lg shadow-lg hover:shadow-lg hover:cursor-pointer flex flex-col basis-auto">
        <span className="text-sm text-primary-ctaBackground font-semibold">
          {capitalize(expertise)}
        </span>
        <h4 className="mt-1 text-xl font-semibold uppercase leading-tight">
          {title}
        </h4>
        <div className="mt-1 text-sm">{description}</div>
        <div className="mt-4 grow flex flex-col-reverse">
          <div className="flex items-baseline truncate">
            {tags.map((tag) => (
              <span
                key={tag}
                className="bg-primary-ctaBackground text-primary-ctaText text-[10px] mx-0.5 px-1.5 inline-block rounded-full uppercase font-semibold tracking-wide"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};
