import Link from "next/link";

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
                <Link href="/">100Projects.dev</Link>
              </p>
            </div>
            <div
              className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0"
              id="navbar-collapse"
            >
              <a
                href="/collections"
                className="p-2 lg:px-4 md:mx-2 font-semibold text-highlight"
              >
                Collections
              </a>
            </div>
          </div>
        </nav>
      </header>
      <div className="container mx-auto max-w-screen-lg">{props.children}</div>
    </>
  );
};
