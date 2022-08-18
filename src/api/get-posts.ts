import { readdirSync, readFileSync } from 'fs-extra'
import matter from 'gray-matter'
import { join } from 'path'
import { PopularCollection } from '../components/organism/collection-hero-group'
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

export type SearchFacet = {
  key: ProjectType
  value: string
}

export type ProjectType = 'type' | 'expertise' | 'language'

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

export function getPopularProjects(): PopularCollection[] {
  return [
    {
      title: 'By type',
      projects: [
        {
          title: 'Back-end',
          desc: 'APIs, transformation etc.',
          url: 'collection/type/back-end',
        },
        {
          title: 'Web',
          desc: 'by this I mean websites',
          url: 'collection/type/web',
        },
        {
          title: 'Data',
          desc: 'Data scraping and all its fun',
          url: 'collection/type/data',
        },
      ],
    },
    {
      title: 'By difficulty',
      projects: [
        {
          title: 'Beginner',
          desc: '0-2 years experience',
          url: 'collection/expertise/beginner',
        },
        {
          title: 'Intermediate',
          desc: '2-5 years experience (roughly)',
          url: 'collection/expertise/intermediate',
        },
        {
          title: 'Expert',
          desc: '6+ years (roughly)',
          url: 'collection/expertise/expert',
        },
      ],
    },
    {
      title: 'By language',
      projects: [
        {
          title: 'Java',
          desc: 'The OG Object Oriented language',
          url: 'collection/language/java',
        },
        {
          title: 'Javascript (& Typescript)',
          desc: 'The modern langauge for the web.',
          url: 'collection/language/js',
        },
        {
          title: 'Python',
          desc: 'AI, Robots, Data - easily done in Python',
          url: 'collection/language/python',
        },
      ],
    },
  ]
}

export function getSlugsByFacets(searchFacets: SearchFacet[]): ProjectSlug[] {
  const allFacets = getPostSlugs()
  const filteredProjects: ProjectSlug[] = []
  allFacets.forEach((value) =>
    value.slugs.forEach((slug) =>
      searchFacets.forEach((facet) => {
        if (
          ((facet.key == 'language' || facet.key == 'type') &&
            slug.tags
              .map((tag) => tag.toLowerCase())
              .includes(facet.value.toLowerCase())) ||
          (facet.key == 'expertise' && slug.expertise == facet.value)
        )
          filteredProjects.push(slug)
      }),
    ),
  )
  return filteredProjects
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
