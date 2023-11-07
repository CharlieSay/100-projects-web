import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-16 pb-8 flex flex-col md:flex-row justify-between align-middle">
      <section>
        <p className="text-xs text-lightMode-text dark:text-darkMode-text">
          100 Projects by{" "}
          <span className="text-xs font-bold text-lightMode-text dark:text-darkMode-text">
            Everyone!
          </span>
        </p>
        <Link href={"/all-projects"}>
          <p className="text-xs text-lightMode-text dark:text-darkMode-text">
            All Projects
          </p>
        </Link>
        <p className="text-xs text-lightMode-text dark:text-darkMode-text">
          Made in{" "}
          <a
            className="text-xs hover:cursor-pointer dark:hover:text-darkMode-highlight hover:text-lightMode-highlight"
            href="https://nextjs.org/"
          >
            {" "}
            NextJS
          </a>
          , hosted by{" "}
          <a
            className="text-xs hover:cursor-pointer dark:hover:text-darkMode-highlight hover:text-lightMode-highlight"
            href="https://vercel.com"
          >
            Vercel.
          </a>{" "}
          <a
            className="text-xs hover:cursor-pointer dark:hover:text-darkMode-highlight hover:text-lightMode-highlight"
            href="//github.com/charlieSay/100-projects"
          >
            We are open source! - (GitHub Repo)
          </a>
        </p>
      </section>
    </footer>
  );
};

export default Footer;
