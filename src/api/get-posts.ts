import { readdirSync, readFileSync } from "fs-extra";
import matter from "gray-matter";
import { join } from "path";
import { HeroCollectionType } from "../components/organism/collection-hero-group";
import { capitalizeWords } from "../util/string-manipulation";

//TODO - Rename this, but also nest it more to allow for tips.
const postsDirectory = join(process.cwd(), "project_content", "_mdx");

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
  key: ProjectType;
  value: string;
};

export type ProjectType = "type" | "expertise" | "language";

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

export function getPopularProjects(): HeroCollectionType[] {
  return [
    {
      title: "By tag",
      collections: [
        {
          title: "APIs",
          desc: "Application programming interfaces",
          url: "collection/type/api",
        },
        {
          title: "Web",
          desc: "Anything web based",
          url: "collection/type/web",
        },
        {
          title: "Data",
          desc: "Data manipulation, visualisation and more",
          url: "collection/type/data",
        },
      ],
    },
    {
      title: "By difficulty",
      collections: [
        {
          title: "Beginner",
          desc: "0-1 years experience",
          url: "collection/expertise/beginner",
        },
        {
          title: "Intermediate",
          desc: "1-5 years experience (est)",
          url: "collection/expertise/intermediate",
        },
        {
          title: "Expert",
          desc: "6+ years (est)",
          url: "collection/expertise/expert",
        },
      ],
    },
    {
      title: "By language",
      collections: [
        {
          title: "Java",
          desc:
            "Java is a high-level, class-based, object-oriented programming language",
          url: "collection/language/java",
        },
        {
          title: "Javascript (& Typescript)",
          desc: "The modern langauge for the web.",
          url: "collection/language/javascript",
        },
        {
          title: "Python",
          desc: "Python is a high-level, general-purpose programming language",
          url: "collection/language/python",
        },
        {
          title: "Rust",
          desc:
            "Relative new-comer - Rust is a multi-paradigm, general-purpose programming language.",
          url: "collection/language/rust",
        },
      ],
    },
  ];
}

export function getSlugsByFacets(
  filters: SearchFilters[],
  limit?: number
): ProjectSlug[] {
  const allProjects = getPostSlugs();
  const filteredProjectSlugs = allProjects
    .flatMap((project) => project.slugs)
    .filter((slug) =>
      filters.some(({ key, value }) => {
        if (key === "language" || key === "type") {
          return slug.tags
            .map((tag) => tag.toLowerCase())
            .includes(value.toLowerCase());
        }
        return key === "expertise" && slug.expertise === value;
      })
    );
  return limit ? filteredProjectSlugs.slice(0, limit) : filteredProjectSlugs;
}

export function getPostSlugs(): CollectionSlug[] {
  const listOfCollections = readdirSync(postsDirectory);
  return listOfCollections.map((collection: string) => {
    const foundSlugs = readdirSync(
      join(process.cwd(), `project_content/_mdx/${collection}`)
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
