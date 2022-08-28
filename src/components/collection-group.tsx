import capitalize from 'capitalize'
import Link from 'next/link'
import { CollectionSlug } from '../api/get-posts'
import { CollectionProps } from '../pages/popular-collections'
import { ProjectCard } from './organism/project-card'

export const CollectionGroup = (props: CollectionProps) => {
  return (
    <ul>
      {props.collectedSlugData &&
        props.collectedSlugData.map((slug: CollectionSlug) => (
          <li key={slug.title} className="mb-4">
            <h1 className="text-primary-ctaText text-4xl mb-4">
              {slug.title && capitalize(slug.title)}
            </h1>
            <ul className="flex flex-col gap-4 md:grid md:grid-rows-2 md:grid-cols-3 md:grid-flow-col md:gap-2">
              {slug.slugs.map((subSlug) => (
                <ProjectCard
                  key={subSlug.title}
                  title={subSlug.title}
                  tags={subSlug.tags}
                  expertise={subSlug.expertise}
                  description={subSlug.description}
                  location={subSlug.location}
                />
              ))}
            </ul>
          </li>
        ))}
    </ul>
  )
}
