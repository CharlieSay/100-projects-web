export type PopularCollection = {
  title: string
  projects: { title: string; desc: string; url: string }[]
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
            <li key={project.title}>
              <h3 className="font-bold text-primary-text">{project.title}</h3>
              <p className="text-primary-text">{project.desc}</p>
            </li>
          ))}
        </ul>
      </section>
    </section>
  )
}
