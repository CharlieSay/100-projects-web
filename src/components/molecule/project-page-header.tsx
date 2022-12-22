import capitalize from "capitalize";
import Image from "next/image";
import Link from "next/link";

type ProjectHero = {
  title: string;
  tags: string[];
  description: string;
  expertise: string;
  thumbnail?: { thumbUrl: string; description: string };
};

export const ProjectPageHero = (props: ProjectHero) => {
  const { title, tags, description, expertise, thumbnail } = props;
  return (
    <section className="mb-4">
      <section className="flex flex-col flex-wrap lg:justify-between lg:flex-row pb-4">
        <Link href={`/collection/expertise/${expertise}`}>
          <p className="text-sm font-bold text-primary-text hover:cursor-pointer hover:text-primary-highlight">
            {capitalize(expertise.trim())}
          </p>
        </Link>
        <section className="flex">
          {tags &&
            tags.map((tag) => (
              <p
                key={tag}
                className="text-xs pr-2 lg:pl-2 lg:text-sm font-bold text-primary-text"
              >
                {capitalize(tag.trim())}
              </p>
            ))}
        </section>
      </section>
      <section className="flex rounded-xl bg-secondary-background">
        <section className="hidden lg:block w-[200px] h-[200px] relative">
          {thumbnail && (
            <Image
              width="200"
              height="200"
              layout="fill"
              src={thumbnail.thumbUrl}
              alt={thumbnail.description}
            />
          )}
        </section>
        <section className="py-4 px-4 md:p-6">
          <h1 className="text-primary-ctaText font-bold text-2xl">{title}</h1>
          <h2 className="text-primary-ctaText text-base">{description}</h2>
        </section>
      </section>
    </section>
  );
};
