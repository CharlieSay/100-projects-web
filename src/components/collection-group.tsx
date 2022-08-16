import capitalize from 'capitalize'
import Link from 'next/link'
import { CollectionSlug, ProjectSlug } from '../api/get-posts'
import { CollectionProps } from '../pages/popular-collections'
import { ProjectCard } from './organism/project-card'

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
                    <ProjectCard
                      title={subSlug.title}
                      tags={subSlug.tags}
                      expertise={subSlug.expertise}
                      description={subSlug.description}
                      location={subSlug.location}
                    />
                  </Link>
                ))}
              </ul>
            </li>
          ))}
      </ul>
    </>
  )
}
