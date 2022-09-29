import capitalize from 'capitalize'
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
            <ul className="grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2">
              {slug.slugs.map((subSlug) => (
                <li key={subSlug.title}>
                  <ProjectCard
                    title={subSlug.title}
                    tags={subSlug.tags}
                    expertise={subSlug.expertise}
                    description={subSlug.description}
                    location={subSlug.location}
                  />
                </li>
              ))}
            </ul>
          </li>
        ))}
    </ul>
  )
}
