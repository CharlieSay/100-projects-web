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
    <section className="my-6 w-full dark:bg-darkMode-backgroundAlt bg-lightMode-white rounded-lg">
      <section key={heroCollectionGroup.title}>
        <h2 className="text-lightMode-ctaTex dark:text-darkMode-ctaTexta swvebhj54r text-2xl font-bold mb-2 p-4">
          {heroCollectionGroup.title}
        </h2>
        <ul className="grid grid-cols-1 gap-1">
          {heroCollectionGroup.collections.map((collection) => (
            <Link key={collection.title} href={collection.url}>
              <li className="hover:cursor-pointer px-4 pb-4">
                <h3 className="font-semibold text-xl text-lightMode-text dark:text-darkMode-ctaText dark:hover:text-darkMode-highlight hover:text-lightMode-highlight">
                  {collection.title}
                </h3>
                <p className="text-lightMode-text dark:text-darkMode-ctaText text-base">
                  {collection.desc}
                </p>
              </li>
            </Link>
          ))}
        </ul>
      </section>
    </section>
  );
};
