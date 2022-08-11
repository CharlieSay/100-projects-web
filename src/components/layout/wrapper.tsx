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
                  className="text-sm text-primary-ctaText bg-primary-ctaBackground font-medium rounded-3xl px-3 py-2 mr-2 mb-2"
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
    </main>
  )
}
