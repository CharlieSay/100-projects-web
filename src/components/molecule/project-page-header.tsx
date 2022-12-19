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
      <section className="flex justify-between pb-4">
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
                className="pl-2 text-sm font-bold text-primary-text hover:cursor-pointer hover:text-primary-highlight"
              >
                {capitalize(tag.trim())}
              </p>
            ))}
        </section>
      </section>
      <section className="flex justify-between rounded-xl bg-secondary-background py-4 px-4 md:p-6">
        <section className="truncate">
          <h1 className="text-secondary-text">{title}</h1>
          <p className="whitespace-normal text-secondary-text">{description}</p>
        </section>
        {thumbnail?.thumbUrl && (
          <Image
            width="200"
            height="200"
            alt={thumbnail.description}
            src={thumbnail.thumbUrl}
          />
        )}
      </section>
    </section>
  );
};
