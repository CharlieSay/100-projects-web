import { readdirSync, readFileSync } from 'fs-extra'
import { join } from 'path'
import matter from 'gray-matter'
import { capitalizeWords } from '../util/string-manipulation'
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

export type PostMatter = {
  data: { [key: string]: any }
  content: string
  matter: string
  language: string
  source: any
}

export function getPostFrontMatter(slug: string): ProjectSlug {
  const grayMatterForSlug = getPostBySlug([slug])
  return {
    title: grayMatterForSlug.data.title,
    tags: capitalizeWords(grayMatterForSlug.data.tags.split(',')),
    expertise: grayMatterForSlug.data.expertise,
    description: grayMatterForSlug.data.description || '',
    location: { collection: '', projectLocation: '' },
  }
}

export function getPopularSlugs(): ProjectSlug[] {
  const javaOnly = readdirSync(join(postsDirectory, `/java`))
  let listOfProjects: ProjectSlug[] = []
  javaOnly.map((project) => {
    listOfProjects.push(getPostFrontMatter(project))
  })
  return listOfProjects
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

export function getPostBySlug(slug: string[]): PostMatter {
  const fullPath = join(postsDirectory, ...slug)
  const fileContents = readFileSync(fullPath, 'utf-8')
  const grayMatter = matter(fileContents)
  return {
    content: grayMatter.content,
    data: grayMatter.data,
    matter: grayMatter.matter,
    language: grayMatter.language,
    source: {},
  }
}
