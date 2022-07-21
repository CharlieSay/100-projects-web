import { readdirSync, readFileSync } from 'fs-extra'
import { join } from 'path'
import matter from 'gray-matter'

const postsDirectory = join(process.cwd(), '_mdx')

export type CollectionSlug = {
  title: string
  slugs: string[]
}

export function getPostSlugs(): CollectionSlug[] {
  const listOfCollections = readdirSync(postsDirectory)
  let listOfProjects: CollectionSlug[] = []
  listOfCollections.map((collection: string) => {
    const foundSlugs = readdirSync(join(process.cwd(), `_mdx/${collection}`))
    listOfProjects.push({
      title: collection,
      slugs: foundSlugs.map((slug) => {
        return `${collection}/${slug}`
      }),
    })
  })
  return listOfProjects
}

export function getPostBySlug(slug: string) {
    const fullPath = join(postsDirectory,`${slug}.mdx`);
    const fileContents = readFileSync(fullPath,'utf-8');
    return matter(fileContents);
}
  // type Items = {
  //   [key: string]: string
  // }

  // const items: Items = {}

  // // Ensure only the minimal needed data is exposed
  // fields.forEach((field) => {
  //   if (field === 'slug') {
  //     items[field] = realSlug
  //   }
  //   if (field === 'content') {
  //     items[field] = content
  //   }

  //   if (typeof data[field] !== 'undefined') {
  //     items[field] = data[field]
  //   }
  // })

  // return items
}
