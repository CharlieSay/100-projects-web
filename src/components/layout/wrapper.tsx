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
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#141a46" />
        <meta name="msapplication-TileColor" content="#141A46" />
        <meta name="theme-color" content="#ffffff" />
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
                <p className="decocration-primary-ctaBackground text-base font-medium text-primary-ctaText underline underline-offset-1 hover:cursor-pointer hover:text-primary-highlight">
                  Popular
                </p>
              </Link>
            </div>
          </nav>
        </header>
        <main>{props.children}</main>
        <footer className="mt-16">
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
          <a href="https://discord.gg/ePXzKzQ7GZ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25px"
              height="25px"
              viewBox="0 -28.5 256 256"
              version="1.1"
              preserveAspectRatio="xMidYMid"
            >
              <g>
                <path
                  d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z"
                  fill="black"
                  fillRule="nonzero"
                />
              </g>
            </svg>
          </a>
        </footer>
      </section>
    </main>
  );
};
