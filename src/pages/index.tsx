import type { GetStaticProps, NextPage } from "next";
import {
  CollectionHeroGroup,
  HeroCollectionType,
} from "../components/organism/collection-hero-group";

type HomePageProps = {
  heroCollections: HeroCollectionType[];
};

function getPopularProjects(): HeroCollectionType[] {
  return [
    {
      title: "By project type",
      collections: [
        {
          title: "Front-end (web)",
          desc: "Application programming interfaces",
          url: "collection/type/frontend",
        },
        {
          title: "Back-end",
          desc: "Anything web based",
          url: "collection/type/backend",
        },
        {
          title: "Data",
          desc: "Data manipulation, visualisation and more",
          url: "collection/type/data",
        },
        {
          title: "AI / Machine Learning",
          desc: "Artificial intelligence and learning",
          url: "collection/type/ai",
        },
        {
          title: "Mobile",
          desc: "iOS & Android mobile apps",
          url: "collection/type/mobile",
        },
        {
          title: "Devops",
          desc: "Developer operations such as pipelines and AWS",
          url: "collection/type/devops",
        },
        {
          title: "Games",
          desc: "Video game ideas",
          url: "collection/type/games",
        },
      ],
    },
  ];
}

export const getStaticProps: GetStaticProps = async () => {
  const heroCollections = getPopularProjects();

  return {
    props: {
      heroCollections: heroCollections,
    },
  };
};

const Home: NextPage<HomePageProps> = (props: HomePageProps) => {
  const { heroCollections } = props;
  return (
    <section>
      <h1 className="text-primary-ctaText text-2xl">
        Popular type of projects ideas
      </h1>
      {heroCollections &&
        heroCollections.map((popularCollection) => (
          <CollectionHeroGroup
            key={popularCollection.title}
            heroCollectionGroup={popularCollection}
          />
        ))}
    </section>
  );
};

export default Home;
