type CollectionHeroGroupProps = {
  heroHeader: string
  primary?: boolean
  collectionList?: PopularCollection[]
}

type PopularCollection = {
  collection: { title: string; desc: string; url: string; img: string }[]
}

export const CollectionHeroGroup = (props: CollectionHeroGroupProps) => {
  return (
    <section className="bg-secondary-background w-full p-4 my-6">
      {props.collectionList &&
        props.collectionList.map((popularCollection) => (
          <>
            <h2 className="text-primary-ctaText">{props.heroHeader}.</h2>
            <ul className="grid">
              {popularCollection.collection.map((collection) => (
                <section key={collection.title}>
                  <h3 className="font-bold text-primary-text">
                    {collection.title}
                  </h3>
                  <p className="text-primary-text">{collection.desc}</p>
                </section>
              ))}
            </ul>
          </>
        ))}
    </section>
  )
}
