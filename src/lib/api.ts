import fs from "fs-extra";
import { join } from "path";
import matter from "gray-matter";

const postsDirectory = join(process.cwd(), "_mdx");

type CollectionSlug = {
  title: string;
  slugs: string[];
};

export function getPostSlugs() {
  const listOfCollections = fs.readdirSync(postsDirectory);
  let listOfProjects: CollectionSlug[] = [];
  listOfCollections.map((collection: string) =>
    listOfProjects.push({
      title: collection,
      slugs: fs.readdirSync(join(process.cwd(), `_mdx/${collection}`)),
    })
  );
  return listOfProjects;
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string;
  };

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs();
  const posts = slugs.map((slug) => getPostBySlug(slug, fields));
  return posts;
}
