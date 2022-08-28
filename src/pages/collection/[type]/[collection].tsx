import { GetStaticPaths, GetStaticProps } from 'next'
import {
  CollectionSlug,
  getSlugsByFacets,
  ProjectType,
} from '../../../api/get-posts'
import { CollectionGroup } from '../../../components/collection-group'

type TemporaryConversion = {
  type: string
  collection: string
}

type CollectionGroupProps = {
  collectedSlugData: CollectionSlug[]
  noResults: boolean
  query: string
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
  const collectionTitle = convertedParams.collection
  const slugs = getSlugsByFacets([
    {
      key: convertedParams.type as ProjectType,
      value: collectionTitle,
    },
  ])

  return {
    props: {
      collectedSlugData: [
        {
          collectionTitle: collectionTitle,
          slugs: slugs,
        },
      ],
      noResults: slugs.length === 0,
      query: collectionTitle,
    },
  }
}

const CollectionsBySearch = (props: CollectionGroupProps) => {
  const { query, noResults } = props

  if (noResults) {
    return (
      <section className="bg-secondary-background w-full p-4 my-6">
        <h1>Seems to be no projects matching</h1>
        <h3>{query}</h3>
      </section>
    )
  }

  const { collectedSlugData } = props

  return (
    collectedSlugData && (
      <CollectionGroup collectedSlugData={collectedSlugData} />
    )
  )
}

export default CollectionsBySearch
