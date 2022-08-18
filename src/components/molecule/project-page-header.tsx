import capitalize from 'capitalize'
import Link from 'next/link'

type ProjectHero = {
  title: string
  tags: string[]
  description: string
  expertise: string
}

export const ProjectPageHero = (props: ProjectHero) => {
  const { title, tags, description, expertise } = props
  return (
    <section className="mb-4">
      <section className="flex justify-between pb-4">
        <Link href={`/collection/expertise/${expertise}`}>
          <a className="text-primary-text font-bold text-sm hover:cursor-pointer hover:text-primary-highlight">
            {capitalize(expertise)}
          </a>
        </Link>
        <section>
          <p className="text-primary-text font-bold text-sm hover:cursor-pointer hover:text-primary-highlight">
            {tags}
          </p>
        </section>
      </section>
      <section className="bg-secondary-background rounded-xl py-4 px-4 md:p-6 flex justify-between ">
        <section className="truncate">
          <h1 className="text-secondary-text">{title}</h1>
          <p className="text-secondary-text whitespace-normal">{description}</p>
        </section>
      </section>
    </section>
  )
}
