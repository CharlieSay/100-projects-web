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
      <div className="bg-primary-white border-solid border-primary-highlight border-[1px] p-6 rounded-lg shadow-xs transition-all hover:bg-primary-background  hover:shadow-lg hover:cursor-pointer flex flex-col basis-auto">
        <span className="text-sm text-primary-highlight font-semibold">
          {capitalize(expertise)}
        </span>
        <h4 className="mt-1 text-xl font-semibold leading-tight">{title}</h4>
        <div className="mt-1 text-sm">{description}</div>
        <div className="mt-4 grow flex flex-col-reverse">
          <div className="flex items-baseline truncate">
            {tags.map((tag) => (
              <span
                key={tag}
                className="bg-primary-highlight text-primary-ctaText text-[10px] mx-0.5 px-1.5 inline-block rounded-full font-semi tracking-wide"
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
