import { readdirSync, readFileSync } from 'fs-extra'
import { join } from 'path'
import matter, { GrayMatterFile } from 'gray-matter'

const postsDirectory = join(process.cwd(), '_mdx')

export type CollectionSlug = {
  title: string
  slugs: ProjectSlug[]
}

export type ProjectSlug = {
  title: string
  tags: string[]
  expertise: string
  description: string
  location: ProjectLocation
}

export type ProjectLocation = {
  collection: string
  projectLocation: string
}

export function getPostFrontMatter(slug: string): ProjectSlug {
  const grayMatterForSlug = getPostBySlug(slug)
  return {
    title: grayMatterForSlug.data.title,
    tags: grayMatterForSlug.data.tags.split(','),
    expertise: grayMatterForSlug.data.expertise,
    description: grayMatterForSlug.data.description || '',
    location: { collection: '', projectLocation: '' },
  }
}

export function getPostSlugs(): CollectionSlug[] {
  const listOfCollections = readdirSync(postsDirectory)
  let listOfProjects: CollectionSlug[] = []
  listOfCollections.map((collection: string) => {
    const foundSlugs = readdirSync(join(process.cwd(), `_mdx/${collection}`))
    listOfProjects.push({
      title: collection,
      slugs: foundSlugs.map((slug) => {
        const slugFrontMatter = getPostFrontMatter(`${collection}/${slug}`)
        return {
          ...slugFrontMatter,
          location: { collection: collection, projectLocation: slug },
        }
      }),
    })
  })
  return listOfProjects
}

export function getPostBySlug(slug: string): GrayMatterFile<any> {
  const fullPath = join(postsDirectory, `${slug}`)
  const fileContents = readFileSync(fullPath, 'utf-8')
  const grayMatter = matter(fileContents)
  return grayMatter
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
// }
