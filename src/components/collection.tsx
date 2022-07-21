import S from 'string'
import { getPostSlugs } from '../api/get-posts'

interface CollectionProps {
  name?: string
  collectionSlugs?: string[]
  collectedSlugData?: any
}

export async function getStaticPaths() {
  //   const sluggers = getPostSlugs()
  return {
    props: {
      name: 'foo',
      collectedSlugs: ['1', '2'],
      collectedSlugData: {},
    },
  }
}

export const Collection = (props: CollectionProps) => {
  console.log(props)
  return <h1>Test</h1>
}
