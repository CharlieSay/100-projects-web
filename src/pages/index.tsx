import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { getPopularProjects, getSlugsByFacets } from '../api/get-posts'
import {
  CollectionHeroGroup,
  PopularCollection,
} from '../components/organism/collection-hero-group'

type HomePageProps = {
  popularCollections: PopularCollection[]
}

export const getStaticProps: GetStaticProps = async () => {
  const popularCollections = getPopularProjects()

  return {
    props: {
      popularCollections: popularCollections,
    },
  }
}

const Home: NextPage<HomePageProps> = (props: HomePageProps) => {
  const { popularCollections } = props
  return (
    <>
      <Head>
        <title>100 Projects</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <main>
        <h1 className="text-primary-ctaText hover:text-primary-highlight hover:cursor-pointer">
          Popular Projects
        </h1>
        {popularCollections &&
          popularCollections.map((popularCollection) => (
            <CollectionHeroGroup
              key={popularCollection.title}
              collection={popularCollection || []}
            />
          ))}
      </main>
    </>
  )
}

export default Home
