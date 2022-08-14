import Link from 'next/link'

export const Wrapper = (props: { children: React.ReactNode }) => {
  return (
    <main className="h-screen bg-primary-background">
      <header
        className="mx-auto max-w-screen"
        role="navigation"
        aria-label="Main"
      >
        <nav className="max-w-screen-lg mx-auto">
          <div className="container py-4 mx-auto flex justify-between w-full">
            <div className="ml-2 flex items-center hover:cursor-pointer">
              <Link href="/">
                <p className="font-semibold text-xl text-secondary-text">
                  100.DEV
                </p>
              </Link>
            </div>
            <div>
              <Link href="/collections">
                <button
                  type="button"
                  className="text-sm text-primary-ctaText decocration-primary-ctaBackground underline underline-offset-1 font-medium px-3 py-2 mr-2 mb-2 hover:cursor-pointer hover:text-primary-highlight"
                >
                  Collections
                </button>
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <div className="container mx-auto p-4 max-w-screen-lg">
        {props.children}
      </div>
      <footer className="container mx-auto p-4 max-w-screen-lg">
        <p className="text-primary-text text-xs">100 Projects by 100DEV</p>
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
    </main>
  )
}
