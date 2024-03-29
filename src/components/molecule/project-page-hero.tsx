import capitalize from "capitalize";
import Image from "next/image";
import Link from "next/link";

type ProjectHero = {
  title: string;
  tags: string[];
  description: string;
  expertise: string;
  imgData: {
    url: string;
    description: string;
    author: string;
    username: string;
    downloadLocation: string;
  };
};

const unsplash_UTM = "?utm_source=100 Projects&utm_medium=referral";

export const ProjectPageHero = (props: ProjectHero) => {
  const { title, tags, description, expertise, imgData } = props;
  return (
    <section className="mb-4">
      <section className="flex flex-col flex-wrap lg:justify-between lg:flex-row pb-4">
        <Link passHref href={`/collection/expertise/${expertise}`}>
          <p className="text-sm font-bold text-lightMode-text dark:text-darkMode-text hover:cursor-pointer dark:hover:text-darkMode-highlight hover:text-lightMode-highlight">
            {capitalize(expertise.trim())}
          </p>
        </Link>
        <section className="flex">
          {tags &&
            tags.map((tag) => (
              <Link key={tag} href={`/collection/tag/${tag.trim()}`}>
                <p className="text-xs pr-2 lg:pl-2 lg:text-sm font-bold dark:text-darkMode-text text-lightMode-text hover:cursor-pointer dark:hover:text-darkMode-highlight hover:text-lightMode-highlight">
                  {capitalize(tag.trim())}
                </p>
              </Link>
            ))}
        </section>
      </section>
      <section className="flex flex-col md:flex-row rounded-xl dark:bg-darkMode-backgroundAlt bg-white">
        <section className="object-cover w-max lg:block md:w-[200px] md:h-[200px] relative">
          {imgData && (
            <Image
              className="object-cover"
              fill={true}
              src={imgData.url}
              alt={imgData.description}
            />
          )}
        </section>
        <section className="py-4 px-4 md:p-6 flex flex-col">
          <section className="grow">
            <h1 className="text-lightMode-ctaText dark:text-darkMode-ctaText font-bold text-2xl">
              {title}
            </h1>
            <h2 className="text-lightMode-ctaText dark:text-darkMode-ctaText text-base">
              {description}
            </h2>
          </section>
          {imgData && (
            <section className="flex flex-col">
              <span className="text-xs text-lightMode-text dark:text-darkMode-text hidden lg:inline">
                Photo by{" "}
                <Link
                  href={`https://unsplash.com/${imgData.username}${unsplash_UTM}`}
                  className="hover:cursor-pointer dark:hover:text-darkMode-highlight hover:text-lightMode-highlight"
                >
                  {imgData.author}
                </Link>{" "}
                on{" "}
                <Link
                  className="hover:cursor-pointer dark:hover:text-darkMode-highlight hover:text-lightMode-highlight"
                  href={`https://unsplash.com/${unsplash_UTM}`}
                >
                  Unsplash
                </Link>
                {" - "}
                <Link
                  href={imgData.downloadLocation}
                  className="hover:cursor-pointer dark:hover:text-darkMode-highlight hover:text-lightMode-highlight"
                >
                  Download image
                </Link>
              </span>
            </section>
          )}
        </section>
      </section>
    </section>
  );
};
