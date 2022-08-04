type ProjectHero = {
  title: string
  tags: string[]
  description: string
  expertise: string
}

export const ProjectPageHero = (props: ProjectHero) => {
  const { title, tags, description, expertise } = props
  return (
    <section>
      <section className="bg-slate-100 rounded-xl p-8 md:p-0">
        <section className="flex justify-between">
          <h1 className="">{title}</h1>
          <h5>{tags}</h5>
        </section>
        <p>{description}</p>
        <p>{expertise}</p>
      </section>
      <hr style={{ borderBottom: `1.5px solid white` }} />
    </section>
  )
}
