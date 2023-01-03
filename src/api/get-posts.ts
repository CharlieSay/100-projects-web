import { readdirSync, readFileSync } from "fs-extra";
import matter from "gray-matter";
import { join } from "path";
import { HeroCollectionType } from "../components/organism/collection-hero-group";
import { capitalizeWords } from "../util/string-manipulation";

//TODO - Rename this, but also nest it more to allow for tips.
const postsDirectory = join(
  process.cwd(),
  "project_content",
  "_mdx",
  "projects"
);

export type CollectionSlug = {
  title: string;
  slugs: ProjectSlug[];
};

export type ProjectSlug = {
  title: string;
  tags: string[];
  expertise: string;
  description: string;
  imgUrl?: string;
  location: ProjectLocation;
};

export type ProjectLocation = {
  collection: string;
  projectLocation: string;
};

export type PostMatter = {
  data: { [key: string]: any };
  content: string;
  matter: string;
  language: string;
  source: any;
  imgUrl?: string;
  imgDescription?: string;
  similarProjects?: CollectionSlug[];
};

export type SearchFilters = {
  key: SearchType;
  value: string;
};

export type SearchType = "type" | "expertise" | "language";

export function getPostFrontMatter(slug: string): ProjectSlug {
  const grayMatterForSlug = getPostBySlug([slug]);
  return {
    title: grayMatterForSlug.data.title,
    tags: capitalizeWords(grayMatterForSlug.data.tags.split(",")),
    expertise: grayMatterForSlug.data.expertise,
    description: grayMatterForSlug.data.description || "",
    location: { collection: "", projectLocation: "" },
  };
}

export function getSlugsByFacets(
  filter: SearchFilters,
  limit?: number
): ProjectSlug[] {
  const allCollections = getAllCollectionSlugs();
  let filteredProjectSlugs: ProjectSlug[] = [];
  if (filter.key === "type") {
    return (
      allCollections.filter(
        (collection) => collection.title === filter.value
      )[0]?.slugs || []
    );
  }

  // const filteredProjectSlugs = allCollections
  //   .flatMap((project) => project.slugs)
  //   .filter((slug) =>
  //     filters.some(({ key, value }) => {
  //       if (key === "type") {
  //         return slug.tags
  //           .map((tag) => tag.toLowerCase())
  //           .includes(value.toLowerCase());
  //       }
  //       return key === "expertise" && slug.expertise === value;
  //     })
  //   );
  return filteredProjectSlugs;
}

export function getAllCollectionSlugs(): CollectionSlug[] {
  const listOfCollections = readdirSync(postsDirectory);
  return listOfCollections.map((collection: string) => {
    const foundSlugs = readdirSync(
      join(process.cwd(), `project_content/_mdx/projects/${collection}`)
    );
    return {
      title: collection,
      slugs: foundSlugs.map((slug) => {
        const slugFrontMatter = getPostFrontMatter(`${collection}/${slug}`);
        return {
          ...slugFrontMatter,
          location: { collection, projectLocation: slug },
        };
      }),
    };
  });
}
export function getPostBySlug(slug: string[]): PostMatter {
  const fullPath = join(postsDirectory, ...slug);
  const fileContents = readFileSync(fullPath, "utf-8");
  const grayMatter = matter(fileContents);
  return {
    content: grayMatter.content,
    data: grayMatter.data,
    matter: grayMatter.matter,
    language: grayMatter.language,
    source: {},
  };
}
