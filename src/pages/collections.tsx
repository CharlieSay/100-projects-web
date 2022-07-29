import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { CollectionSlug, getPostSlugs } from '../api/get-posts'
import { Collection } from '../components/collection'

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

const Collections: NextPage = (props: CollectionProps) => {
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

export default Collections
