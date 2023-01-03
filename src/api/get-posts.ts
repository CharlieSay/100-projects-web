import { readdirSync, readFileSync } from "fs-extra";
import matter from "gray-matter";
import { join } from "path";
import { capitalizeWords } from "../util/string-manipulation";

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

export type SearchType = "type" | "expertise" | "tag";

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
  const allProjectSlugs = getAllProjectSlugs();

  switch (filter.key) {
    case "type":
      return allProjectSlugs
        .filter((slug) => slug.location.collection === filter.value)
        .slice(0, limit);
    case "expertise":
      return allProjectSlugs
        .filter((slug) => slug.expertise === filter.value)
        .slice(0, limit);
    case "tag":
      return allProjectSlugs
        .filter((slug) =>
          slug.tags.some(
            (tag) => tag.toLowerCase() === filter.value.toLowerCase()
          )
        )
        .slice(0, limit);
    default:
      return allProjectSlugs.slice(0, limit);
  }
}

export function getAllProjectSlugs(): ProjectSlug[] {
  const listOfCollections = readdirSync(postsDirectory);
  return listOfCollections.flatMap((collection: string) => {
    const foundSlugs = readdirSync(
      join(process.cwd(), `project_content/_mdx/projects/${collection}`)
    );
    return foundSlugs.map((slug) => {
      const slugFrontMatter = getPostFrontMatter(`${collection}/${slug}`);
      return {
        ...slugFrontMatter,
        location: { collection, projectLocation: slug },
      };
    });
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
