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
  };
};

export const ProjectPageHero = (props: ProjectHero) => {
  const { title, tags, description, expertise, imgData } = props;
  return (
    <section className="mb-4">
      <section className="flex flex-col flex-wrap lg:justify-between lg:flex-row pb-4">
        <Link passHref href={`/collection/expertise/${expertise}`}>
          <p className="text-sm font-bold text-primary-text hover:cursor-pointer hover:text-primary-highlight">
            {capitalize(expertise.trim())}
          </p>
        </Link>
        <section className="flex">
          {tags &&
            tags.map((tag) => (
              <Link key={tag} href={`/collection/tag/${tag.trim()}`}>
                <p className="text-xs pr-2 lg:pl-2 lg:text-sm font-bold text-primary-text hover:cursor-pointer hover:text-primary-highlight">
                  {capitalize(tag.trim())}
                </p>
              </Link>
            ))}
        </section>
      </section>
      <section className="flex rounded-xl bg-primary-white">
        <section className="hidden lg:block w-[200px] h-[200px] relative">
          {imgData && (
            <Image fill={true} src={imgData.url} alt={imgData.description} />
          )}
        </section>
        <section className="py-4 px-4 md:p-6 flex flex-col">
          <section className="grow">
            <h1 className="text-primary-ctaText font-bold text-2xl">{title}</h1>
            <h2 className="text-primary-ctaText text-base">{description}</h2>
          </section>
          {imgData && (
            <span className="text-xs text-primary-text hidden lg:inline">
              Photo by{" "}
              <Link
                href={`https://unsplash.com/${imgData.username}`}
                className="hover:cursor-pointer hover:text-primary-highlight"
              >
                {imgData.author}
              </Link>{" "}
              on{" "}
              <Link
                className="hover:cursor-pointer hover:text-primary-highlight"
                href={
                  "https://unsplash.com/?utm_source=100 Projects&utm_medium=referral"
                }
              >
                Unsplash
              </Link>
            </span>
          )}
        </section>
      </section>
    </section>
  );
};
