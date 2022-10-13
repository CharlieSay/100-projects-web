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
      className="flex"
    >
      <div className="max-h-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 min-h-[150px] cursor-pointer rounded bg-secondary-background shadow-md">
        <div className="flex h-[150px] w-full flex-col justify-between px-4 py-2 leading-normal">
          <section className="flex justify-between">
            <h5 className="dark:text-white mb-2 text-2xl font-bold tracking-tight text-primary-text">
              {title}
            </h5>
          </section>
          {description && (
            <p className="mb-4 mt-2 text-xs font-normal text-primary-text">
              {description}
            </p>
          )}
          <section className="flex w-full justify-between">
            <section className="flex items-center justify-center">
              {tags.map((tag) => (
                <div
                  key={tag}
                  className="pr-1 text-center text-[10px] font-normal text-primary-text"
                >
                  {`${tag}`}
                </div>
              ))}
            </section>
            <p className="text-end text-xs font-normal text-primary-text">
              {capitalize(expertise)}
            </p>
          </section>
        </div>
      </div>
    </Link>
  );
};
