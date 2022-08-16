import capitalize from 'capitalize'

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
        <p className="text-primary-text font-bold text-sm">
          {capitalize(expertise)}
        </p>
        <p className="text-primary-text font-bold text-sm">{tags}</p>
      </section>
      <section className="bg-secondary-background rounded-xl p-8 md:p-0 flex justify-between ">
        <section className="p-4">
          <section className="truncate">
            <h1 className="text-secondary-text">{title}</h1>
            <p className="text-secondary-text truncate">{description}</p>
          </section>
        </section>
      </section>
    </section>
  )
}
