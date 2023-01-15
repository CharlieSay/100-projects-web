import Link from "next/link";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { SearchBox } from "../organism/search-box";
import { useTheme } from "next-themes";

export const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <header role="navigation" className="pt-4" aria-label="Main">
      <section className="mx-auto max-w-screen-lg pt-2 pb-4">
        <section className="flex w-full justify-between content-center">
          <Link href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 dark:fill-darkMode-text hover:dark:fill-darkMode-highlight fill-lightMode-text hover:fill-lightMode-highlight hover:cursor-pointer"
              viewBox="0 0 699 588.26"
            >
              <path d="m699 156-2 23c-5 44-14 86-36 125-12 20-27 39-48 50-29 16-59 19-90 9-21-7-32-22-33-44-1-21 3-41 7-61l29-144c4-18 9-36 17-53 14-29 38-42 71-41 35 1 61 19 73 53 7 20 10 40 11 61l1 4v18Zm-58-13c-1-7-2-19-5-31-2-9-8-16-17-19-13-4-27 2-34 15-4 9-8 19-10 29l-30 139-3 30c-1 13 7 20 19 21 12 2 22-2 31-10 8-7 13-16 18-26 20-45 29-93 31-148ZM0 535l5-29c7-48 18-95 29-141l19-78c0-3 1-4 4-4 41-2 82-2 122 4 16 2 30 8 41 20 11 13 13 28 12 44a305 305 0 0 1-59 135 92 92 0 0 1-59 38l-39 3-70 8-5 1v-1Zm56-55 39-2c17 0 32-6 44-19 26-29 39-65 46-103 2-10 1-21-9-27-6-4-13-7-20-8l-51-3c-4 0-6 1-7 5L69 423l-13 57ZM140 0l32 3 9 1c6-1 9 3 11 8 14 31 25 63 30 97 6 36 6 71-3 107-4 20-11 39-16 59-1 3-2 5-5 4l-57-7 7-25c8-31 13-62 12-94-1-19-4-38-6-56 0-3-2-4-5-4l-77-7c-3 0-4-1-5-4l-8-33h32l21-2c20-4 29-17 24-37l-2-10h6ZM302 248l5-58 4-83 5-48c5-26 20-41 44-45 25-3 48 2 70 16 23 16 38 39 46 65 21 64 15 126-19 185-6 11-15 22-24 31-22 20-48 23-75 15-15-4-28-10-39-21-13-13-15-30-16-48v-9h-1Zm134-84c1-17-1-33-6-50-4-12-9-23-21-30-18-11-35-3-39 18-2 9-2 18-3 28-2 29-4 58-9 87l-5 47c-1 10 4 19 14 24 11 5 22 4 31-4 5-5 10-11 13-18 18-31 25-66 25-102ZM316 355l-20 46 96 28-11 34-99-27-13 56 60 14 55 13c3 1 4 1 4 4v40l-165-30 3-30c6-54 26-105 49-155l16-33c1-4 3-4 7-3l110 34 27 7-16 34-103-32Z"></path>
              <path d="m459 359 48 9c-5 55-3 109 16 163l8-19c15-33 35-64 54-95l26-40c1-2 4-4 6-4l54-5h4l-21 34c-23 37-47 74-69 112-13 22-23 46-29 70-1 3-3 5-6 4l-48-6c-2 0-4-2-5-4a347 347 0 0 1-38-214v-5Z"></path>
            </svg>
          </Link>
          <nav className="flex">
            <SearchBox />
            <DarkModeSwitch
              className="ml-4 mt-1"
              checked={currentTheme === "dark"}
              onChange={() =>
                setTheme(currentTheme === "dark" ? "light" : "dark")
              }
              size={30}
              moonColor={"#ffffff"}
              sunColor={"#000000"}
            />
          </nav>
        </section>
      </section>
    </header>
  );
};
