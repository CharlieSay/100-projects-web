import capitalize from 'capitalize'
import Link from 'next/link'
import { CollectionSlug, ProjectSlug } from '../api/get-posts'
import { CollectionProps } from '../pages/collections'

export const Collection = (props: CollectionProps) => {
  return (
    <>
      <ul>
        {props.collectedSlugData &&
          props.collectedSlugData.map((slug: CollectionSlug) => (
            <li key={slug.title} className="mb-4">
              <h1 className="text-primary-ctaText text-4xl mb-4">
                {capitalize(slug.title)}
              </h1>
              <ul className="flex flex-col gap-4 md:grid md:grid-rows-2 md:grid-cols-3 md:grid-flow-col md:gap-2">
                {slug.slugs.map((subSlug) => (
                  <Link
                    href={`projects/[collection]/[projectSlug]`}
                    as={`/projects/${subSlug.location.collection}/${subSlug.location.projectLocation}`}
                    key={subSlug.title}
                    className="flex"
                  >
                    <div className="row-span-2 cursor-pointer bg-secondary-background rounded shadow-md md:flex-row md:max-w-md max-h-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                      <div className="flex flex-col justify-between h-full px-4 py-2 leading-normal w-full">
                        <section className="flex justify-between">
                          <h5 className="mb-2 text-2xl font-bold tracking-tight text-primary-text dark:text-white">
                            {subSlug.title}
                          </h5>
                        </section>
                        {subSlug.description && (
                          <p className="font-normal text-xs text-primary-text mb-4 mt-2">
                            {subSlug.description}
                          </p>
                        )}
                        <section className="flex justify-between w-full">
                          <section className="flex justify-center items-center">
                            {subSlug.tags.map((tag) => (
                              <div
                                key={tag}
                                className="text-center font-light text-primary-text text-[9px] p-1"
                              >
                                {tag}
                              </div>
                            ))}
                          </section>
                          <p className="text-xs font-normal text-primary-text text-end">
                            {capitalize(subSlug.expertise)}
                          </p>
                        </section>
                      </div>
                    </div>
                  </Link>
                ))}
              </ul>
            </li>
          ))}
      </ul>
    </>
  )
}
