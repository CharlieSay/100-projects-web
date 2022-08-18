import Link from 'next/link'
import { ProjectCard } from './project-card'

export type PopularCollection = {
  title: string
  projects: ProjectCard[]
}

export type ProjectCard = {
  title: string
  desc: string
  url: string
}

export const CollectionHeroGroup = (props: {
  collection: PopularCollection
}) => {
  const { collection } = props

  return (
    <section className="bg-secondary-background w-full p-4 my-6">
      <section key={collection.title}>
        <h2 className="text-primary-ctaText">{collection.title}.</h2>
        <ul className="grid">
          {collection.projects.map((project) => (
            <Link key={project.title} href={project.url}>
              <li className="hover:cursor-pointer">
                <h3 className="font-bold text-primary-text hover:text-primary-highlight">
                  {project.title}
                </h3>
                <p className="text-primary-text">{project.desc}</p>
              </li>
            </Link>
          ))}
        </ul>
      </section>
    </section>
  )
}
