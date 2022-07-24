import Link from 'next/link'

export const Wrapper = (props: { children: React.ReactNode }) => {
  return (
    <>
      <header
        className="mx-auto max-w-screen-lg px-1"
        role="navigation"
        aria-label="Main"
      >
        <nav className="py-4 md:py-4">
          <div className="container px-4 m-4 mx-auto md:flex md:items-center">
            <div className="flex justify-between items-center">
              <p className="font-bold text-xl text-text">
                <Link href="/">100Projects</Link>
              </p>
            </div>
            <div
              className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0"
              id="navbar-collapse"
            >
              <Link
                href="/collections"
                className="p-2 lg:px-4 md:mx-2 font-semibold"
              >
                <button
                  type="button"
                  className="focus:outline-none text-stroke bg-button hover:bg-yellow-500 focus:ring-4 focus:bg-tertiary font-medium rounded-md text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:bg-tertiary"
                >
                  Collections
                </button>
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <div className="container mx-auto max-w-screen-lg px-4">
        {props.children}
      </div>
    </>
  )
}
