import { GetStaticPaths, GetStaticProps } from 'next'
import {
  getSlugsByFacets,
  ProjectSlug,
  ProjectType,
} from '../../../api/get-posts'
import {
  CollectionHeroGroup,
  CollectionCard,
} from '../../../components/organism/collection-hero-group'

type TemporaryConversion = {
  type: string
  collection: string
}

type CollectionGroupProps = {
  projects: ProjectSlug[]
  collectionTitle: string
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      // generate these paths as theyre most common.
      { params: { type: 'type', collection: 'back-end' } },
      { params: { type: 'type', collection: 'web' } },
      { params: { type: 'type', collection: 'data' } },
      { params: { type: 'expertise', collection: 'beginner' } },
      { params: { type: 'expertise', collection: 'intermediate' } },
      { params: { type: 'expertise', collection: 'expert' } },
      { params: { type: 'language', collection: 'java' } },
      { params: { type: 'language', collection: 'js' } },
      { params: { type: 'language', collection: 'python' } },
    ],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context
  const convertedParams = params as TemporaryConversion
  return {
    props: {
      projects: getSlugsByFacets([
        {
          key: convertedParams.type as ProjectType,
          value: convertedParams.collection,
        },
      ]),
      collectionTitle: convertedParams.collection,
    },
  }
}

const Collection = (props: CollectionGroupProps) => {
  const { collectionTitle, projects } = props
  let mappedProjects: CollectionCard[] = []

  if (projects && projects.length > 0) {
    mappedProjects = projects.map((project) => ({
      title: project.title,
      desc: project.description,
      url: `/projects/${project.location.collection}/${project.location.projectLocation}`,
    }))
  }

  if (mappedProjects.length == 0) {
    return (
      <section className="bg-secondary-background w-full p-4 my-6">
        <h1>Seems to be no projects matching</h1>
        <h3>{collectionTitle}</h3>
      </section>
    )
  }

  return (
    <CollectionHeroGroup
      heroCollectionGroup={{
        title: collectionTitle,
        collections: mappedProjects,
      }}
    />
  )
}

export default Collection
