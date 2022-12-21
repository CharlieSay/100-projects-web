import Link from "next/link";

export type HeroCollectionType = {
  title: string;
  collections: CollectionCard[];
};

export type CollectionCard = {
  title: string;
  desc: string;
  url: string;
};

export const CollectionHeroGroup = (props: {
  heroCollectionGroup: HeroCollectionType;
}) => {
  const { heroCollectionGroup } = props;

  return (
    <section className="my-6 w-full bg-secondary-background p-4">
      <section key={heroCollectionGroup.title}>
        <h2 className="text-primary-ctaText text-2xl font-bold">
          {heroCollectionGroup.title}.
        </h2>
        <ul className="grid">
          {heroCollectionGroup.collections.map((collection) => (
            <Link key={collection.title} href={collection.url}>
              <li className="hover:cursor-pointer">
                <h3 className="font-semibold text-xl text-primary-text hover:text-primary-highlight">
                  {collection.title}
                </h3>
                <p className="text-primary-text text-base">{collection.desc}</p>
              </li>
            </Link>
          ))}
        </ul>
      </section>
    </section>
  );
};
