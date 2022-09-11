import Head from 'next/head'
import Link from 'next/link'

export const Wrapper = (props: { children: React.ReactNode }) => {
  return (
    <main className="container mx-auto p-4 max-w-screen-lg">
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <section>
        <header role="navigation" aria-label="Main">
          <nav className="max-w-screen-lg mx-auto pt-2 pb-4">
            <div className="container mx-auto flex justify-between w-full">
              <Link href="/">
                <a className="font-semibold text-xl text-secondary-text hover:cursor-pointer hover:text-primary-highlight">
                  100.DEV
                </a>
              </Link>
              <Link href="/popular-collections">
                <a className="text-sm text-primary-ctaText decocration-primary-ctaBackground underline underline-offset-1 font-medium hover:cursor-pointer hover:text-primary-highlight">
                  Popular
                </a>
              </Link>
            </div>
          </nav>
        </header>
        <main>{props.children}</main>
        <footer className="pt-8 py-4">
          <p className="text-primary-text text-xs">
            100 Projects by{' '}
            <span className="text-primary-text font-bold text-xs">100DEV</span>
          </p>
          <p className="text-primary-text text-xs">
            Made in{' '}
            <a
              className="text-xs hover:cursor-pointer hover:text-primary-highlight"
              href="https://nextjs.org/"
            >
              {' '}
              NextJS
            </a>
            , hosted by{' '}
            <a
              className="text-xs hover:cursor-pointer hover:text-primary-highlight"
              href="https://vercel.com"
            >
              Vercel.
            </a>{' '}
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
  )
}
