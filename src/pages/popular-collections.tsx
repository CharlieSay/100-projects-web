import type { GetStaticProps, NextPage } from 'next'
import { CollectionSlug, getPostSlugs } from '../api/get-posts'
import { Collection } from '../components/collection-group'

export interface CollectionProps {
  collectedSlugData?: CollectionSlug[]
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      collectedSlugData: getPostSlugs(),
    },
  }
}

const PopularCollections: NextPage = (props: CollectionProps) => {
  return (
    <>
      <div>
        {props.collectedSlugData && (
          <Collection collectedSlugData={props.collectedSlugData} />
        )}
      </div>
    </>
  )
}

export default PopularCollections
