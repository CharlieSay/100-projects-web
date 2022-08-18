import { GetStaticPaths, GetStaticProps } from 'next'
import {
  getSlugsByFacets,
  ProjectSlug,
  ProjectType,
} from '../../../api/get-posts'
import {
  CollectionHeroGroup,
  ProjectCard,
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
  let mappedProjects: ProjectCard[] = []

  if (projects && projects.length > 0) {
    mappedProjects = projects.map((project) => ({
      title: project.title,
      desc: project.description,
      url: `/projects/${project.location.collection}/${project.location.projectLocation}`,
    }))
  }

  return (
    <div>
      <CollectionHeroGroup
        collection={{
          title: collectionTitle,
          projects: mappedProjects,
        }}
      />
    </div>
  )
}

export default Collection
