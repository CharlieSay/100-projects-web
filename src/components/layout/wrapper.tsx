import Head from "next/head";
import Link from "next/link";

export const Wrapper = (props: { children: React.ReactNode }) => {
  return (
    <main className="h-full w-screen bg-primary-background mx-auto max-w-screen-lg px-6">
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
        <header role="navigation" className="pt-4" aria-label="Main">
          <nav className="mx-auto max-w-screen-lg pt-2 pb-4">
            <div className="container mx-auto flex w-full justify-between">
              <Link href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 725 725"
                  className="h-10 fill-primary-text hover:fill-primary-ctaBackground hover:cursor-pointer"
                >
                  <path d="m699 156-2 23c-5 44-14 86-36 125-12 20-27 39-48 50-29 16-59 19-90 9-21-7-32-22-33-44-1-21 3-41 7-61l29-144c4-18 9-36 17-53 14-29 38-42 71-41 35 1 61 19 73 53 7 20 10 40 11 61l1 4v18Zm-58-13c-1-7-2-19-5-31-2-9-8-16-17-19-13-4-27 2-34 15-4 9-8 19-10 29l-30 139-3 30c-1 13 7 20 19 21 12 2 22-2 31-10 8-7 13-16 18-26 20-45 29-93 31-148ZM0 535l5-29c7-48 18-95 29-141l19-78c0-3 1-4 4-4 41-2 82-2 122 4 16 2 30 8 41 20 11 13 13 28 12 44a305 305 0 0 1-59 135 92 92 0 0 1-59 38l-39 3-70 8-5 1v-1Zm56-55 39-2c17 0 32-6 44-19 26-29 39-65 46-103 2-10 1-21-9-27-6-4-13-7-20-8l-51-3c-4 0-6 1-7 5L69 423l-13 57ZM140 0l32 3 9 1c6-1 9 3 11 8 14 31 25 63 30 97 6 36 6 71-3 107-4 20-11 39-16 59-1 3-2 5-5 4l-57-7 7-25c8-31 13-62 12-94-1-19-4-38-6-56 0-3-2-4-5-4l-77-7c-3 0-4-1-5-4l-8-33h32l21-2c20-4 29-17 24-37l-2-10h6ZM302 248l5-58 4-83 5-48c5-26 20-41 44-45 25-3 48 2 70 16 23 16 38 39 46 65 21 64 15 126-19 185-6 11-15 22-24 31-22 20-48 23-75 15-15-4-28-10-39-21-13-13-15-30-16-48v-9h-1Zm134-84c1-17-1-33-6-50-4-12-9-23-21-30-18-11-35-3-39 18-2 9-2 18-3 28-2 29-4 58-9 87l-5 47c-1 10 4 19 14 24 11 5 22 4 31-4 5-5 10-11 13-18 18-31 25-66 25-102ZM316 355l-20 46 96 28-11 34-99-27-13 56 60 14 55 13c3 1 4 1 4 4v40l-165-30 3-30c6-54 26-105 49-155l16-33c1-4 3-4 7-3l110 34 27 7-16 34-103-32Z" />
                  <path d="m459 359 48 9c-5 55-3 109 16 163l8-19c15-33 35-64 54-95l26-40c1-2 4-4 6-4l54-5h4l-21 34c-23 37-47 74-69 112-13 22-23 46-29 70-1 3-3 5-6 4l-48-6c-2 0-4-2-5-4a347 347 0 0 1-38-214v-5Z" />
                </svg>
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
        <footer className="mt-16 pb-8">
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
