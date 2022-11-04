import Head from "next/head";
import Link from "next/link";

export const Wrapper = (props: { children: React.ReactNode }) => {
  return (
    <main className="container bg-primary-background mx-auto max-w-screen-lg p-4">
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <title>100 Projects</title>
        <meta name="title" content="100 Projects for developers to do" />
        <meta
          name="description"
          content="A library of projects for developers if they're stuck on what to do next. 100 Projects will give you inspiration of what project to do next to upskill yourself"
        />
        <meta
          name="keywords"
          content="software, web design, websites, javascript, java"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="charlie@talesoft.digital" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#00aba9" />
        <meta name="theme-color" content="#e2e8dc" />
      </Head>
      <section className="bg-primary-background">
        <header role="navigation" aria-label="Main">
          <nav className="mx-auto max-w-screen-lg pt-2 pb-4">
            <div className="container mx-auto flex w-full justify-between">
              <Link href="/">
                <p className="text-xl font-semibold text-secondary-text hover:cursor-pointer hover:text-primary-highlight">
                  100.DEV
                </p>
              </Link>
              <Link href="/popular-collections">
                <p className="decocration-primary-ctaBackground text-sm font-medium text-primary-ctaText underline underline-offset-1 hover:cursor-pointer hover:text-primary-highlight">
                  Popular
                </p>
              </Link>
            </div>
          </nav>
        </header>
        <main>{props.children}</main>
        <footer>
          <p className="text-xs text-primary-text">
            100 Projects by{" "}
            <span className="text-xs font-bold text-primary-text">100DEV</span>
          </p>
          <p className="text-xs text-primary-text">
            Made in{" "}
            <a
              className="text-xs hover:cursor-pointer hover:text-primary-highlight"
              href="https://nextjs.org/"
            >
              {" "}
              NextJS
            </a>
            , hosted by{" "}
            <a
              className="text-xs hover:cursor-pointer hover:text-primary-highlight"
              href="https://vercel.com"
            >
              Vercel.
            </a>{" "}
            <a
              className="text-xs hover:cursor-pointer hover:text-primary-highlight"
              href="//github.com/charlieSay/100-projects"
            >
              (GitHub Repo)
            </a>
          </p>
        </footer>
      </section>
    </main>
  );
};
