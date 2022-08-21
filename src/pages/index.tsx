import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { getPopularProjects } from '../api/get-posts'
import {
  CollectionHeroGroup,
  HeroCollectionType,
} from '../components/organism/collection-hero-group'

type HomePageProps = {
  heroCollections: HeroCollectionType[]
}

export const getStaticProps: GetStaticProps = async () => {
  const heroCollections = getPopularProjects()

  return {
    props: {
      heroCollections: heroCollections,
    },
  }
}

const Home: NextPage<HomePageProps> = (props: HomePageProps) => {
  const { heroCollections } = props
  return (
    <section>
      <h1 className="text-primary-ctaText hover:text-primary-highlight hover:cursor-pointer">
        Popular collections of projects.
      </h1>
      {heroCollections &&
        heroCollections.map((popularCollection) => (
          <CollectionHeroGroup
            key={popularCollection.title}
            heroCollectionGroup={popularCollection}
          />
        ))}
    </section>
  )
}

export default Home
