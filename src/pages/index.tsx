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
      title: "By role",
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
          title: "Full-stack",
          desc: "Building a whole website from top to bottom!",
          url: "collection/type/fullstack",
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
    {
      title: "By expertise",
      collections: [
        {
          title: "Easy (0-2 years of experience)",
          desc:
            "Learning the basics and building a strong foundation for a successful career in tech ",
          url: "collection/expertise/easy",
        },
        {
          title: "Intermediate (2-5 years of experience)",
          desc: "Expanding skills and tackling more complex projects",
          url: "collection/expertise/intermediate",
        },
        {
          title: "Advanced (5+ years of experience)",
          desc:
            "Mastering the art of software development and constantly pushing the boundaries of what's possible",
          url: "collection/expertise/advanced",
        },
      ],
    },
    {
      title: "By language",
      collections: [
        {
          title: "Python",
          desc:
            "the versatile and user-friendly language for all your coding needs",
          url: "collection/tag/python",
        },
        {
          title: "Java",
          desc:
            "One of the go-to language for building powerful and scalable applications",
          url: "collection/tag/java",
        },
        {
          title: "Javascript",
          desc:
            "the language of the web, powering interactive and dynamic websites everywhere",
          url: "collection/tag/javascript",
        },
        {
          title: "Rust",
          desc:
            "The safe and fast systems programming language for building reliable and efficient software",
          url: "collection/tag/rust",
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
      <section className="container my-10 flex justify-center align-middle flex-col text-center">
        <h1 className="font-bold text-2xl sm:text-5xl">Developer Projects</h1>
        <h2 className="text-sm sm:text-xl mt-2">
          Unleash your creativity and find your next project here - a go-to
          project inspiration for software developers!
        </h2>
      </section>
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
