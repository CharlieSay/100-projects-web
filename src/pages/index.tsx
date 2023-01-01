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
          url: "collection/type/api",
        },
        {
          title: "Back-end",
          desc: "Anything web based",
          url: "collection/type/web",
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
    // {
    //   title: "By difficulty",
    //   collections: [
    //     {
    //       title: "Beginner",
    //       desc: "0-1 years experience",
    //       url: "collection/expertise/beginner",
    //     },
    //     {
    //       title: "Intermediate",
    //       desc: "1-5 years experience (est)",
    //       url: "collection/expertise/intermediate",
    //     },
    //     {
    //       title: "Expert",
    //       desc: "6+ years (est)",
    //       url: "collection/expertise/expert",
    //     },
    //   ],
    // },
    // {
    //   title: "By language",
    //   collections: [
    //     {
    //       title: "Java",
    //       desc:
    //         "Java is a high-level, class-based, object-oriented programming language",
    //       url: "collection/language/java",
    //     },
    //     {
    //       title: "Javascript (& Typescript)",
    //       desc: "The modern langauge for the web.",
    //       url: "collection/language/javascript",
    //     },
    //     {
    //       title: "Python",
    //       desc: "Python is a high-level, general-purpose programming language",
    //       url: "collection/language/python",
    //     },
    //     {
    //       title: "Rust",
    //       desc:
    //         "Relative new-comer - Rust is a multi-paradigm, general-purpose programming language.",
    //       url: "collection/language/rust",
    //     },
    //   ],
    // },
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
