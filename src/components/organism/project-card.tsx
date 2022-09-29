import capitalize from 'capitalize'
import Link from 'next/link'
import { ProjectSlug } from '../../api/get-posts'

export const ProjectCard = (props: ProjectSlug) => {
  const {
    title,
    tags,
    expertise,
    description,
    location: { collection, projectLocation },
  } = props
  return (
    <Link
      href={`/projects/[collection]/[projectSlug]`}
      as={`/projects/${collection}/${projectLocation}`}
      key={title}
      className="flex"
    >
      <div className="min-h-[150px] cursor-pointer bg-secondary-background rounded shadow-md max-h-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <div className="flex flex-col justify-between h-[150px] px-4 py-2 leading-normal w-full">
          <section className="flex justify-between">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-primary-text dark:text-white">
              {title}
            </h5>
          </section>
          {description && (
            <p className="font-normal text-xs text-primary-text mb-4 mt-2">
              {description}
            </p>
          )}
          <section className="flex justify-between w-full">
            <section className="flex justify-center items-center">
              {tags.map((tag) => (
                <div
                  key={tag}
                  className="text-center font-light text-primary-text text-[9px] p-1"
                >
                  {tag}
                </div>
              ))}
            </section>
            <p className="text-xs font-normal text-primary-text text-end">
              {capitalize(expertise)}
            </p>
          </section>
        </div>
      </div>
    </Link>
  )
}
